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
    const [whitelist, setWhitelistArr] = useState([])

    const [lpwhitelist, setlpWhitelistArr] = useState([])
    const [blwhitelist, setblWhitelistArr] = useState([])

    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [tax, setTax] = useState()
    const [startBlockNumber, setstartBlockNumber] = useState("")
    const [StartBlock, setStartBlock] = useState("")

    const [distribuRateObj, setDistribuRateObj] = useState({})


    const [openTrade, setOpenTrade] = useState(false)
    const [referObj, setReferObj] = useState({})
    const [distribuRate, setDistribuRate] = useState({})

    const [treasuryDistributionContract, setTreasuryDistributionContract] = useState("")


    const [status, setstatus] = useState()

    const [coinInfo, setCoinInfo] = useState({})

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
        let contractTemp = await getContractByName("FDT", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("FDT", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getTokenInfo = async (value) => {
        value = addressMap["FDT"].address
        let contractTemp = await getContractByContract("erc20", value.toString().trim(), state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        const name = await viewMethod(contractTemp, state.account, "name", [])
        const symbol = await viewMethod(contractTemp, state.account, "symbol", [])
        const totalSupply = await viewMethod(contractTemp, state.account, "totalSupply", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [state.account])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        setCoinInfo({
            address: value,
            name,
            symbol,
            decimal,
            totalSupply: totalSupply / (10 ** parseInt(decimal)),
            balance
        })
    }



    const getDistribution = async () => {
        const TREASURY_RATIO = await handleViewMethod("TREASURY_RATIO", [])
        const CITY_NODE_RATIO = await handleViewMethod("CITY_NODE_RATIO", [])
        const THREE_RATIO = await handleViewMethod("THREE_RATIO", [])

        setDistribuRateObj({
            TREASURY_RATIO,
            CITY_NODE_RATIO,
            THREE_RATIO
        })
    }
    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }
    const getBlock = async () => {
        const startBlockNumber = await handleViewMethod("startBlockNumber", [])
        const StartBlock = await handleViewMethod("StartBlock", [])

        setstartBlockNumber(startBlockNumber)
        setStartBlock(StartBlock)
    }
    const getStatus = async () => {
        const res = await handleViewMethod("status", [])
        setstatus(res)
    }
    const getTax= async () => {
        const res = await handleViewMethod("_tax", [])
        setTax(res)
    }


    const getopenTrade = async () => {
        const res = await handleViewMethod("openTrade", [])
        setOpenTrade(res)
    }
    const getdistributeRates  = async () => {
        setDistribuRate({
            rate1: await handleViewMethod("distributeRates", [0]),
            rate2: await handleViewMethod("distributeRates", [1]),
            rate3: await handleViewMethod("distributeRates", [2])
        })
    }
    const getTreasuryDistributionContract = async () => {
        const res = await handleViewMethod("TreasuryDistributionContract", [])
        setTreasuryDistributionContract(res)
    }


    const getWList = async () => {
        const length = await handleViewMethod("getwhiteListUserLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const item = await handleViewMethod("whiteListUser", [i])
            arr.push(item)
        }
        setWhitelistArr(arr)
    }
    const getlpWList = async () => {
        const length = await handleViewMethod("getallowAddLPListUserLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const item = await handleViewMethod("allowAddLPListUser", [i])
            arr.push(item)
        }
        setlpWhitelistArr(arr)
    }
    const getblWList = async () => {
        const length = await handleViewMethod("getblackListUserLenght", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const item = await handleViewMethod("blackListUser", [i])
            arr.push(item)
        }
        setblWhitelistArr(arr)
    }

    const handlesetStartBlock = async () => {
        await handleDealMethod("setStartBlock", [form.getFieldValue().block])
        getBlock()
    }

    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }

    const setTREASURY_RATIO = async () => {
        await handleDealMethod("setTREASURY_RATIO", [form.getFieldValue().drate2])
        getdistributeRates()
    }
    const setTHREE_RATIO = async () => {
        await handleDealMethod("setTHREE_RATIO", [form.getFieldValue().drate1])
        getdistributeRates()
    }
    const setCITY_NODE_RATIO = async () => {
        await handleDealMethod("setCITY_NODE_RATIO", [form.getFieldValue().drate3])
        getdistributeRates()
    }
    const handlesetTax = async () => {
        await handleDealMethod("setTax", [form.getFieldValue().tax])
        getTax()
    }
    const handlesetMinistryOfFinance = async () => {
        await handleDealMethod("setMinistryOfFinance", [form.getFieldValue().financeAddr])
        getTreasuryDistributionContract()
    }
    const handlesetOpenTrade = async (name, params) => {
        await handleDealMethod("setOpenTrade", [!openTrade])
        getopenTrade()
    }
    const handlesetstatus = async () => {
        await handleDealMethod("setstatus", [])
        getStatus()
    }
    const adddistributeRates = async () => {
        await handleDealMethod("adddistributeRates", [[form.getFieldValue().rate1,form.getFieldValue().rate2,form.getFieldValue().rate3]])
        getdistributeRates()
    }

    const setdistributeRates = async () => {
        await handleDealMethod("setdistributeRates", [form.getFieldValue().rateid,form.getFieldValue().ratenum])
        getdistributeRates()
    }


    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getOwner()
        getopenTrade()
        getTreasuryDistributionContract()
        getTokenInfo()
        getdistributeRates()
        getWList()
        getlpWList()
        getStatus()
        getDistribution()
        getblWList()
        getBlock()
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
                            <h3>OpenTrade </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {openTrade ? "true" : "false"}
                                    </div>
                                </div>

                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handlesetOpenTrade()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>Rainbow City Treasury </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {treasuryDistributionContract}
                                    </div>
                                </div>
                                <Form.Item
                                    name="financeAddr"
                                    label=" address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input  Address!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handlesetMinistryOfFinance()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>Is Pause </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {status?"Pause":"Un Pause"}
                                    </div>
                                </div>

                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handlesetstatus()
                            }}>
                                {status?"UnPause":"Pause"}
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3> Tax </h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {tax}
                                    </div>
                                </div>
                                <Form.Item
                                    name="tax"
                                    label=" tax"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input  tax!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handlesetTax()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>
                                FDT Info
                            </h3>
                            <div className="flex-box info-line">
                                <div className="name">Name</div>
                                <div className="value">
                                    {coinInfo.name}
                                </div>
                            </div>
                            <div className="flex-box info-line">
                                <div className="name">Decimal</div>
                                <div className="value">
                                    {coinInfo.decimal}
                                </div>
                            </div>
                            <div className="flex-box info-line">
                                <div className="name">Symbol</div>
                                <div className="value">
                                    {coinInfo.symbol}
                                </div>
                            </div>
                            <div className="flex-box info-line">
                                <div className="name">Symbol</div>
                                <div className="value">
                                    {coinInfo.symbol}
                                </div>
                            </div>
                            <div className="flex-box info-line">
                                <div className="name">Address</div>
                                <div className="value">
                                    {coinInfo.address}
                                </div>
                            </div>
                            <div className="flex-box info-line">
                                <div className="name">totalSupply</div>
                                <div className="value">
                                    {coinInfo.totalSupply}
                                </div>
                            </div>
                        </div>

                        <div className="content-item">
                            <h2>Economics</h2>
                            <h3>
                                Tax Distribution
                            </h3>

                            <div className="fire-list-box">
                                <div className="list-header">
                                    <div className="col"> No.
                                    </div>
                                    <div className="col">Level</div>
                                    <div className="col">Percentage</div>
                                </div>
                                <div className="list-item">
                                    <div className="col">1</div>
                                    <div className="col">Referrer</div>
                                    <div className="col">{distribuRateObj.THREE_RATIO}</div>
                                </div>
                                <div className="list-item">
                                    <div className="col">2</div>
                                    <div className="col">Citynode</div>
                                    <div className="col">{distribuRateObj.CITY_NODE_RATIO}</div>
                                </div>
                                <div className="list-item">
                                    <div className="col">3</div>
                                    <div className="col">Rainbow City Treasury</div>
                                    <div className="col">{distribuRateObj.TREASURY_RATIO}</div>
                                </div>
                            </div>

                        </div>
                        <div className="content-item">
                            <h3>setTHREE_RATIO</h3>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="drate1"
                                    label="rate"
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
                                setTHREE_RATIO()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>setTREASURY_RATIO</h3>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="drate2"
                                    label=" rate"
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
                                setTREASURY_RATIO()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>setCITY_NODE_RATIO</h3>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="drate3"
                                    label="rate "
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
                                setCITY_NODE_RATIO()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>Category: Referrer</h3>
                            <div className="fire-list-box">
                                <div className="list-header">
                                    <div className="col"> No.
                                    </div>
                                    <div className="col">Level</div>
                                    <div className="col">Percentage</div>
                                </div>
                                <div className="list-item">
                                    <div className="col">1</div>
                                    <div className="col">1</div>
                                    <div className="col">{distribuRate.rate1}</div>
                                </div>
                                <div className="list-item">
                                    <div className="col">2</div>
                                    <div className="col">2</div>
                                    <div className="col">{distribuRate.rate2}</div>
                                </div>
                                <div className="list-item">
                                    <div className="col">3</div>
                                    <div className="col">3</div>
                                    <div className="col">{distribuRate.rate3}</div>
                                </div>
                            </div>
                        </div>
                        <div className="content-item">
                            <h3>Init Rates </h3>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="rate1"
                                    label=" rate1"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input  rate1!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="rate2"
                                    label=" rate2"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input  rate!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="rate3"
                                    label=" rate3"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input  rate!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                adddistributeRates()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>Set Rates </h3>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="rateid"
                                    label=" id"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input  id!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    name="ratenum"
                                    label=" num"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input  rate!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setdistributeRates()
                            }}>
                                Submit
                            </Button>
                        </div>
                        <div className="content-item">
                            <h3>Block Set</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {StartBlock} + {startBlockNumber}
                                    </div>
                                </div>
                                <Form.Item
                                    name="block"
                                    label="block"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please inputblock!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                handlesetStartBlock()
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
