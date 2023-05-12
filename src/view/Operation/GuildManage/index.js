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
    const [addressArr, setAddressArr] = useState([])


    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [activationScore, setActivationScore] = useState("")
    const [userMaxMint, setUserMintMax] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowSubAdd, setShowSubAdd] = useState(false)

    const [isShowRemove, setShowRemove] = useState(false)
    const [isShowSubRemove, setShowSubRemove] = useState(false)


    const [status, setStatus] = useState()
    const [max, setMax] = useState()
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
        let contractTemp = await getContractByName("Guild", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("Guild", state.api,)

        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getCreationScore()
        getAddrArr()
        getStatus()
        getMemberRate()
        getMAX()
    }


    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }


    const getCreationScore = async () => {
        const rate = await handleViewMethod("joinRestrictions", [])
        setCreationScore(rate)
    }

    const getAddrArr = async () => {
        const length = await handleViewMethod("getSecondaryAdministratorsLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const address = await handleViewMethod("secondaryAdministrators", [i])
            arr.push(address)
        }
        setAddressArr(arr)
    }
    const getMemberRate = async () => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        const rate = await viewMethod(contractTemp, state.account, "CITY_NODE_RATE", [])
        setMemRate(rate)
    }
    const getStatus = async () => {
        const rate = await handleViewMethod("status", [])

        setStatus(rate)
    }
    const getMAX = async () => {
        const rate = await handleViewMethod("MAX", [])

        setMax(rate/10**18)
    }


    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }

    const setCityNodeRate = async () => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        const rate = await dealMethod(contractTemp, state.account, "setCityNodeRate", [form.getFieldValue().memrate])
        getMemberRate()
    }
    const handleSetCreationScore = async () => {
        await handleDealMethod("setJoinRestrictions", [form.getFieldValue().CreationScore])
        getCreationScore()
    }
    const setMAX =   async () => {
        await handleDealMethod("setMAX", [state.api.utils.toWei(form.getFieldValue().max.toString())])
        getMAX()
    }
    const pauseContract = async () => {
        await handleDealMethod("pauseContract", [])
        getStatus()
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
            {isShowSubAdd && <AddCateGoryAddr updateData={() => {
                getAddrArr()
            }} closeDialog={() => {
                setShowSubAdd(false)
            }}/>}
            {isShowRemove && <RemoveAddr updateData={() => {
                getAddrArr()
            }} closeDialog={() => {
                setShowRemove(false)
            }}/>}

            <h1 className="title">
                Cuild Manage
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
                            White List
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
                            <h3>Pause</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {status==true?"true":"false"}
                                    </div>
                                </div>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                pauseContract()
                            }}>
                                Submit
                            </Button>

                        </div>

                    </div>}
                    {curNav == 2 && <div className="part1">
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
                            <h3>Single Withdraw Limit</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current
                                    </div>
                                    <div className="value">
                                        {max}
                                    </div>
                                </div>
                                <Form.Item
                                    name="max"
                                    label="max"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input Max!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setMAX()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>}
                    {curNav == 3 && <div className="part1">
                        <div className="panel-title">
                            White List
                            <Button type="primary" onClick={()=>{setShowSubAdd(true)}}>Add</Button>
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
                            {addressArr.map(item=>{
                                return (
                                    <div className="list-item">
                                        <div className="pid">
                                            {item}
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>}
                </div>


            </div>
        </FireLockStyle>
    )
}
export default FireLock
