import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Pagination, Empty, Modal, Button, Select, Descriptions, message, Form, List, Input, notification, Card } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import { useNavigate, useLocation } from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";
import AddCateGoryAddr from "./component/AddCateGoryAddr.js";
import RemoveAddr from "./component/RemoveAddr";
import { formatAddress } from "../../../utils/publicJs";
import develop from "../../../env"
import sc from "../../../imgs/sc.png"
import wxz from "../../../imgs/wxz.png"
import xz from "../../../imgs/xz.png"
const FireLock = (props) => {
    const { closeDialog, updateData } = props
    let { state, dispatch } = useConnect();
    const [whitelist, setWhitelistArr] = useState([])
    const [allocation, setAllocation] = useState({})
    const [allocationFundAddress, setAllocationFundAddress] = useState([])
    const [tokenList, setTokenList] = useState([])



    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [feeRec, setFeeRe] = useState("")
    const [userMaxMint, setUserMintMax] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowSubAdd, setShowSubAdd] = useState(false)

    const [isShowRemove, setShowRemove] = useState(false)
    const [isRemoveOpen, setisRemoveOpen] = useState(false)
    const [isShowSubRemove, setShowSubRemove] = useState(false)
    const [isRemoveAddress, setRemoveAddress] = useState('')
    const [intervalTime, setIntervalTime] = useState()
    const [ReputationAmount, setReputationAmount] = useState()
    const [userTime, setUserTime] = useState()
    const [rate, setRate] = useState()
    const [award, setAward] = useState()
    const [wethAddr, setWethAddr] = useState()

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
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)

        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getIntervalTime()
        getReputationAmount()
        getUserTime()
        getRate()
        getAward()
        getAllocationFundAddress()
        getWethAddr()
    }


    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }
    const getIntervalTime = async () => {
        const intervalTime = await handleViewMethod("intervalTime", [])
        setIntervalTime(intervalTime)
    }
    const getReputationAmount = async () => {
        const intervalTime = await handleViewMethod("ReputationAmount", [])
        setReputationAmount(intervalTime)
    }
    const getUserTime = async () => {
        const intervalTime = await handleViewMethod("userTime", [])
        if (intervalTime > 0) {
            setUserTime(intervalTime / 3600)
        }
    }
    const getRate = async () => {
        const rate = await handleViewMethod("rate", [])
        setRate(rate)
    }
    const getAward = async () => {
        const rate = await handleViewMethod("award", [])
        setAward(rate)
    }
    const getWethAddr = async () => {
        const rate = await handleViewMethod("weth", [])
        setWethAddr(rate)
    }

    const getAllocationFundAddress = async () => {
        const length = await handleViewMethod("getAllocationFundAddressLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const address = await handleViewMethod("AllocationFundAddress", [i])
            const rate = await handleViewMethod("distributionRatio", [address])
            arr.push({ address, rate })
        }
        setAllocationFundAddress(arr)
    }
    function pictureStatus(e) {
        e.target.style.display="none";
        var dele = document.querySelector('.kk1');

        var sc2 = document.querySelectorAll('#scc');
        var bj = document.querySelectorAll('#bj1');
        dele.style.display="block";
        console.log(dele);
        for (const i of sc2) {
            i.style.display = "none"
        }
        for (const j of bj) {
            j.style.display = "block"
        }
        console.log(sc2)
    }
    const handleCheck = (item, index, val) => {
        let tempArra = [...allocationFundAddress]
        console.log(item);
        item.checked = val

        setAllocationFundAddress(tempArra)
    }


    const getTokenList = async () => {
        const length = await handleViewMethod("getTokensLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const address = await handleViewMethod("tokenList", [i])
            const rate = await handleViewMethod("distributionRatio", [address])
            arr.push({ address, rate })
        }
        setTokenList(arr)
    }
    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }
    const setSourceOfIncome = async () => {
        await handleDealMethod("setSourceOfIncome", [form.getFieldValue().SourceOfIncomeNum, form.getFieldValue().SourceOfIncomeUser, state.api.utils.toWei(form.getFieldValue().SourceOfIncomeAmount),])
    }
    const handleSetIntervalTime = async () => {
        await handleDealMethod("setIntervalTime", [form.getFieldValue().IntervalTime])
        getIntervalTime()
    }
    const setAllowAddr = async () => {
        await handleDealMethod("setAllowAddr", [form.getFieldValue().AllowAddr])

    }

    const handleSetRate = async () => {
        await handleDealMethod("setRate", [form.getFieldValue().Rate])
        getIntervalTime()
    }
    const handleSetReputationAmount = async () => {
        await handleDealMethod("setReputationAmount", [form.getFieldValue().ReputationAmount])
        getReputationAmount()
    }
    const handleSetUerIntverTime = async () => {
        await handleDealMethod("setUerIntverTime", [form.getFieldValue().UserTime * 3600])
        getUserTime()
    }
    const handleSetAward = async () => {
        await handleDealMethod("setAward", [form.getFieldValue().Award])
        getAward()
    }
    const setWeth = async () => {
        await handleDealMethod("setWeth", [form.getFieldValue().Weth])
        getWethAddr()
    }

    const  handleDelAddress = async ()=>{
        await handleDealMethod("removeAddr", [[isRemoveAddress]])
        updateData()
        closeDialog()
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
            {isShowSubAdd && <AddCateGoryAddr updateData={() => { getAllocationFundAddress() }} closeDialog={() => { setShowSubAdd(false) }} />}
            {isShowRemove && <RemoveAddr  delDataArr={allocationFundAddress}  updateData={() => { getAllocationFundAddress() }} closeDialog={() => { setShowRemove(false) }} />}

            <div className="page-title">
                Distribution Manage
            </div>
            <div className="header-nav">
                <div className="fire-nav-list ">
                    {/* <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={() => {
                            setCurNav(1)
                        }}>
                            Owner
                        </div> */}
                    <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={() => {
                        setCurNav(1)
                    }}>
                        Frequent & Limit
                    </div>
                    <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={() => {
                        setCurNav(2)
                    }}>
                        Category
                    </div>
                    <div className={"nav-item " + (curNav == 3 ? "active" : "")} onClick={() => {
                        setCurNav(3)
                    }}>
                        Require
                    </div>
                    <div className={"nav-item " + (curNav == 4 ? "active" : "")} onClick={() => {
                        setCurNav(4)
                    }}>
                        Token
                    </div>
                </div>
            </div>
            <div className="panel-box">
                <div className="panel-container">

                    {/* {curNav == 1 && <div className="part1">
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
                                        { required: true, message: 'Please input owner Address!' },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="max-btn" onClick={() => {
                                transferOwnership()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>} */}
                    {curNav == 1 && <div className="part1">

                        <div className="content-item">
                            <div className="panel-title">Frequent & Limit</div>
                            <div className='discount'>
                                <div className='content-item'>
                                    <p>Min/Frequent</p>
                                    <Form form={form} name="control-hooks">
                                        <div className="min">
                                            <div className="name">
                                                Current
                                            </div>
                                            <Form.Item className="value"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Title!' },
                                                ]}
                                            >
                                                <div className="too" >
                                                    {intervalTime}

                                                </div>

                                            </Form.Item>
                                        </div>
                                        <div className='min'>
                                            <div className="name">
                                                Predefined
                                            </div>
                                            <Form.Item
                                                className='value'
                                                name="MinCreationScore"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Min Creation Score!' },
                                                ]}
                                            >
                                                <Input className='too1' />
                                            </Form.Item>
                                        </div>

                                        <Button type="primary" className="max-btn" onClick={() => {
                                            handleSetIntervalTime()
                                        }}>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                                <div className='content-item1'>
                                    <p>Allocation percentage</p>
                                    <Form form={form} name="control-hooks">
                                        <div className="min">
                                            <div className="name">
                                                Current
                                            </div>
                                            <Form.Item

                                                className="value"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Title!' },
                                                ]}
                                            >
                                                <div className="too" >
                                                    {rate}
                                                    <span className='toodw' >%</span>
                                                </div>

                                            </Form.Item>
                                        </div>
                                        <div className='min'>
                                            <div className="name">
                                                Predefined
                                            </div>
                                            <Form.Item
                                                name="Rate"
                                                className='value'
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Rate!' },
                                                ]}
                                            >
                                                <Input className='too1' />
                                                <span className='too1dw'>%</span>
                                            </Form.Item>
                                        </div>

                                        <Button type="primary" className="max-btn" onClick={() => {
                                            handleSetRate()
                                        }}>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>}


                    {curNav == 2 &&

                        <div className="part1">
                            <Modal className="model-dialog" title="Delete" open={isRemoveOpen} onOk={handleDelAddress}
                                onCancel={() => {
                                    setisRemoveOpen(false)
                                }}>
                                <div className="del-content">
                                    <Form form={form} name="control-hooks">
                                        <Form.Item
                                            name="address"
                                            label="Wallet Address"
                                            className="address-box"
                                        >
                                            {isRemoveAddress}

                                        </Form.Item>
                                    </Form>
                                </div>
                            </Modal>
                            <div className="panel-title">
                                <p>Category</p>
                                <div className='tj' >
                                    <div type="primary" className='kk' onClick={() => { setShowSubAdd(true) }}>Add</div>
                                    <div type="primary" className='kk' onClick={(e) => {
                                        // whitelist.ischoosed.length>=1 ?setShowRemove(true): whitelist.ischoosed
                                        pictureStatus(e);
                                        // setShowRemove(true)
                                    }}>Mass Delete</div>
                                     <div type="primary" className='kk1' style={{ display: 'none' }} onClick={() => {

                                    setShowRemove(true)
                                }}>Delete</div>
                                </div>

                            </div>

                            <div className="fire-list-box cate">
                                <div className='listheadert'>
                                    <div className="list-header flex-box1">
                                        <div className="col1">
                                            No.
                                        </div>
                                        <div className="col1">
                                            Category
                                        </div>
                                        <div className="col1">
                                            Contract  Address
                                        </div>
                                        <div className="col1">
                                            Percentage
                                        </div>
                                        <div className="col1">
                                            Delete
                                        </div>
                                    </div>
                                    {
                                        allocationFundAddress.length == 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                                            allocationFundAddress.map((item, index) => (
                                                <Form className='bdval'>
                                                    <div className="list-item catelist" key={index}>
                                                        <div className="col1 no">
                                                            {index + 1}
                                                        </div>
                                                        <div className="col1">

                                                        </div>
                                                        <div className="col1 address">
                                                            <a href={develop.ethScan + "/address/" + item.address} target="_blank">
                                                                {formatAddress(item.address)}</a>
                                                        </div>
                                                        <Form.Item className="col1 value"
                                                            validateFirst={true}
                                                            rules={[
                                                                // { required: true, message: 'Please input rate1!' },
                                                            ]}>

                                                            <Input placeholder={item.rate} className="dtoo1" />
                                                            <span className='dtoo1dw'>%</span>
                                                        </Form.Item>
                                                        <div className="col1 sc1">
                                                        <img src={sc} className="sc" id='scc' onClick={() => {
                                                        setisRemoveOpen(true)
                                                        setRemoveAddress(item.address)
                                                    }} />
                                                    <div className="sc" id='bj1' style={{ display: 'none' }}>
                                                        {item.checked && <img style={{ width: '100%' }} className="check-icon" onClick={() => {
                                                            handleCheck(item, index, false)
                                                        }} src={xz} alt="" />}
                                                        {!item.checked && <img style={{ width: '100%' }} className="check-icon" onClick={() => {
                                                            handleCheck(item, index, true)
                                                        }} src={wxz} alt="" />}


                                                    </div>
                                                        </div>
                                                    </div>
                                                </Form>
                                            )
                                            )
                                    }
                                </div>
                            </div>
                        </div>}
                    {curNav == 3 && <div className="part1">
                        <div className="content-item">
                            <div className="panel-title">Require</div>
                            <div className='discount'>
                                <div className='content-item'>
                                    <p> FID Score</p>
                                    <Form form={form} name="control-hooks">
                                        <div className="min">
                                            <div className="name">
                                                Current
                                            </div>
                                            <Form.Item className="value"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Title!' },
                                                ]}
                                            >
                                                <div className="too" >
                                                    {ReputationAmount}
                                                </div>
                                            </Form.Item>
                                        </div>
                                        <div className='min'>
                                            <div className="name">
                                                Predefined
                                            </div>
                                            <Form.Item
                                                className='value'
                                                name="ReputationAmount"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input IntervalTime!' },
                                                ]}
                                            >
                                                <Input className='too1' />
                                            </Form.Item>
                                        </div>

                                        <Button type="primary" className="max-btn" onClick={() => {
                                            handleSetReputationAmount()
                                        }}>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className='content-item'>
                                    <p>Reward/Frequent</p>
                                    <Form form={form} name="control-hooks">
                                        <div className="min">
                                            <div className="name">
                                                Current
                                            </div>
                                            <Form.Item className="value"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Title!' },
                                                ]}
                                            >
                                                <div className="too" >
                                                    {award}
                                                    <span className='toodw'>(W)ETH</span>
                                                </div>
                                            </Form.Item>
                                        </div>
                                        <div className='min'>
                                            <div className="name">
                                                Predefined
                                            </div>
                                            <Form.Item
                                                className='value'
                                                name="Award"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Award!' },
                                                ]}
                                            >
                                                <Input className='too1' />
                                                <span className='too1dw'>(W)ETH</span>
                                            </Form.Item>
                                        </div>

                                        <Button type="primary" className="max-btn" onClick={() => {
                                            handleSetAward()
                                        }}>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className="content-item1">
                                    <p>Hour(s)/Frequent</p>
                                    <Form form={form} name="control-hooks">
                                        <div className="min">
                                            <div className="name">
                                                Current
                                            </div>
                                            <Form.Item className="value"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Title!' },
                                                ]}
                                            >
                                                <div className="too" >
                                                    {userTime}
                                                    <span className='toodw' >h</span>
                                                </div>

                                            </Form.Item>
                                        </div>
                                        <div className='min'>
                                            <div className="name">
                                                Predefined
                                            </div>
                                            <Form.Item
                                                className='value'
                                                name="UserTime"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input UserTime!' },
                                                ]}
                                            >
                                                <Input className='too1' />
                                                <span className='too1dw'>h</span>
                                            </Form.Item>
                                        </div>

                                        <Button type="primary" className="max-btn" onClick={() => {
                                            handleSetUerIntverTime()
                                        }}>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                                {/* <div className="content-item">
                                    <p>setWeth</p>
                                    <Form form={form} name="control-hooks">
                                        <div className="current">
                                            <div className="name">
                                            Current
                                            </div>
                                            <Form.Item className="value"
                                             validateTrigger="onBlur"
                                             validateFirst={true}
                                             rules={[
                                                 // { required: true, message: 'Please input Title!' },
                                             ]}
                                            >  
                                            <div className="too" >
                                                {wethAddr}
                                                </div>
                                            </Form.Item>
                                        </div>
                                        <div className='min'>
                                            <div className="name">
                                                Predefined
                                            </div>
                                        <Form.Item
                                            name="Weth"
                                            className='value'
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                            rules={[
                                                // { required: true, message: 'Please input UserTime!' },
                                            ]}
                                        >
                                             <Input className='too1' />
                                        </Form.Item>
                                        </div>
                                    </Form>
                                    <Button type="primary" className="max-btn" onClick={() => {
                                        setWeth()
                                    }}>
                                        Submit
                                    </Button>
                                </div> */}
                            </div>
                        </div>
                    </div>}

                    {curNav == 4 && <div className="part1">
                    <Modal className="model-dialog" title="Delete" open={isRemoveOpen} onOk={handleDelAddress}
                        onCancel={() => {
                            setisRemoveOpen(false)
                        }}>
                        <div className="del-content">
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="address"
                                    label="Wallet Address"
                                    className="address-box"
                                >
                                    {isRemoveAddress}

                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>
                        <div className="panel-title">
                            <p>Token</p>
                            <div className='tj' >
                                <div type="primary" className='kk' onClick={() => { setShowSubAdd(true) }}>Add</div>
                                <div type="primary" className='kk' onClick={() => { setShowRemove(true) }}>Mass Delete</div>
                            </div>
                        </div>

                        <div className="fire-list-box token">
                            <div className="list-header flex-box2">
                                <div className="col2">
                                    No.
                                </div>
                                <div className="col2">
                                    Symbol
                                </div>
                                <div className="col2">
                                    Token Address
                                </div>
                                <div className="col2">
                                    Delete
                                </div>
                            </div>
                            {allocationFundAddress.length == 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                                allocationFundAddress.map((item, index) => (
                                    <Form className='bdvalToken'>
                                        <div className="list-item tokenlist" key={index}>
                                            <div className="col2 no">
                                                {index + 1}
                                            </div>
                                            <div className='col2'>

                                            </div>

                                            <div className="col2 address">
                                                <a href={develop.ethScan + "/address/" + item.address} target="_blank">
                                                    {formatAddress(item.address)}</a>
                                            </div>
                                            <div className="col2 sc1">
                                                <img src={sc} className="sc" id='scc' />
                                            </div>

                                        </div>
                                    </Form>
                                )
                                )}
                        </div>

                    </div>}
                </div>
            </div>
        </FireLockStyle>
    )
}
export default FireLock
