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

import addressMap from "../../../../api/addressMap";

const FireLock = (props) => {
    let {state, dispatch} = useConnect();
    const [whitelist, setWhitelistArr] = useState([])


    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [tax, setTax] = useState()
    const [startBlockNumber, setstartBlockNumber] = useState("")

    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowRemove, setShowRemove] = useState(false)


    const [distribuRate, setDistribuRate] = useState({})

    const [treasuryDistributionContract, setTreasuryDistributionContract] = useState("")


    const [status, setstatus] = useState()

    const [PIDDiscount, setPIDDiscount] = useState()

    const [FIDDiscount, setFIDDiscount] = useState()

    const [radio, setRadio] = useState({})
    const [FDTLiquity, setFDTLiquity] = useState("")

    const [Treasury, setTreasury] = useState()

    const [balance, setBalance] = useState(0)

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
        let contractTemp = await getContractByName("OGPool", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("OGPool", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getTokenBalance = async (value) => {
        let contractTemp = await getContractByContract("erc20", addressMap["FDT"].address, state.api,)
        const decimal = await viewMethod(contractTemp, value, "decimals", [])
        let balance = await viewMethod(contractTemp, value, "balanceOf", [state.account])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        return balance
    }

    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }

    const getStatus = async () => {
        const res = await handleViewMethod("paused", [])
        setstatus(res)
    }
    const getPIDDiscount = async () => {
        const res = await handleViewMethod("PIDDiscount", [])
        setPIDDiscount(res)
    }
    const getFIDDiscount = async () => {
        const res = await handleViewMethod("FIDDiscount", [])
        setFIDDiscount(res)
    }
    const getRadio =  async () => {
        const FDTLiquityRatio = await handleViewMethod("FDTLiquityRatio", [])
        const TreasuryRatio = await handleViewMethod("TreasuryRatio", [])

        const ReferenceRatio = await handleViewMethod("ReferenceRatio", [])
        setRadio({
            FDTLiquityRatio,
            TreasuryRatio,
            ReferenceRatio
        })
    }
    const getFDTLiquity = async () => {
        const res = await handleViewMethod("FDTLiquity", [])
        setFDTLiquity(res)
    }
    const getTreasury = async () => {
        const res = await handleViewMethod("Treasury", [])
        setTreasury(res)
    }

    const handleSetPIDDiscount = async () => {
        const res = await handleViewMethod("changeFIDDiscount", [form.getFieldValue().PIDDiscount])
        getPIDDiscount(res)
    }

    const handleSetFIDDiscount = async () => {
        const res = await handleViewMethod("changePIDDiscount", [form.getFieldValue().FIDDiscount])
        getFIDDiscount(res)
    }
    const handleSetReferenceRatio= async () => {
        const res = await handleViewMethod("changeReferenceRatio", [form.getFieldValue().ReferenceRatio])
        getRadio(res)
    }
    const handleSetTreasuryRatio= async () => {
        const res = await handleViewMethod("changeTreasuryRatio", [form.getFieldValue().TreasuryRatio])
        getRadio(res)
    }
    const handleSetFDTLiquityRatio = async () => {
        const res = await handleViewMethod("changeFDTRatio", [form.getFieldValue().FDTLiquityRatio])
        getRadio(res)
    }
    const changeFDTLiquity = async () => {
        const res = await handleViewMethod("FDTLiquity", [form.getFieldValue().FDTLiquity])
        getFDTLiquity(res)
    }
    const changeTreasury= async () => {
        const res = await handleViewMethod("changeTreasury", [form.getFieldValue().Treasury])
        getTreasury(res)
    }
    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }
    const withdraw = async () => {
        await handleDealMethod("withdraw", [form.getFieldValue().withdrawAddr, form.getFieldValue().withdraw])
        getOwner()
    }
    const setPaused = async () => {
        if (status) {
            await handleDealMethod("unpause", [])
        } else {
            await handleDealMethod("pause", [])

        }
        getStatus()
    }

    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getOwner()
        getStatus()
        getPIDDiscount()
        getFIDDiscount()
        getRadio()
        getFDTLiquity()
        getTreasury()
        const balance = await getTokenBalance(addressMap["OGPool"].address)
        setBalance(balance)
    }, [state.account]);

    return (
        <FireLockStyle>

            <h1 className="title">

                Seed Donation Manage
            </h1>
            <div className="panel-box">
                <div className="panel-container">
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
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {status ? "Paused" : "Unpause"}
                                    </div>
                                </div>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setPaused()
                            }}>
                                {!status ? "Pause" : "Unpause"}
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>Withdraw </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {balance}
                                    </div>
                                </div>
                                <Form.Item
                                    name="withdrawAddr"
                                    label="withdraw address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="withdraw"
                                    label="withdraw amount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                withdraw()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>PIDDiscount </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {PIDDiscount}
                                    </div>
                                </div>

                                <Form.Item
                                    name="PIDDiscount"
                                    label="PIDDiscount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handleSetPIDDiscount()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>FIDDiscount </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {FIDDiscount}
                                    </div>
                                </div>

                                <Form.Item
                                    name="FIDDiscount"
                                    label="FIDDiscount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handleSetFIDDiscount()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <h1>Donate Distribution </h1>
                        <div className="content-item">
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Referrer:
                                    </div>
                                    <div className="value">
                                        {radio.ReferenceRatio}
                                    </div>
                                </div>


                                <Form.Item
                                    name="ReferenceRatio"
                                    label="Referrer"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handleSetReferenceRatio()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        FDT Liquidity Fund Pool:
                                    </div>
                                    <div className="value">
                                        {radio.FDTLiquityRatio}
                                    </div>
                                </div>


                                <Form.Item
                                    name="FDTLiquityRatio"
                                    label="FDTLiquityRatio"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handleSetFDTLiquityRatio()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Rainbow City Treasury:
                                    </div>
                                    <div className="value">
                                        {radio.TreasuryRatio}
                                    </div>
                                </div>


                                <Form.Item
                                    name="TreasuryRatio"
                                    label="TreasuryRatio"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handleSetTreasuryRatio()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3> FDT Liquidity Fund Pool</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        FDT Liquidity Fund Pool:
                                    </div>
                                    <div className="value">
                                        {FDTLiquity}
                                    </div>
                                </div>


                                <Form.Item
                                    name="FDTLiquity"
                                    label="FDTLiquity"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                changeFDTLiquity()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>Rainbow City Treasury</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Rainbow City Treasury:
                                    </div>
                                    <div className="value">
                                        {Treasury}
                                    </div>
                                </div>


                                <Form.Item
                                    name="Treasury"
                                    label="Treasury"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                changeTreasury()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <h1>
                            Referrer Radio
                        </h1>
                        <div className="fire-list-box">
                            <div className="list-header">
                                <div className="col">
                                    No.
                                </div>
                                <div className="col">
                                    Level
                                </div>
                                <div className="col">
                                    Percentage
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="col">
                                    1
                                </div>
                                <div className="col">
                                    1
                                </div>
                                <div className="col">
                                    70%
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="col">
                                    2
                                </div>
                                <div className="col">
                                    2
                                </div>
                                <div className="col">
                                    20%
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="col">
                                    3
                                </div>
                                <div className="col">
                                    3
                                </div>
                                <div className="col">
                                    10%
                                </div>
                            </div>
                        </div>
                    </div>}

                </div>
            </div>
        </FireLockStyle>
    )
}
export default FireLock
