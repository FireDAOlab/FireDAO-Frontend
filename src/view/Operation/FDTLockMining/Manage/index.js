import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card} from 'antd';
import {getContractByName, getContractByContract} from "../../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../../utils/contractUtil"
import {useNavigate, useLocation} from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../../utils/judgeStatus";
import AddWhiteListAddr from "./component/AddWhiteListAddr";
import RemoveWhiteListAddr from "./component/RemoveWhiteListAddr";

const FireLock = (props) => {
    let {state, dispatch} = useConnect();
    const [whitelist, setWhitelistArr] = useState([])
    const [allocation, setAllocation] = useState({})

    const [isPause, setIsPause] = useState(false)

    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")

    const [ratioAmount, setratioAmount] = useState("")

    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowRemove, setShowRemove] = useState(false)

    const [feeReceiver, setReceiver] = useState("")
    const [weightObj, setWeight] = useState({})

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
        let contractTemp = await getContractByName("FDTLockMining", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("FDTLockMining", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getratioAmount()
        getWeights()
        getStatus()
    }

    const dealNum = (num) => {
        return parseInt(num * 100) / 100
    }
    const getratioAmount = async () => {
        const ratioAmount = await handleViewMethod("ratioAmount", [])
        setratioAmount(ratioAmount)
    }
    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }
    const getStatus = async () => {
        const res = await handleViewMethod("status", [])
        setIsPause(res)
    }

    const getWeights = async () => {
        const w0 = await handleViewMethod("Weights", [0])
        const w1 = await handleViewMethod("Weights", [1])
        const w3 = await handleViewMethod("Weights", [3])
        const w6 = await handleViewMethod("Weights", [6])
        const w12 = await handleViewMethod("Weights", [12])
        const w24 = await handleViewMethod("Weights", [24])
        const w36 = await handleViewMethod("Weights", [36])
        setWeight({
            w0,
            w1,
            w3, w6, w12, w24, w36
        })
    }


    const getWList = async () => {
        const length = await handleViewMethod("getWListLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const item = await handleViewMethod("whiteLists", [i])
            arr.push(item)
        }
        setWhitelistArr(arr)
    }


    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }

    const setstatus= async () => {
        await handleDealMethod("setstatus", [])
        getStatus()
    }
    const handlesetratioAmount = async () => {
        await handleDealMethod("setratioAmount", [form.getFieldValue().ratioAmount])
        getratioAmount()
    }
    const handleSetWeight= async () => {
        console.log(form.getFieldValue().month,form.getFieldValue().weight)
        await handleDealMethod("setWeights", [form.getFieldValue().month,form.getFieldValue().weight])
        getWeights()
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
            {isShowAdd && <AddWhiteListAddr updateData={() => {
                getWList()
            }} closeDialog={() => {
                setShowAdd(false)
            }}/>}
            {isShowRemove && <RemoveWhiteListAddr updateData={() => {
                getWList()
            }} closeDialog={() => {
                setShowRemove(false)
            }}/>}
            <h1 className="title">
                FLM Mining Manage
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
                            Weight Coefficient
                        </div>

                    </div>
                    {curNav == 1 && <div className="part1">
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
                            <h3>Is Pause</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {isPause?"Pause":"UnPause"}
                                    </div>
                                </div>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setstatus()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {ratioAmount}
                                    </div>
                                </div>
                                <Form.Item
                                    name="ratioAmount"
                                    label="ratioAmount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input ratioAmount !'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handlesetratioAmount()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>}

                    {curNav == 2 && <div className="part2">

                    </div>}
                </div>
                {curNav == 2 && <div className="panel-container">
                    <div className="panel-title">
                        Set Weight Coefficient
                    </div>

                    <div className="fire-list-box">
                        <div className="list-header">
                            <strong className="pid">
                                LP Period
                            </strong>
                            <strong className="user">
                                Weight Coefficient
                            </strong>
                        </div>
                        <div className="list-item">
                            <div className="pid">
                                Demand Deposit
                            </div>
                            <div className="user">
                                {weightObj.w0}
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="pid">
                                1 Month
                            </div>
                            <div className="user">
                                {weightObj.w1}
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="pid">
                                3 Month
                            </div>
                            <div className="user">
                                {weightObj.w3}
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="pid">
                                6 Month
                            </div>
                            <div className="user">
                                {weightObj.w6}
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="pid">
                                12 Month
                            </div>
                            <div className="user">
                                {weightObj.w12}
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="pid">
                                24 Month
                            </div>
                            <div className="user">
                                {weightObj.w24}
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="pid">
                                36 Month
                            </div>
                            <div className="user">
                                {weightObj.w36}
                            </div>
                        </div>
                    </div>
                    <div className="content-item">
                        <h2>SET Weight</h2>
                        <Form form={form} name="control-hooks">

                            <Form.Item
                                name="month"
                                label="month"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input month !'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="weight"
                                label="weight"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input weight !'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                        <Button type="primary" className="max-btn" onClick={() => {
                            handleSetWeight()
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
