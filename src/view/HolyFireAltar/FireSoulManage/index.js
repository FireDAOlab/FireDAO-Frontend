import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {useNavigate, useLocation} from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";
import AddWhiteListAddr from "./component/AddWhiteListAddr";
import RemoveWhiteListAddr from "./component/RemoveWhiteListAddr";
const FireLock = (props) => {
    let {state, dispatch} = useConnect();
    const [whitelist, setWhitelistArr] = useState([])
    const [allocation, setAllocation] = useState({})


    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")

    const [BUrl, setBUrl] = useState("")

    const [feeRec, setFeeRe] = useState("")
    const [userMaxMint, setUserMintMax] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowRemove, setShowRemove] = useState(false)

    const [fee, setFee] = useState(0)
    const [whitelistDiscount, setWhitelistDiscount] = useState(0)
    const [referObj, setReferObj] = useState({})
    const [rateObj, setRate] = useState({})

    const [discountArr, setDiscountArr] = useState([])


    const [feeReceiver, setReceiver] = useState("")

    const [form] = Form.useForm();

    const location = useLocation()

    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
            },
        });
    };
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getWList()
        getFeeReceiver()
        getAllocation()
        getBaseUrl()
    }

    const dealNum = (num) => {
        return parseInt(num * 100) / 100
    }
    const getBaseUrl= async ()=>{
        const ownerAddr = await  handleViewMethod("baseURI",[])
        setBUrl(ownerAddr)
    }
    const getOwner = async ()=>{
        const ownerAddr = await  handleViewMethod("owner",[])
        setOwner(ownerAddr)
    }
    const getFee = async ()=>{
        const fee = await  handleViewMethod("fee",[])
        setFee(fee/10**18)
    }

    const getWhitelistDiscount = async ()=>{
        const discount = await  handleViewMethod("whitelistDiscount",[])
        setWhitelistDiscount(discount)
    }
    const getDiscountFactors = async ()=>{
        const length = await  handleViewMethod("ratioDetailsLength",[])
        let arr = []
        for(let i=0;i<length;i++){
            const  item= await  handleViewMethod("ratioDetails",[i])
            // const   discount= await  handleViewMethod("discountFactors",[item.lower])
            arr.push({
                start:item.lower,
                end:item.upper,
                discount:item.rate
            })
        }
        setDiscountArr(arr)
    }
    const getFeeReceiver = async ()=>{
        const feeReceiver = await  handleViewMethod("feeReceiver",[])
        setReceiver(feeReceiver)
    }

    const getReferRate= async ()=>{
        const lever1 = await  handleViewMethod("TOP_FEE_RATIO",[])
        const lever2 = await  handleViewMethod("MIDDLE_FEE_RATIO",[])
        const lever3 = await  handleViewMethod("DOWN_FEE_RATIO",[])

        setReferObj({
            lever1,
            lever2,
            lever3
        })
    }

    const getRate= async ()=>{
        const rate1 = await  handleViewMethod("TOTAL_REWARD_RATIO_ONE",[])
        const rate2 = await  handleViewMethod("TOTAL_REWARD_RATIO_TWO",[])
        const rate3 = await  handleViewMethod("TOTAL_MAIN_RATIO",[])

        setRate({
            rate1,
            rate2,
            rate3
        })
    }

    const getUserMintMax = async ()=>{
        const maxM = await  handleViewMethod("userMintMax",[])
        setUserMintMax(maxM)
    }

    const getWList = async ()=>{
        const length = await  handleViewMethod("getWListLength",[])
        let arr = []
        for(let i = 0;i<length;i++){
            const item = await  handleViewMethod("whiteLists",[i])
            arr.push(item)
        }
        setWhitelistArr(arr)
    }

    const getAllocation = async ()=>{
        const DOWN_FEE_RATIO  = await  handleViewMethod("DOWN_FEE_RATIO",[])
        const MIDDLE_FEE_RATIO  = await  handleViewMethod("MIDDLE_FEE_RATIO",[])
        const TOP_FEE_RATIO  = await  handleViewMethod("TOP_FEE_RATIO",[])

        const SBT003_RATE_ONE  = await  handleViewMethod("SBT003_RATE_ONE",[])
        const SBT003_RATE_TWO  = await  handleViewMethod("SBT003_RATE_TWO",[])
        const SBT003_RATE_THREE  = await  handleViewMethod("SBT003_RATE_THREE",[])

        const TOTAL_SBT_003_AMOUNT  = await  handleViewMethod("TOTAL_SBT_003_AMOUNT",[])


        setAllocation({
            DOWN_FEE_RATIO,
            MIDDLE_FEE_RATIO,
            TOP_FEE_RATIO,
            SBT003_RATE_ONE,
            SBT003_RATE_TWO,
            SBT003_RATE_THREE,
            TOTAL_SBT_003_AMOUNT
        })
    }

    const transferOwnership = async ()=>{
        await handleDealMethod("transferOwnership",[form.getFieldValue().owner])
        getOwner()
    }
    const setBaseURI = async ()=>{
        await handleDealMethod("setBaseURI",[form.getFieldValue().baseurl])
        getBaseUrl()
    }

    const  handleSetFee = async ()=>{
        await handleDealMethod("setFee",[state.api.utils.toWei(form.getFieldValue().fee)])
        getFee()
    }

    const  setDistribute = async ()=>{
        await handleDealMethod("setDistribute",[form.getFieldValue().distribute1,form.getFieldValue().distribute2,form.getFieldValue().distribute3])
        getAllocation()
    }

    const  setSbt003AmountRate = async ()=>{
        await handleDealMethod("setSbt003AmountRate",[form.getFieldValue().sbt1,form.getFieldValue().sbt2,form.getFieldValue().sbt3])
        getAllocation()
    }

    const  setSBT003Amount = async ()=>{
        await handleDealMethod("setSBT003Amount",[form.getFieldValue().sbtAmount])
        getAllocation()
    }
    const handleSetReceiver = async ()=>{
        await handleDealMethod("setFeeReceiver",[form.getFieldValue().feeReceiver])
        getFeeReceiver()
    }


    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        await getData()
    }, [state.account]);

    return (
        <FireLockStyle>
            {isShowAdd&&<AddWhiteListAddr updateData={()=>{getWList()}} closeDialog={()=>{setShowAdd(false)}}/>}
            {isShowRemove&&<RemoveWhiteListAddr updateData={()=>{getWList()}} closeDialog={()=>{setShowRemove(false)}}/>}
            <h1 className="title">
                FireSeed Manage
            </h1>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="nav-list">
                        <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={() => {
                            setCurNav(1)
                        }}>
                            Owner
                        </div>
                        <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={() => {
                            setCurNav(2)
                        }}>
                            White List
                        </div>
                        <div className={"nav-item " + (curNav == 4 ? "active" : "")} onClick={() => {
                            setCurNav(4)
                        }}>
                            Mint Revenue Allocation
                        </div>
                    </div>
                    {curNav==1&&<div className="part1">
                        <div className="content-item">
                            <h3>Owner Address</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {ownerAddr}
                                    </div>
                                </div>
                                <Form.Item
                                    name="owner"
                                    label="owner address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input owner Address!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                transferOwnership()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>BaseUrl </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {BUrl}
                                    </div>
                                </div>
                                <Form.Item
                                    name="baseurl"
                                    label="baseurl"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input baseurl !'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setBaseURI()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>}

                    {curNav==2&&<div className="part2">

                    </div>}
                </div>
                {curNav==2&&<div className="panel-container">
                    <div className="panel-title">
                        White List
                        <Button type="primary" onClick={()=>{setShowAdd(true)}}>Add</Button>
                        <Button type="primary" onClick={()=>{setShowRemove(true)}}>Remove</Button>
                    </div>

                    <div className="white-list">
                        <div className="list-item">
                            <strong className="pid">
                                PID
                            </strong>
                            <strong className="user">
                                USERADDR
                            </strong>
                        </div>
                        {whitelist.map(item=>{
                            return (
                                <div className="list-item">
                                    <div className="pid">
                                        {item.pid}
                                    </div>
                                    <div className="user">
                                        {item.user}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>}
                {curNav==4&&<div className="panel-box">
                    <div className="panel-container">

                        <div className="content-item">
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {feeReceiver}
                                    </div>
                                </div>
                                <Form.Item
                                    name="feeReceiver"
                                    label="feeReceiver"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input rate1!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Button type="primary" className="max-btn" onClick={() => {
                                    handleSetReceiver()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>

                        <div className="content-item">
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {fee}
                                    </div>
                                </div>
                                <Form.Item
                                    name="fee"
                                    label="fee"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input rate1!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Button type="primary" className="max-btn" onClick={() => {
                                    handleSetFee()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>

                        <div className="content-item">
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                       Lv1:
                                    </div>
                                    <div className="value">
                                        {allocation.DOWN_FEE_RATIO}
                                    </div>
                                    <div className="name">
                                        Lv2:
                                    </div>
                                    <div className="value">
                                        {allocation.MIDDLE_FEE_RATIO}
                                    </div>
                                    <div className="name">
                                        Lv3:
                                    </div>
                                    <div className="value">
                                        {allocation.TOP_FEE_RATIO}
                                    </div>
                                </div>
                                <div className="current">
                                    <div className="name">
                                        Total Reward:
                                    </div>
                                    <div className="value">
                                        {parseInt(allocation.DOWN_FEE_RATIO)+parseInt(allocation.MIDDLE_FEE_RATIO) + parseInt(allocation.TOP_FEE_RATIO)}
                                    </div>

                                </div>
                                <Form.Item
                                    name="distribute1"
                                    label="distribute1"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input rate1!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="distribute2"
                                    label="distribute2"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input rate1!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="distribute3"
                                    label="distribute3"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input rate1!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    setDistribute()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <div className="content-item">
                            <div className="current">
                                <div className="name">
                                    Lv1:
                                </div>
                                <div className="value">
                                    {allocation.SBT003_RATE_ONE}
                                </div>
                                <div className="name">
                                    Lv2:
                                </div>
                                <div className="value">
                                    {allocation.SBT003_RATE_TWO}
                                </div>
                                <div className="name">
                                    Lv3:
                                </div>
                                <div className="value">
                                    {allocation.SBT003_RATE_THREE}
                                </div>
                            </div>
                            <Form form={form} name="control-hooks">
                            <Form.Item
                                name="sbt1"
                                label="sbt1"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input rate1!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="sbt2"
                                label="sbt2"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input rate1!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="sbt3"
                                label="sbt3"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input rate1!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setSbt003AmountRate()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <div className="current">
                                <div className="name">
                                    TOTAL_SBT_003_AMOUNT
                                    (lssue SBT-003/FireSoul)
                                </div>
                                <div className="value">
                                    {allocation.TOTAL_SBT_003_AMOUNT}
                                </div>

                            </div>
                            <Form form={form} name="control-hooks">
                            <Form.Item
                                name="sbtAmount"
                                label="sbtAmount"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input sbtAmount!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setSBT003Amount()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>}
            </div>
        </FireLockStyle>
    )
}
export default FireLock
