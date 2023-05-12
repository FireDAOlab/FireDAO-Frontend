import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {

    Form,
    Tooltip,
    Input,
    notification,
    Radio,
    Switch,
    Select,
    Card, message, Button
} from 'antd';
import {handleCopy} from "../../../utils/copyUtil";
import {QuestionCircleOutlined, UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";
import {useNavigate, useLocation,} from "react-router-dom";
import FireLockStyle from "./style";
import {getContractByContract, getContractByName} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil";
import moment from "moment";
import {FireLockDecimal} from "../../../utils/constants";

const FireLock = (props) => {
    const [form] = Form.useForm();
    const history = useNavigate();
    let {state, dispatch} = useConnect();
    const [isShowReview, setShowReview] = useState(false)
    const [contractAddressArr, setAddressArr] = useState([])
    const [coinInfo, setCoinInfo] = useState({})
    const [isTerminatePermission, setIsTP] = useState(false)
    const [isChooseManage, setIsCM] = useState(1)
    const [endTime, setEndTime] = useState("")
    const [ownerType, setOwnerType] = useState(1)
    const [ownerArr, setOwnerArr] = useState(['owner0'])
    const [ownerMap, setOwnerMap] = useState([])
    const [allowance, setAllowance] = useState(0)
    const [fee, setFee] = useState(0.008 * FireLockDecimal)
    const [amount, setAmount] = useState(undefined)
    const location = useLocation()
    let str = location.search;
    let address = str.split("=")[1];
    const [contractAddress, setAddress] = useState(address)

    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("fireLockFactory", state.api,)
        if (!contractTemp) {
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleDealCoinMethod = async (name, address, params) => {
        let contractTemp = await getContractByContract("erc20", address, state.api,)
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("fireLockFactory", state.api,)
        if (!contractTemp) {
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod2 = async (name, params) => {
        if (!contractAddress) {
            return
        }
        let contractTemp = await getContractByContract("fireLock", contractAddress, state.api,)
        if (!contractTemp) {
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod2 = async (name, address, params) => {
        let contractTemp = await getContractByContract("fireLock", address, state.api,)
        if (!contractTemp) {
        }
        return dealPayMethod(contractTemp, state.account, name, params, fee)
    }

    const approve = async () => {

        /*eslint-disable*/
        await handleDealCoinMethod("approve", form.getFieldValue().TokenAddress.toString().trim(), [contractAddress, BigInt(10 ** 50).toString()])
        let contractTemp = await getContractByContract("erc20", form.getFieldValue().TokenAddress.toString().trim(), state.api,)
        const allowance = await viewMethod(contractTemp, state.account, "allowance", [state.account, contractAddress])
        setAllowance(allowance / FireLockDecimal)
    }
    const next = async () => {
        const listLength = await handleViewMethod("getOwnerLockLenglength", [])
        if (!listLength || listLength == 0) {
            return
        }
        const address = await handleViewMethod("ownerLock", [state.account, listLength - 1])
        const {TokenAddress, ManageAddress, CliffPeriod, UnlockCycle, UnlockRound, Amount, Title} = form.getFieldValue()
        if (!address) {
            message.warn("Please input Complete First", 5)
            return
        }
        if (!TokenAddress) {
            message.warn("Please input TokenAddress ", 5)
            return
        }
        if (!amount) {
            message.warn("Please input Amount", 5)
            return
        }
        if (amount > coinInfo.balance) {
            message.warn("Amount > Balance", 5)
            return
        }
        if (!UnlockCycle) {
            message.warn("Please input UnlockCycle", 5)
            return
        }
        if (!(Math.floor(CliffPeriod) == CliffPeriod)) {
            message.warn("Please enter the Cliff period of an integer.", 5)
            return
        }
        if (!(Math.floor(UnlockCycle) == UnlockCycle)) {
            message.warn("Please enter the Unlock cycle of an integer.", 5)
            return
        }
        if (!(Math.floor(UnlockRound) == UnlockRound)) {
            message.warn("Please enter the Unlock round of an integer.", 5)
            return
        }

        if (!UnlockRound) {
            message.warn("Please input UnlockRound", 5)
            return
        }
        let ownerMap = []

        if (ownerType == 2) {
            let allRate = 0
            for (let i = 0; i < ownerArr.length; i++) {
                allRate += parseInt(form.getFieldValue()["rate" + i])
                if (!form.getFieldValue()["owner" + i] || !state.api.utils.isAddress(form.getFieldValue()["owner" + i])) {
                    message.warn("Please check allocation address", 5)
                    return
                }
                if (!form.getFieldValue()["rate" + i] || form.getFieldValue()["rate" + i] <= 0) {
                    message.warn("Please check allocation rate", 5)
                    return
                }

                ownerMap.push({
                    address: form.getFieldValue()["owner" + i],
                    rate: form.getFieldValue()["rate" + i],
                    amount: form.getFieldValue()["rate" + i] * amount / 100
                })
            }
            if (allRate != 100) {
                message.warn("Please check rate,it should be 100", 5)
                return
            }
        } else {
            ownerMap.push({
                address: state.account,
                rate: 100,
                amount: amount
            })
        }

        setOwnerMap(ownerMap)
        setShowReview(true)
    }
    const lock = async () => {
        const {TokenAddress, ManageAddress, CliffPeriod, UnlockCycle, UnlockRound, Title} = form.getFieldValue()
        if (!contractAddress) {
            message.warn("Please input Complete First", 5)
            return
        }
        if (!TokenAddress) {
            message.warn("Please input TokenAddress ", 5)
            return
        }
        if (!amount) {
            message.warn("Please input Amount", 5)
            return
        }
        if (!UnlockCycle || UnlockCycle < 1) {
            message.warn("Please input UnlockCycle,UnlockCycle minimum 1 day", 5)
            return
        }
        if (!UnlockRound || UnlockRound < 1) {
            message.warn("Please input UnlockRound,UnlockRound minimum 1 day", 5)
            return
        }
        let coinAmount = 0
        if (coinInfo.decimal && parseInt(coinInfo.decimal) > 0) {
            coinAmount = BigInt(amount * parseInt((10 ** coinInfo.decimal))).toString()

        } else {
            message.error("please input Token Address")
            return
        }

        let admin = state.account
        if (!isTerminatePermission) {
            admin = "0x0000000000000000000000000000000000000000"
        }
        if (isChooseManage === 2) {
            admin = ManageAddress
        }
        console.log(contractAddress)
        if (ownerType == 2) {
            let _rate = [], _to = []
            for (let i = 0; i < ownerArr.length; i++) {
                _to.push(form.getFieldValue()["owner" + i])
                _rate.push(form.getFieldValue()["rate" + i])
            }
            handleDealMethod2("Lock", contractAddress, [TokenAddress.toString().trim(), admin, UnlockCycle, UnlockRound, coinAmount,
                _to, _rate, Title, CliffPeriod]).then(() => {
                setTimeout(() => {
                    history("/FireLock")
                }, 2000)
            }).catch(() => {
            })


        } else {
            handleDealMethod2("Lock", contractAddress, [TokenAddress.toString().trim(), admin, UnlockCycle, UnlockRound, coinAmount,
                [state.account], [100], Title, CliffPeriod]).then(() => {
                setTimeout(() => {
                    history("/FireLock")
                }, 2000)
            }).catch(() => {
            })

        }


    }

    const checkAddress = async (value) => {
        let contractTemp = await getContractByContract("erc20", value.toString().trim(), state.api,)
        await viewMethod(contractTemp, state.account, "name", []).then(async (name) => {
            const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
            const symbol = await viewMethod(contractTemp, state.account, "symbol", [])
            const totalSupply = await viewMethod(contractTemp, state.account, "totalSupply", [])
            let balance = await viewMethod(contractTemp, state.account, "balanceOf", [state.account])
            const allowance = await viewMethod(contractTemp, state.account, "allowance", [state.account, contractAddress])

            setAllowance(allowance / FireLockDecimal)

            balance = balance / (10 ** parseInt(decimal))
            balance = parseInt(balance * 100) / 100
            setCoinInfo({
                name,
                symbol,
                decimal,
                totalSupply: totalSupply / (10 ** parseInt(decimal)),
                balance
            })
        }).catch(() => {
            message.warn("Please enter the correct token address.")
        })

    }
    const getEndTime = (type) => {
        let CliffPeriod = form.getFieldValue().CliffPeriod
        let UnlockCycle = form.getFieldValue().UnlockCycle
        let UnlockRound = form.getFieldValue().UnlockRound
        let endTime = moment(new Date()).format('YYYY-MM-DD, hh:mm:ss');

        if (UnlockCycle && UnlockRound && parseInt(UnlockCycle) > 0 && (parseInt(UnlockRound) > 0)) {
            const dateTime = new Date().getTime()
            let date = new Date(dateTime + parseInt(UnlockRound) * parseInt(UnlockCycle) * 86400000 + parseInt(CliffPeriod) * 86400 * 1000)
            endTime = moment(date).format('YYYY-MM-DD, hh:mm:ss');
        } else if (CliffPeriod && parseInt(CliffPeriod) > 0) {
            const dateTime = new Date().getTime()
            let date = new Date(dateTime + parseInt(CliffPeriod) * 86400 * 1000)
            endTime = moment(date).format('YYYY-MM-DD, hh:mm:ss');
        }
        setEndTime(endTime)
    }
    const removeOwner = () => {
        let tempArr = Object.assign([], ownerArr)
        tempArr.shift()
        setOwnerArr(tempArr)
    }
    const addOwner = () => {
        let tempArr = Object.assign([], ownerArr)
        tempArr.push('owner' + tempArr.length)
        setOwnerArr(tempArr)
    }
    const getAddress = async () => {
        const listLength = await handleViewMethod("getOwnerLockLenglength", [])
        if (listLength < 0) {
            message.warn("Please submit create", 3)
            return
        }
        let addrArr = []
        for (let i = 0; i < listLength; i++) {
            const address = await handleViewMethod("ownerLock", [state.account, i])
            const isInit = await handleViewMethod("uninitialized", [address])
            if (!isInit) {
                addrArr.push({
                    value: address,
                    label: address,
                    address,
                    isInit
                })
            }
        }
        setAddressArr(addrArr)
    }
    const getFee = async () => {
        const fee = await handleViewMethod2("feeAmount", [])
        if (fee) {
            setFee(fee)
        }
    }
    const getPerRoundAmount = () => {
        let amountTemp = amount / form.getFieldValue().UnlockRound
        if (amountTemp > 0) {
            return parseInt(amountTemp * 100) / 100
        } else {
            return 0
        }
    }
    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };
    const handleChange = (val) => {
        console.log(val)
        setAddress(val)
    }
    const handleContractChange = (event) => {
        setAddress(event.target.value);
    };
    useEffect(async () => {
        if (!state.account) {
            return
        }
        await getAddress()

        getFee()
    }, [state.account])
    return (
        <FireLockStyle>
            <h1>
                FireLock Profile
            </h1>
            <div className="contract-address">
                <div className="name">Contract Address</div>
                <div className="value">
                    {/*<Input type="text" value={contractAddress} onChange={handleContractChange}/>*/}
                    <Select
                        className="select-lockAddress"
                        defaultValue={contractAddress}
                        onChange={handleChange}
                        value={contractAddress}
                        options={contractAddressArr}
                    />
                </div>

            </div>
            <div className="panel-box">
                <div className="panel-container">
                    {
                        isShowReview && <svg t="1681439065103" className="back icon" onClick={() => {
                            setShowReview(false)
                        }} viewBox="0 0 1029 1024" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" p-id="2591" width="48" height="48">
                            <path
                                d="M1008.48 496.48c-8.544 0-15.52 6.976-15.52 15.52 0 265.216-215.744 480.96-480.96 480.96-265.248 0-480.96-215.744-480.96-480.96 0-265.216 215.744-480.992 480.96-480.992 8.544 0 15.52-6.944 15.52-15.488C527.52 6.912 520.544 0 512 0c-282.336 0-512 229.664-512 512s229.696 512 512 512c282.304 0 512-229.76 512-512C1023.968 503.424 1017.024 496.48 1008.48 496.48zM513.408 337.984c6.208-5.92 6.4-15.712 0.48-21.952-5.952-6.144-15.744-6.368-21.952-0.48l-180.768 173.248c-0.032 0.032-0.064 0.096-0.096 0.128-0.032 0.032-0.096 0.064-0.128 0.096-0.64 0.64-0.928 1.44-1.44 2.176-0.672 0.928-1.44 1.824-1.888 2.848-0.288 0.736-0.288 1.536-0.48 2.304-0.288 1.184-0.672 2.304-0.672 3.52 0 0.832 0.288 1.6 0.416 2.4 0.16 1.152 0.224 2.336 0.672 3.424 0.32 0.8 0.96 1.44 1.376 2.208 0.608 0.96 0.992 2.016 1.824 2.848 0.032 0.032 0.096 0.064 0.16 0.096 0.032 0.032 0.032 0.064 0.064 0.096l175.552 175.552c3.04 3.072 7.008 4.576 10.976 4.576 3.968 0 7.936-1.504 10.944-4.576 6.048-6.048 6.048-15.872 0-21.888l-146.784-146.848 363.68 0c8.576 0 15.52-6.944 15.52-15.488 0-8.576-6.976-15.52-15.52-15.52L358.176 486.752 513.408 337.984z"
                                fill="#ffffff" p-id="2592"></path>
                        </svg>
                    }
                    <Form form={form} name="control-hooks">
                        <Form.Item
                            name="TokenAddress"
                            label="Token Contract Address"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Token Contract address must be filled!'},
                                {
                                    validator: (rule, value, fn) => {
                                        checkAddress(value, fn)
                                    }
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Form>
                    {coinInfo.name && (
                        <div className="coin-info">
                            <div className="info-row">
                                <div className="name">
                                    Name
                                </div>
                                <div className="value">
                                    {coinInfo.name}
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="name">
                                    Symbol
                                </div>
                                <div className="value">
                                    {coinInfo.symbol}
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="name">
                                    Decimals
                                </div>
                                <div className="value">
                                    {coinInfo.decimal}
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="name">
                                    Total Supply
                                </div>
                                <div className="value">
                                    {coinInfo.totalSupply}
                                </div>
                            </div>
                        </div>
                    )}
                    <Form form={form} name="control-hooks">
                        <div className="input-box">
                            <Form.Item
                                name="Title"
                                label="Title"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Title must be filled!'},
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </div>
                    </Form>

                </div>
                <div className="panel-container">
                    {!isShowReview && <Form form={form} name="control-hooks">
                        <Form.Item
                            name="Terminate permission"
                            label="Ownership set-up "
                            className="no-bg"
                            validateTrigger="onBlur"
                        >
                            <Switch checked={isTerminatePermission} onChange={(value) => {
                                setIsTP(value)
                            }}/>
                        </Form.Item>
                        {
                            isTerminatePermission && (<div>
                                <Form.Item
                                    name="ContractManager"
                                    label="Owner’s address"
                                    validateTrigger="onBlur"
                                    className="no-bg"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input Contract Manage!'},
                                    ]}

                                >
                                    <Radio.Group value={isChooseManage} defaultValue={isChooseManage} onChange={(e) => {
                                        setIsCM(e.target.value)
                                    }}>
                                        <Radio value={1}>Itself</Radio>
                                        <Radio value={2}>Other</Radio>

                                    </Radio.Group>

                                </Form.Item>
                                {(isChooseManage == 2) && (
                                    <Form.Item
                                        name="ManageAddress"
                                        label="Owner’s address"
                                        validateTrigger="onBlur"
                                        validateFirst={true}
                                        rules={[
                                            {required: true, message: 'Please input Manage!'},
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                )}
                            </div>)
                        }
                    </Form>}
                    {isShowReview && <div>
                        <div className="info-box">
                            <div className="name">
                                Ownership set-up
                            </div>
                            <div className="value">
                                {isTerminatePermission && "Yes"}
                                {!isTerminatePermission && "False"}
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="name">
                                Owner's address
                            </div>
                            <div className="inputValue">
                                {isChooseManage == 1 && state.account}
                                {isChooseManage == 2 && form.getFieldValue().ManageAddress}
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="panel-container">
                    <div className="sub-title">
                        Lock Parameters
                    </div>
                    <Form form={form} name="control-hooks">
                        <div className="input-box">
                            <Form.Item
                                name="Amount"
                                label="FireLock Amount"
                                className="short-input"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input Amount!'},
                                ]}

                            >
                                <Input type="text" disabled={isShowReview} value={amount} onChange={handleInputChange}/>
                                {!isShowReview && <Button type="primary" className="max-btn" onClick={() => {
                                    setAmount(coinInfo.balance)
                                }}>
                                    Max
                                </Button>}
                            </Form.Item>

                        </div>

                        <div className="balance-box">
                            <div className="name">
                                Balance
                            </div>
                            <div className="value">
                                {coinInfo.balance}
                            </div>
                        </div>
                        <div className="input-box">
                            <Form.Item
                                name="CliffPeriod"
                                label="Cliff"
                                validateTrigger="onBlur"
                                className="short-input"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Cliffs must be filled!'},
                                ]}
                            >
                                <Input type="number" disabled={isShowReview} onBlur={() => {
                                    getEndTime(1)
                                }}
                                />

                            </Form.Item>
                            <Tooltip
                                title="Cliffs are the period during which tokens are fully locked up. Nobody, including the administrators, is allowed to withdraw tokens during the period.">
                                <QuestionCircleOutlined className="icon"/>
                            </Tooltip>
                            <div className="tip">
                                Days
                            </div>
                        </div>
                        <div className="input-box">
                            <Form.Item
                                name="UnlockCycle"
                                label="Unlock Cycle"
                                validateTrigger="onBlur"
                                className="short-input"
                                rules={[
                                    {required: true, message: 'Unlock Cycle must be filled!'},
                                ]}
                            >
                                <Input type="number" disabled={isShowReview} onBlur={() => {
                                    getEndTime(2)
                                }}/>
                            </Form.Item>
                            <Tooltip
                                title="Unlock cycle means how soon the tokens are allowed to be unlocked. The minimum set-up is 1 day. ">
                                <QuestionCircleOutlined className="icon"/>
                            </Tooltip>
                            <div className="tip">
                                Days
                            </div>
                        </div>

                        <div className="input-box">
                            <Form.Item
                                name="UnlockRound"
                                label="Unlock Round"
                                className="short-input"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Unlock Round must be filled!'},
                                ]}
                            >
                                <Input type="number" disabled={isShowReview} onBlur={() => {
                                    getEndTime(2)
                                }}/>
                            </Form.Item>
                            <Tooltip
                                title="Unlock round is the number of times the tokens are allowed to be unlocked. The minimum set-up is 1 day.">
                                <QuestionCircleOutlined className="icon"/>
                            </Tooltip>
                            <div className="info">Single Unlock Round Amounts: {getPerRoundAmount()}</div>
                        </div>

                        {endTime && (
                            <div className="input-box">
                                <Form.Item
                                    label="End Time"
                                    className="short-input"
                                    validateFirst={true}
                                >
                                    <div className="end-time">
                                        {endTime}
                                    </div>
                                </Form.Item>
                                <Tooltip
                                    title="Example: on March 11,2023, we set the cliff as 1 day, unlock cycle 2 days and unlock 2 rounds, then the unlock will begin on March 12,2023, complete within 4 days and be end time on March 16,2023.">
                                    <QuestionCircleOutlined className="icon"/>
                                </Tooltip>

                            </div>)
                        }
                    </Form>
                    {/*<div className="tip-content">*/}
                    {/*    <h3>Unlock Rules:</h3>*/}

                    {/*    For example, if the current date is 3/11/2023 the cliff period is 1 day, the unlock period is 2*/}
                    {/*    days, and the unlock cycle is 2 rounds, then unlocking will begin on 3/12/2023, complete within*/}
                    {/*    4 days, and fully unlock on 3/16/2023.*/}
                    {/*</div>*/}
                </div>
                {!isShowReview &&
                <div className="panel-container">
                    <Form form={form} name="control-hooks">

                        <Form.Item
                            name="Owner"
                            label="Allocation"
                            className="no-bg"

                            initialValue={1}
                        >
                            <Radio.Group onChange={(e) => {
                                setOwnerType(e.target.value)
                            }} defaultValue={1}>
                                <Radio value={1}>Itself</Radio>
                                <Radio value={2}>Other</Radio>
                            </Radio.Group>
                        </Form.Item>

                        {ownerType == 2 && (<div>
                            <div className="address-list">
                                {ownerArr.map((item, index) => {
                                    return (
                                        <div className="address-item" key={index}>
                                            <Form.Item
                                                name={item}
                                                label="Wallet Address"
                                                className="address"
                                            >
                                                <div className="flex-box">
                                                    <Input/>
                                                </div>
                                            </Form.Item>
                                            <Form.Item
                                                name={"rate" + index}
                                                label="Percentage"
                                                className="number"
                                            >
                                                <div className="flex-box">
                                                    <Input type="number" max={100}/>
                                                </div>
                                            </Form.Item>
                                            {(ownerArr.length > 1 && index == 0) && (
                                                <UserDeleteOutlined className="icon" onClick={() => {
                                                    removeOwner()
                                                }}/>)}
                                            {(index == ownerArr.length - 1) && (
                                                <UserAddOutlined className="icon" onClick={() => {
                                                    addOwner()
                                                }}/>)}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>)}
                        <div className="Item">
                            <Button type="primary" className="sub-btn" onClick={() => {
                                next()
                            }}>Next</Button>

                        </div>
                    </Form>

                </div>
                }


                {isShowReview && (
                    <div className="panel-container">
                        <div className="info-row">
                            <div className="name">
                                FireLock Amount
                            </div>
                            <div className="value">
                                {amount}
                            </div>
                        </div>
                        <div className="rate-table">
                            <div className="rate-header">
                                <div className="col">
                                    No
                                </div>
                                <div className="col">
                                    Wallet Address
                                </div>
                                <div className="col">
                                    Percentage
                                </div>
                                <div className="col">
                                    Amounts
                                </div>
                            </div>
                            <div>
                                {ownerMap.map((item, index) => {
                                    return (
                                        <div className="row">
                                            <div className="col">
                                                {index + 1}
                                            </div>
                                            <div className="col address">
                                                {item.address ? item.address.substr(0, 6) + "..." + item.address.substr(item.address.length - 4, item.address.length) : ""}

                                            </div>
                                            <div className="col">
                                                {item.rate} %
                                            </div>
                                            <div className="col">
                                                {item.amount}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                        <div>
                            <div className="mint-fee">
                                <div className="name">Lock Fee:</div>
                                <div className="value">{fee / FireLockDecimal}eth</div>
                            </div>
                            {(allowance < amount) && <Button type="primary" className="sub-btn" onClick={() => {
                                approve()
                            }}>Approve</Button>}
                            <Button type="primary" className="sub-btn" onClick={() => {
                                lock()
                            }}>Submit</Button>

                        </div>
                    </div>
                )}
            </div>
        </FireLockStyle>
    )
}
export default FireLock
