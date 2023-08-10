import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import BigNumber from "bignumber.js"
import {
    Button,
    message,
    AutoComplete,
    Form,
    Pagination, Input
} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"
import ethIcon from "../../../imgs/eth_icon.webp";
import downIcon from "../../../imgs/down_icon.webp";
import listIcon from "../../../imgs/list-icon.webp";
import develop from "../../../env";
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import {getSeedDonateRecord} from "../../../graph/donate";
import SeedDonationStyle from "./SeedDonationStyle";
import addressMap from "../../../api/addressMap";
const SeedDonationNew = (props) => {
    let {state, dispatch} = useConnect();
    const [total, setTotal] = useState(0)
    const [total2, setTotal2] = useState(0)
    const [recordNav, setRecordNav] = useState(1)
    const [typeNav, setTypeNav] = useState(1)

    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [pageCount2, setPageCount2] = useState(20)
    const [curPage2, setCurPage2] = useState(1)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [totalDonate, setTotalDonate] = useState(0)
    const [exchangeAmount, setExchangeAmount] = useState(0)
    const [inputValue, setInputValue] = useState(0)
    const [ethBalance, setEthBalance] = useState(0)
    const [fdtBalance, setFdtBalance] = useState(0)
    const [allRecords, setAllRecords] = useState([])

    const [claimRecords, setClaimRecords] = useState([])
    const [claimMyRecords, setMyClaimRecords] = useState([])

    const [myRecords, seMyRecords] = useState([])
    const [isInWhiteList, setIsInWhiteList] = useState(false)
    const [salePrice, setSalePriceV] = useState(0.01)
    const [round, setRound] = useState([0])
    const [canClaim, setCanClaim] = useState(0)

    const history = useNavigate();
    const [form] = Form.useForm();


    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("seedDonation", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }


    const handlePayDealMethod = async (name, params, value) => {
        let contractTemp = await getContractByName("seedDonation", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealPayMethod(contractTemp, state.account, name, params, value)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("seedDonation", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getUserInfo = async () => {
        if (!state.pid) {
            const userInfo = await handleUserViewMethod("userInfo", [state.account])
            dispatch({type: "SET_PID", payload: userInfo.PID})
        }
    }

    const handleCoinViewMethod = async (name, coinName, params) => {
        let contractTemp = await getContractByName(coinName, state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const Row = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {index+1}
            </div>
            <div className="col address">
                {item._user && (
                    <a href={develop.ethScan + "address/" + item._user} target="_blank">
                        {item._user.substr(0, 6) + "..." + item._user.substr(item._user.length - 3, item._user.length)}
                    </a>
                )}
            </div>
            <div className="col">
                {item._amount}
            </div>



        </div>
    }


    const getRound = async ()=>{
        let res = await handleViewMethod("round", [])
        console.log(res)
        setRound(res)
    }
    const getTotalDonate = async () => {
        // let res = await handleViewMethod("totalDonate", [])
        // setTotalDonate(res / 10 ** 18)
    }
    const getfdtAmount = async (value) => {
        if (value > 0) {
            setInputValue(value)
            let res = await handleViewMethod("getRewardAmount", [BigNumber(value * 10 ** 18)])
            setExchangeAmount(BigNumber(res / 10 ** 18).toFixed(2))
        }
    }

    const exchangeFdt = async () => {
        if (inputValue > 0) {
            await handlePayDealMethod("donation", [], state.api.utils.toWei(inputValue.toString()))
            getData()
        }
    }
    const withdraw= async () => {
        await handleDealMethod("claim", [])
        getData()
    }
    const getTokenBalance = async (value) => {
        let contractTemp = await getContractByContract("erc20", addressMap["FDT"].address, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [value])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        return balance
    }

    const getSalePrice = async () => {
        // let res = await handleViewMethod("salePrice", [])
        // setSalePriceV(res / 1000)
    }
    const getClaimAmount = async () => {
        let res = await handleViewMethod("getClaimAmount", [])
        setCanClaim(res / 10**18)
    }
    const CoinBalance = async () => {
        let res = await handleCoinViewMethod("balanceOf", "WETH", [state.account])
        let res2 = await handleCoinViewMethod("balanceOf", "FDT", [state.account])
        setEthBalance(res / 10 ** 18)
        setFdtBalance(res2 / 10 ** 18)
    }


    const getData = async () => {
        try {
            let judgeRes = await judgeStatus(state)
            if (!judgeRes) {
                return
            }
            getTotalDonate()
            getRound()
            // getBalanceOfFDT()
            CoinBalance()
            getUserInfo()
            getSalePrice()
            getClaimAmount()
            const balance = await getTokenBalance(addressMap["seedDonation"].address)
            setFDTBalance(balance)

        } catch (e) {

        }
        // dispatch({type: "SET_PidArr", payload: tempArr})
    }
    const onChangePage = async (page) => {
        await setCurPage(page)
    }

    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }

    useEffect(async () => {
        let res = await getSeedDonateRecord()

        if (res.data) {
            let arr = []
            res.data.donations.forEach(item => {
                if (item._user.toString() === state.account.toLowerCase()) {
                    arr.push(item)
                }
            })
            if (res.data.donations && res.data.donations.length > 0) {
                setAllRecords(res.data.donations)
                setTotal(res.data.donations.length)
                seMyRecords(arr)
            }
            arr = []
            res.data.claims.forEach(item => {
                if (item._user.toString() === state.account.toLowerCase()) {
                    arr.push(item)
                }
            })
            if (res.data.claims && res.data.claims.length > 0) {
                setClaimRecords(res.data.claims)
                setMyClaimRecords(arr)
            }
        }
        getData()
    }, [state.account]);
    const coinOptions = [

        {
            label: "0.1ETH",
            value: '0.1',
        },

        {
            label: "0.2ETH",
            value: '0.2',
        },
        {
            label: "0.3ETH",
            value: '0.3',
        },
        {
            label: "0.4ETH",
            value: '0.4',
        },
        {
            label: "0.5ETH",
            value: '0.5',
        }, {
            label: "0.6ETH",
            value: '0.6',
        },
        {
            label: "0.7ETH",
            value: '0.7',
        }, {
            label: "0.8ETH",
            value: '0.8',
        },
        {
            label: "0.9ETH",
            value: '0.9',
        },

        {
            label: "1.0ETH",
            value: '1.0',
        },
        {
            label: "1.1ETH",
            value: '1.1',
        },
        {
            label: "1.2ETH",
            value: '1.2',
        },
        {
            label: "1.3ETH",
            value: '1.3',
        },
        {
            label: "1.4ETH",
            value: '1.4',
        },
        {
            label: "1.5ETH",
            value: '1.5',
        },
        {
            label: "1.6ETH",
            value: '1.6',
        },
        {
            label: "1.7ETH",
            value: '1.7',
        },
        {
            label: "1.8ETH",
            value: '1.8',
        },
        {
            label: "1.9ETH",
            value: '1.9',
        },

        {
            label: "2.0ETH",
            value: '2.0',
        },

    ];

    return (
        <SeedDonationStyle>
            <div className="part1">
                <div className="panel-box">
                    <div className="panel-container">
                        <div className="panel-title">
                             Seed Donate {round}
                        </div>
                        <div className="donate-info">
                            <div className="info-item">
                                <div className="name">
                                   Seed Donate Pool Amount
                                </div>
                                <div className="value">
                                    {FDTBalance}
                                </div>
                            </div>
                            <div className="flex-box">
                                <div className="info-item">
                                    <div className="name">
                                        Value
                                    </div>
                                    <div className="value">
                                        {(FDTBalance * salePrice).toFixed(1)}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="donate-pid">
                            <div className="panel-title">
                                Donate
                            </div>
                            <div className="flex-box">
                                <div className="pid">
                                    PID：{state.pid}
                                </div>
                                <div className="value">
                                    {isInWhiteList == false && "Not a whitelist user"}
                                    {isInWhiteList == true && "Whitelist user"}
                                </div>
                            </div>
                        </div>
                        <Form form={form} name="control-hooks" className="form">
                            <div className="balance-box">
                                <div className="name">
                                    Balance
                                </div>
                                <div className="value">
                                    {state.ethBalance} <span>ETH</span>
                                </div>
                            </div>
                            <Form.Item
                                name="amount"
                                validateTrigger="onBlur"
                                validateFirst={true}
                            >
                                <div className="input-box">
                                    <img className="coin-icon" src={ethIcon} alt=""/>
                                    <AutoComplete
                                        allowClear
                                        value={inputValue}
                                        onChange={(e) => {
                                            getfdtAmount(e)
                                        }}
                                        style={{width: 200}}
                                        options={coinOptions}
                                        placeholder=""
                                        filterOption={(inputValue, option) =>
                                            option.value.indexOf(inputValue) !== -1 &&
                                            /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/.test(inputValue)
                                        }
                                    />

                                </div>
                            </Form.Item>
                            <img className="down-icon" src={downIcon} alt=""/>
                            <Form.Item
                                name="pid"
                                validateTrigger="onBlur"
                                validateFirst={true}

                            >
                                <div className="input-box">
                                    <div className="exchangeAmount">
                                        {exchangeAmount}
                                    </div>
                                    <div className="coin-name">
                                       FDT
                                    </div>
                                </div>
                            </Form.Item>
                            <div className="balance-box">
                                <div className="name">
                                    Balance
                                </div>
                                <div className="value">
                                    {fdtBalance} <span>FDT</span>
                                </div>
                            </div>
                            <Button type="primary" className="donate" onClick={() => {
                                exchangeFdt()
                            }}>
                                Donate
                            </Button>
                            <div className="tip">
                            </div>
                        </Form>
                    </div>
                    <div className="panel-container">
                        Withdraw
                        <Form form={form} name="control-hooks" className="form">
                            <div className="balance-box">
                                <div className="name">
                                    Balance
                                </div>
                                <div className="value">
                                    {canClaim}
                                </div>
                            </div>


                            <Button type="primary" className="donate" onClick={() => {
                                withdraw()
                            }}>
                                Withdraw
                            </Button>
                            <div className="tip">
                            </div>
                        </Form>

                    </div>
                </div>
                <div className="panel-box part2">
                    <div className="panel-container">
                        <div className="panel-title">
                            Donate Records
                        </div>
                        <div className="og-nav-list">
                            <div className={"nav-item " + (typeNav == 1 ? "active" : "")} onClick={() => {
                                setTypeNav(1)
                            }}>
                                Donation
                            </div>
                            <div className={"nav-item " + (typeNav == 2 ? "active" : "")} onClick={() => {
                                setTypeNav(2)
                            }}>
                                Claim
                            </div>
                        </div>
                        <div className="og-nav-list">
                            <div className={"nav-item " + (recordNav == 1 ? "active" : "")} onClick={() => {
                                setRecordNav(1)
                            }}>
                                All Records
                            </div>
                            <div className={"nav-item " + (recordNav == 2 ? "active" : "")} onClick={() => {
                                setRecordNav(2)
                            }}>
                                My Records
                            </div>
                        </div>
                        <div className="fire-list-box">
                            <div className="list-header flex-box">
                                <div className="col">
                                    No.
                                </div>

                                <div className="col">
                                    Address
                                </div>

                                <div className="col">
                                    Amount
                                </div>
                            </div>
                            {
                                typeNav==1&&  <div>
                                    {recordNav==1&& allRecords.map((item,index)=>{
                                        return (
                                            Row(item,index)
                                        )
                                    })}
                                    {recordNav==2&& myRecords.map((item,index)=>{
                                        return (
                                            Row(item,index)
                                        )
                                    })}
                                </div>
                            }
                            {
                                typeNav==2&&  <div>
                                    {recordNav==1&& claimRecords.map((item,index)=>{
                                        return (
                                            Row(item,index)
                                        )
                                    })}
                                    {recordNav==2&& claimMyRecords.map((item,index)=>{
                                        return (
                                            Row(item,index)
                                        )
                                    })}
                                </div>
                            }
                        </div>
                        <div className="pagination">
                            {
                              <Pagination current={curPage} showSizeChanger
                                                              onShowSizeChange={handleShowSizeChange}
                                                              onChange={onChangePage} total={total}
                                                              defaultPageSize={pageCount}/>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </SeedDonationStyle>
    )
}
export default SeedDonationNew
