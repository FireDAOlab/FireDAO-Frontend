import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import BigNumber from "bignumber.js"
import AddNomalWhiteList from "./ThreelWhiteList";
import AddThreeWhiteList from "./WhiteList";
import {showNum} from "../../../utils/bigNumberUtil";
import ethereum from "../../../imgs/ethereum.svg";
import {formatAddress} from "../../../utils/publicJs";
import ConnectWallet from "../../../component/ConnectWallet/ConnectWallet";
import user3 from "../../../imgs/user3.png"
import download from "../../../imgs/download.png"
import manage from "../../../imgs/svg/manage.svg"
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
import {getDonateRecord} from "../../../graph/donate";
import OGPoolStyle from "./OGPoolStyle";
import {ETHDecimals, FDTDecimals, USDTDecimals, ZeroAddress} from "../../../config/constants";

const OGPoolPublic = (props) => {
    let {state, dispatch} = useConnect();
    const [activeNav, setActiveNav] = useState(1)
    const [total, setTotal] = useState(0)
    const [total2, setTotal2] = useState(0)
    const [recordNav, setRecordNav] = useState(1)
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [pageCount2, setPageCount2] = useState(20)
    const [curPage2, setCurPage2] = useState(1)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [totalDonate, setTotalDonate] = useState(0)
    const [exchangeAmount, setExchangeAmount] = useState(0)
    const [inputValue, setInputValue] = useState(0)
    const [isSecondAdmin, setIsSecondAdmin] = useState(false)
    const [isThreeAdmin, setIsThreeAdmin] = useState(false)
    const [isFourAdmin, setIsFourAdmin] = useState(false)
    const [fdtBalance, setFdtBalance] = useState(0)
    const [allRecords, setAllRecords] = useState([])
    const [refRecords, setREFRecords] = useState([])
    const [myRecords, seMyRecords] = useState([])
    const [whiteList, setAllWhiteList] = useState([])
    const [isInWhiteList, setIsInWhiteList] = useState(false)
    const [adminWhiteList, setAdminWhiteList] = useState([])
    const [salePrice, setSalePriceV] = useState(0.01)
    const [status, setStatus] = useState(0)
    const [isAdmin, setIsAdmin] = useState(false)

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
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }


    const handlePayDealMethod = async (name, params, value) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealPayMethod(contractTemp, state.account, name, params, value)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
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
    const getAdmin = async () => {
        let res = await handleViewMethod("owner", [])
        if (state.account.toLowerCase() == res.toLowerCase()) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
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
        return <div className="list-item row1" key={index}>
            <div className="col no">
                {item.no}
            </div>
            <div className="col pid">
                {item.pid}
            </div>
            <div className="col ">
                {item.name}
            </div>

            <div className="col address">
                {item.addr && (
                    <a href={develop.ethScan + "address/" + item.addr} target="_blank">
                        {formatAddress(item.addr)}
                    </a>
                )}
            </div>
            <div className="col ">
                {item.ethAmount / 10 ** ETHDecimals}
            </div>
            <div className="col">
                {BigNumber(item.usdtAmount / 10 ** USDTDecimals).toFixed(2)}
            </div>

            <div className="col">
                {item.rate}%
            </div>
            <div className="col ">
                {BigNumber(item.fdtAmount / 10 ** FDTDecimals).toFixed(2)}
            </div>

            <div className="col">
                {item.time}
            </div>

        </div>
    }
    const Row2 = (item, index) => {
        return <div className="list-item row2-list-item" key={index}>
            <div className="col no">
                {index + 1}
            </div>
            <div className="col pid">
                {item.Pid}
            </div>
            <div className="col name">
                {item.name}
            </div>

            <div className="col address">
                {
                    item.user && <a href={develop.ethScan + "address/" + item.user} target="_blank">
                        {(item.user)}
                    </a>
                }

            </div>


        </div>
    }
    const getBalanceOfFDT = async () => {
        let balance = await handleViewMethod("getBalanceOfFDTOG", [])
        balance = parseInt(BigNumber(balance).dividedBy( 10 ** FDTDecimals).toString() )
        if (balance > 0) {
            setFDTBalance(balance)
        }
    }

    const getTotalDonate = async () => {
        let res = await handleViewMethod("totalDonate", [])
        setTotalDonate(BigNumber(res).dividedBy(10**FDTDecimals).toString() )
    }
    const getfdtAmount = async (value) => {
        if (value > 0 || value == 0) {
            setInputValue(value)
            let res = await handleViewMethod("getfdtOgAmount", [BigNumber(BigNumber(value).multipliedBy(10 ** FDTDecimals)).toString()])
            setExchangeAmount(BigNumber(res ).dividedBy(10 ** FDTDecimals).toFixed(2).toString() )
        }
    }

    const exchangeFdt = async () => {
        console.log(inputValue)
        if (inputValue > 0) {
            await handlePayDealMethod("donate", [(BigNumber(inputValue).multipliedBy( 10 ** ETHDecimals)).toString()], (BigNumber(inputValue).multipliedBy( 10 ** ETHDecimals)).toString())
            getData()
        }
    }
    const handleRegister = async ()=>{
        let addr = form.getFieldValue().referralCode
        if (!state.api.utils.isAddress(form.getFieldValue().referralCode)) {
           return
        }
       await handleDealMethod("register", [addr.toString()])
    }


    const getIsAdmin = async () => {
        const isS = await handleViewMethod("checkAddrForAdminLevelTwo", [state.account])
        const isT = await handleViewMethod("checkAddrForAdminLevelThree", [state.account])
        const isF = await handleViewMethod("checkAddrForAdminLevelFour", [state.account])

        setIsSecondAdmin(isS)
        setIsThreeAdmin(isT)
        setIsFourAdmin(isF)
    }
    const getSalePrice = async () => {
        let res = await handleViewMethod("salePrice", [])
        setSalePriceV(BigNumber(res).dividedBy(1000).toString() )
    }
    const getValidNumbers = async () => {
        let length = await handleViewMethod("getValidNumbers", [])
        let res = await handleViewMethod("validNumbers", [BigNumber(length).minus(1).toString() ])
    }
    const CoinBalance = async () => {
        let res2 = await handleCoinViewMethod("balanceOf", "FDT", [state.account])
        setFdtBalance(BigNumber(res2).dividedBy(10 ** FDTDecimals).toString() )
    }


    const getData = async () => {
        try {
            let judgeRes = await judgeStatus(state)
            if (!judgeRes) {
                return
            }
            getIsAdmin()
            getTotalDonate()
            getBalanceOfFDT()
            CoinBalance()
            getSalePrice()
            getValidNumbers()
            getAdmin()
            getRecord()
        } catch (e) {

        }
    }
    const onChangePage = async (page) => {
        await setCurPage(page)
    }
    const onChangePage2 = async (page) => {
        await setCurPage2(page)
    }

    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const handleShowSizeChange2 = async (page, count) => {
        setPageCount2(count)
    }
    const getRecord = async () => {
        try {
            let res = await getDonateRecord()
            if (res.data) {
                let arr = []
                res.data.allRecords.forEach(item => {
                    if (item.time) {
                        item.time = new Date(item.time * 1000).toUTCString()
                    }
                    if (state.account && item.addr.toString() == state.account.toLowerCase()) {
                        arr.push(item)
                    }
                })

                if (res.data.allRecords && res.data.allRecords.length > 0) {
                    res.data.allRecords.shift()
                    setAllRecords(res.data.allRecords)
                    setTotal(res.data.allRecords.length)
                    seMyRecords(arr)
                }

            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(async () => {

        getRecord()

    }, []);
    useEffect(() => {
        getData()
    }, [state.account]);
    useEffect(() => {
        if (state.account && state.apiState == "READY") {
            setStatus(1)
        } else {
            setStatus(0)
        }
    }, [state.account, state.networkId, state.apiState])
    const coinOptions = [
        {
            label: "0.25ETH",
            value: '0.25',
        },
        {
            label: "0.5ETH",
            value: '0.5',
        },
        {
            label: "0.75ETH",
            value: '0.75',
        },
        {
            label: "1.00ETH",
            value: '1.00',
        },
        {
            label: "1.25ETH",
            value: '1.25',
        },
        {
            label: "1.5ETH",
            value: '1.5',
        },
        {
            label: "1.75ETH",
            value: '1.75',
        },
        {
            label: "2.00ETH",
            value: '2.00',
        },

    ];

    return (
        <OGPoolStyle>

            <div className="page-title">
                OG Pool

                <Button style={{
                    float: 'right',
                    background: '#373232',
                    margin: '0px 13px',
                    textAlign: 'center',
                    lineHeight: '28px',
                    width: "32px",
                    height: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                }}
                        onClick={() => {
                            history("/OGPoolAdmin")
                        }}>
                    <img src={user3} style={{width: '22px', marginLeft: '-10px', marginTop: '-10px'}}/>
                </Button>
            </div>
            <div className="header-nav">
                <div className="fire-nav-list ">
                    <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                        setActiveNav(1)
                    }}>
                        OG Donate Pool
                    </div>
                    <div className={"nav-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                        setActiveNav(3)
                    }}>
                        Login
                    </div>
                    <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                        setActiveNav(2)
                    }}>
                        WhiteList
                    </div>
                    {
                        isSecondAdmin && (

                            <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {

                                setActiveNav(4)
                            }}>
                                Set Admin
                            </div>
                        )
                    }


                </div>

            </div>
            {activeNav == 1 && (
                <div className="part1">
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                OG Round 1
                                {/* <div className="pid">
                                    PID：{state.pid}
                                </div> */}
                            </div>
                            <div className="donate-info">
                                <div className="info-item">
                                    <div className="name">
                                        FDT-OG Donate Pool Amount
                                    </div>
                                    <div className="value">
                                        {showNum(FDTBalance)}
                                    </div>
                                </div>
                                <div className="flex-box">
                                    <div className="info-item">
                                        <div className="name">
                                            Value
                                        </div>
                                        <div className="value">

                                            {showNum(BigNumber(FDTBalance).multipliedBy(salePrice))}

                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="name">
                                            Total Donate
                                        </div>
                                        <div className="value">
                                            <p><img src={ethereum}
                                                    style={{marginTop: '-5px', marginRight: '10px'}}/>{showNum(totalDonate)} ETH
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="donation-box">

                                <div className="title donate-header">
                                    Donate
                                    <div className="isW">
                                        Whitelist
                                        <div className="is">
                                            {isInWhiteList == false && "No"}
                                            {isInWhiteList == true && "Yes"}
                                        </div>
                                    </div>
                                </div>
                                <Form form={form} name="control-hooks" className="form">
                                    <div className="donate-part">
                                        <div className="balance-box">

                                            <p>Value: $ </p>

                                            <div className="name">
                                                Balance:
                                            </div>
                                            <div className="value">
                                                {showNum(state.ethBalance)} <span>ETH</span>
                                            </div>
                                        </div>
                                        <Form.Item
                                            name="amount"
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                        >
                                            <div className="input-box">
                                                <AutoComplete
                                                    allowClear
                                                    value={inputValue}
                                                    onChange={(e) => {
                                                        getfdtAmount(e)
                                                    }}
                                                    style={{width: 200}}
                                                    options={coinOptions}
                                                    placeholder="0"
                                                    filterOption={(inputValue, option) =>
                                                        option.value.indexOf(inputValue) !== -1 &&
                                                        /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/.test(inputValue)
                                                    }
                                                />
                                                <div className="right-tip">
                                                    <img className="coin-icon" src={ethereum} alt=""/>
                                                    ETH
                                                </div>
                                            </div>
                                        </Form.Item>
                                    </div>
                                    <img className="down-icon" src={download} alt=""/>


                                    <div className="donate-part" style={{marginTop: '8px'}}>
                                        <div className="balance-box">
                                            <div className="name" style={{fontSize: '16px'}}>
                                                Balance:
                                            </div>
                                            <div className="value" style={{fontSize: '16px'}}>
                                                {showNum(fdtBalance)} <span>FDT</span>
                                            </div>
                                        </div>
                                        <Form.Item
                                            name="pid"
                                            validateTrigger="onBlur"
                                            validateFirst={true}

                                        >
                                            <div className="input-box">
                                                <div className="exchangeAmount">
                                                    {exchangeAmount}
                                                </div>
                                                <div className="right-tip">
                                                    <img className="coin-icon" src={ethereum} alt=""/>
                                                    FDT-OG
                                                </div>
                                            </div>
                                        </Form.Item>
                                    </div>
                                    {status == 0 && <ConnectWallet className="connect-button"/>}
                                    {
                                        status == 1 && !inputValue &&
                                        <Button type="primary" className="donate">
                                            Enter an amount
                                        </Button>
                                    }
                                    {
                                        status == 1 && BigNumber(state.ethBalance).lt(inputValue) &&
                                        <Button type="primary" className="donate">
                                            Balance not enough
                                        </Button>
                                    }
                                    {
                                        status == 1 && inputValue > 0 && !BigNumber(state.ethBalance).lt(inputValue) &&
                                        <Button type="primary" className="donate" onClick={() => {
                                            exchangeFdt()
                                        }}>
                                            Donate
                                        </Button>
                                    }

                                    <div className="tip">
                                        I have already donated {} ETH, I can donate up to {} ETH, I can continue
                                        donating {showNum(state.ethBalance)} ETH.
                                        {/* 1FDT-OG = {salePrice} USD ，Donate up to 2ETH */}
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="panel-box part2">
                        <div className="panel-container">
                            <div className="list-top-part">
                                <div className="panel-title">
                                    Donate Records
                                </div>
                                <div className="fire-nav-list">
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
                                    {(isThreeAdmin) && (
                                        <div className={"nav-item " + (recordNav == 3 ? "active" : "")} onClick={() => {
                                            setRecordNav(3)
                                        }}>
                                            My recommendation
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                            <div className="fire-list-box" style={{minWidth: '100%'}}>
                                <div className="list-header flex-box1">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        PID<img src={listIcon} alt="" className="list-icon"/>
                                    </div>
                                    <div className="col">
                                        Username
                                    </div>
                                    <div className="col">
                                        Wallet Address
                                    </div>
                                    <div className="col">
                                        ETH
                                    </div>
                                    <div className="col">
                                        Value
                                    </div>

                                    <div className="col">
                                        Rate
                                    </div>
                                    <div className="col">
                                        Amount
                                    </div>
                                    <div className="col">
                                        Time(UTC)
                                    </div>
                                </div>

                                {
                                    recordNav == 1 && allRecords.map((item, index) => (
                                        index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                        Row(item, index)
                                    ))
                                }
                                {
                                    recordNav == 2 && myRecords.map((item, index) => (
                                        index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                        Row(item, index)
                                    ))
                                }
                                {
                                    recordNav == 3 && refRecords.map((item, index) => (
                                        Row(item, index)
                                    ))
                                }


                            </div>
                            <div className="pagination">
                                {
                                    recordNav == 1 && <Pagination current={curPage} showSizeChanger
                                                                  onShowSizeChange={handleShowSizeChange}
                                                                  onChange={onChangePage} total={total}
                                                                  defaultPageSize={pageCount}/>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            )}
            {activeNav == 2 && (
                <div className="white-list">
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="isInW">
                                <span style={{display: 'flex'}}>
                                    PID
                                    <div className='kk'>
                                    {state.pid}
                                    </div>
                                </span>
                                <span style={{display: 'flex', marginLeft: '10px'}}>
                                    Whiterlist
                                    <div className='kk'>
                                        {isInWhiteList ? "Yes" : "False"}
                                    </div>
                                </span>
                            </div>
                            <div className="fire-list-box">
                                <div className="list-header flex-box2">
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

                                </div>
                                {
                                    whiteList.map((item, index) => (
                                        index >= pageCount2 * (curPage2 - 1) && index < pageCount2 * curPage2 &&
                                        Row2(item, index)
                                    ))
                                }


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
                    </div>
                </div>
            )}
            {activeNav == 3 && (
                <div>
                    {/*<AddThreeWhiteList allRecords={allRecords}></AddThreeWhiteList>*/}
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                Login
                            </div>
                            <div className="panel-content">
                                <Form form={form} name="control-hooks" className="form">
                                    <Form.Item
                                        name="referralCode"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            <Input/>
                                        </div>
                                    </Form.Item>

                                    <div className="btns">
                                        <Button className="add-btn" type="primary" onClick={() => {
                                            handleRegister()
                                        }}>Register</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeNav == 4 && (
                <div>
                    <AddNomalWhiteList allRecords={allRecords}></AddNomalWhiteList>
                </div>
            )}
            {activeNav == 5 && (
                <div>
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                Fund Allocation
                            </div>
                        </div>
                    </div>

                </div>
            )

            }
        </OGPoolStyle>
    )
}
export default OGPoolPublic
