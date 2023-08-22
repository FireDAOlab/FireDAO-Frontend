import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import BigNumber from "bignumber.js"
import {showNum} from "../../../utils/bigNumberUtil";
import ethereum from "../../../imgs/ethereum.svg";
import FDTIcon from "../../../imgs/FDT-icon.png";
import USDTIcon from "../../../imgs/usdt.png";
import {formatAddress} from "../../../utils/publicJs";
import ConnectWallet from "../../../component/ConnectWallet/ConnectWallet";
import user3 from "../../../imgs/user3.png"
import download from "../../../imgs/download.png"
import manage from "../../../imgs/svg/manage.svg"
import {zeroAddress} from "viem";
import {ETHPriceDecimals} from "../../../config/constants";
import {
    Button,
    message,
    AutoComplete,
    Select,
    Form,
    Pagination, Input, Modal
} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"

import listIcon from "../../../imgs/list-icon.webp";
import develop from "../../../env";
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import {getDonateRecord, getAllRegisters, getRecommender, getAddressFromId} from "../../../graph/donate";
import OGPoolStyle from "./OGPoolStyle";
import {ETHDecimals, FDTDecimals, USDTDecimals, FLMDecimals, ZeroAddress} from "../../../config/constants";
import search from "../../../imgs/search.png";
import {dealTime} from "../../../utils/timeUtil";

