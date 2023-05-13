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
    const [activationScore, setActivationScore] = useState("")
    const [userMaxMint, setUserMintMax] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowSubAdd, setShowSubAdd] = useState(false)

    const [isShowRemove, setShowRemove] = useState(false)
    const [isShowSubRemove, setShowSubRemove] = useState(false)


    const [intervalTime, setIntervalTime] = useState()
    const [ReputationAmount, setReputationAmount] = useState()
    const [userTime, setUserTime] = useState()
    const [rate, setRate] = useState()
    const [creationScore, setCreationScore] = useState()
    const [memrate, setMemRate] = useState()



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
        let contractTemp = await getContractByName("cityNode", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("cityNode", state.api,)

        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getCreationScore()
        getactivationScore()
        getMemberRate()
    }


    const getOwner = async ()=>{
        const ownerAddr = await  handleViewMethod("owner",[])
        setOwner(ownerAddr)
    }
    const getactivationScore = async ()=>{
        const intervalTime = await  handleViewMethod("activationScore",[])
        setActivationScore(intervalTime)
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

    const getCreationScore= async ()=>{
        const rate = await  handleViewMethod("creationScore",[])
        setCreationScore(rate)
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
    const getMemberRate = async ()=>{
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        const rate= await viewMethod(contractTemp, state.account, "CITY_NODE_RATE", [])
        setMemRate(rate)
    }
    const setWhiteUser= async ()=>{
        await handleDealMethod("setWhiteUser",[form.getFieldValue().whiteUser,true])
    }
    const transferOwnership = async ()=>{
        await handleDealMethod("transferOwnership",[form.getFieldValue().owner])
        getOwner()
    }
    const handleSetActivationScore= async ()=>{
        await handleDealMethod("setActivationScore",[form.getFieldValue().ActivationScore])
        activationScore()
    }
    const setCityNodeRate= async ()=>{
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        const rate= await dealMethod(contractTemp, state.account, "setCityNodeRate", [form.getFieldValue().memrate])
        getMemberRate()
    }
    const handleSetCreationScore = async ()=>{
        await handleDealMethod("setCreationScore",[form.getFieldValue().CreationScore])
        getCreationScore()
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
              City Node Manage
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

                        <div className="content-item">
                            <h3>Owner Address</h3>
                            <Form form={form} name="control-hooks">

                                <Form.Item
                                    name="whiteUser"
                                    label="white user addr"
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
                                setWhiteUser()
                            }}>
                                Submit
                            </Button>

                        </div>
                    </div>}
                    {curNav==2&&<div className="part1">
                        <div className="content-item">
                            <h1>FID Score Limit</h1>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current
                                    </div>
                                    <div className="value">
                                        {creationScore}
                                    </div>
                                </div>
                                <Form.Item
                                    name="CreationScore"
                                    label="CreationScore"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input CreationScore!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handleSetCreationScore()
                            }}>
                                Submit
                            </Button>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current
                                    </div>
                                    <div className="value">
                                        {activationScore}
                                    </div>
                                </div>
                                <Form.Item
                                    name="ActivationScore"
                                    label="ActivationScore"
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
                                handleSetActivationScore()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>}
                    {curNav==3&&<div className="part1">
                        <div className="content-item">
                            <h1>Node Members Percentage</h1>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Node Members Percentage
                                    </div>
                                    <div className="value">
                                        {memrate}
                                    </div>
                                </div>
                                <div className="current">
                                    <div className="name">
                                        Node Admin Percentage
                                    </div>
                                    <div className="value">
                                        {100-memrate}
                                    </div>
                                </div>
                                <Form.Item
                                    name="memrate"
                                    label="memrate"
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
                                setCityNodeRate()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>}
                </div>


            </div>
        </FireLockStyle>
    )
}
export default FireLock
