import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import {
    Radio,
    Button,
    message,
    Form,
    Input,
    Switch, Pagination
} from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, dealPayMethod, viewMethod } from "../../../utils/contractUtil"
import develop from "../../../env";
import judgeStatus from "../../../utils/judgeStatus";
import OGPoolAdminStyle from "./OGPoolAdminStyle";
import AddAddressRate from "./AddAddressRate.js";
import { showNum } from "../../../utils/bigNumberUtil";
import del from "../../../imgs/sc.png";
import eth from "../../../imgs/ethereum.png";
import { getSecondDonateRecord, getThreeDonateRecord } from "../../../graph/donate";
import BigNumber from "bignumber.js";

const OGPool = (props) => {

    const [form2] = Form.useForm();
    let { state, dispatch } = useConnect();
    const [searchData, setSearchData] = useState("")
    const [activeNav, setActiveNav] = useState(1)
    const [recordNav, setRecordNav] = useState(1)
    const [form] = Form.useForm();
    const [secondAdmins, setSecondAdmin] = useState([])
    const [assignAmin, setAssignAdmin] = useState([])
    const [total, setTotal] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [inviteRate2, setInv2] = useState(0)
    const [inviteRate1, setInv1] = useState(0)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [totalDonate, setTotalDonate] = useState(0)
    const [salePriceV, setSalePriceV] = useState(0)
    const [maxThree, setMaxThree] = useState(0)
    const [maxThreeAdmin, setMaxThreeAdmin] = useState(0)

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
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
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
    const getAssignAndRates = async () => {
        const length = await handleViewMethod("getAssignAndRateslength", [])
        const resArr = []
        for (let i = 0; i < length; i++) {
            const res = await handleViewMethod("assignAndRates", [i])
            resArr.push(res)
        }
        setAssignAdmin(resArr)
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
    const getMaxThreeAdmin = async () => {
        let res = await handleViewMethod("adminLevelThreeMax", [])
        setMaxThreeAdmin(res)
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
        console.log(res)
        setStatus1(res)
    }
    const getpidStatusForUser = async () => {
        let res = await handleViewMethod("pidStatusForUser", [])
        console.log(res)
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
        await handleDealMethod("setFDTAddress", [form.getFieldValue().fdtAddress])
        // getFDTAddress()
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
        await handleDealMethod("removeAdminLevelTwo", [form.getFieldValue().adminaddress])
        getSecondAdmins()
    }
    const setWhiteListAmount = async () => {
        await handleDealMethod("setWhiteMaxForThree", [(form2.getFieldValue().max)])
        getMaxThree()
    }

    const setAdminLevelThreeMax = async () => {
        await handleDealMethod("setAdminLevelThreeMax", [(form2.getFieldValue().maxThree)])
        getMaxThreeAdmin()
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
        getMaxThree()
        getMaxThreeAdmin()
        getSummary()
        getPause()
        getpidStatusForAdmin()
        getpidStatusForAdmin()
        getFDTAddress()
        getAssignAndRates()
        getpidStatusForUser()
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


    return (
        <OGPoolAdminStyle>
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
                    {/* <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                    setActiveNav(4)
                }}>
                    Summary
                </div> */}
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
                                    <Input />
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
                                <div className='switchh'>
                                    <p><span>Running</span><Switch defaultChecked onChange={onChange} /></p>
                                    <p><span>Pause</span><Switch onChange={onChange} /></p>
                                </div>
                                <Button type="primary" onClick={handlePause}>Pause</Button>
                                <Button type="primary" onClick={handleUnpause}>Unpause</Button>
                            </Form>
                            <div className="info tip-box">
                                This function is related to the running status of the contract, please use it with
                                caution.
                            </div>
                        </div>

                    </div>
                    {/* <div className="panel-box">
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
                    </div> */}
                </div>
            )}
            {activeNav == 2 && (
                <div>
                    <div className="panel-box part21">
                        <div className="panel-container">
                            <div className="panel-title">
                                Set Level 2 Administrator
                            </div>
                            <div className="fire-list-box">
                                <div className="list-header flex-box">
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
                                            <div className="col pid" >

                                            </div>
                                            <div className="col" >

                                            </div>
                                            <div className="col address" >
                                                {item}
                                            </div>
                                            <div className="col del" >
                                                <img src={del} className="sc" />
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>

                            <div className="btns" style={{ textAlign: 'center', marginTop: '1.7em' }}>
                                <Button className="add-btn" type="primary" onClick={() => {
                                    setAdmins()
                                }}>addAdmins</Button>
                                <Button className="add-btn" type="primary" onClick={() => {
                                    removeAdmin()
                                }}>removeAdmin</Button>
                            </div>
                            {/* <Form form={form} name="control-hooks" className="form">

                                <Form.Item
                                    name="adminaddress"
                                    validateTrigger="onBlur"
                                    label="Address"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input />
                                    </div>
                                </Form.Item>

                            </Form> */}
                        </div>

                        <div className="panel-container">
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
                                        <Input />
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setAdminLevelThreeMax()
                                    }}>setWhiteListAmount</Button>
                                </div>
                            </Form>

                            <div className="panel-title">
                                Set WhiteList Amount: ( {maxThree} )
                            </div>
                            <Form form={form2} name="control-hooks" className="form">

                                <Form.Item
                                    name="max"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input />
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
                                            <Input />
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
                                <h2>3 Level Admin <strong>{inviteRate2}%</strong></h2>
                                <Form.Item
                                    name="inviteRate1"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input />
                                    </div>
                                </Form.Item>
                                <h2> 2 Level Admin <strong>{inviteRate1}%</strong></h2>
                                <Form.Item
                                    name="inviteRate2"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input />
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
                                Invite Rate:<br />
                                3 Level Admin{inviteRate2}% ID 0,
                                2 Level Admin{inviteRate1}% ID 1
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <Form.Item
                                    name="inviteRateID"
                                    label="Invite Rate ID"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="inviteRate"
                                    label="Invite Rate"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input />
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
                            <Form form={form2} name="control-hooks" className="form hh">
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
                                <div style={{ width: '50%', float: 'left' }}>


                                    <Form.Item
                                        name="assignRate"
                                        label="Recommender Allocation Rate"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            <Input />
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        name="assignAddress"
                                        label="Other Address"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            <Input value={curAddr} onChange={(e) => {
                                                setCurAddr(e.target.value)
                                            }} />

                                        </div>
                                    </Form.Item>
                                </div>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setRateAndAddress()
                                    }}>Confirm</Button>

                                </div>


                            </Form>
                            <div className="fire-list-box hh1">
                                <div className="list-header  flex-box1">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        Username
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
                                            <div className="col">

                                            </div>
                                            <div className="col address">
                                                {item.assign}
                                            </div>
                                            <div className="col ">
                                                {item.rate}%
                                            </div>
                                            <div className="col del" onClick={() => {
                                                delARRow(item)
                                            }}>
                                                <img src={del} className="sc" />
                                            </div>

                                        </div>

                                    ))
                                }

                            </div>

                            <div className="operate-box">

                                <Button className="add" type="primary" onClick={() => {
                                    setShowAddRate(true)
                                }}>Add</Button>
                                <Button className="add" type="primary" onClick={() => {

                                }}>Confirm</Button>
                            </div>
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
                                                <p><img src={eth} style={{ marginTop: '-5px', marginRight: '10px' }} />
                                                    {totalDonate} ETH</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='rate1'>
                                    <div className="info-item">
                                        <div className="name">
                                            Donate Rate
                                        </div>
                                        <div className="value">
                                            1 FDT-OG = 0.01 USD
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
                                            <Input />
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        name="tokenNumber"
                                        label="tokenNumber"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            <Input />
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
                                            <Input />
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
                                <div className="panel-title">
                                    Donate Records
                                </div>
                                <div className="header-box">
                                    <div className="nav-list-box">
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
                                        </div>
                                    </div>

                                </div>
                                <div className="fire-list-box">
                                    <div className="list-header flex-box">

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
                                            Amounts
                                        </div>
                                        <div className="col">
                                            Time(UTC)
                                        </div>

                                    </div>

                                    {
                                        !searchData && recordNav == 1 && whiteList.map((item, index) => (
                                            Row2(item, index)
                                        ))
                                    }
                                    {
                                        recordNav == 2 && whiteList.map((item, index) => (
                                            Row2(item, index)
                                        ))
                                    }

                                </div>
                                <div className="pagination">
                                    {
                                        recordNav == 1 && <Pagination current={curPage} showSizeChanger onShowSizeChange={handleShowSizeChange}
                                            onChange={onChangePage} total={total}
                                            defaultPageSize={pageCount} />
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
            }} />)}

        </OGPoolAdminStyle>
    )
}
export default OGPool
