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


const OGPool = (props) => {
    const [form2] = Form.useForm();
    let {state, dispatch} = useConnect();
    const [activeNav, setActiveNav] = useState(1)
    const [form] = Form.useForm();
    const [secondAdmins, setSecondAmdin] = useState([])
    const [assignAmin, setAssignAdmin] = useState([])
    const [rateArr, setRateArr] = useState([])
    const [total, setTotal] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [inviteRate2, setInv2] = useState(0)
    const [inviteRate3, setInv3] = useState(0)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [totalDonate, setTotalDonate] = useState(0)
    const [salePriceV, setSalePriceV] = useState(0)
    const [maxThree, setMaxThree] = useState(0)
    const [maxTwo, setMaxTwo] = useState(0)
    const [exchangeAmount, setExchangeAmount] = useState(0)
    const [sumArr, setSumArr] = useState([])
    const [inputValue, setInputValue] = useState(0)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const [whiteList, setAllWhiteList] = useState([])
    const [status1, setStatus1] = useState()
    const [status2, setStatus2] = useState()
    const [ownerAddress, setOwnerAddress] = useState("")

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
        const allRecord = await getAllRecord()
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

        for (let i = 0; i < sumArr.length; i++) {
            let admin = sumArr[i];
            for (let k = 0; k < admin.thrArr.length; k++) {
                let user = admin.thrArr[k];
                user.fdtAmount = 0
                user.ethAmount = 0
                user.usdtAmount = 0
                for (let j = 0; j < allRecord.length; j++) {
                    let record = allRecord[j];
                    if (user.user.toString().toLowerCase() == record.addr.toString().toLowerCase()) {
                        user.addr = record.addr;
                        user.fdtAmount = parseFloat(user.fdtAmount) + parseFloat(record.fdtAmount / 10 ** 18);
                        user.ethAmount = parseFloat(user.ethAmount) + parseFloat(record.ethAmount / 10 ** 18)
                        user.usdtAmount = parseFloat(user.usdtAmount) + parseFloat(record.usdtAmount / 10 ** 18)
                    }

                }
            }
        }
        //sum
        for (let i = 0; i < sumArr.length; i++) {
            let admin = sumArr[i];
            admin.tAmount = 0
            admin.tETH = 0
            admin.tUSDT = 0
            for (let j = 0; j < sumArr[i].thrArr.length; j++) {
                let user = admin.thrArr[j];
                if (parseFloat(user.fdtAmount) > 0) {
                    admin.tAmount = parseFloat(admin.tAmount) + parseFloat(user.fdtAmount)
                    admin.tETH = parseFloat(admin.tETH) + parseFloat(user.ethAmount)
                    admin.tUSDT = parseFloat(admin.tUSDT) + parseFloat(user.usdtAmount)
                }
            }
        }
        setSumArr(sumArr)
    }
    const getAdminWhiteList = async (addr) => {
        try {
            let length = await handleDACCOUNTViewMethod("getAdminWhiteListLength", addr, [])
            let adminWhiteList = []
            for (let i = 0; i < length; i++) {
                let res = await handleViewMethod("adminInviter", [addr, i])
                let hasT = false
                for(let i=0;i<adminWhiteList.length;i++){
                    if(adminWhiteList[i].user == res.user){
                        hasT=true
                    }
                }
                if(!hasT){
                    adminWhiteList.push(res)
                }
            }
            return adminWhiteList
        } catch (e) {

        }
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
    const getpidStatusForAdmin= async () => {
        let res = await handleViewMethod("pidStatusForAdmin", [])
        setStatus1(res)
    }
    const getpidStatusForUser = async () => {
        let res = await handleViewMethod("pidStatusForUser", [])
        setStatus2(res)
    }

    const getSecondAdmins = async () => {
        let length = await handleViewMethod("getAdminsLevelTwoLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            let res = await handleViewMethod("adminsLevelTwo", [i])
            arr.push(res)
        }
        setSecondAmdin(arr)
        return arr
    }
    const getRate = async () => {
        let length = await handleViewMethod("getRateLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            let res = await handleViewMethod("rate", [i])
            arr.push(res)
        }
        setRateArr(arr)
    }
    const getInviteRate = async () => {
        const rate = await handleViewMethod("getRate", [])
        if(rate>0){
            let inviteRate2 = await handleViewMethod("inviteRate", [0])
            let inviteRate3 = await handleViewMethod("inviteRate", [1])
            setInv2(inviteRate2)
            setInv3(inviteRate3)
        }
    }
    const getAssignAddress = async () => {
        let length = await handleViewMethod("getAssignAddresslength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            let res = await handleViewMethod("assignAddress", [i])
            arr.push(res)
        }
        setAssignAdmin(arr)
    }
    const addInviteRate= async () => {
        await handleDealMethod("addInviteRate", [[form2.getFieldValue().inviteRate1, form2.getFieldValue().inviteRate2]])
        getInviteRate()
    }
    const setPidStatusForAdmin = async () => {
        await handleDealMethod("setPidStatusForAdmin", [])
        getpidStatusForAdmin()
    }
    const setFDTAddress= async () => {
        await handleDealMethod("setFDTAddress", [form2.getFieldValue().fdtAddress])
        // getFDTAddress()
    }
    const setPidStatusForUser= async () => {
        await handleDealMethod("setPidStatusForUser", [])
        getpidStatusForUser()
    }
    const setAssignAddress = async () => {
        await handleDealMethod("setAssignAddress", [form2.getFieldValue().assignId, form2.getFieldValue().address])
        getAssignAddress()
    }
    const addAssignAddress = async () => {
        await handleDealMethod("addAssignAddress", [[form2.getFieldValue().addAssignAddr]])
        getAssignAddress()
    }
    const removeAssiginAddress = async () => {
        await handleDealMethod("removeAssiginAddress", [form2.getFieldValue().addAssignAddr])
        getAssignAddress()
    }
    const addRate = async () => {
        let TotalRate = form2.getFieldValue().addAssignRate
        rateArr.forEach(rate => {
            TotalRate = parseInt(TotalRate) + parseInt(rate)
        })
        TotalRate = parseFloat(TotalRate) + parseFloat(inviteRate2)+ parseFloat(inviteRate3)
        if (TotalRate > 100) {
            message.warn("需要把上面rate设置一下，使其总和不超过100")
            return
        }
        await handleDealMethod("addRate", [[form2.getFieldValue().addAssignRate]])
        getRate()
    }
    const removeRate = async () => {
        await handleDealMethod("removeRate  ", [form2.getFieldValue().assignId])
        getRate()
    }

    const setRate = async () => {
        await handleDealMethod("setRate", [form2.getFieldValue().assignId, form2.getFieldValue().assignRate])
        getRate()
    }

    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().address])
        getOwner()
    }
    const onChangeStatus1 = async () => {
        setStatus1(form.getFieldValue().status1)
    }
    const onChangeStatus2 = async () => {
        setStatus2(form.getFieldValue().status2)
    }
    const handlePause = async () => {
        await handleDealMethod("pause", [])
    }
    const handleUnpause = async () => {
        await handleDealMethod("unpause", [])
    }
    const setInviteRate = async () => {
        await handleDealMethod("setInviteRate", [form2.getFieldValue().inviteRate])
        getInviteRate()
    }
    const setAdmins = async () => {
        await handleDealMethod("setAdmin", [[form.getFieldValue().adminaddress]])
        getSecondAdmins()
    }
    const removeAdmin = async () => {
        await handleDealMethod("removeAdmin", [[form.getFieldValue().adminaddress]])
        getSecondAdmins()
    }
    const setWhiteMaxForTwo= async () => {
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
        getAssignAddress()
        getRate()
        getInviteRate()
        getSalePrice()
        getMaxTwo()
        getMaxThree()
        getSummary()
        getPause()
        getpidStatusForAdmin()
        getpidStatusForAdmin()
    }
    const onChangePage = async (page) => {
        getData(page)
        await setCurPage(page)
    }
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    useEffect(() => {
        getData()
    }, [state.account]);
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
            <div className="og-nav-list">
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
                                Contract Status : {isPause?"True":"False"}
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Button type="primary" onClick={handlePause}>Pause</Button>
                                <Button type="primary" onClick={handleUnpause}>Unpause</Button>
                            </Form>
                            <div className="info">
                                This function is related to the running status of the contract, please use it with
                                caution.
                            </div>
                        </div>

                    </div>
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                Set Pid Status For Admin: {status1?"True":"False"}
                            </div>
                            <div>
                                Set to {status1?"False":"True"}
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Button type="primary" onClick={setPidStatusForAdmin}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                Set Pid Status For User: {status2?"True":"False"}
                            </div>
                            <div>
                                Set to {status2?"False":"True"}
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <Button type="primary" onClick={setPidStatusForUser}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                Set FDT Address: {status2?"True":"False"}
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
                                        <div className="row">
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
                                Set Level 2 WhiteList Amount: {maxTwo}
                            </div>
                            <Form form={form2} name="control-hooks" className="form">

                                <Form.Item
                                    name="max"
                                    label="Max"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setWhiteMaxForTwo()
                                    }}>setWhiteMaxForTwo</Button>
                                </div>
                            </Form>
                        </div>
                        <div className="panel-container">
                            <div className="panel-title">
                                Set Level 3 WhiteList Amount: {maxThree}
                            </div>
                            <Form form={form2} name="control-hooks" className="form">

                                <Form.Item
                                    name="max"
                                    label="Max"
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
                        </div>
                        <div className="panel-container">
                            <div className="panel-title">
                                Exchange Rate :{salePriceV}
                            </div>
                            <Form form={form2} name="control-hooks" className="form">

                                <Form.Item
                                    name="exchangeRate"
                                    label="Exchange Rate"
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
                            </Form>
                        </div>
                        <div className="panel-container">
                            <div className="panel-title">
                                Add Invite Rate
                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <h3>2 Level Admin{inviteRate2}%</h3>
                                <Form.Item
                                    name="inviteRate1"
                                    label="Invite Rate 1"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                               <h3> 3 Level Admin{inviteRate3}%</h3>
                                <Form.Item
                                    name="inviteRate2"
                                    label="Invite Rate 2"
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
                                2 Level Admin{inviteRate2}%, 3 Level Admin{inviteRate3}%
                            </div>
                            <Form form={form2} name="control-hooks" className="form">

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
                            <div className="box">
                                <div className="assign-row flex-box">

                                    <div className="col">
                                        Address
                                    </div>

                                    <div className="col">
                                        Rate
                                    </div>

                                </div>

                                {
                                    assignAmin.map((item, index) => (
                                        <div className="assign-row">
                                            <div className="col">{item}
                                            </div>
                                            <div className="col">
                                                {rateArr[index]}
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <Form form={form2} name="control-hooks" className="form">
                                <Form.Item
                                    name="assignId"
                                    label="assignId"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="assignAddress"
                                    label="assignAddress"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>
                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        setAssignAddress()
                                    }}>setAssignAddress</Button>
                                </div>
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
                                        setRate()
                                    }}>setRate</Button>
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        removeRate()
                                    }}>removeRate</Button>

                                </div>
                                <Form.Item
                                    name="addAssignAddr"
                                    label="addAssignAddr"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        addAssignAddress()
                                    }}>addAssignAddress</Button>
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        removeAssiginAddress()
                                    }}>removeAssiginAddress</Button>
                                </div>
                                <Form.Item
                                    name="addAssignRate"
                                    label="addAssignRate"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                <div className="btns">
                                    <Button className="add-btn" type="primary" onClick={() => {
                                        addRate()
                                    }}>addRate</Button>

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
                                <div className="operate-btns">
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
                                    {/*<Button type="primary" className="operate-btn">*/}
                                    {/*    FDT-OG Deposit*/}
                                    {/*</Button>*/}
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
                                            <div className="sum-item-box">
                                                <div className="sum-list-header">
                                                    <div className="index">
                                                        {index}、二级管理员
                                                    </div>
                                                    <div className="address">
                                                        {sumItem.addr}
                                                    </div>
                                                </div>
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
                                                    sumItem.thrArr.map((thrUser, index) => {
                                                        if (thrUser.fdtAmount > 0) {
                                                            return (

                                                                <div className="sum-item">
                                                                    <div className="col">
                                                                        {index}
                                                                    </div>
                                                                    <div className="col">
                                                                        {thrUser.Pid}
                                                                    </div>
                                                                    <div className="col">
                                                                        {thrUser.name}
                                                                    </div>
                                                                    <div className="col">
                                                                        {thrUser.user}
                                                                    </div>
                                                                    <div className="col">
                                                                        {thrUser.fdtAmount}
                                                                    </div>
                                                                    <div className="col">
                                                                        {thrUser.ethAmount}
                                                                    </div>
                                                                    <div className="col">
                                                                        {thrUser.usdtAmount}
                                                                    </div>
                                                                </div>
                                                            )
                                                        }

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
                                                        {sumItem.tUSDT}
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
        </OGPoolAdminStyle>
    )
}
export default OGPool
