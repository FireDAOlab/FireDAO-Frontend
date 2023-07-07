import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {
    Radio,
    Button,
    message,
    Form,
    Input,
    Switch,
    Pagination,
} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"
import develop from "../../../env";
import judgeStatus from "../../../utils/judgeStatus";
import {getDonateRecord} from "../../../graph/donate";
import OGPoolAdminStyle from "./OGPoolAdminStyle";
import AddAddressRate from "./AddAddressRate.js";
import {formatAddress} from "../../../utils/publicJs";
import {showNum} from "../../../utils/bigNumberUtil";
import {getSecondDonateRecord, getThreeDonateRecord} from "../../../graph/donate";

const OGPool = (props) => {
    const [form2] = Form.useForm();
    let {state, dispatch} = useConnect();
    const [activeNav, setActiveNav] = useState(1)
    const [form] = Form.useForm();
    const [secondAdmins, setSecondAdmin] = useState([])
    const [assignAmin, setAssignAdmin] = useState([])
    const [rateArr, setRateArr] = useState([])
    const [total, setTotal] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [inviteRate2, setInv2] = useState(0)
    const [inviteRate1, setInv1] = useState(0)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [totalDonate, setTotalDonate] = useState(0)
    const [salePriceV, setSalePriceV] = useState(0)
    const [maxThree, setMaxThree] = useState(0)
    const [maxTwo, setMaxTwo] = useState(0)
    const [exchangeAmount, setExchangeAmount] = useState(0)
    const [sumArr, setSumArr] = useState([])
    const [inputValue, setInputValue] = useState(0)
    const [showAddRate, setShowAddRate] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const [whiteList, setAllWhiteList] = useState([])
    const [status1, setStatus1] = useState()
    const [status2, setStatus2] = useState()
    const [fdtAddr, setFDTAddressValue] = useState()


    const [ownerAddress, setOwnerAddress] = useState("")
    const [curAddr, setCurAddr] = useState("")
    const [curId, setCurId] = useState("")
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
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

    const getAllRecord = async () => {
        let res = await getDonateRecord()
        return res.data.allRecords
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
        console.log(sumArr)
        setSumArr(sumArr)
    }
    const getWhitelist = async (addr) => {
        let res = await getThreeDonateRecord(addr)
        return res.data.allRecords
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
        let balance = await handleViewMethod("getBalanceOfFDT", [])
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
        setTotalDonate(res / 10 ** 18)
    }
    const getSalePrice = async () => {
        let res = await handleViewMethod("salePrice", [])
        setSalePriceV(res / 1000)
    }
    const getMaxThree = async () => {
        let res = await handleViewMethod("maxThree", [])
        setMaxThree(res)
    }
    const getMaxTwo = async () => {
        let res = await handleViewMethod("maxTwo", [])
        setMaxTwo(res)
    }
    const getShowWhiteList = async () => {
        let length = await handleViewMethod("getWhiteListLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            let res = await handleViewMethod("ShowWhiteList", [i])
            arr.push(res)
        }
        setAllWhiteList(arr)
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
    const getFDTAddress = async () => {
        let res = await handleViewMethod("fdt", [])
        setFDTAddressValue(res)
    }
    const getSecondAdmins = async () => {
        const arr = await handleViewMethod("getAdminsLevelTwoList", [])
        setSecondAdmin(arr)
        return arr
    }

    const getInviteRate = async () => {
        const rate = await handleViewMethod("getRate", [])
        if (rate > 0) {
            let inviteRate2 = await handleViewMethod("inviteRate", [0])
            let inviteRate1 = await handleViewMethod("inviteRate", [1])
            setInv2(inviteRate2)
            setInv1(inviteRate1)
        }
    }

    const addInviteRate = async () => {
        await handleDealMethod("addInviteRate", [[form2.getFieldValue().inviteRate1, form2.getFieldValue().inviteRate2]])
        getInviteRate()
    }
    const setPidStatusForAdmin = async () => {
        await handleDealMethod("setPidStatusForAdmin", [])
        getpidStatusForAdmin()
    }
    const setFDTAddress = async () => {
        await handleDealMethod("setFDTAddress", [form2.getFieldValue().fdtAddress])
        // getFDTAddress()
    }
    const setPidStatusForUser = async () => {
        await handleDealMethod("setPidStatusForUser", [])
        getpidStatusForUser()
    }


    const setRateAndAddress = async () => {
        await handleDealMethod("setAssignAddressAndRatio", [curId, curAddr, form2.getFieldValue().assignRate])

    }

    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().address])
        getOwner()
    }

    const handlePause = async () => {
        await handleDealMethod("pause", [])
    }
    const handleUnpause = async () => {
        await handleDealMethod("unpause", [])
    }
    const setInviteRate = async () => {
        await handleDealMethod("setInviteRate", [form2.getFieldValue().inviteRateID, form2.getFieldValue().inviteRate])
        getInviteRate()
    }
    const setAdmins = async () => {
        await handleDealMethod("setAdminLevelTwo", [[form.getFieldValue().adminaddress]])
        getSecondAdmins()
    }
    const removeAdmin = async () => {
        await handleDealMethod("removeAdminLevelTwo", [[form.getFieldValue().adminaddress]])
        getSecondAdmins()
    }
    const setWhiteMaxForTwo = async () => {
        await handleDealMethod("setWhiteMaxForTwo", [(form2.getFieldValue().max)])
    }
    const setWhiteListAmount = async () => {
        await handleDealMethod("setWhiteMaxForThree", [(form2.getFieldValue().max)])
    }
    const withdraw = async () => {
        await handleDealMethod("withdraw", [state.api.utils.toWei(form2.getFieldValue().withdrawNum)])
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
    }
    const getData = async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getTotalDonate()
        getBalanceOfFDT()
        getShowWhiteList()
        getOwner()
        getSecondAdmins()
        getInviteRate()
        getSalePrice()
        getMaxTwo()
        getMaxThree()
        getSummary()
        getPause()
        getpidStatusForAdmin()
        getpidStatusForAdmin()
        getFDTAddress()
    }
    const chooseRow = (addr, id) => {
        setCurAddr(addr)
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
        await handleDealMethod("removeAssiginAddressAndRatio", [[item]])
    }

    useEffect(() => {
        getData()
    }, [state.account]);
    const Row = (user, indexUser) => {
        return <div className="sum-item" key={indexUser}>
            <div className="col">
                user {indexUser}
            </div>
            <div className="col">
                {user.Pid}
            </div>
            <div className="col">
                {user.name}
            </div>
            <div className="col">
                {user.user}
            </div>
            <div className="col">
                {showNum(user.fdtAmount / 10 ** 18)}
            </div>
            <div className="col">
                {showNum(user.ethAmount / 10 ** 18)}
            </div>
            <div className="col">
                {showNum(user.usdtAmount / 10 ** 18)}
            </div>
        </div>
    }
    const Row2 = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {item.Pid}
            </div>
            <div className="col">
                {item.name}
            </div>


            <div className="col address">
                {item.user &&
                    <a href={develop.ethScan + "address/" + item.user} target="_blank">
                        {item.user.substr(0, 6) + "..." + item.user.substr(item.user.length - 3, item.user.length)}
                    </a>
                }

            </div>


        </div>
    }


    return (
        <OGPoolAdminStyle>
            <div className="page-title">
                OGPool Manage
            </div>
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
                <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                    setActiveNav(4)
                }}>
                    Summary
                </div>
            </div>
            {activeNav == 1 && (
                <div className="part1">
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
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
                            <div className="panel-title">
                                Contract Status : {isPause ? "Paused" : "UnPaused"}
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Button type="primary" onClick={handlePause}>Pause</Button>
                                <Button type="primary" onClick={handleUnpause}>Unpause</Button>
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
                                Set FDT Address: {fdtAddr}
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Form.Item
                                    name="fdtAddress"
                                    label="Fdt Address"
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <Button type="primary" onClick={setFDTAddress}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
            {activeNav == 2 && (
                <div>
                    <div className="panel-box part2">
                        <div className="panel-container">
                            <div className="panel-title">
                                Set Level 2 Administrator
                            </div>
                            <div className="fire-list-box">
                                <div className="list-header flex-box">
                                    <div className="col">
                                        Address
                                    </div>
                                </div>
                                {
                                    secondAdmins.map((item, index) => (
                                        <div className="row" key={index}>
                                            {item}
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

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setAdmins()
                                    }}>addAdmins</Button>
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        removeAdmin()
                                    }}>removeAdmin</Button>
                                </div>
                            </Form>
                        </div>

                        <div className="panel-container">
                            <div className="panel-title">
                                Set Level 3 WhiteList Amount: ( {maxThree} )
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
                                        setWhiteListAmount()
                                    }}>setWhiteListAmount</Button>
                                </div>
                            </Form>
                            <div className="panel-title">
                                Exchange Rate : ( {salePriceV} )
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
                                        }}>setSalePrice</Button>
                                    </div>
                                </div>
                            </Form>
                            <div className="panel-title">
                                Add Invite Rate
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <h3>2 Level Admin{inviteRate2}%</h3>
                                <Form.Item
                                    name="inviteRate1"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <h3> 3 Level Admin{inviteRate1}%</h3>
                                <Form.Item
                                    name="inviteRate2"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        addInviteRate()
                                    }}>Add Invite Rate</Button>
                                </div>
                            </Form>
                        </div>
                        <div className="panel-container">
                            <div className="panel-title">
                                Invite Rate:<br/>
                                2 Level Admin{inviteRate1}% ID 1, 3 Level Admin{inviteRate2}% ID 0
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <Form.Item
                                    name="inviteRateID"
                                    label="Invite Rate ID"
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

                        <div className="panel-container">
                            <div className="panel-title">
                                Fund Allocation
                            </div>
                            <div className="tip-box">
                                Recommender Allocation Rate 15%
                            </div>
                            <div className=" fire-list-box">
                                <div className=" list-header ">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        Address
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
                                        <div className="assign-row list-item" key={index} onClick={() => {
                                            chooseRow(item, index)
                                        }}>
                                            <div className="col">
                                                {index + 1}
                                            </div>
                                            <div className="col">{item}
                                            </div>
                                            <div className="col">
                                                {rateArr[index]}
                                            </div>
                                            <div className="col">
                                                <Button onClick={() => {
                                                    delARRow(item)
                                                }}>Del</Button>
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                            <div className="operate-box">
                                <Button className="add" type="primary" onClick={() => {
                                    setShowAddRate(true)
                                }}>ADD</Button>
                            </div>
                            <h3 style={{marginTop: '20px'}}>UPDATE</h3>
                            <Form form={form2} name="control-hooks" className="form">
                                <Form.Item
                                    name="assignId"
                                    label="assignId"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        {curId}
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="assignAddress"
                                    label="assignAddress"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input value={curAddr} onChange={(e) => {
                                            setCurAddr(e.target.value)
                                        }}/>

                                    </div>
                                </Form.Item>

                                <Form.Item
                                    name="assignRate"
                                    label="assignRate"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setRateAndAddress()
                                    }}>setRateAndAddress</Button>

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
                                    OG Donate 1
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
                                    <div className="flex-box">
                                        <div className="info-item">
                                            <div className="name">
                                                Value
                                            </div>
                                            <div className="value">
                                                {FDTBalance * 0.01}
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="name">
                                                Total Donate
                                            </div>
                                            <div className="value">
                                                {totalDonate} ETH
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Form form={form2} name="control-hooks" className="form">
                                    <Form.Item
                                        name="tokenAddress"
                                        label="tokenAddress"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            <Input/>
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        name="tokenNumber"
                                        label="tokenNumber"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            <Input/>
                                        </div>
                                    </Form.Item>
                                </Form>
                                <Button onClick={claim} type="primary" className="operate-btn">
                                    Claim
                                </Button>
                                <h3 className="panel-title">
                                    Withdraw FDT-OG
                                </h3>
                                <Form form={form2} name="control-hooks" className="form">
                                    <Form.Item
                                        name="withdrawNum"
                                        label="withdrawNum"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            <Input/>
                                        </div>
                                    </Form.Item>
                                </Form>
                                <Button type="primary" className="operate-btn" onClick={withdraw}>
                                    FDT-OG Withdraw
                                </Button>
                            </div>
                        </div>
                        <div className="panel-box part2">
                            <div className="panel-container">

                                <div className="fire-list-box">
                                    <div className="list-header flex-box">

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
                                            Row2(item, index)
                                        ))
                                    }

                                </div>
                                <div className="pagination">
                                    {
                                        activeNav == 1 && <Pagination current={curPage} showSizeChanger
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
                activeNav == 4 && (
                    <div className="part4">
                        <div className="panel-box">
                            <div className="panel-container">
                                <div className="sum-list">
                                    {
                                        sumArr.map((sumItem, index) => (
                                            <div className="sum-item-box" key={index}>
                                                <div className="sum-list-header">
                                                    <div className="index">
                                                        {index}、二级管理员
                                                    </div>
                                                    <div className="address">
                                                        {sumItem.addr}
                                                    </div>
                                                </div>
                                                {
                                                    sumItem.thrArr.map((thrUser, index) => {
                                                        return (
                                                            <div className="sum-box">
                                                                <div className="sum-item-header">
                                                                    <div className="col">
                                                                        idx
                                                                    </div>
                                                                    <div className="col">
                                                                        userAddr
                                                                    </div>

                                                                </div>

                                                                {Row(thrUser.user, index)}
                                                                <div className="sum-item-header">
                                                                    <div className="col">
                                                                        idx
                                                                    </div>
                                                                    <div className="col">
                                                                        Pid
                                                                    </div>
                                                                    <div className="col">
                                                                        name
                                                                    </div>
                                                                    <div className="col">
                                                                        userAddr
                                                                    </div>
                                                                    <div className="col">
                                                                        fdtAmount
                                                                    </div>
                                                                    <div className="col">
                                                                        ethAmount
                                                                    </div>
                                                                    <div className="col">
                                                                        usdtAmount
                                                                    </div>
                                                                </div>

                                                                {
                                                                    thrUser.whitelist.map((user, indexUser) => {
                                                                        return (
                                                                            Row(user, indexUser)
                                                                        )
                                                                    })
                                                                }
                                                            </div>


                                                        )
                                                    })
                                                }
                                                <div className="sum-list-footer">
                                                    <div className="col">
                                                        Amount:
                                                    </div>
                                                    <div className="col">
                                                        {sumItem.tAmount}
                                                    </div>
                                                    <div className="col">
                                                        ETH:
                                                    </div>
                                                    <div className="col">
                                                        {sumItem.tETH}
                                                    </div>
                                                    <div className="col">
                                                        USDT:
                                                    </div>
                                                    <div className="col">
                                                        {showNum(sumItem.tUSDT)}
                                                    </div>
                                                </div>
                                            </div>))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {showAddRate && (<AddAddressRate updateData={() => {
            }} closeDialog={() => {
                setShowAddRate(false)
            }}/>)}

        </OGPoolAdminStyle>
    )
}
export default OGPool
