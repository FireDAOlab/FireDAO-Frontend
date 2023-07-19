import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification, Pagination} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import manage from "../../../imgs/svg/manage.svg"
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import DistributionStyle from "./style"
import addressMap from "../../../api/addressMap";
import {showNum} from "../../../utils/bigNumberUtil";
import BigNumber from "bignumber.js";
import {getClaimRecords, getDepositRecords, getWhitelist} from "../../../graph/flmAirdrop";
import {dealTime} from "../../../utils/timeUtil";
import {formatAddress} from "../../../utils/publicJs";
import develop from "../../../env"

const Distribution = (props) => {


    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [form] = Form.useForm();
    const [curNav, setCurNav] = useState(1)
    const [withdrawNum, setWithdrawNum] = useState(undefined)
    const [canClaim, setCanClaim] = useState(0)
    const [claimedAmount, setClaimedAmount] = useState(0)
    const [poolBalance, setPoolBalance] = useState(0)
    const [userBalance, setUserBalance] = useState(0)
    const [isAdmin, setIsAdmin] = useState(false)
    const [allRecords, setAllRecords] = useState([])
    const [myRecords, setMyRecords] = useState([])

    const [airdropList, setAirdropList] = useState([])
    const [whitelist, setWhitelistArr] = useState([])
    const [total1, setTotal1] = useState(0)
    const [curPage1, setCurPage1] = useState(1)
    const [pageCount1, setPageCount1] = useState(20)

    const [total2, setTotal2] = useState(0)
    const [curPage2, setCurPage2] = useState(1)
    const [pageCount2, setPageCount2] = useState(20)

    const [depositRecord, setDepositRecord] = useState([])
    const [total3, setTotal3] = useState(0)
    const [curPage3, setCurPage3] = useState(1)
    const [pageCount3, setPageCount3] = useState(20)

    const [total4, setTotal4] = useState(0)
    const [curPage4, setCurPage4] = useState(1)
    const [pageCount4, setPageCount4] = useState(20)
    const [coinAddr, setCoinAddr] = useState("")


    const [searchContent, setSearchContent] = useState()
    const [showSearch, setShowSearch] = useState(false)
    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const getAdmin = async () => {
        let res = await handleViewMethod("owner", [])
        if (state.account.toLowerCase() == res.toLowerCase()) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }
    const getTokenBalance = async (value) => {
        console.log(coinAddr)
        if(!coinAddr){
            return
        }
        let contractTemp = await getContractByContract("erc20", coinAddr, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [value])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        return balance

    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("FLMAirdrop", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("FLMAirdrop", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleShowSizeChange1 = async (page, count) => {
        setPageCount1(count)
    }
    const onChangePage1 = async (page) => {
        await setCurPage1(page)
    }
    const handleShowSizeChange2 = async (page, count) => {
        setPageCount2(count)
    }
    const onChangePage2 = async (page) => {
        await setCurPage2(page)
    }
    const handleShowSizeChange3 = async (page, count) => {
        setPageCount3(count)
    }
    const onChangePage3 = async (page) => {
        await setCurPage3(page)
    }
    const handleShowSizeChange4 = async (page, count) => {
        setPageCount4(count)
    }
    const onChangePage4 = async (page) => {
        await setCurPage4(page)
    }
    const Claim = async () => {
        await handleDealMethod("Claim", [BigNumber(withdrawNum).multipliedBy(10 ** 18).toFixed(0).toString()])
        getCanClaim()
        getTableData()
    }
    const getCoinAddr = async ()=>{
        const res = await handleViewMethod("flm", [])
        await setCoinAddr(res)
    }
    const getCanClaim = async () => {
        const res = await handleViewMethod("checkUserCanClaim", [state.account])
        const isClaimAmount = await handleViewMethod("userTotalClaim", [state.account])
        setCanClaim(res / 10 ** 18)


        setClaimedAmount(isClaimAmount / 10 ** 18)
        const userBalance = await getTokenBalance(state.account)
        setUserBalance(userBalance)

    }
    const getWList = async () => {
        const record = await getWhitelist()
        const res = await handleViewMethod("getWhiteList", [])
        const recordArr = record.data.claimRecords
        let resArr = []
        setAirdropList(record.data.claimRecords)
        setTotal4(record.data.claimRecords.length)
        res.forEach(addr => {
            recordArr.forEach(record => {
                if (record.user.toLowerCase() == addr.toString().toLowerCase()) {
                    let hasAdd = false
                    resArr.forEach(obj => {
                        if (obj.user.toLowerCase() == record.user.toLowerCase()) {
                            obj.amount = BigNumber(obj.amount).plus(record.amount)
                            hasAdd = true
                        }
                    })
                    if (!hasAdd) {
                        resArr.push(record)
                    }
                }
            })

        })
        resArr.forEach(item => {
            allRecords.forEach(record => {
                if (item.user.toLowerCase() == record.user.toLowerCase()) {
                    if (item.claimed >= 0) {
                        item.claimed = BigNumber(item.claimed).plus(record.amount)
                    } else {
                        item.claimed = record.amount
                    }
                }
            })
        })
        resArr.forEach(item => {
            item.claiming = item.amount - item.claimed
        })
        resArr.sort((a, b) => {
            if (BigNumber(a.amount).lt(b.amount)) {
                return 1
            } else {
                return -1
            }
        })
        setWhitelistArr(resArr)
        setTotal2(resArr.length)
    }
    const handleSearch = () => {
        setShowSearch(true)
    }

    const getDepositArr = async () => {
        const res = await getDepositRecords()
        setTotal3(res.data.depositRecords.length)
        setDepositRecord(res.data.depositRecords)
    }
    const getTableData = async () => {
        const res = await getClaimRecords()
        setTotal1(res.data.claimeds.length)
        setAllRecords(res.data.claimeds)
        let myRecordsTemp = []
        res.data.claimeds.forEach(item => {
            if (item.user.toLowerCase() == state.account.toLowerCase()) {
                myRecordsTemp.push(item)
            }
        })
        setMyRecords(myRecordsTemp)
    }
    const addToken = async () => {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: coinAddr,
                    symbol: "FLM",
                    decimals: 18,
                    image: "https://app.firedao.co/FLM.png",
                },
            },
        });
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        await getCoinAddr()
        getAdmin()
        await getTableData()
        getWList()
        getDepositArr()

    }, [state.account, state.networkId]);

    useEffect(async () => {
        if(coinAddr){
            getCanClaim()
            const res = await getTokenBalance(addressMap["FLMAirdrop"].address)
            setPoolBalance(res)
        }
    }, [coinAddr]);
    return (
        <DistributionStyle>

            <div className="panel-box userinfo-box">

                <div className="panel-container">
                    <div className="panel-title flex-box">
                        FLM Airdrop
                        <div className="add-coin" onClick={addToken}>
                            Add FLM to MateMask
                        </div>
                        {isAdmin && (
                            <div className="admin-icon-box" onClick={() => {
                                history("/FLMAirdropManage")
                            }}>
                                <img className="admin-icon" src={manage} alt=""/>
                            </div>
                        )}
                    </div>
                    <div className="content-box">
                        <div className="left-part">
                            <div className="info-box">
                                <div className="title">
                                    FLM Airdrop Pool
                                </div>
                                <div className="num-box">
                                    {showNum(poolBalance)}
                                </div>
                            </div>
                            <div className="bottom-part">
                                <div className="info-box">
                                    <div className="name">
                                        Total
                                    </div>
                                    <div className="value">
                                        {showNum(BigNumber(claimedAmount).plus(userBalance).toString())}
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="name">
                                        Withdrawn
                                    </div>
                                    <div className="value">
                                        {showNum(claimedAmount)}
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="name">
                                        Balance
                                    </div>
                                    <div className="value">
                                        {showNum(userBalance)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-part">
                            <div className="info-box">
                                <div className="pid-box">FID : <div className="pid">{state.fid}</div></div>
                                <div className="can-claim">Can claim : <strong>{canClaim}</strong></div>
                            </div>
                            <Form form={form} className="withdrawForm">
                                <Form.Item label="Withdraw">
                                    <div className="input-box">
                                        <Input className='input' placeholder="0" step="any" type="number"
                                               value={withdrawNum}
                                               onChange={e => setWithdrawNum(e.target.value)}/>
                                        <div className="max-btn" onClick={() => {
                                            setWithdrawNum(canClaim)
                                        }}>
                                            MAX
                                        </div>
                                    </div>
                                </Form.Item>
                            </Form>
                            {!withdrawNum && (<Button type="primary" className="withdraw-btn">Input a number</Button>)}
                            {withdrawNum > canClaim && (
                                <Button type="primary" className="withdraw-btn">Overflow can claim</Button>)}
                            {withdrawNum > 0 && (BigNumber(withdrawNum).lt(canClaim) || withdrawNum == canClaim) && (
                                <Button type="primary" className="withdraw-btn" onClick={Claim}>Withdraw</Button>)}
                        </div>
                    </div>
                </div>
                <div className="panel-container">
                    <div className="panel-title flex-box">
                        Leaderboard
                        <div className="search-box">
                            <Input value={searchContent} onChange={(e) => {
                                setSearchContent(e.target.value)
                                if (!e.target.value) setShowSearch(false)
                            }} allowClear/>
                            <Button className="btn" type="primary" onClick={() => {
                                handleSearch()
                            }}>Search</Button>
                        </div>
                    </div>
                    <div className="fire-list-box fire-list-box-airdrop">
                        <div className="list-header">
                            <div className="col">
                                No.
                            </div>
                            <div className="col">
                                Address
                            </div>
                            <div className="col">
                                Total
                            </div>
                            <div className="col">
                                Claimed
                            </div>
                            <div className="col">
                                Claiming
                            </div>
                        </div>
                        {!showSearch && curPage2 && whitelist.map((item, index) => {
                            if (index >= pageCount2 * (curPage2 - 1) && index < pageCount2 * curPage2) {
                                return (<div className="list-item" key={index}>
                                    <div className="col">
                                        {index + 1}
                                    </div>
                                    <div className="col">
                                        <a className="address" href={develop.ethScan + "/address/" + item.user}
                                           target="_blank">{(item.user)}</a>
                                    </div>
                                    <div className="col">
                                        {showNum(item.amount / 10 ** 18)}
                                    </div>
                                    <div className="col">
                                        {showNum(item.claimed > 0 ? item.claimed / 10 ** 18 : 0)}
                                    </div>
                                    <div className="col">
                                        {showNum(item.claiming > 0 ? item.claiming / 10 ** 18 : 0)}
                                    </div>
                                </div>)
                            }

                        })}
                        {showSearch && whitelist.map((item, index) => {
                            if (item.user.toLowerCase() == searchContent) {
                                return (<div className="list-item" key={index}>
                                    <div className="col">
                                        {index + 1}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.username}
                                    </div>
                                    <div className="col">
                                        {item.fid}
                                    </div>
                                    <div className="col">
                                        <a href={develop.ethScan + "/address/" + item.user}
                                           target="_blank">{(item.user)}</a>
                                    </div>
                                    <div className="col">
                                        {showNum(item.amount / 10 ** 18)}
                                    </div>
                                </div>)
                            }

                        })}
                    </div>
                    <div className="pagination">
                        {
                            <Pagination current={curPage2} showSizeChanger
                                        onShowSizeChange={handleShowSizeChange2}
                                        onChange={onChangePage2} total={total2}
                                        defaultPageSize={pageCount2}/>
                        }
                    </div>
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        Claim Records
                    </div>
                    <div className="nav-box claim-nav">
                        <div className="fire-nav-list">
                            <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={() => {
                                setCurNav(1)
                            }}>
                                All Records
                            </div>
                            <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={() => {
                                setCurNav(2)
                            }}>
                                My Records
                            </div>
                        </div>
                    </div>
                    <div className="fire-list-box fire-list-box-userclaim">
                        <div className="list-header">
                            <div className="col">
                                No.
                            </div>
                            <div className="col">
                                PID
                            </div>
                            <div className="col">
                                Username
                            </div>

                            <div className="col">
                                Address
                            </div>
                            <div className="col">
                                Amount(s)
                            </div>
                            <div className="col">
                                Time(UTC)
                            </div>
                        </div>
                        {curNav == 1 && allRecords.map((item, index) => {
                            if (index >= pageCount1 * (curPage1 - 1) && index < pageCount1 * curPage1) {
                                return (<div className="list-item" key={index}>
                                    <div className="col">
                                        {index + 1}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.username}
                                    </div>
                                    <div className="col  ">
                                        <a className="address" href={develop.ethScan + "/address/" + item.user}
                                           target="_blank">{formatAddress(item.user)}</a>
                                    </div>
                                    <div className="col">
                                        {item.amount / 10 ** 18}
                                    </div>
                                    <div className="col">
                                        {dealTime(item.blockTimestamp)}
                                    </div>
                                </div>)
                            }

                        })}
                        {curNav == 2 && myRecords.map((item, index) => {
                            return (<div className="list-item" key={index}>
                                <div className="col">
                                    {index + 1}
                                </div>
                                <div className="col">
                                    {item.pid}
                                </div>
                                <div className="col">
                                    {item.username}
                                </div>
                                <div className="col">
                                    {item.fid}
                                </div>
                                <div className="col">
                                    <a href={develop.ethScan + "/address/" + item.user}
                                       target="_blank">{formatAddress(item.user)}</a>
                                </div>
                                <div className="col">
                                    {item.amount / 10 ** 18}
                                </div>
                                <div className="col">
                                    {dealTime(item.blockTimestamp)}
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className="pagination">
                        {
                            curNav == 1 && <Pagination current={curPage1} showSizeChanger
                                                       onShowSizeChange={handleShowSizeChange1}
                                                       onChange={onChangePage1} total={total1}
                                                       defaultPageSize={pageCount1}/>
                        }
                    </div>
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        Deposit Records
                    </div>

                    <div className="fire-list-box fire-list-box-deposit">
                        <div className="list-header">
                            <div className="col">
                                No.
                            </div>
                            <div className="col">
                                PID
                            </div>
                            <div className="col">
                                Username
                            </div>

                            <div className="col">
                                Address
                            </div>
                            <div className="col">
                                FLM
                            </div>
                            <div className="col">
                                Time(UTC)
                            </div>
                        </div>
                        {depositRecord.map((item, index) => {
                            if (index >= pageCount3 * (curPage3 - 1) && index < pageCount3 * curPage3) {
                                return (<div className="list-item" key={index}>
                                    <div className="col">
                                        {index + 1}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.username}
                                    </div>
                                    <div className="col  ">
                                        <a className="address" href={develop.ethScan + "/address/" + item.user}
                                           target="_blank">{formatAddress(item.user)}</a>
                                    </div>
                                    <div className="col">
                                        {showNum(item.amount / 10 ** 18)}
                                    </div>
                                    <div className="col">
                                        {dealTime(item.blockTimestamp)}
                                    </div>
                                </div>)
                            }

                        })}

                    </div>
                    <div className="pagination">
                        {
                            <Pagination current={curPage3} showSizeChanger
                                        onShowSizeChange={handleShowSizeChange3}
                                        onChange={onChangePage3} total={total3}
                                        defaultPageSize={pageCount3}/>
                        }
                    </div>
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        Airdrop List
                    </div>

                    <div className="fire-list-box fire-list-box-airdroplist">
                        <div className="list-header">
                            <div className="col">
                            </div>
                            <div className="col">
                                Title
                            </div>
                            <div className="col">
                                No.
                            </div>
                            <div className="col">
                                PID
                            </div>
                            <div className="col">
                                Username
                            </div>

                            <div className="col">
                                Address
                            </div>
                            <div className="col">
                                Amount(s)
                            </div>
                            <div className="col">
                                Time(UTC)
                            </div>
                        </div>
                        {airdropList.map((item, index) => {
                            if (index >= pageCount4 * (curPage4 - 1) && index < pageCount4 * curPage4) {
                                return (<div className="list-item" key={index}>
                                    <div className="col">
                                        {item.batch}
                                    </div>
                                    <div className="col">
                                        {item.info ? item.info : "--"}
                                    </div>
                                    <div className="col">
                                        {index + 1}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.username}
                                    </div>
                                    <div className="col  ">
                                        <a className="address" href={develop.ethScan + "/address/" + item.user}
                                           target="_blank">{formatAddress(item.user)}</a>
                                    </div>
                                    <div className="col">
                                        {item.amount / 10 ** 18}
                                    </div>
                                    <div className="col">
                                        {dealTime(item.blockTimestamp)}
                                    </div>
                                </div>)
                            }

                        })}

                    </div>
                    <div className="pagination">
                        {
                            <Pagination current={curPage4} showSizeChanger
                                        onShowSizeChange={handleShowSizeChange4}
                                        onChange={onChangePage4} total={total4}
                                        defaultPageSize={pageCount4}/>
                        }
                    </div>
                </div>
            </div>

        </DistributionStyle>
    )
}
export default Distribution
