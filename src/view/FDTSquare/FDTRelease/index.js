import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {useNavigate, useLocation} from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";

import addressMap from "../../../api/addressMap";

const FireLock = (props) => {
    let {state, dispatch} = useConnect();
    const [whitelist, setWhitelistArr] = useState([])
    const [allocation, setAllocation] = useState({})

    const [lpwhitelist, setlpWhitelistArr] = useState([])
    const [blwhitelist, setblWhitelistArr] = useState([])

    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [tax, setTax] = useState()


    const [BUrl, setBUrl] = useState("")

    const [feeRec, setFeeRe] = useState("")
    const [userMaxMint, setUserMintMax] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowRemove, setShowRemove] = useState(false)
    const [isShowAddlp, setShowAddlp] = useState(false)
    const [isShowRemovelp, setShowRemovelp] = useState(false)

    const [isShowAddbl, setShowAddbl] = useState(false)
    const [isShowRemovebl, setShowRemovebl] = useState(false)
    const [fee, setFee] = useState(0)
    const [openTrade, setOpenTrade] = useState(false)
    const [referObj, setReferObj] = useState({})
    const [distribuRate, setDistribuRate] = useState({})

    const [treasuryDistributionContract, setTreasuryDistributionContract] = useState("")


    const [feeReceiver, setReceiver] = useState("")

    const [coinInfo, setCoinInfo] = useState({})

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


    const dealNum = (num) => {
        return parseInt(num * 100) / 100
    }

    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }
    const getTax= async () => {
        const res = await handleViewMethod("_tax", [])
        setTax(res)
    }
    const getFee = async () => {
        const fee = await handleViewMethod("fee", [])
        setFee(fee / 10 ** 18)
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
    const getFeeReceiver = async () => {
        const feeReceiver = await handleViewMethod("feeReceiver", [])
        setReceiver(feeReceiver)
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

    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
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
    const burn = async () => {
        await handleDealMethod("burn", [state.api.utils.toWei(form.getFieldValue().amount)])
    }


    const handleSetReceiver = async () => {
        await handleDealMethod("setFeeReceiver", [form.getFieldValue().feeReceiver])
        getFeeReceiver()
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
        getblWList()
    }, [state.account]);

    return (
        <FireLockStyle>

            <h1 className="title">
                FDT Release
            </h1>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="part1">
                        <div className="content-item">
                            <h3>Burn</h3>
                            <Form form={form} name="control-hooks">
                                <div className="current">
                                    <div className="name">
                                        Current:
                                    </div>
                                    <div className="value">
                                        {coinInfo.balance}
                                    </div>
                                </div>
                                <Form.Item
                                    name="amount"
                                    label="burn num"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: '!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                burn()
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
                    </div>

                </div>
            </div>
        </FireLockStyle>
    )
}
export default FireLock
