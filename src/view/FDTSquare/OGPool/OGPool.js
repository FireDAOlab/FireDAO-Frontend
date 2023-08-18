import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import BigNumber from "bignumber.js"
import AddNomalWhiteList from "./ThreelWhiteList";
import AddThreeWhiteList from "./components/OgAdminLevel2";
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
    Pagination, Input, Modal
} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"

import listIcon from "../../../imgs/list-icon.webp";
import develop from "../../../env";
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import {getDonateRecord, getAllRegisters, getRecommender} from "../../../graph/donate";
import OGPoolStyle from "./OGPoolStyle";
import {ETHDecimals, FDTDecimals, USDTDecimals, FLMDecimals, ZeroAddress} from "../../../config/constants";
import FDTIcon from "../../../imgs/FDT-icon.png";

const OGPoolPublic = (props) => {
    let {state, dispatch} = useConnect();
    const [activeNav, setActiveNav] = useState(1)
    const [total, setTotal] = useState(0)
    const [myRecommender, setMyRecommender] = useState()
    const [recordNav, setRecordNav] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [curPage, setCurPage] = useState(1)
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
    const [isShowRegister, setIsShowRegister] = useState(false)
    const [salePrice, setSalePriceV] = useState(0.01)
    const [status, setStatus] = useState(0)
    const [isAdmin, setIsAdmin] = useState(false)
    const [myTeam, setMyTeamArr] = useState([])

    const [levelCountObj, setLevelCountObj] = useState({})
    const [rewardTotalETH, setRewardTotalETH] = useState({})
    const [rewardTotalFLM, setRewardTotalFLM] = useState({})
    const [myTeamRecord, setMyTeamRecord] = useState([])
    const [inviteRateArr, setInvArr] = useState([])
    const [myStatus, setMyStatus] = useState({})
    const [activeArr, setActiveArr] = useState([])
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

    const getBalanceOfFDT = async () => {
        let balance = await handleViewMethod("getBalanceOfFDTOG", [])
        balance = parseInt(BigNumber(balance).dividedBy(10 ** FDTDecimals).toString())
        if (balance > 0) {
            setFDTBalance(balance.toString())
        }
    }

    const getTotalDonate = async () => {
        let res = await handleViewMethod("totalDonate", [])
        setTotalDonate(BigNumber(res).dividedBy(10 ** FDTDecimals).toString())
    }
    const getfdtAmount = async (value) => {
        if (value > 0 || value == 0) {
            setInputValue(value)
            let res = await handleViewMethod("getfdtOgAmount", [BigNumber(BigNumber(value).multipliedBy(10 ** FDTDecimals)).toString()])
            setExchangeAmount(BigNumber(res).dividedBy(10 ** FDTDecimals).toFixed(2).toString())
        }
    }

    const exchangeFdt = async () => {
        if (inputValue > 0) {
            await handlePayDealMethod("donate", [(BigNumber(inputValue).multipliedBy(10 ** ETHDecimals)).toString()], (BigNumber(inputValue).multipliedBy(10 ** ETHDecimals)).toString())
            getData()
        }
    }
    const handleRegister = async () => {
        let addr = form.getFieldValue().referralCode
        if (!state.api.utils.isAddress(form.getFieldValue().referralCode)) {
            return
        }
        await handleDealMethod("register", [addr.toString()])
        setIsShowRegister(false)
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
        setSalePriceV(BigNumber(res).dividedBy(1000).toString())
    }

    const CoinBalance = async () => {
        let res2 = await handleCoinViewMethod("balanceOf", "FDT", [state.account])
        setFdtBalance(BigNumber(res2).dividedBy(10 ** FDTDecimals).toString())
    }
    const getMyStatus = async () => {

        let activeStatus = await handleViewMethod("checkAddrForActivateAccount", [state.account])
        let registerStatus = await handleViewMethod("isNotRegister", [state.account])
        setMyStatus({
            registerStatus,
            activeStatus
        })
    }
    const getActivateAccount = async () => {
        try {
            const res = await handleViewMethod("getActivateAccount", [])
            setActiveArr(res)
        } catch (e) {
            console.log(e)
        }
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
            getAdmin()
            getRecord()
            getMyStatus()

            getActivateAccount()

            await getInviteRate()
            getAddressRecommender()
            getMyTeam(state.account)
        } catch (e) {

        }
    }
    const onChangePage = async (page) => {
        await setCurPage(page)
    }


    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }

    const getAddressRecommender = async ()=>{
        const res =  await getRecommender(state.account)
        if(res && res.data){
            setMyRecommender(res.data.allRegisters[0].recommenders)
        }
    }
    const getMyTeam = async (address) => {
        address = state.account
        const myTeamArr = []
        let level1Res = await getAllRegisters(address)
        if (level1Res.data && level1Res.data.allRegisters) {
            const level1Arr = level1Res.data.allRegisters
            myTeamArr.push(...level1Arr)

            for (let i = 0; i < level1Arr.length; i++) {
                const item = level1Arr[i]
                item.level = 1

                let res = await getAllRegisters(item._user)
                const level2Arr = res.data.allRegisters
                myTeamArr.push(...level2Arr)

                for (let i = 0; i < level2Arr.length; i++) {
                    const item = level2Arr[i]
                    item.level = 2
                    let res = await getAllRegisters(item._user)
                    const level3Arr = res.data.allRegisters
                    myTeamArr.push(...level3Arr)

                    for (let i = 0; i < level3Arr.length; i++) {
                        const item = level3Arr[i]
                        item.level = 3
                        let res = await getAllRegisters(item._user)
                        const level4Arr = res.data.allRegisters
                        myTeamArr.push(...level4Arr)


                        for (let i = 0; i < level4Arr.length; i++) {
                            const item = level4Arr[i]
                            item.level = 4
                            let res = await getAllRegisters(item._user)
                            const level5Arr = res.data.allRegisters
                            myTeamArr.push(...level5Arr)

                            for (let i = 0; i < level5Arr.length; i++) {
                                const item = level5Arr[i]
                                item.level = 5
                                let res = await getAllRegisters(item._user)
                                const level6Arr = res.data.allRegisters
                                myTeamArr.push(...level6Arr)
                            }
                        }

                    }

                }

            }
            let myTeamRecord = []

            // count my team level number

            let levelRewardObj = {
                level1Total: 0,
                level2Total: 0,
                level3Total: 0,
                level4Total: 0,
                level5Total: 0,
            }
            // count my team level number
            for (let i = 0; i < myTeamArr.length; i++) {
                const item = myTeamArr[i]
                if (item.level == 1) {
                    levelRewardObj.level1Total++
                }
                if (item.level == 2) {
                    levelRewardObj.level2Total++
                }
                if (item.level == 3) {
                    levelRewardObj.level3Total++
                }
                if (item.level == 4) {
                    levelRewardObj.level4Total++
                }
                if (item.level == 5) {
                    levelRewardObj.level5Total++
                }

            }
            // operate reward and get record
            let totalETH = 0, totalFLM = 0
            for (let i = 0; i < myTeamArr.length; i++) {
                const item = myTeamArr[i]
                allRecords.forEach(record => {
                    if (item._user.toLowerCase() == record.addr.toLowerCase()) {
                        item.ethIncome = BigNumber(record.ethAmount).multipliedBy(inviteRateArr[item.level - 1]).dividedBy(100).dividedBy(10 ** ETHDecimals).toString()
                        item.flmIncome = BigNumber(record.flmAmount).multipliedBy(inviteRateArr[item.level - 1]).dividedBy(100).dividedBy(10 ** FLMDecimals).toString()
                        totalETH = BigNumber(totalETH).plus(item.ethIncome)
                        totalFLM = BigNumber(totalFLM).plus(item.flmIncome)

                        record.level = item.level

                        myTeamRecord.push(record)
                    }
                })
            }
            setMyTeamRecord(myTeamRecord)
            setMyTeamArr(myTeamArr)
            setLevelCountObj(levelRewardObj)
            setRewardTotalFLM(totalFLM)
            setRewardTotalETH(totalETH)
        }


    }
    const getInviteRate = async () => {
        // const rateLength = await handleViewMethod("getInviteRate", [])
        let tempArr = []
        for (let i = 0; i < 5; i++) {
            const inviteRate = await handleViewMethod("inviteRate", [i])
            tempArr.push(inviteRate.toString())
        }
        setInvArr(tempArr)
    }

    const getRecord = async () => {
        try {
            let res = await getDonateRecord()
            let allRecord = res.data.allRecords
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
            label: "0.2ETH",
            value: '0.2',
        },
        {
            label: "0.4ETH",
            value: '0.4',
        },
        {
            label: "0.6ETH",
            value: '0.6',
        },
        {
            label: "0.8ETH",
            value: '0.8',
        },
        {
            label: "1.00ETH",
            value: '1.00',
        },
        {
            label: "1.2ETH",
            value: '1.2',
        },
        {
            label: "1.4ETH",
            value: '1.4',
        },
        {
            label: "1.6ETH",
            value: '1.6',
        },
        {
            label: "1.8ETH",
            value: '1.8',
        },
        {
            label: "2.00ETH",
            value: '2.00',
        },

    ];

    return (
        <OGPoolStyle>
            <Modal className="model-dialog" title="Sign up" open={isShowRegister} onOk={handleRegister}
                   footer={[

                       <Button className="add-btn" type="primary" onClick={() => {
                           handleRegister()
                       }}>Submit</Button>

                   ]}
                   onCancel={() => {
                       setIsShowRegister(false)
                   }}>
                <Form form={form} name="control-hooks" className="form">
                    <strong>Wallet Address</strong>
                    <Form.Item
                        name="referralCode"
                        validateTrigger="onBlur"
                        validateFirst={true}
                    >
                        <div className="input-box">
                            {state.account}
                        </div>
                    </Form.Item>
                    <strong>Referral Code</strong>
                    <Form.Item
                        name="referralCode"
                        validateTrigger="onBlur"
                        validateFirst={true}
                    >
                        <div className="input-box">

                            <Input/>
                        </div>
                    </Form.Item>

                </Form>
            </Modal>
            <div className="page-title">
                OG Pool
                {isAdmin && <Button style={{
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
                </Button>}
                {(isSecondAdmin | isThreeAdmin || isFourAdmin) &&
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
                                history("/OGUserAdmin")
                            }}>
                        <img src={user3} style={{width: '22px', marginLeft: '-10px', marginTop: '-10px'}}/>
                    </Button>
                }

            </div>
            <div className="header-nav">
                <div className="fire-nav-list ">
                    <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                        setActiveNav(1)
                    }}>
                        OG Donate Pool
                    </div>
                    <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                        setActiveNav(2)
                    }}>
                        Team
                    </div>
                    <div className={"nav-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                        setActiveNav(3)
                    }}>
                        Active Accounts
                    </div>


                </div>

            </div>
            {activeNav == 1 && (
                <div className="part1">
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                {/* <div className="pid">
                                    PID：{state.pid}
                                </div> */}
                            </div>
                            <div className="status-info">
                                <div className="info-item">
                                    {!myStatus.registerStatus && <Button onClick={() => {
                                        setIsShowRegister(true)
                                    }}>Unregistered</Button>}
                                    {myStatus.registerStatus && <Button>Registered</Button>}
                                </div>
                                <div className="info-item">

                                    {!myStatus.activeStatus && <Button>Inactivated</Button>}
                                    {myStatus.activeStatus && <Button>Activated</Button>}
                                </div>
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
                                                    width={20}
                                                    style={{
                                                        marginTop: '-5px',
                                                        marginRight: '10px'
                                                    }}/>{showNum(totalDonate)} ETH
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="donation-box">

                                <div className="title donate-header">
                                    Donate

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
                                                Your receive
                                            </div>
                                            <div className="balance-box">
                                                <div className="name">
                                                    Balance:
                                                </div>
                                                <div className="value" style={{fontSize: '16px'}}>
                                                    {showNum(fdtBalance)} <span>FDT</span>
                                                </div>
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
                                                    <img className="coin-icon" width={20} src={FDTIcon} alt=""/>
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
                    <div className="panel-box part2" style={{display: "none"}}>
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
                <div className="team-part">
                    <div className="panel-box">
                        <div className="panel-container">

                            <div className="in-line">
                                <div className="left">
                                    Wallet Address
                                </div>
                                <div className="right">
                                    {state.account}
                                </div>
                            </div>
                            <div className="in-line">
                                <div className="left">
                                    Recommender
                                </div>
                                <div className="right">
                                    {myRecommender}
                                </div>
                            </div>
                        </div>
                        <div className="panel-container">


                            <div className="team-count">
                                <div className="panel-title flex-title" >
                                    Team Income
                                    <div className="right flex-box">
                                        <div className="reward-item">
                                            <img width={20} src={ethereum} alt=""/>  {showNum(rewardTotalETH)}
                                        </div>
                                        <div className="reward-item">
                                            <img width={20} src={FDTIcon} alt=""/> { showNum(rewardTotalFLM)}
                                        </div>
                                    </div>
                                </div>
                                <div className="in-line">
                                    <div className="info-item">
                                        <strong>Level1</strong>
                                        <span>{levelCountObj.level1Total}</span>
                                    </div>
                                    <div className="info-item">
                                        <strong>Level2</strong>
                                        <span>{levelCountObj.level2Total}</span>
                                    </div>
                                    <div className="info-item">
                                        <strong>Level3</strong>
                                        <span>{levelCountObj.level3Total}</span>
                                    </div>
                                    <div className="info-item">
                                        <strong>Level4</strong>
                                        <span>{levelCountObj.level4Total}</span>
                                    </div>
                                    <div className="info-item">
                                        <strong>Level5</strong>
                                        <span>{levelCountObj.level5Total}</span>
                                    </div>
                                </div>

                            </div>
                            <div className="fire-list-box team-list">

                                <div className="list-header">
                                    <div className="col">
                                        No.
                                    </div>

                                    <div className="col">
                                        Level
                                    </div>
                                    <div className="col">
                                        Address
                                    </div>
                                    <div className="col">
                                        ETH Income
                                    </div>
                                    <div className="col">
                                        FLM Income
                                    </div>
                                </div>
                                {
                                    myTeam.map((item, index) => (
                                        index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                        <div className="list-item row2-list-item" key={index}>
                                            <div className="col no">
                                                {index + 1}
                                            </div>
                                            <div className="col">
                                                {item.level}
                                            </div>
                                            <div className="col address">
                                                <a target="_blank" href={develop.ethScan  + "/address/" + item._user}> {item._user} </a>
                                            </div>
                                            <div className="col">
                                                {showNum(item.ethIncome, 6)}
                                            </div>
                                            <div className="col">
                                                {showNum(item.flmIncome, 3)}
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>

                        </div>

                        <div className="panel-container">
                            <div className="panel-title">
                                Team Donate Records
                            </div>
                            <div className="fire-list-box">
                                <div className="list-header flex-box2">
                                    <div className="col">
                                        No.
                                    </div>

                                    <div className="col">
                                        Level
                                    </div>
                                    <div className="col">
                                        Address
                                    </div>
                                    <div className="col">
                                        ETH
                                    </div>
                                    <div className="col">
                                        FLM
                                    </div>
                                </div>
                                {
                                    myTeamRecord.map((item, index) => (
                                        index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                        <div className="list-item row2-list-item" key={index}>
                                            <div className="col no">
                                                {index + 1}
                                            </div>
                                            <div className="col">
                                                {item.level}
                                            </div>
                                            <div className="col address">
                                                {item.addr}
                                            </div>
                                            <div className="col">
                                                {showNum(item.ethAmount / 10 ** ETHDecimals, 6)}
                                            </div>
                                            <div className="col">
                                                {showNum(item.flmAmount / 10 ** FLMDecimals, 3)}
                                            </div>
                                        </div>
                                    ))
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
            )}


            {activeNav == 3 && (
                <div className="panel-box">
                    <div className="panel-container">
                        <div className="panel-title">
                            Active Accounts
                        </div>
                        <div className="fire-list-box admin3-list">
                            <div className="active-list-row list-header">
                                <div className="col">
                                    No.
                                </div>


                                <div className="col address">
                                    Address
                                </div>


                            </div>

                            {
                                activeArr.map((item, index) => (
                                    <div className="list-item active-list-row" key={index}>
                                        <div className="col no">
                                            {index + 1}
                                        </div>

                                        <div className="col address">
                                            {item}
                                        </div>

                                    </div>)
                                )
                            }

                        </div>
                    </div>
                </div>
            )

            }
        </OGPoolStyle>
    )
}
export default OGPoolPublic
