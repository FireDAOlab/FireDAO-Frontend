import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import FireLockStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";

import addressMap from "../../../api/addressMap";

const FireLock = (props) => {
    let {state, dispatch} = useConnect();

    const [ownerAddr, setOwner] = useState("")
    const [contractIntervals, setcontractIntervals] = useState()
    const [interval, setinterval] = useState()
    const [reputationAmount, setreputationAmount] = useState()
    const [ reward,  setRewards] = useState()
    const [ min,  setmin] = useState()
    const [ max,  setmax] = useState()

    const [form] = Form.useForm();


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
        let contractTemp = await getContractByName("autolp", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("autolp", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }



    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }

    const getcontractIntervals = async () => {
        const res = await handleViewMethod("contractIntervals", [])
        setcontractIntervals(res)
    }

    const getinterval= async () => {
        const res = await handleViewMethod("interval", [])
        setinterval(res)
    }
    const getreputationAmount= async () => {
        const res = await handleViewMethod("reputationAmount", [])
        setreputationAmount(res)
    }
    const getRewards= async () => {
        const res = await handleViewMethod("reward", [])
        setRewards(res/10**18)
    }
    const getMins= async () => {
        const res = await handleViewMethod("min", [])
        setmin(res/10**18)
    }
    const getMax= async () => {
        const res = await handleViewMethod("max", [])
        setmax(res/10**18)
    }
    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }
    const handleSetcontractIntervals = async () => {
        await handleDealMethod("setcontractIntervals", [form.getFieldValue().contractIntervals])
        getcontractIntervals()
    }
    const handlesetinterval = async () => {
        await handleDealMethod("setinterval", [form.getFieldValue().interval])
        getinterval()
    }
    const handlesetreputationAmount = async () => {
        await handleDealMethod("setreputationAmount", [form.getFieldValue().reputationAmount])
        getreputationAmount()
    }
    const handlesetreward = async () => {
        await handleDealMethod("setreward", [state.api.utils.toWei(form.getFieldValue().reward)])
        getRewards()
    }
    const handlesetmins= async () => {
        await handleDealMethod("setmin", [state.api.utils.toWei(form.getFieldValue().min)])
        getMins()
    }
    const handlesetmax= async () => {
        await handleDealMethod("setmax", [state.api.utils.toWei(form.getFieldValue().max)])
        getMax()
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getOwner()
        getcontractIntervals()
        getinterval()
        getreputationAmount()
        getRewards()
        getMins()
    }, [state.account]);

    return (
        <FireLockStyle>
            <h1 className="title">
               Auto Reflow LP Manage
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
                        <div className="content-item">
                            <h3>Frequency </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {contractIntervals/60} mins
                                    </div>
                                </div>
                                <Form.Item
                                    name="contractIntervals"
                                    label="contractIntervals"
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
                                handleSetcontractIntervals()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>Address Frequency </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {interval/60} mins
                                    </div>
                                </div>
                                <Form.Item
                                    name="interval"
                                    label="interval"
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
                                handlesetinterval()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>FID Score </h3>
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
                                handlesetreputationAmount()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3> Rewards</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {reward}
                                    </div>
                                </div>
                                <Form.Item
                                    name="reward"
                                    label="reward"
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
                                handlesetreward()
                            }}>
                                Submit
                            </Button>
                        </div>

                        <div className="content-item">
                            <h3> Min</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {min}
                                    </div>
                                </div>
                                <Form.Item
                                    name="min"
                                    label="min"
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
                                handlesetmins()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3> Max</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {max}
                                    </div>
                                </div>
                                <Form.Item
                                    name="min"
                                    label="min"
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
                                handlesetmax()
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
