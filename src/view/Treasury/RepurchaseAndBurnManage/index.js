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
    const [allocationFundAddress, setAllocationFundAddress] = useState([])


    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")

    const [isShowSubAdd, setShowSubAdd] = useState(false)

    const [isShowRemove, setShowRemove] = useState(false)
    const [NORMAL_POOL_RATIO, setNORMAL_POOL_RATIOvalue] = useState()
    const [EMERGENCY_POOL_RATIO, setEMERGENCY_POOL_RATIOvalue] = useState()

    const [reputationAmount, setreputationAmount] = useState()
    const [tokenAmount, settokenAmount] = useState()


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
        let contractTemp = await getContractByName("poolManager", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }

    const handleNViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("normalPool", state.api,)

        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("poolManager", state.api,)

        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getData = async (page) => {
        getOwner()

        const NORMAL_POOL_RATIO = await  handleViewMethod("NORMAL_POOL_RATIO",[])
        const EMERGENCY_POOL_RATIO = await  handleViewMethod("EMERGENCY_POOL_RATIO",[])

        setNORMAL_POOL_RATIOvalue(NORMAL_POOL_RATIO)
        setEMERGENCY_POOL_RATIOvalue(EMERGENCY_POOL_RATIO)
        const reputationAmount = await  handleNViewMethod("reputationAmount",[])
        setreputationAmount(reputationAmount)
        const tokenAmount = await  handleNViewMethod("tokenAmount",[])
        settokenAmount(tokenAmount)
    }


    const getOwner = async ()=>{
        const ownerAddr = await  handleViewMethod("owner",[])
        setOwner(ownerAddr)
    }




    const transferOwnership = async ()=>{
        await handleDealMethod("transferOwnership",[form.getFieldValue().owner])
        getOwner()
    }


    const setNORMAL_POOL_RATIO= async ()=>{
        await handleDealMethod("setNORMAL_POOL_RATIO",[form.getFieldValue().NORMAL_POOL_RATIO ])
        getData()
    }
    const setEMERGENCY_POOL_RATIO= async ()=>{
        await handleDealMethod("setEMERGENCY_POOL_RATIO",[form.getFieldValue().EMERGENCY_POOL_RATIO ])
        getData()
    }
    const _setReputationAmount= async ()=>{
        await handleDealMethod("_setReputationAmount",[form.getFieldValue().reputationAmount ])
        getData()
    }
    const setQuota= async ()=>{
        await handleDealMethod("setQuota",[form.getFieldValue().tokenAmount ])
        getData()
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
            {isShowSubAdd&&<AddCateGoryAddr updateData={()=>{}} closeDialog={()=>{setShowSubAdd(false)}}/>}
            {isShowRemove&&<RemoveAddr updateData={()=>{}} closeDialog={()=>{setShowRemove(false)}}/>}

            <h1 className="title">
                Repurchase&Burn Manage
            </h1>
            <div className="panel-box">
                <div className="panel-container">

                   <div className="part1">
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
                       <h1>Fund Allocation</h1>
                       <div className="content-item">
                           <h3>Live Repo</h3>
                           <Form form={form} name="control-hooks">
                               <div className="current">
                                   <div className="name">
                                       Current:
                                   </div>
                                   <div className="value">
                                       {NORMAL_POOL_RATIO}
                                   </div>
                               </div>
                               <Form.Item
                                   name="NORMAL_POOL_RATIO"
                                   label="NORMAL_POOL_RATIO"
                                   validateTrigger="onBlur"
                                   validateFirst={true}
                                   rules={[
                                       {required: true, message: 'Please input !'},
                                   ]}
                               >
                                   <Input/>
                               </Form.Item>
                           </Form>
                           <Button type="primary" className="max-btn" onClick={() => {
                               setNORMAL_POOL_RATIO()
                           }}>
                               Submit
                           </Button>
                       </div>

                       <div className="content-item">
                           <h3>Emergency Repo</h3>
                           <Form form={form} name="control-hooks">
                               <div className="current">
                                   <div className="name">
                                       Current:
                                   </div>
                                   <div className="value">
                                       {EMERGENCY_POOL_RATIO}
                                   </div>
                               </div>
                               <Form.Item
                                   name="EMERGENCY_POOL_RATIO"
                                   label="EMERGENCY_POOL_RATIO"
                                   validateTrigger="onBlur"
                                   validateFirst={true}
                                   rules={[
                                       {required: true, message: 'Please input !'},
                                   ]}
                               >
                                   <Input/>
                               </Form.Item>
                           </Form>
                           <Button type="primary" className="max-btn" onClick={() => {
                               setEMERGENCY_POOL_RATIO()
                           }}>
                               Submit
                           </Button>
                       </div>
                       <h1>Limit</h1>
                       <div className="content-item">
                           <h3>Emergency Repo</h3>
                           <Form form={form} name="control-hooks">
                               <div className="current">
                                   <div className="name">
                                       Current:
                                   </div>
                                   <div className="value">
                                       {reputationAmount}
                                   </div>
                               </div>
                               <Form.Item
                                   name="reputationAmount"
                                   label="reputationAmount"
                                   validateTrigger="onBlur"
                                   validateFirst={true}
                                   rules={[
                                       {required: true, message: 'Please input !'},
                                   ]}
                               >
                                   <Input/>
                               </Form.Item>
                           </Form>
                           <Button type="primary" className="max-btn" onClick={() => {
                               _setReputationAmount()
                           }}>
                               Submit
                           </Button>
                       </div>

                       <h1> Live Reop Pool</h1>
                       <div className="content-item">
                           <h3>Quata</h3>
                           <Form form={form} name="control-hooks">
                               <div className="current">
                                   <div className="name">
                                       Current:
                                   </div>
                                   <div className="value">
                                       {tokenAmount}
                                   </div>
                               </div>
                               <Form.Item
                                   name="tokenAmount"
                                   label="tokenAmount"
                                   validateTrigger="onBlur"
                                   validateFirst={true}
                                   rules={[
                                       {required: true, message: 'Please input !'},
                                   ]}
                               >
                                   <Input/>
                               </Form.Item>
                           </Form>
                           <Button type="primary" className="max-btn" onClick={() => {
                               setQuota()
                           }}>
                               Submit
                           </Button>
                       </div>

                   </div>

                </div>

            </div>
        </FireLockStyle>
    )
}
export default FireLock
