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
    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [feeRec, setFeeRe] = useState("")
    const [lowestMint, setLowestMint] = useState(0)
    const [userMaxMint, setUserMintMax] = useState(0)
    const [whiteMaxMint, setWhiteMaxMint] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowRemove, setShowRemove] = useState(false)

    const [fee, setFee] = useState(0)
    const [whitelistDiscount, setWhitelistDiscount] = useState(0)
    const [referObj, setReferObj] = useState({})
    const [rateObj, setRate] = useState({})

    const [discountArr, setDiscountArr] = useState([])



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
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getFeeReceiver()
        getLowestMint()
        getUserMintMax()
        getWhiteMaxMint()
        getWhitelist()
        getFee()
        getDiscountFactors()
        getWhitelistDiscount()
        getReferRate()
        getRate()
    }

    const dealNum = (num) => {
        return parseInt(num * 100) / 100
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
        const feeReceiver = await  handleViewMethod("rainbowTreasury",[])
        setFeeRe(feeReceiver)
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
    const getLowestMint = async ()=>{
        const lowestMint = await  handleViewMethod("lowestMint",[])
        setLowestMint(lowestMint)
    }
    const getUserMintMax = async ()=>{
        const maxM = await  handleViewMethod("userMintMax",[])
        setUserMintMax(maxM)
    }
    const getWhitelist = async ()=>{
        const length = await  handleViewMethod("wListLength",[])
        let arr= []
        for(let i=0;i<length;i++){
            const item = await  handleViewMethod("whiteList",[i])
            arr.push(item)
        }
        setWhitelistArr(arr)
    }
    const getWhiteMaxMint = async ()=>{
        const maxM = await handleViewMethod("wListMintMax",[])
        setWhiteMaxMint(maxM)
    }

    const changeFeeReceiver = async ()=>{
        await handleDealMethod("setRainbowTreasury",[form.getFieldValue().FeeReceiver])
        getFeeReceiver()
    }
    const hanleSetWhitelistDiscount = async ()=>{
        await  handleDealMethod("setWhitelistDiscount",[form.getFieldValue().WhitelistDiscount])
        getWhitelistDiscount()
    }

    const handleSetLowestMint = async ()=>{
        await  handleDealMethod("setLowestMint",[form.getFieldValue().GeneralUserMin])
        getLowestMint()
    }
    const setInviteFeeRatio = async ()=>{
        await  handleDealMethod("setInviteFeeRatio",[form.getFieldValue().lever1,form.getFieldValue().lever2,form.getFieldValue().lever3,])
        getReferRate()
    }
    const setTotalRewardRatioOne = async ()=>{
        await  handleDealMethod("setTotalRewardRatioOne",[form.getFieldValue().rate1,form.getFieldValue().rate2,form.getFieldValue().rate3,])
        getRate()
    }

    const setDiscountFactor = async ()=>{
        await  handleDealMethod("setDiscountFactor",[form.getFieldValue().start,form.getFieldValue().end,form.getFieldValue().discount,])
        getDiscountFactors()
    }
    const handleSetMaxMint= async ()=>{
        await  handleDealMethod("setUserMintMax",[form.getFieldValue().UserMintMax])
        getUserMintMax()
    }
    const handleSetWhitelistMaxMint= async ()=>{
        await  handleDealMethod("setWListMax",[form.getFieldValue().WhitelistUserMintMax])
        getWhiteMaxMint()
    }
    const transferOwnership = async ()=>{
        await handleDealMethod("transferOwnership",[form.getFieldValue().owner])
        getOwner()
    }
    const handleSetFee = async ()=>{
        await handleDealMethod("setFee",[state.api.utils.toWei(form.getFieldValue().MintFee)])
        getFee()
    }

    const deleteDiscountFactor = async (param)=>{
        await handleDealMethod("deleteDiscountFactor",[param.start,param.end])
        getDiscountFactors()
    }
    const addWhiteListUser = async ()=>{
        await handleDealMethod("addWhiteListUser",[])
        // getWhitelist()
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
            {isShowAdd&&<AddWhiteListAddr updateData={()=>{getWhitelist()}} closeDialog={()=>{setShowAdd(false)}}/>}
            {isShowRemove&&<RemoveWhiteListAddr updateData={()=>{getWhitelist()}} closeDialog={()=>{setShowRemove(false)}}/>}
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
                        <div className={"nav-item " + (curNav == 3 ? "active" : "")} onClick={() => {
                            setCurNav(3)
                        }}>
                            Discount
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
                            <h3>Revenue Address</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {feeRec}
                                    </div>
                                </div>
                                <Form.Item
                                    name="FeeReceiver"
                                    label="FeeReceiver"
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
                                changeFeeReceiver()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>}
                    {curNav==2&&<div className="part2">
                        <div className="content-item">
                            <h1>Mint Amount(s)</h1>
                            <h3>
                                General user Min
                            </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {lowestMint}
                                    </div>
                                </div>
                                <Form.Item
                                    name="GeneralUserMin"
                                    label="GeneralUserMin"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input GeneralUserMin!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    handleSetLowestMint()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <div className="content-item">
                            <h3>
                                General user Max
                            </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {userMaxMint}
                                    </div>
                                </div>
                                <Form.Item
                                    name="UserMintMax"
                                    label="UserMintMax"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input UserMintMax!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    handleSetMaxMint()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <div className="content-item">
                            <h3>
                                 Whitelist user Max
                            </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {whiteMaxMint}
                                    </div>
                                </div>
                                <Form.Item
                                    name="WhitelistUserMintMax"
                                    label="WhitelistUserMintMax"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input WhitelistUserMintMax!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    handleSetWhitelistMaxMint()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>}
                </div>
                {curNav==2&&<div className="panel-container">
                    <div className="panel-title">
                        White List
                        <Button type="primary" onClick={()=>{setShowAdd(true)}}>Add</Button>
                        <Button type="primary" onClick={()=>{setShowRemove(true)}}>Remove</Button>
                    </div>

                    <div className="white-list">
                        {whitelist.map(item=>{
                            return (
                                <div>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>}
                {curNav==3&&<div className="panel-box">
                    <div className="panel-container">
                        <div className="content-item">
                            <h1>FireSeed Discount</h1>
                            <h3>
                                Mint Fee
                            </h3>
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
                                    name="MintFee"
                                    label="MintFee"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input MintFee!'},
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
                            <h3>
                                Mint Discount
                            </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {userMaxMint}
                                    </div>
                                </div>
                                <Form.Item
                                    name="MintDiscount"
                                    label="MintDiscount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input UserMintMax!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    handleSetMaxMint()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-container">
                        <h1>
                            Mint Amount Discount
                        </h1>
                        <div className="content-item">
                            <div className="discount-list">
                                {discountArr.map(item=>{
                                    return (<div className="list-item">
                                        <div className="start">
                                            {item.start}~
                                        </div>
                                        <div className="end">
                                            {item.end}
                                        </div>
                                        <div className="discount">
                                            {item.discount}
                                        </div>
                                        <div className="operate">
                                            <Button type="primary" onClick={()=>{deleteDiscountFactor(item)}}>
                                                Delete
                                            </Button>
                                        </div>
                                    </div>)
                                })}
                            </div>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="start"
                                    label="start"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input start!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="end"
                                    label="end"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input end!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="discount"
                                    label="discount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input discount!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    setDiscountFactor()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-container">
                        <h1>
                           Whitelist Discount
                        </h1>
                        <div className="content-item">
                            <h3>
                                Whitelist Discount
                            </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {whitelistDiscount}
                                    </div>
                                </div>
                                <Form.Item
                                    name="WhitelistDiscount"
                                    label="WhitelistDiscount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input WhitelistDiscount!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    hanleSetWhitelistDiscount()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>}
                {curNav==4&&<div className="panel-box">
                    <div className="panel-container">
                        <div className="content-item">
                            <h1>Mint Revenue Allocation</h1>
                            <h3>
                                Referrer
                            </h3>
                            <div className="current">
                                <div className="name">
                                    Current:
                                </div>
                                <div className="value">
                                    {rateObj.rate1}
                                </div>
                            </div>
                            <h3>
                                City Node
                            </h3>
                            <div className="current">
                                <div className="name">
                                    Current:
                                </div>
                                <div className="value">
                                    {rateObj.rate2}
                                </div>
                            </div>
                            <h3>
                                RainbowCity Treasury
                            </h3>
                            <div className="current">
                                <div className="name">
                                    Current:
                                </div>
                                <div className="value">
                                    {rateObj.rate3}
                                </div>
                            </div>
                        </div>
                        <div className="content-item">
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="rate1"
                                    label="rate1"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input rate1!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="rate2"
                                    label="rate2"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input rate2!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="rate3"
                                    label="rate3"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input rate3!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    setTotalRewardRatioOne()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-container">
                        <h1>
                           Category: Referrer
                        </h1>
                        <div className="content-item">
                            <h3>
                                Lv1
                            </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {referObj.lever1}
                                    </div>
                                </div>

                            </Form>
                        </div>
                        <div className="content-item">
                            <h3>
                                Lv2
                            </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {referObj.lever2}
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="content-item">
                            <h3>
                                Lv3
                            </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {referObj.lever3}
                                    </div>
                                </div>
                                <Form.Item
                                    name="lever1"
                                    label="lever1"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input lever1!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="lever2"
                                    label="lever2"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input lever2!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="lever3"
                                    label="lever3"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input lever3!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    setInviteFeeRatio()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>}
            </div>
        </FireLockStyle>
    )
}
export default FireLock
