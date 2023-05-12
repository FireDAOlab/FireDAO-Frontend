import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {useNavigate, useLocation} from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";
import AddWhiteListAddr from "./component/AddWhiteListAddr";
import AddSubAddr from "./component/AddSubAddr";

import RemoveAddr from "./component/RemoveAddr";
const FireLock = (props) => {
    let {state, dispatch} = useConnect();
    const [whitelist, setWhitelistArr] = useState([])
    const [allocation, setAllocation] = useState({})
    const [tokens, setTokens] = useState([])
    const [subTokens, setSubTokens] = useState([])



    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [feeRec, setFeeRe] = useState("")
    const [userMaxMint, setUserMintMax] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowSubAdd, setShowSubAdd] = useState(false)

    const [isShowRemove, setShowRemove] = useState(false)
    const [isShowSubRemove, setShowSubRemove] = useState(false)



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
        let contractTemp = await getContractByName("Reputation", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("Reputation", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getTokens()

    }


    const getOwner = async ()=>{
        const ownerAddr = await  handleViewMethod("owner",[])
        setOwner(ownerAddr)
    }

    const getTokens = async ()=>{
        const length = await  handleViewMethod("getTokensLength",[])
        let arr = []
        for(let i = 0;i<length;i++){
            const item = await  handleViewMethod("tokens",[i])
            const coefficients = await  handleViewMethod("coefficients",[item])
            arr.push({
                address:item,
                coefficients:coefficients
            })

        }
        setTokens(arr)

        const length2 = await  handleViewMethod("getSubTokensLength",[])
        let arr2 = []
        for(let i = 0;i<length2;i++){
            const item = await  handleViewMethod("subTokens",[i])
            const coefficients = await  handleViewMethod("coefficients",[item])
            arr2.push({
                address:item,
                coefficients:coefficients
            })

        }
        setSubTokens(arr2)
    }

    const transferOwnership = async ()=>{
        await handleDealMethod("transferOwnership",[form.getFieldValue().owner])
        getOwner()
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
            {isShowSubAdd&&<AddSubAddr updateData={()=>{getTokens()}} closeDialog={()=>{setShowSubAdd(false)}}/>}
            {isShowAdd&&<AddWhiteListAddr updateData={()=>{getTokens()}} closeDialog={()=>{setShowAdd(false)}}/>}
            {isShowRemove&&<RemoveAddr updateData={()=>{getTokens()}} closeDialog={()=>{setShowRemove(false)}}/>}
            {isShowSubRemove&&<RemoveAddr updateData={()=>{getTokens()}} closeDialog={()=>{setShowSubRemove(false)}}/>}

            <h1 className="title">
                Reputation Manage
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
                            FID Score Info
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
                                Address
                            </strong>
                            <strong className="user">
                                Coefficients
                            </strong>
                        </div>
                        {tokens.map(item=>{
                            return (
                                <div className="list-item">
                                    <div className="pid">
                                        {item.address}
                                    </div>
                                    <div className="user">
                                        {item.coefficients}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h2 className="panel-title">Sub Part
                        <Button type="primary" onClick={()=>{setShowSubAdd(true)}}>Add</Button>
                        <Button type="primary" onClick={()=>{setShowSubRemove(true)}}>Remove</Button>
                    </h2>
                    <div className="white-list">
                        <div className="list-item">
                            <strong className="pid">
                                Address
                            </strong>
                            <strong className="user">
                                Coefficients
                            </strong>
                        </div>
                        {subTokens.map(item=>{
                            return (
                                <div className="list-item">
                                    <div className="pid">
                                        {item.address}
                                    </div>
                                    <div className="user">
                                        {item.coefficients}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </div>
        </FireLockStyle>
    )
}
export default FireLock
