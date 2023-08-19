import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Pagination, Modal, Empty, Button, Select, Descriptions, message, Form, List, Input, notification, Card } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import { useNavigate, useLocation } from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";
import AddWhiteListAddr from "./component/AddWhiteListAddr";
import sc from "../../../imgs/sc.png"
import wxz from "../../../imgs/wxz.png"
import xz from "../../../imgs/xz.png"
import RemoveWhiteListAddr from "./component/RemoveWhiteListAddr";
// import RemoveOnly from "./component/RemoveOnly";
const FireLock = (props) => {
    const { closeDialog, updateData } = props
    const [picture, setPicture] = useState();
    let { state, dispatch } = useConnect();
    const [whitelist, setWhitelistArr] = useState([])
    const [curNav, setCurNav] = useState(1)
    const [ownerAddr, setOwner] = useState("")
    const [feeRec, setFeeRe] = useState("")
    const [lowestMint, setLowestMint] = useState(0)
    const [userMaxMint, setUserMintMax] = useState(0)
    const [whiteMaxMint, setWhiteMaxMint] = useState(0)
    const [isShowAdd, setShowAdd] = useState(false)
    const [isShowRemove, setShowRemove] = useState(false)
    const [isRemoveAddress, setRemoveAddress] = useState('')
    const [isShowRemoveonly, setShowRemoveonly] = useState(true)
    const [isRemoveOpen, setisRemoveOpen] = useState(false)
    const [activeNav, setNav] = useState(1)
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [total, setTotal] = useState(0)
    const [ownerArr, setOwnerArr] = useState(['owner0'])
    const [fee, setFee] = useState(0)
    const [whitelistDiscount, setWhitelistDiscount] = useState(0)
    const [referObj, setReferObj] = useState({})
    const [rateObj, setRate] = useState({})

    const [discountArr, setDiscountArr] = useState([])
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
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const getData = async (page) => {
        getOwner()
        getFeeReceiver()
        getLowestMint()
        getUserMintMax()
        getWhiteMaxMint()
        getWhitelist()
        getFee()
        getDiscountFactors()
        getWhitelistDiscount()
        getReferRate()
        getRate()
    }


    const removeOwner = (item, index) => {
        let tempArr = [...whitelist]
        tempArr.map((item, index) => {
            tempArr.splice(index, 1, tempArr);
        })

        console.log(tempArr);
        setWhitelistArr(tempArr)
        console.log(whitelist);
    }
    const onChangePage = async (page) => {
        getData(page)
        await setCurPage(page)
    }
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const dealNum = (num) => {
        return parseInt(num * 100) / 100
    }
    const getOwner = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        setOwner(ownerAddr)
    }
    const getFee = async () => {
        const fee = await handleViewMethod("fee", [])
        setFee(fee / 10 ** 18)
    }

    const getWhitelistDiscount = async () => {
        const discount = await handleViewMethod("whitelistDiscount", [])
        setWhitelistDiscount(discount)
        console.log(discount);
    }

    const getDiscountFactors = async () => {
        const arr = await handleViewMethod("discountFactors", [])

        setDiscountArr(arr)
    }
    const getFeeReceiver = async () => {
        const feeReceiver = await handleViewMethod("rainbowTreasury", [])
        setFeeRe(feeReceiver)
    }

    const getReferRate = async () => {
        const lever1 = await handleViewMethod("TOP_FEE_RATIO", [])
        const lever2 = await handleViewMethod("MIDDLE_FEE_RATIO", [])
        const lever3 = await handleViewMethod("DOWN_FEE_RATIO", [])

        setReferObj({
            lever1,
            lever2,
            lever3
        })
    }

    const getRate = async () => {
        const rate1 = await handleViewMethod("TOTAL_INVITE_REWARD_RATIO", [])
        const rate2 = await handleViewMethod("TOTAL_CITYNODE_REWARD_RATIO", [])
        const rate3 = await handleViewMethod("TOTAL_MAIN_RATIO", [])

        setRate({
            rate1,
            rate2,
            rate3
        })
    }
    const getLowestMint = async () => {
        const lowestMint = await handleViewMethod("lowestMint", [])
        setLowestMint(lowestMint)
    }
    const getUserMintMax = async () => {
        const maxM = await handleViewMethod("userPerMintMax", [])
        setUserMintMax(maxM)
    }
    const getWhitelist = async () => {
        const arr = await handleViewMethod("getAirDropList", [])
        console.log(arr);
        setWhitelistArr(arr)
    }

 
    const getWhiteMaxMint = async () => {
        const maxM = await handleViewMethod("whiteListPerMintMax", [])
        setWhiteMaxMint(maxM)
    }

    const changeFeeReceiver = async () => {
        await handleDealMethod("setRainbowTreasury", [form.getFieldValue().FeeReceiver])
        getFeeReceiver()
    }
    const hanleSetWhitelistDiscount = async () => {
        await handleDealMethod("setWhitelistDiscount", [form.getFieldValue().WhitelistDiscount])
        getWhitelistDiscount()
    }

    const handleSetLowestMint = async () => {
        await handleDealMethod("setLowestMint", [form.getFieldValue().GeneralUserMin])
        getLowestMint()
    }
    const setInviteFeeRatio = async () => {
        await handleDealMethod("setInviteFeeRatio", [form.getFieldValue().lever1, form.getFieldValue().lever2, form.getFieldValue().lever3,])
        getReferRate()
    }
    const setTotalRewardRatioOne = async () => {
        await handleDealMethod("setTotalRewardRatioOne", [form.getFieldValue().rate1, form.getFieldValue().rate2, form.getFieldValue().rate3,])
        getRate()
    }

    const setDiscountFactor = async () => {
        await handleDealMethod("setDiscountFactor", [form.getFieldValue().start, form.getFieldValue().end, form.getFieldValue().discount,])
        getDiscountFactors()
    }
    const handleSetMaxMint = async () => {
        await handleDealMethod("setUserPerMintMax", [form.getFieldValue().UserMintMax])
        getUserMintMax()
    }
    const handleSetWhitelistMaxMint = async () => {
        await handleDealMethod("setWListPerMintMax", [form.getFieldValue().WhitelistUserMintMax])
        getWhiteMaxMint()
    }
    const transferOwnership = async () => {
        await handleDealMethod("transferOwnership", [form.getFieldValue().owner])
        getOwner()
    }
    const handleSetFee = async () => {
        await handleDealMethod("setFee", [state.api.utils.toWei(form.getFieldValue().MintFee)])
        getFee()
    }

    const deleteDiscountFactor = async (param) => {
        await handleDealMethod("deleteDiscountFactor", [param.start, param.end])
        getDiscountFactors()
    }
    const addWhiteListUser = async () => {
        await handleDealMethod("addWhiteListUser", [])
        getWhitelist()
    }

    const handleSetAddress = async () => {
        let _to = []
        console.log(form.getFieldValue())
        for (let i = 0; i < ownerArr.length; i++) {
            _to.push(form.getFieldValue()["owner" + i])
        }

        await handleDealMethod("addWhiteListUser", [_to])
        updateData()
        closeDialog()
    }
    const handleDelAddress = async () => {

        await handleDealMethod("removeFromWhiteList", [[isRemoveAddress]])
        getWhitelist()
    }
       const changePicture = () => {
       
    }
    const muchSelect = () => {
         setPicture([
            wxz,xz
        ])
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
            {isShowAdd && <AddWhiteListAddr updateData={() => { getWhitelist() }} closeDialog={() => { setShowAdd(false) }} />}
            {isShowRemove && <RemoveWhiteListAddr updateData={() => { getWhitelist() }} closeDialog={() => { setShowRemove(false) }} />}
            {/* {isShowRemoveonly && <RemoveOnly updateData={() => { getWhitelist() }} closeDialog={() => { setShowRemoveonly(false) }} />} */}
            <div className="page-title">
                FireSeed Manage
            </div>

            <div className="header-nav">
                <div className="fire-nav-list">
                    <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={() => {
                        setCurNav(1)
                    }}>
                        Owner
                    </div>
                    <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={() => {
                        setCurNav(2)
                    }}>
                        L2 Admin
                    </div>
                    <div className={"nav-item " + (curNav == 3 ? "active" : "")} onClick={() => {
                        setCurNav(3)
                    }}>
                        Discount
                    </div>
                    <div className={"nav-item " + (curNav == 4 ? "active" : "")} onClick={() => {
                        setCurNav(4)
                    }}>
                        Allocation
                    </div>
                </div>
            </div>
            {curNav == 1 &&
                <div className="part1">
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="content-item">
                                <div className="panel-title">
                                    Owner Address
                                </div>
                                <div className="current-box">
                                    <Form form={form} name="control-hooks" className="form">

                                        <div className="current">
                                            <div className="name">
                                                Current
                                            </div>
                                            <div className="value">
                                                {ownerAddr}
                                            </div>
                                        </div>


                                        <Form.Item
                                            name="predefined"
                                            label="Predefined"
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                            rules={[
                                                { required: true, message: 'Please input predefined!' },
                                            ]}
                                            style={{
                                                borderRadius: '25px'
                                            }}
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
                            </div>
                        </div>
                        <div className="panel-container">
                            <div className="content-item">
                                <div className='panel-title'>Revenue Address</div>
                                <div className="current-box">
                                    <Form form={form} name="control-hooks">
                                        <div className="current">
                                            <div className="name">
                                                Current
                                            </div>
                                            <div className="value">
                                                {feeRec}
                                            </div>
                                        </div>
                                        <Form.Item
                                            label="Predefined"
                                            name="Predefined"
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
                                        changeFeeReceiver()
                                    }}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            {curNav == 2 &&
                <div className="part2">
                    <div className="panel-box">
                        <div className='panel-container'>
                            <div className="content-item">
                                <div className="panel-title">Mint Amount(s)</div>
                                <div className='amountbox'>
                                    <div className='general'>
                                        <p>General user</p>
                                        <Form form={form} name="control-hooks">
                                            <div className="user">
                                                <div className="name">
                                                    Min
                                                </div>
                                                <Form.Item className="value"
                                                    name="GeneralUserMin"
                                                    validateTrigger="onBlur"
                                                    validateFirst={true}
                                                    rules={[
                                                        // { required: true, message: ' input !' },
                                                    ]}
                                                >
                                                    <Input placeholder={lowestMint} style={{ textAlign: 'center' }} />
                                                </Form.Item>
                                            </div>
                                            <Button type="primary" className="max-btn" onClick={() => {
                                                handleSetLowestMint()
                                            }}>
                                                Submit
                                            </Button>
                                            <div className="user">
                                                <div className="name">
                                                    Max
                                                </div>
                                                <Form.Item className="value"
                                                    name="UserMintMax"
                                                    validateTrigger="onBlur"
                                                    validateFirst={true}
                                                    rules={[
                                                        // { required: true, message: ' input' },
                                                    ]}
                                                >
                                                    <Input placeholder={userMaxMint} style={{ textAlign: 'center' }} />
                                                </Form.Item>
                                            </div>
                                            <Button type="primary" className="max-btn" onClick={() => {
                                                handleSetMaxMint()
                                            }}>
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                    <div className="whitelist">
                                        <p>
                                            L2 Admin
                                        </p>
                                        <Form form={form} name="control-hooks">
                                            <div className="user">
                                                <div className="name">
                                                    Max
                                                </div>
                                                <Form.Item className="value"
                                                    name="WhitelistUserMintMax"
                                                    validateTrigger="onBlur"
                                                    validateFirst={true}
                                                    rules={[
                                                        // { required: true, message: ' input !' },
                                                    ]}
                                                >
                                                    <Input placeholder={whiteMaxMint} style={{ textAlign: 'center' }} />
                                                </Form.Item>
                                            </div>

                                            <Button type="primary" className="max-btn" onClick={() => {
                                                handleSetWhitelistMaxMint()
                                            }}>
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>}
            {curNav == 2 &&
                <div className='panel-box'>
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
                    <div className="panel-container">

                        <div className="panel-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p >L2 Admin</p>
                            <div className='tj' >
                                <div type="primary" className='kk' onClick={() => { setShowAdd(true) }}>Add</div>
                                <div type="primary" className='kk' onClick={(e) => { 
                                    // e.target.innerHTML = 'Delete'; 
                                muchSelect();
                                // setShowRemove(true) 
                                }}>Mass Delete</div>
                            </div>
                        </div>
                        <div className="fire-list-box ffad">
                            <div className="list-header flex-box2">
                                <div className="col1">
                                    No.
                                </div>
                                {/* <div className="col1">
                                    PID
                                </div> */}
                                <div className="col1">
                                    Wallet Address
                                </div>
                                <div className="col1">
                                    Delete
                                </div>
                            </div>


                            {
                                whitelist.length == 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                                    whitelist.map((item, index) => (
                                        <Form className='bdval'>
                                            <div className="list-item" key={index}>
                                                <Form.Item className="col1 no">

                                                    {index + 1}

                                                </Form.Item>
                                                {/* <div className="col1 pid">
                                                        {item}
                                                    </div> */}
                                                <div className="col1 address">
                                                    <a name="address"> {item}</a>
                                                </div>
                                             
                                                <div className="col1 sc1" onClick={() => {
                                                    setisRemoveOpen(true)
                                                    setRemoveAddress(item)
                                                }}>
                                                    <img src={picture} className="sc" />
                                                </div>

                                            </div>

                                        </Form>
                                    ))}
                        </div>
                        <div className="pagination">
                            {
                                activeNav == 1 && <Pagination current={curPage} showSizeChanger onShowSizeChange={handleShowSizeChange}
                                    onChange={onChangePage} total={total}
                                    defaultPageSize={pageCount} />
                            }
                        </div>
                    </div>
                </div>
            }
            {curNav == 3 &&
                <div className="panel-box">
                    <div className="panel-container">
                        <div className="content-item">
                            <div className="panel-title">FireSeed Discount</div>
                            <div className='discount'>
                                <div className='mintfee'>
                                    <p>Mint Fee</p>
                                    <Form form={form} name="control-hooks">
                                        <div className="fee1">
                                            <div className="name">
                                                Current
                                            </div>

                                            <Form.Item
                                                className='value'
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Title!' },
                                                ]}
                                            >

                                                <div className="too" >
                                                    {fee}
                                                    <span className='toodw' >(W)ETH</span>
                                                </div>
                                            </Form.Item>
                                        </div>
                                        <div className='fee1'>
                                            <div className="name">
                                                Predefined
                                            </div>
                                            <Form.Item
                                                className='value'
                                                name="MintFee"
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input MintFee!' },
                                                ]}
                                            >
                                                <Input className='too1' />
                                                <span className='too1dw'>(W)ETH</span>
                                            </Form.Item>
                                        </div>
                                        <Button type="primary" className="max-btn" onClick={() => {
                                            handleSetFee()
                                        }}>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                                <div className='mintdis'>
                                    <p>Mint Discount</p>

                                    <Form form={form} name="control-hooks">
                                        <div className='fee1'>
                                            <div className="name">
                                                Current
                                            </div>
                                            <Form.Item
                                                className='value'
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input Title!' },
                                                ]}
                                            >

                                                <div className="too" >
                                                    {userMaxMint}
                                                    <span className='toodw'>%</span>
                                                </div>
                                            </Form.Item>
                                        </div>
                                        <div className='fee1'>
                                            <div className="name">
                                                Predefined
                                            </div>
                                            <Form.Item
                                                className='value'
                                                validateTrigger="onBlur"
                                                validateFirst={true}
                                                rules={[
                                                    // { required: true, message: 'Please input UserMintMax!' },
                                                ]}
                                            >
                                                <Input className='dtoo1' />
                                                <span className='dtoo1dw'>%</span>
                                            </Form.Item>
                                        </div>
                                        <Button type="primary" className="max-btn" onClick={() => {
                                            handleSetMaxMint()
                                        }}>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-container">
                        <div className="content-item">
                            <div className="panel-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Mint Amount Discount</span>
                                <div className='tj1' >
                                    <div type="primary" className='kk' style={{ width: '100%', marginRight: '0px' }} onClick={() => { }}>Add</div>
                                </div>
                            </div>
                            <div className="fire-list-box ff1">
                                <div className='listheadert'>
                                    <div className="list-header flex-box3">
                                        <div className="col">
                                            Range
                                        </div>
                                        <div className="col">
                                            Amount Discount
                                        </div>
                                        <div className="col">
                                            Price/unit
                                        </div>
                                    </div>
                                    {
                                        discountArr.length == 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                                            discountArr.map((item, index) => {
                                                return (
                                                    <Form form={form} name="control-hooks">


                                                        <div className="list-item dis">
                                                            <div className='col range'>
                                                                <Form.Item className='start'
                                                                    validateFirst={true}
                                                                    rules={[
                                                                        // { required: true, message: 'Please input start!' },
                                                                    ]}>
                                                                    <Input placeholder='{item.start}' className="dtoo1" />


                                                                </Form.Item>
                                                                <span className='space'>-</span>
                                                                <Form.Item className='end'
                                                                    validateFirst={true}
                                                                    rules={[
                                                                        // { required: true, message: 'Please input end!' },
                                                                    ]}>
                                                                    <Input placeholder='{item.end}' className="dtoo1" />

                                                                </Form.Item>
                                                            </div>
                                                            <div className='col disamount'>
                                                                <Form.Item className='dis1'
                                                                    validateFirst={true}
                                                                    rules={[
                                                                        // { required: true, message: 'Please input discount!' },
                                                                    ]}>
                                                                    <Input placeholder='{item.discount}' className="dtoo1" />

                                                                </Form.Item>

                                                            </div>
                                                            <div className='col price'>
                                                                czxc
                                                            </div>
                                                        </div>


                                                    </Form>

                                                )
                                            })
                                    }
                                </div>
                            </div>
                            <Button type="primary" className="max-btn" style={{ width: '45%', margin: '1em 25%' }} onClick={() => {
                                setDiscountFactor()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>
                    <div className="panel-container">
                        <div className="content-item">
                            <div className="panel-title">
                                Whitelist Discount
                            </div>
                            <div className='discount1'>
                                <p className='nnn'>Whitelist Discount</p>
                                <Form form={form} name="control-hooks">
                                    <div className="disac">
                                        <div className="name">
                                            Current
                                        </div>
                                        <Form.Item
                                            className='value'
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                            rules={[
                                                // { required: true, message: 'Please input Title!' },
                                            ]}
                                        >

                                            <div className="too" >
                                                {whitelistDiscount}
                                                <span className='toodw'>%</span>
                                            </div>
                                        </Form.Item>
                                    </div>
                                    <div className='disac'>
                                        <div className="name">
                                            Predefined
                                        </div>
                                        <Form.Item
                                            className='value'
                                            name="WhitelistDiscount"
                                            validateTrigger="onBlur"
                                            validateFirst={true}
                                            rules={[
                                                // { required: true, message: 'Please input WhitelistDiscount!' },
                                            ]}
                                        >
                                            <Input className='dtoo1' />
                                            <span className='dtoo1dw'>%</span>

                                        </Form.Item>
                                    </div>
                                    <Button type="primary" className="max-btn" onClick={() => {
                                        hanleSetWhitelistDiscount()
                                    }}>
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>}
            {
                curNav == 4 &&
                <div className="panel-box">
                    <div className="panel-container">
                        <div className="content-item">
                            <div className="panel-title">
                                Mint Revenue Allocation
                            </div>
                            <div className="fire-list-box ff2">
                                <div className="list-header flex-box1">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        Category
                                    </div>
                                    <div className="col">
                                        Percentage
                                    </div>
                                </div>
                                <Form form={form} name="control-hooks" className='ffa'>
                                    <div className="list-item lever">

                                        <div className='col no'>
                                            1
                                        </div>
                                        <div className='col ref'>
                                            Referrer
                                        </div>
                                        <Form.Item className='value'
                                            validateFirst={true}
                                            rules={[
                                                // { required: true, message: 'Please input rate1!' },
                                            ]}>
                                            {/* <div className='col'> */}
                                            <Input placeholder={rateObj.rate1} className="dtoo1" />
                                            {/* </div> */}
                                            <span className='dtoo1dw'>%</span>
                                        </Form.Item>
                                    </div>
                                    <div className="list-item lever">
                                        <div className='col no'>
                                            2
                                        </div>
                                        <div className='col ref'>
                                            City Node
                                        </div>
                                        <Form.Item className='value'
                                            validateFirst={true}
                                            rules={[
                                                // { required: true, message: 'Please input rate2!' },
                                            ]}>
                                            {/* <div className='col'> */}
                                            <Input placeholder={rateObj.rate2} className="dtoo1" />
                                            {/* </div> */}
                                            <span className="dtoo1dw">%</span>
                                        </Form.Item>
                                    </div>
                                    <div className="list-item lever">
                                        <div className='col no'>
                                            3
                                        </div>
                                        <div className='col ref'>
                                            RainbowCity Treasury
                                        </div>
                                        <Form.Item className='value'
                                            validateFirst={true}
                                            rules={[
                                                // { required: true, message: 'Please input rate3!' },
                                            ]}>
                                            {/* <div className='col'> */}
                                            <Input placeholder={rateObj.rate3} className="dtoo1" />
                                            {/* </div> */}
                                            <span className="dtoo1dw">%</span>
                                        </Form.Item>
                                    </div>

                                </Form>
                            </div>
                            <Button type="primary" style={{ width: '45%', margin: '1em 25%' }} className="max-btn" onClick={() => {
                                setTotalRewardRatioOne()
                            }}>
                                Submit
                            </Button>
                        </div>
                    </div>
                    <div className="panel-container">
                        <div className="panel-title">
                            Category: Referrer
                        </div>
                        <div className="fire-list-box ff2">
                            <div className="list-header flex-box1">
                                <div className="col">
                                    No.
                                </div>
                                <div className="col">
                                    Referrer
                                </div>
                                <div className="col">
                                    Percentage
                                </div>
                            </div>
                            <Form>
                                <div className="list-item lever">

                                    <div className='col no'>
                                        1
                                    </div>
                                    <div className='col ref'>
                                        Lv1
                                    </div>
                                    <Form.Item className='value'
                                        validateFirst={true}
                                        rules={[
                                            // { required: true, message: 'Please input lever1!' },
                                        ]}>
                                        {/* <div className='col'> */}
                                        <Input placeholder={referObj.lever1} className="dtoo1" />
                                        {/* </div> */}<span className="dtoo1dw">%</span>
                                    </Form.Item>
                                </div>
                                <div className="list-item lever">
                                    <div className='col no'>
                                        2
                                    </div>
                                    <div className='col ref'>
                                        Lv2
                                    </div>
                                    <Form.Item className='value'
                                        validateFirst={true}
                                        rules={[
                                            // { required: true, message: 'Please input lever2!' },
                                        ]}>
                                        {/* <div className='col'> */}
                                        <Input placeholder={rateObj.lever2} className="dtoo1" />
                                        {/* </div> */}<sapn className="dtoo1dw">%</sapn>
                                    </Form.Item>
                                </div>
                                <div className="list-item lever">
                                    <div className='col no'>
                                        3
                                    </div>
                                    <div className='col ref'>
                                        Lv3
                                    </div>
                                    <Form.Item className='value'
                                        validateFirst={true}
                                        rules={[
                                            // { required: true, message: 'Please input lever3!' },
                                        ]}>
                                        {/* <div className='col'> */}
                                        <Input placeholder={rateObj.lever3} className='dtoo1' />
                                        {/* </div> */}<span className='dtoo1dw'>%</span>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                        <Button type="primary" className="max-btn" style={{ width: '45%', margin: '1em 25%' }} onClick={() => {
                            setInviteFeeRatio()
                        }}>
                            Submit
                        </Button>
                    </div>
                </div>
            }
        </FireLockStyle >
    )
}

export default FireLock
