import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {useNavigate, useLocation} from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";
import AddCateGoryAddr from "./component/AddCateGoryAddr.js";

import RemoveAddr from "./component/RemoveAddr";
const FireLock = (props) => {
    let {state, dispatch} = useConnect();
    const [whitelist, setWhitelistArr] = useState([])
    const [allocation, setAllocation] = useState({})
    const [allocationFundAddress, setAllocationFundAddress] = useState([])
    const [tokenList, setTokenList] = useState([])



    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [feeRec, setFeeRe] = useState("")
    const [userMaxMint, setUserMintMax] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowSubAdd, setShowSubAdd] = useState(false)

    const [isShowRemove, setShowRemove] = useState(false)
    const [isShowSubRemove, setShowSubRemove] = useState(false)


    const [intervalTime, setIntervalTime] = useState()
    const [ReputationAmount, setReputationAmount] = useState()
    const [userTime, setUserTime] = useState()
    const [rate, setRate] = useState()
    const [award, setAward] = useState()
    const [wethAddr, setWethAddr] = useState()



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
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)

        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getIntervalTime()
        getReputationAmount()
        getUserTime()
        getRate()
        getAward()
        getAllocationFundAddress()
        getWethAddr()
    }


    const getOwner = async ()=>{
        const ownerAddr = await  handleViewMethod("owner",[])
        setOwner(ownerAddr)
    }
    const getIntervalTime = async ()=>{
        const intervalTime = await  handleViewMethod("intervalTime",[])
        setIntervalTime(intervalTime)
    }
    const getReputationAmount = async ()=>{
        const intervalTime = await  handleViewMethod("ReputationAmount",[])
        setReputationAmount(intervalTime)
    }
    const getUserTime= async ()=>{
        const intervalTime = await  handleViewMethod("userTime",[])
        if(intervalTime>0){
            setUserTime(intervalTime/3600)
        }
    }
    const getRate= async ()=>{
        const rate = await  handleViewMethod("rate",[])
        setRate(rate)
    }
    const getAward= async ()=>{
        const rate = await  handleViewMethod("award",[])
        setAward(rate)
    }
    const getWethAddr= async ()=>{
        const rate = await  handleViewMethod("weth",[])
        setWethAddr(rate)
    }

    const getAllocationFundAddress= async ()=>{
        const length = await  handleViewMethod("getAllocationFundAddressLength",[])
        let arr = []
        for(let i = 0;i<length;i++){
            const address = await  handleViewMethod("AllocationFundAddress",[i])
            const rate = await  handleViewMethod("distributionRatio",[address])
            arr.push({address,rate})
        }
        setAllocationFundAddress(arr)
    }

    const getTokenList= async ()=>{
        const length = await  handleViewMethod("getTokensLength",[])
        let arr = []
        for(let i = 0;i<length;i++){
            const address = await  handleViewMethod("tokenList",[i])
            const rate = await  handleViewMethod("distributionRatio",[address])
            arr.push({address,rate})
        }
        setTokenList(arr)
    }
    const transferOwnership = async ()=>{
        await handleDealMethod("transferOwnership",[form.getFieldValue().owner])
        getOwner()
    }
    const setSourceOfIncome= async ()=>{
        await handleDealMethod("setSourceOfIncome",[form.getFieldValue().SourceOfIncomeNum,form.getFieldValue().SourceOfIncomeUser,state.api.utils.toWei(form.getFieldValue().SourceOfIncomeAmount), ])
    }
    const handleSetIntervalTime = async ()=>{
        await handleDealMethod("setIntervalTime",[form.getFieldValue().IntervalTime])
        getIntervalTime()
    }
    const setAllowAddr = async ()=>{
        await handleDealMethod("setAllowAddr",[form.getFieldValue().AllowAddr])

    }

    const handleSetRate = async ()=>{
        await handleDealMethod("setRate",[form.getFieldValue().Rate])
        getIntervalTime()
    }
    const handleSetReputationAmount = async ()=>{
        await handleDealMethod("setReputationAmount",[form.getFieldValue().ReputationAmount])
        getReputationAmount()
    }
    const handleSetUerIntverTime = async ()=>{
        await handleDealMethod("setUerIntverTime",[form.getFieldValue().UserTime * 3600])
        getUserTime()
    }
    const handleSetAward = async ()=>{
        await handleDealMethod("setAward",[form.getFieldValue().Award ])
        getAward()
    }
   const setWeth= async ()=>{
        await handleDealMethod("setWeth",[form.getFieldValue().Weth ])
        getWethAddr()
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
            {isShowSubAdd&&<AddCateGoryAddr updateData={()=>{getAllocationFundAddress()}} closeDialog={()=>{setShowSubAdd(false)}}/>}
            {isShowRemove&&<RemoveAddr updateData={()=>{getAllocationFundAddress()}} closeDialog={()=>{setShowRemove(false)}}/>}

            <h1 className="title">
                TreasuryDistribution Manage
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
                            FID Score Limit
                        </div>
                        <div className={"nav-item " + (curNav == 3 ? "active" : "")} onClick={() => {
                            setCurNav(3)
                        }}>
                            Distribution
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
                    </div>}
                    {curNav==2&&<div className="part1">
                        <div className="content-item">

                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current
                                        Predefined
                                    </div>
                                    <div className="value">
                                        {intervalTime} s
                                    </div>
                                </div>
                                <Form.Item
                                    name="MinCreationScore"
                                    label="Min Creation Score"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input Min Creation Score!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handleSetIntervalTime()
                            }}>
                                Submit
                            </Button>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current
                                    </div>
                                    <div className="value">
                                        {rate}
                                    </div>
                                </div>
                                <Form.Item
                                    name="Rate"
                                    label="Rate"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input Rate!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handleSetRate()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>}

                </div>
                {curNav==3&&<div className="part3 panel-container">
                    <h2 className="panel-title">Category
                        <Button type="primary" onClick={()=>{setShowSubAdd(true)}}>Add</Button>
                        <Button type="primary" onClick={()=>{setShowRemove(true)}}>Remove</Button>
                    </h2>
                    <div className="white-list">
                        <div className="list-item">
                            <strong className="pid">
                                Address
                            </strong>
                            <strong className="user">
                                Rate
                            </strong>
                        </div>
                        {allocationFundAddress.map(item=>{
                            return (
                                <div className="list-item">
                                    <div className="pid">
                                        {item.address}
                                    </div>
                                    <div className="user">
                                        {item.rate}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>}
                {curNav==4&&<div className="part1 panel-container">
                    <div className="content-item">
                        <h3>Require</h3>
                        <Form form={form} name="control-hooks">
                            <div className="current">
                                <div className="name">
                                    FID Score
                                </div>
                                <div className="value">
                                    {ReputationAmount}
                                </div>
                            </div>
                            <Form.Item
                                name="ReputationAmount"
                                label="ReputationAmount"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input IntervalTime!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                        <Button type="primary" className="max-btn" onClick={() => {
                            handleSetReputationAmount()
                        }}>
                            Submit
                        </Button>
                    </div>
                    <div className="content-item">
                        <Form form={form} name="control-hooks">
                            <div className="current">
                                <div className="name">
                                    Reward/Frequent
                                </div>
                                <div className="value">
                                    {award}
                                </div>
                            </div>
                            <Form.Item
                                name="Award"
                                label="Award"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input Award!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                        <Button type="primary" className="max-btn" onClick={() => {
                            handleSetAward()
                        }}>
                            Submit
                        </Button>
                    </div>

                    <div className="content-item">
                        <Form form={form} name="control-hooks">
                            <div className="current">
                                <div className="name">
                                    Hour(s)/Frequent
                                </div>
                                <div className="value">
                                    {userTime}
                                </div>
                            </div>
                            <Form.Item
                                name="UserTime"
                                label="UserTime"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input UserTime!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                        <Button type="primary" className="max-btn" onClick={() => {
                            handleSetUerIntverTime()
                        }}>
                            Submit
                        </Button>
                    </div>
                    <div className="content-item">
                        <Form form={form} name="control-hooks">
                            <div className="current">
                                <div className="name">
                                    setWeth
                                </div>
                                <div className="value">
                                    {wethAddr}
                                </div>
                            </div>
                            <Form.Item
                                name="Weth"
                                label="Weth"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input UserTime!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                        <Button type="primary" className="max-btn" onClick={() => {
                            setWeth()
                        }}>
                            Submit
                        </Button>
                    </div>
                </div>}

            </div>
        </FireLockStyle>
    )
}
export default FireLock
