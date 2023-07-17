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
import {getClaimRecords} from "../../../graph/flmAirdrop";
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

    const [total, setTotal] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)

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
        let contractTemp = await getContractByContract("erc20", addressMap["FLM"].address, state.api,)
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
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const onChangePage = async (page) => {
        await setCurPage(page)
    }
    const Claim = async () => {
        await handleDealMethod("Claim", [BigNumber(withdrawNum).multipliedBy(10 ** 18).toFixed(0).toString()])
        getCanClaim()
    }
    const getCanClaim = async () => {
        const res = await handleViewMethod("checkUserCanClaim", [state.account])
        const isClaimAmount = await handleViewMethod("userTotalClaim", [state.account])
        setCanClaim(res / 10 ** 18)


        setClaimedAmount(isClaimAmount / 10 ** 18)
        const userBalance = await getTokenBalance(state.account)
        setUserBalance(userBalance)

    }
    const getTableData = async () => {
        const res = await getClaimRecords()
        setAllRecords(res.data.claimeds)
        let myRecordsTemp= []
        res.data.claimeds.forEach(item=>{
            if(item.user.toLowerCase() == state.account.toLowerCase()){
                myRecordsTemp.push(item)
            }
        })
        setMyRecords(myRecordsTemp)
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getCanClaim()
        getAdmin()
        getTableData()
        getTableData()
        const res = await getTokenBalance(addressMap["FLMAirdrop"].address)
        setPoolBalance(res)

    }, [state.account, state.networkId]);


    return (
        <DistributionStyle>

            <div className="panel-box userinfo-box">

                <div className="panel-container">
                    <div className="panel-title">
                        FLM Airdrop
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
                                    {poolBalance}
                                </div>
                            </div>
                            <div className="bottom-part">
                                <div className="info-box">
                                    <div className="name">
                                        Your Claimed
                                    </div>
                                    <div className="value">
                                        {claimedAmount}
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="name">
                                        Your FLM
                                    </div>
                                    <div className="value">
                                        {userBalance}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-part">
                            <div className="info-box">
                                <span>FID : {state.fid}</span>
                                <span>can claim : {canClaim}</span>
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
                    <div className="panel-title">
                        Withdraw Records
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
                                FID
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
                        { curNav == 1 && allRecords.map((item, index) => {
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
                        { curNav == 2 && myRecords.map((item, index) => {
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
                            curNav == 1 && <Pagination current={curPage} showSizeChanger
                                                       onShowSizeChange={handleShowSizeChange}
                                                       onChange={onChangePage} total={total}
                                                       defaultPageSize={pageCount}/>
                        }
                    </div>
                </div>
            </div>

        </DistributionStyle>
    )
}
export default Distribution