const OGPoolPublic = (props) => {
    let {state, dispatch} = useConnect();
    const [activeNav, setActiveNav] = useState(1)
    const [total, setTotal] = useState(0)
    const [myRecommender, setMyRecommender] = useState()
    const [myId, setMyId] = useState()
    const [recordNav, setRecordNav] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [curPage, setCurPage] = useState(1)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [totalDonate, setTotalDonate] = useState(0)
    const [exchangeAmount, setExchangeAmount] = useState(0)
    const [inputValue, setInputValue] = useState(0)
    const [curAddress, setCurAddress] = useState()

    const [isSecondAdmin, setIsSecondAdmin] = useState(false)
    const [isThreeAdmin, setIsThreeAdmin] = useState(false)
    const [isFourAdmin, setIsFourAdmin] = useState(false)
    const [fdtBalance, setFdtBalance] = useState(0)

    const [activeUsedAmount, setActiveUsedAmount] = useState(0)
    const [activateAccountUsedAmount, setActivateAccountUsedAmount] = useState(0)
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
    const [ethPrice, setETHPrice] = useState()
    const [userBuyMax, setUserBuyMax] = useState(0)
    const [userTotalBuy, setUserTotalBuy] = useState(0)
    const [searchData, setSearchData] = useState()

    const history = useNavigate();
    const [form] = Form.useForm();


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

    const handleSearchChange = async (e) => {
        setSearchData(e.target.value);
    }
    const handleSearch = async () => {
        const res = await getAddressFromId(searchData)
        if (searchData == undefined) {
            const hide = message.loading('', 0);
            await getMyTeam(state.account)
            setTimeout(hide, 1000)
            setCurAddress(state.account)
            getAddressRecommender(state.account)
        }
        if (res.data && res.data.allRegisters[0]) {
            if (state.api.utils.isAddress(res.data.allRegisters[0]._user)) {
                const address = res.data.allRegisters[0]._user
                setCurAddress(address)
                getAddressRecommender(address)
                const hide = message.loading('', 0);
                await getMyTeam(address)
                setTimeout(hide, 1000)
            }

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
    const getETHPrice = async () => {
        let price = await handleViewMethod("getLatesPrice", [])
        setETHPrice(BigNumber(price).dividedBy(10 ** ETHPriceDecimals))
    }
    const exchangeFdt = async () => {
        if (inputValue > 0) {
            await handlePayDealMethod("donate", [(BigNumber(inputValue).multipliedBy(10 ** ETHDecimals)).toString()], (BigNumber(inputValue).multipliedBy(10 ** ETHDecimals)).toString())
            getData()
        }
    }
    const handleRegister = async () => {
        let refAddr = ""
        if(myStatus.activeStatus && myRecommender){
            refAddr=  zeroAddress
        }else{
            if (!state.api.utils.isAddress(form.getFieldValue().referralCode)) {
                return
            }
            refAddr = form.getFieldValue().referralCode
        }

        await handleDealMethod("register", [refAddr.toString()])
        getMyStatus()
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
            getETHPrice()
            getUserBuyMax()

            await getInviteRate()
            await getAddressRecommender(state.account)

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
    const getMyInviteCount = async (address) => {
        if(!address){
            address = myRecommender
        }
        const used = await handleViewMethod("activeUsedAmount", [address])
        const total = await handleViewMethod("activateAccountUsedAmount", [])

        setActiveUsedAmount(used)
        setActivateAccountUsedAmount(total)
    }
    const getAddressRecommender = async (address) => {
        const res = await getRecommender(address)
        if (res && res.data && res.data.allRegisters[0]) {
            setMyRecommender(res.data.allRegisters[0].recommenders)
            setMyId(res.data.allRegisters[0].Contract_id)

            getMyInviteCount(res.data.allRegisters[0].recommenders)

        }
    }
    const getUserBuyMax = async () => {
        const res = await handleViewMethod("userBuyMax", [])
        const buyNum = await handleViewMethod("userTotalBuy", [state.account])
        setUserTotalBuy(BigNumber(buyNum).dividedBy(10 ** ETHDecimals).toString())
        setUserBuyMax(BigNumber(res).dividedBy(10 ** ETHDecimals).toString())
    }
    const getMyTeam = async (address) => {
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
                total: 0
            }
            // count my team level number
            for (let i = 0; i < myTeamArr.length; i++) {
                const item = myTeamArr[i]
                levelRewardObj.total++
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
                        item.flmIncome = BigNumber(record.fdtAmount).multipliedBy(inviteRateArr[item.level - 1]).dividedBy(100).dividedBy(10 ** FLMDecimals).toString()
                        totalETH = BigNumber(totalETH).plus(item.ethIncome)
                        totalFLM = BigNumber(totalFLM).plus(item.flmIncome)

                        record.level = item.level
                        record.rate = inviteRateArr[item.level - 1]
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
        setCurAddress(state.account)
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
                    {myStatus.activeStatus && myRecommender &&<>
                    {myRecommender}
                    </>}
                    {!(myStatus.activeStatus && myRecommender) && <div>
                        <Form.Item
                            name="referralCode"
                            validateTrigger="onBlur"
                            validateFirst={true}
                        >
                            <div className="input-box">

                                <Input/>
                            </div>
                        </Form.Item>
                    </div>}


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

                    {(isSecondAdmin | isThreeAdmin || isFourAdmin) &&

                        <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                            history("/OGUserAdmin")
                        }}>
                            Lv{isSecondAdmin?2:""}{isThreeAdmin?3:""}{isFourAdmin?4:""} Admin
                        </div>

                    }

                </div>

            </div>
            {activeNav == 1 && (
                <div className="part1">
                    <div className="panel-box">
                        <div className="panel-container">

                            <div className="status-info">
                                <div className="left flex-box">
                                    <div className="info-item">
                                        {!myStatus.registerStatus && <Button >Unregistered</Button>}
                                        {myStatus.registerStatus && <Button>Registered</Button>}
                                    </div>
                                    <div className="info-item">

                                        {!myStatus.activeStatus && <Button>Inactivated</Button>}
                                        {myStatus.activeStatus && <Button>Activated</Button>}
                                    </div>
                                </div>
                                {myId &&
                                    <div>
                                        <div className="info-item">
                                            {!myStatus.registerStatus && <Button onClick={() => {
                                                setIsShowRegister(true)
                                            }}>Sign Up</Button>}
                                        </div>
                                        {myStatus.registerStatus && <div className="my-id pid">
                                            ID: {myId}
                                        </div>}

                                    </div>

                                }

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
                                            Price
                                        </div>
                                        <div className="value">
                                             ${salePrice}
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="name">
                                            FDT-OG Value
                                        </div>
                                        <div className="value">
                                            ${showNum(BigNumber(FDTBalance).multipliedBy(salePrice))}
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

                                            <strong>Value: ${showNum(ethPrice * inputValue)} </strong>

                                            <div className="name">
                                                Balance:
                                            </div>
                                            <div className="value">
                                                <span style={{marginRight: '6px'}}>
                                                     {showNum(state.ethBalance)}
                                                </span>
                                                <span>ETH</span>
                                            </div>
                                        </div>
                                        <Form.Item
                                            name="amount"
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                        >
                                            <div className="input-box">
                                                <Select
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
                                            <strong className="" >
                                                Your receive
                                            </strong>
                                            <div className="balance-box ">
                                                <div className="name">
                                                    Balance:
                                                </div>
                                                <div className="value">
                                                    <span style={{marginRight: '6px'}}>{showNum(fdtBalance)}</span>
                                                    <span> FDT-OG</span>
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
                                        I have already donated {showNum(userTotalBuy)} ETH, I can donate up
                                        to {showNum(userBuyMax)} ETH, I can continue
                                        donating {showNum(BigNumber(userBuyMax).minus(userTotalBuy))} ETH.
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
                                    {curAddress}
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
                                <div className="panel-title flex-title">
                                    Team Income
                                    <div className="right flex-box">
                                        <div className="reward-item">
                                            <img width={20} src={ethereum} alt=""/> {showNum(rewardTotalETH)}
                                        </div>
                                        <div className="reward-item">
                                            <img width={20} src={FDTIcon} alt=""/> {showNum(rewardTotalFLM)}
                                        </div>
                                    </div>
                                </div>
                                <div className="in-line" style={{justifyContent: "space-between"}}>
                                    <div className="in-line">

                                        <div className="info-item">
                                            <strong>Total</strong>
                                            <span>{levelCountObj.total}</span>
                                        </div>
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
                                    <form className="search-box">
                                        <Input style={{borderRadius: '50px'}} allowClear value={searchData}
                                               onChange={handleSearchChange} placeholder="ID"/>
                                        <Button className="search-btn"
                                                style={{width: '45px', borderRadius: '45px', height: '40px'}}
                                                onClick={handleSearch} type="primary">
                                            <img src={search} style={{width: '25px', margin: '0px -10px'}}/>
                                        </Button>
                                    </form>
                                </div>
                            </div>
                            <div className="fire-list-box team-list">

                                <div className="list-header">
                                    <div className="col">
                                        Level
                                    </div>
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        ID
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
                                        <div className="list-item " key={index}>
                                            <div className="col">
                                                {item.level}
                                            </div>
                                            <div className="col no">
                                                {index + 1}
                                            </div>
                                            <div className="col id" style={{cursor:"pointer"}} onClick={()=>{setSearchData(item.Contract_id);handleSearch()}}>
                                                {(item.Contract_id||item.Contract_id==0) ?item.Contract_id:"--"}
                                            </div>
                                            <div className="col ">
                                                <div className="address">
                                                    <a target="_blank"
                                                       href={develop.ethScan + "/address/" + item._user}> {formatAddress(item._user)} </a>
                                                </div>

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
                            <div className="fire-list-box donate-list">
                                <div className="list-header ">
                                    <div className="col">
                                        No.
                                    </div>

                                    <div className="col">
                                        Level
                                    </div>
                                    <div className="col">
                                        Divide<br/> Percentage
                                    </div>
                                    <div className="col">
                                        Address
                                    </div>
                                    <div className="col">
                                        ETH
                                    </div>
                                    <div className="col">
                                        FDT-OG
                                    </div>

                                    <div className="col">
                                        Price
                                    </div>
                                    <div className="col">
                                        Cost
                                    </div>
                                    <div className="col">
                                        Rewards
                                    </div>
                                    <div className="col">
                                        Time
                                    </div>
                                </div>
                                {
                                    myTeamRecord.map((item, index) => (
                                        index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                        <div className="list-item" key={index}>
                                            <div className="col no">
                                                {index + 1}
                                            </div>
                                            <div className="col">
                                                {item.level}
                                            </div>
                                            <div className="col">
                                                {item.rate}%
                                            </div>
                                            <div className="col ">
                                                <div className="address">
                                                    <a target="_blank"
                                                       href={develop.ethScan + "/address/" + item.addr}> {formatAddress(item.addr)} </a>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <img width={20} height={20} style={{marginRight:"3px"}} src={ethereum} alt=""/>
                                                {showNum(item.ethAmount / 10 ** ETHDecimals, 3)}
                                            </div>
                                            <div className="col">
                                                <img width={20} height={20}  style={{marginRight:"3px"}} src={FDTIcon} alt=""/>
                                                {showNum(item.fdtAmount / 10 ** FDTDecimals, 1)}
                                            </div>
                                            <div className="col price">
                                                <img width={20} height={20}  style={{marginRight:"3px"}} src={USDTIcon} alt=""/>
                                                {showNum(0.01)}
                                            </div>
                                            <div className="col cost">
                                                <img width={20} height={20}  style={{marginRight:"3px"}} src={USDTIcon} alt=""/>
                                                {showNum(item.usdtAmount / 10 ** USDTDecimals, 3)}
                                            </div>
                                            <div className="col flex-box ">
                                                <div className="item">
                                                    <img width={20} height={20}  style={{marginRight:"3px"}} src={ethereum} alt=""/>
                                                    {showNum(BigNumber(item.ethAmount/ 10 ** ETHDecimals).multipliedBy(item.rate / 100)  , 3)}
                                                </div>
                                                <div className="item" style={{marginLeft:"10px"}}>
                                                    <img width={20} height={20}  style={{marginRight:"3px"}} src={FDTIcon} alt=""/>
                                                    {showNum(BigNumber(item.fdtAmount/ 10 ** FLMDecimals).multipliedBy(item.rate / 100)  , 1)}
                                                </div>
                                            </div>
                                            <div className="col">
                                                {item.time}
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
                        <div className="active-content-box">
                            <div className="flex-box" style={{justifyContent:"space-between"}}>
                                <div className="address" style={{width:"auto"}}>
                                    {state.account}
                                </div>
                                <div className="my-id pid">
                                    ID: {myId}
                                </div>
                            </div>
                            <div className="flex-box">
                                <div className="name" style={{marginRight:"10px"}}>
                                    Referral  Code
                                </div>
                                <div className="value">
                                    {myRecommender}
                                </div>
                            </div>
                            <div className="flex-box content-list">
                                <div className="content-item">
                                    <div className="name">
                                        Total times
                                    </div>
                                    <div className="value">
                                        {activateAccountUsedAmount}
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="name">
                                        Used times
                                    </div>
                                    <div className="value">
                                        {activeUsedAmount}
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="name">
                                        Available  times
                                    </div>
                                    <div className="value">
                                        {BigNumber(activateAccountUsedAmount).minus(activeUsedAmount).toString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fire-list-box admin3-list">
                            <div className="active-list-row list-header">
                                <div className="col">
                                    No.
                                </div>


                                <div className="col ">
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
