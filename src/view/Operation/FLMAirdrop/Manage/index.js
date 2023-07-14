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
import {getWhitelist} from "../../../../graph/flmAirdrop";
import AddWhiteListAddr2 from "./component/AddWhiteListAddr2";

const FireLock = (props) => {
    let {state, dispatch} = useConnect();
    const [whitelist, setWhitelistArr] = useState([])
    const [adminArr, setWAdminArr] = useState([])

    const [isPause, setIsPause] = useState(false)

    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")

    const [ratioAmount, setratioAmount] = useState("")

    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowRemove, setShowRemove] = useState(false)

    const [isShowAddLevel2, setShowAddLevel2] = useState(false)

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
        let contractTemp = await getContractByName("FLMAirdrop", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("FLMAirdrop", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getWList()
        getAdmins()
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




    const getWList = async () => {
        const res = await getWhitelist()
        setWhitelistArr(res.data.claimRecords)
    }

    const getAdmins= async () => {
        const res = await handleViewMethod("getAdminsLevelTwoList", [])
        console.log(res)
        setWAdminArr(res)
    }

    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }


    const handlesetratioAmount = async () => {
        await handleDealMethod("setratioAmount", [form.getFieldValue().ratioAmount])
        getratioAmount()
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

            {isShowAddLevel2 && <AddWhiteListAddr2 updateData={() => {
                getAdmins()
            }} closeDialog={() => {
                setShowAddLevel2(false)
            }}/>}
            {isShowRemove && <RemoveWhiteListAddr updateData={() => {
                getAdmins()
            }} closeDialog={() => {
                setShowRemove(false)
            }}/>}
            <h1 className="title">
                FLM Airdrop Manage
            </h1>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="nav-list">
                        <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={() => {
                            setCurNav(1)
                        }}>
                            Owner
                        </div>
                        <div className={"nav-item " + (curNav == 3 ? "active" : "")} onClick={() => {
                            setCurNav(3)
                        }}>
                            Set Admin Level2
                        </div>

                        <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={() => {
                            setCurNav(2)
                        }}>
                            Set Whitelist
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

                    </div>}

                    {curNav == 2 && <div className="part2">

                    </div>}


                </div>
                {curNav == 2 && <div className="panel-container">
                    <div className="panel-title">
                        Set  Whitelist
                        <div className="btn-box">
                            <Button className="btn" type="primary" onClick={()=>{setShowAdd(true)}}>Add</Button>
                        </div>
                    </div>

                   <div className="fire-list-box">
                       <div className="list-header">
                           <div className="col">
                               No.
                           </div>
                           <div className="col">
                               PID
                           </div>
                           <div className="col">
                               Username
                           </div>
                           <div className="col">
                               FID
                           </div>
                           <div className="col">
                               Address
                           </div>
                           <div className="col">
                               Amount
                           </div>
                           {whitelist.map((item,index)=>{
                               return (<div className="list-item" key={index}>
                                   <div className="col">
                                       {index+1}
                                   </div>
                                   <div className="col">
                                       {item.pid}
                                   </div>
                                   <div className="col">
                                       {item.username}
                                   </div>
                                   <div className="col">
                                       {item.fid}
                                   </div>
                                   <div className="col">
                                       {item.user}
                                   </div>
                                   <div className="col">
                                       {item.amount}
                                   </div>
                               </div>)
                           })}
                       </div>
                   </div>

                </div>}
                {curNav == 3 && <div className="panel-container">
                    <div className="panel-title">
                        Set  Admin Level2
                        <div className="btn-box">
                            <Button className="btn" type="primary" onClick={()=>{setShowAddLevel2(true)}}>Add</Button>
                            <Button className="btn" type="primary" onClick={()=>{setShowRemove(true)}}>Remove</Button>
                        </div>
                    </div>

                    <div className="fire-list-box">
                        <div className="list-header">
                            <div className="col">
                                No.
                            </div>
                            <div className="col">
                                PID
                            </div>
                            <div className="col">
                                Username
                            </div>
                            <div className="col">
                                FID
                            </div>
                            <div className="col">
                                Address
                            </div>
                            <div className="col">
                                Amount
                            </div>
                            {whitelist.map((item,index)=>{
                                return (<div className="list-item" key={index}>
                                    <div className="col">
                                        {index+1}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.username}
                                    </div>
                                    <div className="col">
                                        {item.fid}
                                    </div>
                                    <div className="col">
                                        {item.user}
                                    </div>
                                    <div className="col">
                                        {item.amount}
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>

                </div>}
            </div>
        </FireLockStyle>
    )
}
export default FireLock
