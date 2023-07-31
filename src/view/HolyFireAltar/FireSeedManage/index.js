import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import { useNavigate, useLocation } from "react-router-dom";
import FireLockStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";
import AddWhiteListAddr from "./component/AddWhiteListAddr";
import RemoveWhiteListAddr from "./component/RemoveWhiteListAddr";
const FireLock = (props) => {
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
    const [activeNav, setNav] = useState(1)
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [total, setTotal] = useState(0)
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
    }
    const getDiscountFactors = async () => {
        // const arr = await handleViewMethod("discountFactors", [])

        // setDiscountArr(arr)
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
        // getWhitelist()
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
                        White List
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
                                                        { required: true, message: ' input !' },
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
                                                        { required: true, message: ' input' },
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
                                            Whitelist user Max
                                        </p>
                                        <Form form={form} name="control-hooks">
                                            <div className="user">
                                                <div className="name">
                                                    Max
                                                </div>
                                                {/* <div className="value">
                                                    {whiteMaxMint}
                                                </div> */}

                                                <Form.Item className="value"
                                                           name="WhitelistUserMintMax"
                                                    validateTrigger="onBlur"
                                                    validateFirst={true}
                                                    rules={[
                                                        { required: true, message: ' input !' },
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
                    <div className="panel-container">

                        <div className="panel-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ width: '80%' }}>White List</p>
                            <div className='tj' >
                                <div type="primary" className='kk' onClick={() => { setShowAdd(true) }}>Add</div>
                                <div type="primary" className='kk' onClick={() => { setShowRemove(true) }}>Delete</div>
                            </div>
                        </div>
                        <div className="fire-list-box">
                            <div className="list-header flex-box">
                                <div className="col">
                                    No.
                                </div>
                                <div className="col">
                                    PID
                                </div>
                                <div className="col">
                                    Wallet Address
                                </div>

                            </div>


                            {whitelist.map(item =>
                            (
                                <div className="list-item ">
                                    <div className="col no">
                                        {item}
                                    </div>
                                    <div className="col pid">
                                        {item.pid}
                                    </div>
                                    <div className="col address">
                                        {item}
                                    </div>

                                </div>
                            )
                            )}
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

                                                <div className="too" style={{ textAlign: 'center',margin:'0 45%' }} >
                                                    {fee}

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
                                                    { required: true, message: 'Please input MintFee!' },
                                                ]}
                                            >
                                                <Input style={{ textAlign: 'center',outline:'none' }} />
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

                                                <div className="too" style={{textAlign: 'center',margin:'0 45%'}} >
                                                    {userMaxMint}
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
                                                    { required: true, message: 'Please input UserMintMax!' },
                                                ]}
                                            >
                                                <Input style={{ textAlign: 'center',outline:'none' }}/>
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
                        <h1>
                            Mint Amount Discount
                        </h1>
                        <div className="content-item">
                            <div className="discount-list">
                                {discountArr.map(item => {
                                    return (<div className="list-item">
                                        <div className="start">
                                            {item.start}~
                                        </div>
                                        <div className="end">
                                            {item.end}
                                        </div>
                                        <div className="discount">
                                            {item.discount}
                                        </div>
                                        <div className="operate">
                                            <Button type="primary" onClick={() => { deleteDiscountFactor(item) }}>
                                                Delete
                                            </Button>
                                        </div>
                                    </div>)
                                })}
                            </div>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="start"
                                    label="start"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        { required: true, message: 'Please input start!' },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="end"
                                    label="end"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        { required: true, message: 'Please input end!' },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="discount"
                                    label="discount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        { required: true, message: 'Please input discount!' },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Button type="primary" className="max-btn" onClick={() => {
                                    setDiscountFactor()
                                }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-container">
                        <div className="content-item">
                            <div className="panel-title">
                                Whitelist Discount
                            </div>
                            <div className='discount1'>
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

                                            <div className="too" style={{ textAlign: 'center',margin:'0 45%' }}>
                                                {whitelistDiscount}
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
                                                { required: true, message: 'Please input WhitelistDiscount!' },
                                            ]}
                                        >
                                            <Input style={{ textAlign: 'center',outline:'none'}}  />%
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
            {curNav == 4 &&
                <div className="panel-box">
                    <div className="panel-container">
                        <div className="content-item">
                            <div className="panel-title">
                                Mint Revenue Allocation
                            </div>
                            <div className="fire-list-box">
                                <div className="list-header flex-box">
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
                                <Form>
                                    <div className="list-item ">

                                        <div className='col no'>
                                            1
                                        </div>
                                        <div className='col ref'>
                                            Referrer
                                        </div>
                                        <Form.Item className='value'
                                            validateFirst={true}
                                            rules={[
                                                { required: true, message: 'Please input rate1!' },
                                            ]}>
                                            {/* <div className='col'> */}
                                            <Input placeholder={rateObj.rate1} style={{ textAlign: 'center',outline:'none' }}  />
                                            {/* </div> */}%
                                        </Form.Item>
                                    </div>
                                    <div className="list-item ">
                                        <div className='col no'>
                                            2
                                        </div>
                                        <div className='col ref'>
                                            City Node
                                        </div>
                                        <Form.Item className='value'
                                            validateFirst={true}
                                            rules={[
                                                { required: true, message: 'Please input rate2!' },
                                            ]}>
                                            {/* <div className='col'> */}
                                            <Input placeholder={rateObj.rate2} style={{ textAlign: 'center',outline:'none' }}  />
                                            {/* </div> */}%
                                        </Form.Item>
                                    </div>
                                    <div className="list-item ">
                                        <div className='col no'>
                                            3
                                        </div>
                                        <div className='col ref'>
                                            RainbowCity Treasury
                                        </div>
                                        <Form.Item className='value' 
                                            validateFirst={true}
                                            rules={[
                                                { required: true, message: 'Please input rate3!' },
                                            ]}>
                                            {/* <div className='col'> */}
                                            <Input placeholder={rateObj.rate3} style={{ textAlign: 'center',outline:'none' }} />
                                            {/* </div> */}%
                                        </Form.Item>
                                    </div>

                                </Form>
                            </div>
                            <Button type="primary" style={{width:'45%',margin:'1em 25%'}} className="max-btn" onClick={() => {
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
                        <div className="fire-list-box">
                            <div className="list-header flex-box">
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
                                <div className="list-item ">

                                    <div className='col no'>
                                        1
                                    </div>
                                    <div className='col ref'>
                                        Lv1
                                    </div>
                                    <Form.Item className='value'
                                        validateFirst={true}
                                        rules={[
                                            { required: true, message: 'Please input lever1!' },
                                        ]}>
                                        {/* <div className='col'> */}
                                        <Input placeholder={referObj.lever1} style={{ textAlign: 'center' }} />
                                        {/* </div> */}%
                                    </Form.Item>
                                </div>
                                <div className="list-item ">
                                    <div className='col no'>
                                        2
                                    </div>
                                    <div className='col ref'>
                                        Lv2
                                    </div>
                                    <Form.Item className='value'
                                        validateFirst={true}
                                        rules={[
                                            { required: true, message: 'Please input lever2!' },
                                        ]}>
                                        {/* <div className='col'> */}
                                        <Input placeholder={rateObj.lever2} style={{ textAlign: 'center' }} />%
                                        {/* </div> */}
                                    </Form.Item>
                                </div>
                                <div className="list-item ">
                                    <div className='col no'>
                                        3
                                    </div>
                                    <div className='col ref'>
                                        Lv3
                                    </div>
                                    <Form.Item className='value'
                                        validateFirst={true}
                                        rules={[
                                            { required: true, message: 'Please input lever3!' },
                                        ]}>
                                        {/* <div className='col'> */}
                                        <Input placeholder={rateObj.lever3} style={{ textAlign: 'center' }} />%
                                        {/* </div> */}
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                        <Button type="primary" className="max-btn" style={{width:'45%',margin:'1em 25%'}} onClick={() => {
                            setInviteFeeRatio()
                        }}>
                            Submit
                        </Button>
                    </div>
                </div>}
        </FireLockStyle>
    )
}

export default FireLock
