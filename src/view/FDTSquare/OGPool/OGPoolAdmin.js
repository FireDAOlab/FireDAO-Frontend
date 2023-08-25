import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {
    Table,
    Button,
    message,
    Form,
    Input,
    Switch, Pagination, Modal
} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"
import develop from "../../../env";
import judgeStatus from "../../../utils/judgeStatus";
import OGPoolAdminStyle from "./OGPoolAdminStyle";
import AddAddressRate from "./AddAddressRate.js";
import {showNum} from "../../../utils/bigNumberUtil";
import del from "../../../imgs/sc.png";
import eth from "../../../imgs/ethereum.svg";
import {getDonateRecord, getSecondDonateRecord, getThreeDonateRecord} from "../../../graph/donate";
import BigNumber from "bignumber.js";
import addressMap from "../../../api/addressMap";
import {FDTDecimals, ETHDecimals, USDTDecimals} from "../../../config/constants";
import {formatAddress} from "../../../utils/publicJs";
import listIcon from "../../../imgs/list-icon.webp";
import TeamIncome from "../OGPoolV5/components/TeamIncome";

const OgPoolAdmin = (props) => {

    const [form2] = Form.useForm();
    let {state, dispatch} = useConnect();
    const [searchData, setSearchData] = useState("")
    const [activeNav, setActiveNav] = useState(1)
    const [recordNav, setRecordNav] = useState(1)
    const [form] = Form.useForm();
    const [secondAdmins, setSecondAdmin] = useState([])
    const [assignAmin, setAssignAdmin] = useState([])
    const [total, setTotal] = useState(0)
    const [allRecords, setAllRecords] = useState([])


    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [exchangeRate, setExchangeRate] = useState(0.001)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [FLMBalance, setFLMBalance] = useState(0)
    const [totalDonate, setTotalDonate] = useState(0)
    const [salePriceV, setSalePriceV] = useState(0)
    const [maxThreeAdmin, setMaxThreeAdmin] = useState(0)
    const [maxFourAdmin, setMaxFourAdmin] = useState(0)
    const [maxTwoAdmin, setMaxTwoAdmin] = useState(0)


    const [withdrawCoinAddr, setWithdrawCoinAddr] = useState()
    const [sumArr, setSumArr] = useState([])
    const [inputValue, setInputValue] = useState(0)
    const [showAddRate, setShowAddRate] = useState(false)
    const [receiveRemainingInvitationRewards, setReceiveRemainingInvitationRewards] = useState()
    const [receiveRemainingTeamRewards, setReceiveRemainingTeamRewards] = useState()
    const [whiteList, setAllWhiteList] = useState([])
    const [status1, setStatus1] = useState()
    const [status2, setStatus2] = useState()
    const [fdtAddr, setFDTAddressValue] = useState()
    const [flmAddr, setFLMAddressValue] = useState()

    const [isPause, setIsPause] = useState()
    const [ownerAddress, setOwnerAddress] = useState("")
    const [curAddr, setCurAddr] = useState("")
    const [curDelLev2Addr, setCurDelLev2Addr] = useState("")
    const [isShowDelLev2, setShowDelLev2] = useState(false)
    const [curId, setCurId] = useState("")
    const [coinInfo, setCoinInfo] = useState({})

    const [totalInviteRate, setTotalInviteRate] = useState(0)
    const [inviteRateArr, setInvArr] = useState([])

    const [totalTeamRate, setTotalTeamRate] = useState(0)
    const [teamRateArr, setTeamRateArr] = useState([])

    const [totalOtherRate, setTotalOtherRate] = useState(0)

    const [adminFlmRewardMap, setAdminFlmReward] = useState([])

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        if (isPause) {
            handleUnpause()
        } else {
            handlePause()
        }
    };
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleCoinViewMethod = async (name, coinName, params) => {
        let contractTemp = await getContractByName(coinName, state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDACCOUNTViewMethod = async (name, account, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }


    const getSummary = async () => {
        const secondAdmin = await getSecondAdmins()
        let sumArr = []
        for (let i = 0; i < secondAdmin.length; i++) {
            const addr = secondAdmin[i]
            const thrArr = await getAdminWhiteList(addr)
            sumArr.push({
                addr,
                tAmount: 0,
                tETH: 0,
                tUSDT: 0,
                thrArr: thrArr
            })
        }

        //sum
        for (let i = 0; i < sumArr.length; i++) {
            let admin = sumArr[i];
            admin.tAmount = 0
            admin.tETH = 0
            admin.tUSDT = 0
            for (let j = 0; j < sumArr[i].thrArr.length; j++) {
                let adminThree = admin.thrArr[j];
                if (parseFloat(adminThree.user.fdtAmount) > 0) {
                    admin.tAmount = parseFloat(admin.tAmount) + parseFloat(adminThree.user.fdtAmount / 10 ** 18)
                    admin.tETH = parseFloat(admin.tETH) + parseFloat(adminThree.user.ethAmount / 10 ** 18)
                    admin.tUSDT = parseFloat(admin.tUSDT) + parseFloat(adminThree.user.usdtAmount / 10 ** 18)
                }
                for (let q = 0; q < adminThree.whitelist.length; q++) {
                    const user = adminThree.whitelist[q]
                    if (parseFloat(user.fdtAmount) > 0) {
                        admin.tAmount = parseFloat(admin.tAmount) + parseFloat(user.fdtAmount)
                        admin.tETH = parseFloat(admin.tETH) + parseFloat(user.ethAmount)
                        admin.tUSDT = parseFloat(admin.tUSDT) + parseFloat(user.usdtAmount)
                    }
                }
            }
        }
        setSumArr(sumArr)
    }
    const getWhitelist = async (addr) => {
        let res = await getThreeDonateRecord(addr)
        if (res && res.data) {
            return res.data.allRecords

        }
        return []
    }

    const getAdminWhiteList = async (addr) => {
        let res = await getSecondDonateRecord(addr)
        let adminWhiteList = []
        for (let i = 0; i < res.data.allRecords.length; i++) {
            const item = res.data.allRecords[i]
            const whitelist = await getWhitelist(item.addr)
            adminWhiteList.push({
                user: item,
                whitelist
            })
        }
        return adminWhiteList

    }

    const getBalanceOfFDT = async () => {
        let balance = await handleViewMethod("getBalanceOfFDTOG", [])
        balance = parseInt(parseInt(balance) / 10 ** 18)
        if (balance > 0) {
            setFDTBalance(balance)
        }
    }
    const getOwner = async () => {
        let res = await handleViewMethod("owner", [])
        setOwnerAddress(res)
    }
    const getTotalDonate = async () => {
        let res = await handleViewMethod("totalDonate", [])
        setTotalDonate(BigNumber(res).dividedBy(10 ** FDTDecimals).toString())
    }
    const getSalePrice = async () => {
        let res = await handleViewMethod("salePrice", [])
        setSalePriceV(BigNumber(res).dividedBy(1000).toString())
    }
    const getMaxThree = async () => {
        let res = await handleViewMethod("maxThree", [])
        setMaxThreeAdmin(res)
    }
    const getMaxThreeAdmin = async () => {
        let res = await handleViewMethod("maxThree", [])
        setMaxThreeAdmin(res)
    }
    const getMaxTwoAdmin = async () => {
        let res = await handleViewMethod("maxTwo", [])
        setMaxTwoAdmin(res)
    }
    const getMaxFourAdmin = async () => {
        let res = await handleViewMethod("maxFour", [])
        setMaxFourAdmin(res)
    }


    const getPause = async () => {
        let res = await handleViewMethod("paused", [])
        setIsPause(res)
    }
    const getpidStatusForAdmin = async () => {
        let res = await handleViewMethod("pidStatusForAdmin", [])
        setStatus1(res)
    }
    const getpidStatusForUser = async () => {
        let res = await handleViewMethod("pidStatusForUser", [])
        setStatus2(res)
    }
    //Invite Addr
    const getReceiveRemainingInvitationRewards = async () => {
        let res = await handleViewMethod("receiveRemainingInvitationRewards", [])
        setReceiveRemainingInvitationRewards(res)
    }
    const handleSetreceiveRemainingInvitationRewards = async () => {
        await handleDealMethod("setreceiveRemainingInvitationRewards", [form2.getFieldValue().receiveRemainingInvitationRewards])
        getReceiveRemainingInvitationRewards()
    }

    //Team Addr
    const getReceiveRemainingTeamRewards = async () => {
        let res = await handleViewMethod("receiveRemainingTeamRewards", [])
        setReceiveRemainingTeamRewards(res)
    }
    const handleSetReceiveRemainingTeamRewards = async () => {
        handleDealMethod("setReceiveRemainingTeamRewards", [form2.getFieldValue().receiveRemainingTeamRewards])
        getReceiveRemainingTeamRewards()
    }

    const getFDTAddress = async () => {
        let res = await handleViewMethod("fdtOg", [])
        setFDTAddressValue(res)
    }
    const getFLMAddress = async () => {
        let res = await handleViewMethod("flm", [])
        setFLMAddressValue(res)
    }
    const getSecondAdmins = async () => {
        const arr = await handleViewMethod("getAdminsLevelTwoList", [])
        setSecondAdmin(arr)
        return arr
    }
    const getFLMBalance = async () => {
        let res2 = await handleViewMethod("getBalanceOfFlm", [])
        setFLMBalance(BigNumber(res2).dividedBy(10 ** FDTDecimals).toString())
    }
    const getRate = async () => {
        let res = await handleViewMethod("salePrice", [])
        setExchangeRate(res / 1000)
    }
    const getInviteRate = async () => {
        // const rateLength = await handleViewMethod("getInviteRate", [])
        let tempArr = [], totalRate = 0
        for (let i = 0; i < 5; i++) {
            const inviteRate = await handleViewMethod("inviteRate", [i])
            tempArr.push({index: i + 1, inviteRate: inviteRate.toString()})
            totalRate = BigNumber(totalRate).plus(inviteRate)
        }
        setTotalInviteRate(totalRate.toString())
        setInvArr(tempArr)
    }

    const getTeamRate = async () => {
        let tempArr = [], totalRate = 0
        for (let i = 0; i < 3; i++) {
            const inviteRate = await handleViewMethod("teamRate", [i])
            tempArr.push({index: i + 2, inviteRate: inviteRate.toString()})
            totalRate = BigNumber(totalRate).plus(inviteRate)
        }
        setTotalTeamRate(totalRate.toString())
        setTeamRateArr(tempArr)
    }

    const getAssignAndRates = async () => {
        const length = await handleViewMethod("getAssignAndRateslength", [])
        let resArr = [], totalRate = 0
        for (let i = 0; i < length; i++) {
            const res = await handleViewMethod("assignAndRates", [i])
            resArr.push(res)
            totalRate = BigNumber(totalRate).plus(res.rate)
        }
        setTotalOtherRate(totalRate.toString())
        setAssignAdmin(resArr)
    }
    const getAdminFlmReward = async () => {
        const rate1 = await handleViewMethod("adminFlmReward", [0])
        const rate2 = await handleViewMethod("adminFlmReward", [1])
        const rate3 = await handleViewMethod("adminFlmReward", [2])
        setAdminFlmReward([{
            name: "Level 4 Admin",
            rate: rate1.toLocaleString()
        }, {
            name: "Level 3 Admin",
            rate: rate2.toLocaleString()
        }, {
            name: "Level 2 Admin",
            rate: rate3.toLocaleString()
        }])
    }
    const addInviteRate = async () => {
        const tempArr = [form2.getFieldValue().inviteRate0, form2.getFieldValue().inviteRate1,
            form2.getFieldValue().inviteRate2, form2.getFieldValue().inviteRate3, form2.getFieldValue().inviteRate4]
        await handleDealMethod("addInviteRate", [tempArr])
        getInviteRate()
    }
    const setTeamRate = async () => {
        await handleDealMethod("setTeamRate", [form.getFieldValue().level - 1, form.getFieldValue().rate])
        getTeamRate()
    }

    const setPidStatusForAdmin = async () => {
        await handleDealMethod("setPidStatusForAdmin", [])
        getpidStatusForAdmin()
    }
    const setFDTAddress = async () => {
        await handleDealMethod("setFDTAddress", [form.getFieldValue().fdtAddress])
        getFDTAddress()
    }
    const setFlmAddress = async () => {
        await handleDealMethod("setFlmAddress", [form.getFieldValue().fdtAddress])
        getFLMAddress()
    }
    const setPidStatusForUser = async () => {
        await handleDealMethod("setPidStatusForUser", [])
        getpidStatusForUser()
    }

    const setRateAndAddress = async () => {
        await handleDealMethod("setAssignAddressAndRatio", [curId, curAddr, form2.getFieldValue().assignRate])
        getAssignAndRates()
    }

    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().address])
        getOwner()
    }

    const handlePause = async () => {
        await handleDealMethod("pause", [])
        getPause()
    }
    const handleUnpause = async () => {
        await handleDealMethod("unpause", [])
        getPause()
    }

    const setInviteRate = async () => {
        await handleDealMethod("setInviteRate", [form.getFieldValue().inviteRateID - 1, form.getFieldValue().inviteRate])
        getInviteRate()
    }
    const setAdmins = async () => {
        await handleDealMethod("setAdminLevelTwo", [[form.getFieldValue().adminaddress]])
        getSecondAdmins()
    }
    const removeAdmin = async () => {
        await handleDealMethod("removeAdminLevelTwo", [form.getFieldValue().adminaddress])
        getSecondAdmins()
    }
    const deleteLevel2Admin = async () => {
        await handleDealMethod("removeAdminLevelTwo", [curDelLev2Addr])
        getSecondAdmins()
    }


    const setAdminLevelThreeMax = async () => {
        await handleDealMethod("setAdminForThree", [(form2.getFieldValue().maxThree)])
        getMaxThreeAdmin()
    }
    const setAdminLevelTwoMax = async () => {
        await handleDealMethod("setAdminForTwo", [(form2.getFieldValue().maxThree)])
        getMaxTwoAdmin()
    }
    const setAdminLevelFourMax = async () => {
        await handleDealMethod("setAdminForFour", [(form2.getFieldValue().maxThree)])
        getMaxFourAdmin()
    }
    const withdraw = async () => {
        await handleDealMethod("Claim", [fdtAddr, state.api.utils.toWei(form2.getFieldValue().withdrawNum)])
        this.getData()
    }
    const claim = async () => {
        await handleDealMethod("Claim", [form2.getFieldValue().tokenAddress, state.api.utils.toWei(form2.getFieldValue().tokenNumber)])
    }
    const setSalePrice = async () => {
        if ((form2.getFieldValue().exchangeRate) * 1000 < 1) {
            message.warn("请输入 0到0.001")
            return
        }
        await handleDealMethod("setSalePrice", [(form2.getFieldValue().exchangeRate) * 1000])
        getRate()
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
                }

            }
        } catch (e) {
            console.log(e)
        }
    }
    const getData = async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getRate()

        getTotalDonate()
        getBalanceOfFDT()
        getFLMBalance()
        // getShowWhiteList()
        getOwner()
        getSecondAdmins()
        getSalePrice()
        getMaxThreeAdmin()
        getMaxTwoAdmin()
        getMaxFourAdmin()
        getPause()
        getpidStatusForAdmin()
        getpidStatusForAdmin()
        getFDTAddress()
        getFLMAddress()
        getpidStatusForUser()
        getReceiveRemainingInvitationRewards()
        getReceiveRemainingTeamRewards()
        getRecord()
        getInviteRate()
        getTeamRate()
        getAssignAndRates()
        getAdminFlmReward()
        // getSummary()

    }
    const chooseRow = (item, id) => {
        setCurAddr(item.assign)
        setCurId(id)
    }
    const onChangePage = async (page) => {
        getData(page)
        await setCurPage(page)
    }
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const delARRow = async (item) => {
        await handleDealMethod("removeAssiginAddressAndRatio", [[item.assign]])
    }
    const getCoinInfo = async (coinAddr) => {
        if (!state.api.utils.isAddress(coinAddr)) {
            return
        }
        let contractTemp = await getContractByContract("erc20", coinAddr, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [addressMap["FLMAirdrop"].address])
        let name = await viewMethod(contractTemp, state.account, "name", [])
        let symbol = await viewMethod(contractTemp, state.account, "symbol", [])
        balance = balance / (10 ** parseInt(decimal))
        setCoinInfo({
            balance,
            symbol,
            decimal
        })

    }
    const withdrawToken = async (item) => {
        await handleDealMethod("Claim", [form.getFieldValue().withdrawCoinAddr, form.getFieldValue().withdrawAmount])
    }
    useEffect(() => {
        getData()
    }, [state.account]);
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
        return <div className="list-item " key={index}>
            <div className="col no">
                {index + 1}
            </div>
            <div className="col pid">
                {item.Pid}
            </div>
            <div className="col ">
                {item.name}
            </div>
            <div className="col address">
                {item.user &&
                    <a href={develop.ethScan + "address/" + item.user} target="_blank">
                        {item.user.substr(0, 6) + "..." + item.user.substr(item.user.length - 3, item.user.length)}
                    </a>
                }

            </div>
            <div className="col">

            </div>
            <div className="col">
                $
            </div>
            <div className="col ">
                $
            </div>
            <div className="col">

            </div>
            <div className="col ">

            </div>

        </div>
    }
    const inviteColumns = [
        {
            title: 'Level',
            dataIndex: 'index',
            key: 'index',
        },

        {
            title: 'InviteRate',
            dataIndex: 'inviteRate',
            key: 'inviteRate',
            render: (text) => <span>{text}%</span>,
        },
    ]
    const teamColumns = [
        {
            title: 'Level',
            dataIndex: 'index',
            key: 'index',
        },

        {
            title: 'InviteRate',
            dataIndex: 'inviteRate',
            key: 'inviteRate',
            render: (text) => <span>{text}%</span>,
        },
    ]
    const flmColumns = [
        {
            title: 'Category',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Percentage',
            dataIndex: 'rate',
            key: 'rate',
            render: (rate) => <span>{rate}%</span>,
        },
    ]

    return (
        <OGPoolAdminStyle>
            <Modal className="model-dialog" title="Delete  Level 2 Admin" open={isShowDelLev2} onOk={deleteLevel2Admin}
                   onCancel={() => {
                       setShowDelLev2(false)
                   }}>
                <h3>
                    Wallet Address
                </h3>
                <div className="value">
                    {curDelLev2Addr}
                </div>


            </Modal>
            <div className="page-title">
                OG Pool
            </div>
            <div className="header-nav">
                <div className="fire-nav-list">
                    <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                        setActiveNav(1)
                    }}>
                        Important Operation
                    </div>
                    <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                        setActiveNav(2)
                    }}>
                        OG Contract
                        Parameters
                    </div>
                    <div className={"nav-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                        setActiveNav(3)
                    }}>
                        OG Donate Pool
                    </div>
                    <div className={"nav-item " + (activeNav == 5 ? "active" : "")} onClick={() => {
                        setActiveNav(5)
                    }}>
                        Rewards And Allocation
                    </div>
                    <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                        setActiveNav(4)
                    }}>
                        Team Income
                    </div>
                </div>
            </div>
            {activeNav == 1 && (
                <div className="part1">
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title1">
                                OG Pool Address
                            </div>
                            <div className="val">
                                {addressMap["PrivateExchangePoolOG"].address}
                            </div>
                            <div className="panel-title1">
                                Transfer Administrator
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Form.Item
                                    label="Administrator Address"
                                >
                                    {ownerAddress}
                                </Form.Item>
                                <Form.Item
                                    name="address"
                                    label="New Administrator"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="go-btn" onClick={() => {
                                    transferOwnership()
                                }}>
                                    Confirm
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title1">
                                Contract Status : {isPause ? "Stop" : "Running"}
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <div className='switchh'>
                                    <p><span>Running</span><Switch checked={!isPause} onChange={onChange}/></p>
                                    <p><span>Pause</span><Switch checked={isPause} onChange={onChange}/></p>
                                </div>
                                {/*<Button type="primary" onClick={handlePause}>Pause</Button>*/}
                                {/*<Button type="primary" onClick={handleUnpause}>Unpause</Button>*/}
                            </Form>
                            <div className="info tip-box">
                                This function is related to the running status of the contract, please use it with
                                caution.
                            </div>
                        </div>

                    </div>
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                Set Pid Status For Admin: {status1 ? "True" : "False"}
                            </div>
                            <div className="flex-box">
                                <div className="current-status">
                                    Set to {status1 ? "False" : "True"}
                                </div>
                                <Form form={form} name="control-hooks" className="form">
                                    <Button type="primary" onClick={setPidStatusForAdmin}>Submit</Button>
                                </Form>
                            </div>

                            <div className="panel-title">
                                Set Pid Status For User: {status2 ? "True" : "False"}
                            </div>
                            <div className="flex-box">
                                <div className="current-status">
                                    Set to {status2 ? "False" : "True"}
                                </div>
                                <Form form={form} name="control-hooks" className="form">
                                    <Button type="primary" onClick={setPidStatusForUser}>Submit</Button>
                                </Form>
                            </div>
                        </div>

                        <div className="panel-container">
                            <div className="panel-title">
                                Set Donate Token Address: {fdtAddr}
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Form.Item
                                    name="fdtAddress"
                                    label="Donate Token Address"
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <Button type="primary" onClick={setFDTAddress}>Submit</Button>
                            </Form>
                        </div>
                        <div className="panel-container">
                            <div className="panel-title">
                                Set Reward Token Address: {flmAddr}
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Form.Item
                                    name="fdtAddress"
                                    label="Reward Token Address"
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <Button type="primary" onClick={setFlmAddress}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
            {activeNav == 2 && (
                <div>
                    <div className="panel-box">
                        <div className="panel-container ">
                            <div className="panel-title">
                                Set Level 2 Administrator
                            </div>
                            <div className="fire-list-box">
                                <div className="list-header flex-box">
                                    <div className="col">
                                        No.
                                    </div>

                                    <div className="col">
                                        Wallet Address
                                    </div>
                                    <div className="col">
                                        Delete
                                    </div>
                                </div>
                                {
                                    secondAdmins.map((item, index) => (
                                        <div className='list-item '>
                                            <div className="col no" key={index}>
                                                {index + 1}
                                            </div>
                                            <div className="col pid">

                                            </div>
                                            <div className="col">

                                            </div>
                                            <div className="col address">
                                                {item}
                                            </div>
                                            <div className="col del">
                                                <img className="icon" onClick={() => {
                                                    setShowDelLev2(item);
                                                    setCurDelLev2Addr(item)
                                                }} src={del}/>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>


                            <Form form={form} name="control-hooks" className="form">
                                <Form.Item
                                    name="adminaddress"
                                    validateTrigger="onBlur"
                                    label="Address"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                            </Form>
                            <div className="btns" style={{textAlign: 'center', marginTop: '1.7em'}}>
                                <Button className="add-btn" type="primary" onClick={() => {
                                    setAdmins()
                                }}>addAdmins</Button>
                                <Button className="add-btn" type="primary" onClick={() => {
                                    removeAdmin()
                                }}>removeAdmin</Button>
                            </div>
                        </div>

                        <div className="panel-container">
                            <div className="panel-title">
                                Set Level4 admin Amount: ( {maxFourAdmin} )
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <Form.Item
                                    name="maxThree"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setAdminLevelFourMax()
                                    }}>Submit</Button>
                                </div>
                            </Form>
                            <div className="panel-title">
                                Set Level3 admin Amount: ( {maxThreeAdmin} )
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <Form.Item
                                    name="maxThree"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setAdminLevelThreeMax()
                                    }}>Submit</Button>
                                </div>
                            </Form>

                            <div className="panel-title">
                                Set Level2 admin Amount: ( {maxTwoAdmin} )
                            </div>
                            <Form form={form2} name="control-hooks" className="form">

                                <Form.Item
                                    name="max"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setAdminLevelTwoMax()
                                    }}>Submit</Button>
                                </div>
                            </Form>
                            <div className="panel-title">
                                Set Donate Price : ( {salePriceV} )
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <div className="flex-box">
                                    <Form.Item
                                        name="exchangeRate"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            <Input/>
                                        </div>
                                    </Form.Item>

                                    <div className="btns">
                                        <Button className="add-btn" type="primary" onClick={() => {
                                            setSalePrice()
                                        }}>Submit</Button>
                                    </div>
                                </div>
                            </Form>

                        </div>


                    </div>
                </div>
            )}
            {
                activeNav == 3 && (
                    <div className="part3">
                        <div className="panel-box">
                            <div className="panel-container">
                                <div className="panel-title">
                                    OG Round 1
                                </div>
                                <div className="donate-info">
                                    <div className="info-item">
                                        <div className="name">
                                            FDT-OG Donate Pool Amount
                                        </div>
                                        <div className="value">
                                            {FDTBalance}
                                        </div>
                                    </div>
                                    <div className="flex-box1">
                                        <div className="info-item">
                                            <div className="name">
                                                Value
                                            </div>
                                            <div className="value">
                                                ${showNum(BigNumber(FDTBalance).multipliedBy(salePriceV))}
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="name">
                                                Total Donate
                                            </div>

                                            <div className="value">
                                                <p><img src={eth} style={{marginTop: '-5px', marginRight: '10px'}}/>
                                                    {totalDonate} ETH</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className='donate-info '>
                                    <div className="info-item ">
                                        <div className="name">
                                            Donate Rate
                                        </div>
                                        <div className="value">
                                            1 FDT-OG = {exchangeRate} USD
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="name">
                                            FLM Pool Amount
                                        </div>
                                        <div className="value">
                                            {showNum(FLMBalance)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-container">
                                <div className="content-item">
                                    <h2>Token Withdraw</h2>

                                    <Form form={form} name="control-hooks">
                                        <div className="current">
                                            <div className="name">
                                                Pool {coinInfo.name} Balance:
                                            </div>
                                            <div className="value">
                                                {showNum(coinInfo.balance)}
                                            </div>
                                        </div>
                                        <div className="current">
                                            <div className="name">
                                                Symbol
                                            </div>
                                            <div className="value">
                                                {coinInfo.symbol}
                                            </div>
                                        </div>
                                        <div className="current">
                                            <div className="name">
                                                Decimals
                                            </div>
                                            <div className="value">
                                                {coinInfo.decmials}
                                            </div>
                                        </div>
                                        <Form.Item
                                            name="withdrawCoinAddr"
                                            label="Token Address"
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                            rules={[
                                                {required: true, message: 'Please input Token Address!'},
                                            ]}
                                        >
                                            <Input value={withdrawCoinAddr} onChange={(e) => {
                                                setWithdrawCoinAddr(e.target.value)
                                                getCoinInfo(e.target.value)
                                            }}/>
                                        </Form.Item>
                                        <Form.Item
                                            name="withdrawAmount"
                                            label="Amount"
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                            rules={[
                                                {required: true, message: 'Please input Token Amount!'},
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Form>

                                    <Button type="primary" className="max-btn" onClick={() => {
                                        withdrawToken()
                                    }}>
                                        Withdraw
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="panel-box part2">
                            <div className="panel-container">
                                <div className="panel-title">
                                    All Donate Records
                                </div>
                                <div className="header-box">


                                </div>
                                <div className="fire-list-box">
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
                                        !searchData && recordNav == 1 && allRecords.map((item, index) => (
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
                )
            }
         
            {
                activeNav == 5 && (<div className="panel-box">
                    <div className="panel-container">
                        <div className="panel-title">
                            Fund Allocation
                        </div>
                        <div className="fire-list-box">
                            <div className="list-header">
                                <div className="col">
                                    Category
                                </div>
                                <div className="col">
                                    Percentage
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="col">
                                    Referral Rewards
                                </div>
                                <div className="col">
                                    {totalInviteRate}
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="col">
                                    Team Rewards
                                </div>
                                <div className="col">
                                    {totalTeamRate}
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="col">
                                    Other Rewards
                                </div>
                                <div className="col">
                                    {totalOtherRate}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-container">
                        <h2 className="sub-title">
                            Referral Rewards
                        </h2>
                        <Table pagination={false} columns={inviteColumns} dataSource={inviteRateArr}/>
                        {inviteRateArr.length == 0 && (<div className="content-item">
                            <div className="panel-title">
                                Add Invite Rate
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                {[0, 1, 2, 3, 4].map((index) => {
                                    return (<>
                                        <h5> Level Admin <strong>{index + 1}</strong></h5>
                                        <Form.Item
                                            name={"inviteRate" + index}
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                        >
                                            <div className="input-box">
                                                <Input/>
                                            </div>
                                        </Form.Item>
                                    </>)
                                })}

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        addInviteRate()
                                    }}>Add Invite Rate</Button>
                                </div>
                            </Form>
                        </div>)}
                        <div className="content-item">
                            <div className="panel-title">
                                Set Invite Rate
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Form.Item
                                    name="inviteRateID"
                                    label="Invite Rate Level"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="inviteRate"
                                    label="Invite Rate"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setInviteRate()
                                    }}>setInviteRate</Button>
                                </div>
                            </Form>
                        </div>
                        <div className="content-item">
                            <div className="panel-title">
                                Set Funds Receiving Address
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <div className="current">
                                    {receiveRemainingInvitationRewards}
                                </div>
                                <Form.Item
                                    name="receiveRemainingInvitationRewards"
                                    label="Funds Receiving Address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        handleSetreceiveRemainingInvitationRewards()
                                    }}>Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-container">
                        <div className="panel-title">
                            Team Rewards
                        </div>
                        <Table pagination={false} columns={teamColumns} dataSource={teamRateArr}/>
                        <div className="content-item">
                            <div className="panel-title">
                                Set Team Rate
                            </div>
                            <Form form={form} name="control-hooks" className="form">

                                <Form.Item
                                    name="level"
                                    label="level"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="rate"
                                    label="rate"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setTeamRate()
                                    }}>Submit</Button>
                                </div>
                            </Form>

                        </div>

                        <div className="content-item">
                            <div className="panel-title">
                                Set Blacklist Receiving Address
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <div className="current">
                                    {receiveRemainingTeamRewards}
                                </div>
                                <Form.Item
                                    name="receiveRemainingTeamRewards"
                                    label="Blacklist Receiving Address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        handleSetReceiveRemainingTeamRewards()
                                    }}>Submit</Button>
                                </div>
                            </Form>

                        </div>
                    </div>
                    <div className="panel-container part21">
                        <div className="panel-title">
                            Other Rewards
                        </div>
                        <div className="fire-list-box hh1">
                            <div className="list-header  flex-box1">
                                <div className="col">
                                    No.
                                </div>

                                <div className="col">
                                    Wallet Address
                                </div>

                                <div className="col">
                                    Rate
                                </div>
                                <div className="col">
                                    Delete
                                </div>
                            </div>

                            {
                                assignAmin.map((item, index) => (
                                    <div className="assign-row list-item hhi" key={index} onClick={() => {
                                        chooseRow(item, index)
                                    }}>
                                        <div className="col no">
                                            {index + 1}
                                        </div>

                                        <div className="col address">
                                            <a target="_blank"
                                               href={develop.ethScan + "/address/" + item.assign}> {formatAddress(item.assign)}</a>

                                        </div>
                                        <div className="col ">
                                            {item.rate.toString()}%
                                        </div>
                                        <div className="col del" onClick={() => {
                                            delARRow(item)
                                        }}>
                                            <img className="icon" src={del}/>
                                        </div>

                                    </div>

                                ))
                            }

                        </div>

                        <div className="operate-box">

                            <Button className="add" type="primary" onClick={() => {
                                setShowAddRate(true)
                            }}>Add</Button>

                        </div>
                        <Form form={form2} name="control-hooks" className="">
                            {/* <Form.Item
                                    name="assignId"
                                    label="assignId"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        {curId}
                                    </div>
                                </Form.Item> */}

                            <div className=" ">
                                <Form.Item
                                    name="Id"
                                    label="Id"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    style={{width: '100%'}}
                                >
                                    <div className="input-box">
                                        <Input value={curId} onChange={(e) => {
                                            setCurId(e.target.value)
                                        }}/>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="assignAddress"
                                    label="Other Address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    style={{width: '100%'}}
                                >
                                    <div className="input-box">
                                        <Input value={curAddr} onChange={(e) => {
                                            setCurAddr(e.target.value)
                                        }}/>

                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="assignRate"
                                    label="Address Rate"
                                    validateTrigger="onBlur"
                                    validateFirst={true}

                                >
                                    <div className="input-box" style={{width: '100%'}}>
                                        <Input style={{width: '100%'}}/>
                                    </div>
                                </Form.Item>
                            </div>


                            <div className="btns">
                                <Button className="add-btn" type="primary" onClick={() => {
                                    setRateAndAddress()
                                }}>Confirm</Button>

                            </div>


                        </Form>

                    </div>
                    {/*<div className="panel-container">*/}
                    {/*    <div className="panel-title">*/}
                    {/*        FLM Rewards*/}
                    {/*    </div>*/}
                    {/*    <Table pagination={false} columns={flmColumns} dataSource={adminFlmRewardMap}/>*/}
                    {/*</div>*/}
                </div>)
            }
            {showAddRate && (<AddAddressRate updateData={() => {
            }} closeDialog={() => {
                setShowAddRate(false)
            }}/>)}

        </OGPoolAdminStyle>
    )
}
export default OgPoolAdmin
