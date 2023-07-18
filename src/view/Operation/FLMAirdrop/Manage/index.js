import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card} from 'antd';
import {getContractByName, getContractByContract} from "../../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../../utils/contractUtil"
import {useNavigate, useLocation} from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../../utils/judgeStatus";
import AddWhiteListAddr from "./component/AddAirdropListAddr";
import RemoveWhiteListAddr from "./component/RemoveWhiteListAddr";
import {getWhitelist} from "../../../../graph/flmAirdrop";
import AddWhiteListAddr2 from "./component/AddSecondAdminAddr";
import addressMap from "../../../../api/addressMap";
import {MaxUint256} from "../../../../config/constants";
import {FireLockDecimal} from "../../../../utils/constants";
import BigNumber from "bignumber.js";

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

    const [poolFLMBalance, setPoolFLMBalance] = useState(0)
    const [coinAddr, setCoinAddr] = useState(addressMap["FLM"].address)

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
    const handleDealCoinMethod = async (name, address, params) => {
        let contractTemp = await getContractByContract("erc20", address, state.api,)
        return dealMethod(contractTemp, state.account, name, params)
    }

    const getData = async (page) => {
        getOwner()
        getWList()
        getAdmins()
        getTokenBalance()
        getISPause()
    }

    const dealNum = (num) => {
        return parseInt(num * 100) / 100
    }

    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }


    const getTokenBalance = async () => {
        let contractTemp = await getContractByContract("erc20", addressMap["FLM"].address, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [addressMap["FLMAirdrop"].address])
        balance = balance / (10 ** parseInt(decimal))
        setPoolFLMBalance(balance)

    }

    const getWList = async () => {
        const record = await getWhitelist()
        const res = await handleViewMethod("getWhiteList", [])
        const recordArr = record.data.claimRecords
        let resArr = []
        res.forEach(addr => {
            recordArr.forEach(record => {
                if (record.user.toLowerCase() == addr.toString().toLowerCase()) {
                    resArr.push(record)
                }
            })

        })
        setWhitelistArr(resArr)
    }

    const getAdmins = async () => {
        const res = await handleViewMethod("getAdminsLevelTwoList", [])
        setWAdminArr(res)
    }
    const getISPause = async () => {
        const res = await handleViewMethod("paused", [])
        setIsPause(res)
    }

    const pause = async () => {
        await handleDealMethod("pause", [])
        getISPause()
    }
    const unPause = async () => {
        await handleDealMethod("unpause", [])
        getISPause()
    }
    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }
    const setFpAddr = async () => {
        await handleDealMethod("setFpAddr", [form.getFieldValue().fpAddr])
        // getOwner()
    }
    const removeWhiteList = async (addr) => {
        await handleDealMethod("removeWhiteList", [[addr]])
        getWhitelist()
    }
    const removeAdminsLevelTwo = async (addr) => {
        await handleDealMethod("removeAdminsLevelTwo", [[addr]])
        getAdmins()
    }
    const deposit = async () => {
        let contractTemp = await getContractByContract("erc20", coinAddr, state.api,)
        const decimals = await viewMethod(contractTemp, state.account, "decimals", [])
        await handleDealMethod("deposit", [coinAddr, BigNumber(form.getFieldValue().coinAmount * BigNumber(10).pow(decimals)).toFixed(0).toString()])
        getTokenBalance()
    }
    const approve = async () => {
        await handleDealCoinMethod("approve", coinAddr, [addressMap["FLMAirdrop"].address, MaxUint256])

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
                setTimeout(() => {
                    getWList()
                }, 3000)
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
                            Set Airdrop List
                        </div>

                    </div>
                    {curNav == 1 && <div className="part1">
                        <div className="content-item">
                            <h2>Owner Address</h2>
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
                            <h2>Pause</h2>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {isPause ? "Paused" : "UnPaused"}
                                    </div>
                                </div>

                            </Form>
                            {!isPause && <Button type="primary" className="max-btn" onClick={() => {
                                pause()
                            }}>
                                Pause
                            </Button>}
                            {isPause && <Button type="primary" className="max-btn" onClick={() => {
                                unPause()
                            }}>
                                unPause
                            </Button>}
                        </div>
                        <div className="content-item">
                            <h2>Coin Deposit</h2>

                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Pool FLM Balance:
                                    </div>
                                    <div className="value">
                                        {dealNum(poolFLMBalance)}
                                    </div>
                                </div>
                                <Form.Item
                                    name="coinAddr"
                                    label="Coin Address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input owner Address!'},
                                    ]}
                                >
                                    <Input value={coinAddr} defaultValue={coinAddr} onChange={(e) => {
                                        setCoinAddr(e.target.value)
                                    }}/>
                                </Form.Item>
                                <Form.Item
                                    name="coinAmount"
                                    label="Amount"
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
                                approve()
                            }}>
                                Approve
                            </Button>
                            <Button type="primary" className="max-btn" onClick={() => {
                                deposit()
                            }}>
                                Deposit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>setFpAddr</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">

                                    </div>
                                </div>
                                <Form.Item
                                    name="fpAddr"
                                    label="fp address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input fpAddr Address!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setFpAddr()
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
                        Set Airdrop List
                        <div className="btn-box">
                            <Button className="btn" type="primary" onClick={() => {
                                setShowAdd(true)
                            }}>Add</Button>
                        </div>
                    </div>

                    <div className="fire-list-box fire-list-box-airdrop">
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
                            <div className="col">
                                Remove
                            </div>

                        </div>
                        {whitelist.map((item, index) => {
                            return (<div className="list-item" key={index}>
                                <div className="col">
                                    {index + 1}
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
                                    {item.amount / 10 ** 18}
                                </div>
                                <div className="col">
                                    <Button onClick={() => {
                                        removeWhiteList(item.user)
                                    }}>Delete</Button>
                                </div>
                            </div>)
                        })}
                    </div>

                </div>}
                {curNav == 3 && <div className="panel-container">
                    <div className="panel-title">
                        Set Admin Level2
                        <div className="btn-box">
                            <Button className="btn" type="primary" onClick={() => {
                                setShowAddLevel2(true)
                            }}>Add</Button>
                            <Button className="btn" type="primary" onClick={() => {
                                setShowRemove(true)
                            }}>Remove</Button>
                        </div>
                    </div>

                    <div className="fire-list-box fire-list-box-admin">
                        <div className="list-header">
                            <div className="col">
                                No.
                            </div>

                            <div className="col">
                                Address
                            </div>
                            <div className="col">
                                Delete
                            </div>

                        </div>
                        {adminArr.map((item, index) => {
                            return (<div className="list-item list-item-admin" key={index}>
                                <div className="col">
                                    {index + 1}
                                </div>

                                <div className="col">
                                    {item}
                                </div>
                                <div className="col">
                                    <div className="col">
                                        <Button onClick={() => {
                                            removeAdminsLevelTwo(item)
                                        }}>Delete</Button>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>

                </div>}
            </div>
        </FireLockStyle>
    )
}
export default FireLock
