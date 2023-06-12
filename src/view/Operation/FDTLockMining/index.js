import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import BigNumber from "bignumber.js"
import {
    Button,
    message,
    AutoComplete,
    Form,
    Pagination, Input
} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"

import develop from "../../../env";
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import {getFLMPoolData} from "../../../graph/pools";
import StyleBox from "./style";
import addressMap from "../../../api/addressMap";

const ViewBox = (props) => {
    let {state, dispatch} = useConnect();
    const [total, setTotal] = useState(0)
    const [total2, setTotal2] = useState(0)
    const [recordNav, setRecordNav] = useState(1)
    const [typeNav, setTypeNav] = useState(1)

    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [allowance, setAllowance] = useState(0)
    const [mylpBalance, setMylpBalance] = useState(0)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [PoolFDTBalance, setPoolFDTBalance] = useState(0)

    const [status, setStatus] = useState()

    const [month, setMonth] = useState(0)
    const [allRecords, setAllRecords] = useState([])

    const [claimRecords, setClaimRecords] = useState([])
    const [claimMyRecords, setMyClaimRecords] = useState([])

    const [myRecords, seMyRecords] = useState([])
    const [Pool, setPool] = useState()
    const [FLM_AMOUNT, setFLM_AMOUNT] = useState()
    const [oneBlockAward, setoneBlockAward] = useState()
    const [canClaim, setCanClaim] = useState(0)

    const history = useNavigate();
    const [form] = Form.useForm();


    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("FDTLockMining", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("FDTLockMining", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const Row = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {index + 1}
            </div>
            <div className="col address">
                {item._user && (
                    <a href={develop.ethScan + "address/" + item._user} target="_blank">
                        {item._user.substr(0, 6) + "..." + item._user.substr(item._user.length - 3, item._user.length)}
                    </a>
                )}
            </div>
            <div className="col">
                {item._amount}
            </div>

        </div>
    }


    const getoneBlockAward = async () => {
        let res = await handleViewMethod("oneBlockAward", [])
        setoneBlockAward(parseInt(res / 10 ** 14) / 10000)
    }

    const getMonth = async (value) => {
        setMonth(value)
    }


    const getTokenBalance = async (value) => {
        let contractTemp = await getContractByContract("erc20", addressMap["FDT"].address, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [value])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        return balance
    }

    const getFLM_AMOUNT = async () => {
        let res = await handleViewMethod("FLM_AMOUNT", [])
        setFLM_AMOUNT(parseInt(res / 10 ** 18) / 100)
    }
    const getPoolBalance = async () => {
        // let res = await handleViewMethod("Pool", [])
        const balance = await getTokenBalance(addressMap["FDTLockMining"].address)
        setPoolFDTBalance(balance)
        // setPool(res)
    }
    const getMyBalance = async () => {
        // let res = await handleViewMethod("Pool", [])
        const balance = await getTokenBalance(state.account)
        setFDTBalance(balance)
        // setPool(res)
    }
    const getallowance = async () => {
        const contractTemp = await getContractByContract("erc20", addressMap["FLMPoolLPAddress"].address, state.api,)
        const allowance = await viewMethod(contractTemp, state.account, "allowance", [state.account, addressMap["FLMPool"].address])
        setAllowance(allowance)
    }
    const approve = async () => {
        const contractTemp = await getContractByContract("erc20", addressMap["FDT"].address, state.api,)
        await dealMethod(contractTemp, state.account, "approve", [addressMap["FDTLockMining"].address, state.api.utils.toWei((10 ** 18).toString())])
    }
    const getcanClaim = async () => {
        const balance = await handleViewMethod("canClaim", [state.account])
        setCanClaim(balance / 10**18)
    }
    const getData = async () => {
        try {
            const res = await getFLMPoolData()
            console.log(res)
            let judgeRes = await judgeStatus(state)
            if (!judgeRes) {
                return
            }
            getFLM_AMOUNT()
            getPoolBalance()
            getMyBalance()
            getoneBlockAward()
            getcanClaim()
            getallowance()
            getisNotActivation()

        } catch (e) {

        }
        // dispatch({type: "SET_PidArr", payload: tempArr})
    }

    const getisNotActivation = async () => {
        const isNotActivation = await handleViewMethod("isNotActivation", [state.account])
        // setStatus(new Date(parseInt(isNotActivation*1000)))
    }
    const onChangePage = async (page) => {
        await setCurPage(page)
    }

    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const getIDArr = async () => {
        const length = await handleViewMethod("getuserlockDetailsLength", [state.account])
        console.log(length)
        for (let i = 0; i < length; i++) {

            const detail = await handleViewMethod("userlockDetails", [state.account, i])
            console.log(detail)
        }
    }
    const Claim = async () => {
        await handleDealMethod("Claim", [month, 0,])
    }
    const activateExtraction = async () => {
        await handleDealMethod("activateExtraction", [])
    }
    const ClaimFLM = async () => {
        await handleDealMethod("ClaimFLM", [0])
    }
    const lockLp = async () => {
        await handleDealMethod("lockFdt", [month, state.api.utils.toWei(form.getFieldValue().amount)])
        getPoolBalance()
    }
    useEffect(async () => {
        getData()
    }, [state.account]);
    const coinOptions = [

        {
            label: "Demand Deposit",
            value: '0',
        },
        {
            label: "1 month",
            value: '1',
        },


        {
            label: "3 month",
            value: '3',
        },
        {
            label: "6 month",
            value: '6',
        },
        {
            label: "12 month",
            value: '12',
        },
        {
            label: "24 month",
            value: '24',
        },
        {
            label: "36 month",
            value: '36',
        },
    ];

    return (
        <StyleBox>
            <div className="part1">
                <div className="panel-box">
                    <div className="panel-container">
                        <div className="panel-title">
                            FDT Pool Mining
                        </div>
                        <div className="donate-info">

                            <div className="flex-box">
                                <div className="info-item">
                                    <div className="name">
                                        FDT Mining Pool
                                    </div>
                                    <div className="value">
                                        {PoolFDTBalance}
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="name">
                                        Single Block Rewards
                                    </div>
                                    <div className="value">
                                        {oneBlockAward}
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="name">
                                        Estimate Yield
                                    </div>
                                    <div className="value">
                                        {}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Form form={form} name="control-hooks" className="form">
                            <h2>FDT Lock-up Amount(s)</h2>
                            <div className="balance-box">
                                <div className="name">
                                    Balance
                                </div>
                                <div className="value">
                                    {FDTBalance} <span>fdt</span>
                                </div>
                            </div>
                            <Form.Item
                                name="amount"
                                validateTrigger="onBlur"
                                validateFirst={true}
                            >
                                <div className="input-box">
                                    <AutoComplete
                                        allowClear
                                        value={month}
                                        onChange={(e) => {
                                            getMonth(e)
                                        }}
                                        options={coinOptions}
                                        placeholder=""
                                        filterOption={(inputValue, option) =>
                                            option.value.indexOf(inputValue) !== -1 &&
                                            /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/.test(inputValue)
                                        }
                                    />

                                </div>
                            </Form.Item>
                            <Form.Item
                                name="amount"
                                validateTrigger="onBlur"
                                validateFirst={true}

                            >
                                <div className="input-box">
                                    <div className="exchangeAmount">
                                        <Input type="number"/>
                                    </div>
                                    <div className="coin-name">
                                        {mylpBalance}
                                    </div>
                                </div>
                            </Form.Item>
                            <Button type="primary" className="donate" onClick={() => {
                                approve()
                            }}>
                                Approve
                            </Button>
                            <Button type="primary" className="donate" onClick={() => {
                                lockLp()
                            }}>
                                Submit
                            </Button>
                            <div className="tip">
                            </div>
                        </Form>
                    </div>
                    <div className="panel-container">
                        Withdraw
                        <h3>{status}</h3>
                        <Form form={form} name="control-hooks" className="form">
                            <div className="balance-box">
                                <div className="name">
                                    can claim
                                </div>
                                <div className="value">
                                    {canClaim}
                                </div>
                            </div>
                            <Form.Item
                                name="claimAmount"
                                validateTrigger="onBlur"
                                validateFirst={true}

                            >
                                <div className="input-box">
                                    <Input type="number"/>
                                </div>
                            </Form.Item>

                            <Button type="primary" className="donate" onClick={() => {
                                activateExtraction()
                            }}>
                                activateExtraction
                            </Button>
                            <Button type="primary" className="donate" onClick={() => {
                                Claim()
                            }}>
                                Withdraw
                            </Button>
                            <div className="tip">
                            </div>
                        </Form>

                    </div>
                </div>
                <div className="panel-box part2">
                    <div className="panel-container">
                        <div className="panel-title">
                            LP Mining Records
                        </div>
                        <div className="og-nav-list">
                            <div className={"nav-item " + (typeNav == 1 ? "active" : "")} onClick={() => {
                                setTypeNav(1)
                            }}>
                                LP Mining Records
                            </div>
                            <div className={"nav-item " + (typeNav == 2 ? "active" : "")} onClick={() => {
                                setTypeNav(2)
                            }}>
                                FLM Withdraw Records
                            </div>
                            <div className={"nav-item " + (typeNav == 3 ? "active" : "")} onClick={() => {
                                setTypeNav(3)
                            }}>
                                LP Mining Withdraw Records
                            </div>
                        </div>
                        <div className="og-nav-list">
                            <div className={"nav-item " + (recordNav == 1 ? "active" : "")} onClick={() => {
                                setRecordNav(1)
                            }}>
                                All Records
                            </div>
                            <div className={"nav-item " + (recordNav == 2 ? "active" : "")} onClick={() => {
                                setRecordNav(2)
                            }}>
                                My Records
                            </div>
                        </div>
                        <div className="fire-list-box">
                            <div className="list-header flex-box">
                                <div className="col">
                                    No.
                                </div>

                                <div className="col">
                                    Address
                                </div>

                                <div className="col">
                                    Amount
                                </div>
                            </div>
                            {
                                typeNav == 1 && <div>
                                    {recordNav == 1 && allRecords.map((item, index) => {
                                        return (
                                            Row(item, index)
                                        )
                                    })}
                                    {recordNav == 2 && myRecords.map((item, index) => {
                                        return (
                                            Row(item, index)
                                        )
                                    })}
                                </div>
                            }
                            {
                                typeNav == 2 && <div>
                                    {recordNav == 1 && claimRecords.map((item, index) => {
                                        return (
                                            Row(item, index)
                                        )
                                    })}
                                    {recordNav == 2 && claimMyRecords.map((item, index) => {
                                        return (
                                            Row(item, index)
                                        )
                                    })}
                                </div>
                            }
                        </div>
                        <div className="pagination">
                            {
                                <Pagination current={curPage} showSizeChanger
                                            onShowSizeChange={handleShowSizeChange}
                                            onChange={onChangePage} total={total}
                                            defaultPageSize={pageCount}/>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </StyleBox>
    )
}
export default ViewBox
