import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
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
import {dealTime} from "../../../utils/timeUtil";
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
    const [status, setStatus] = useState()

    const [totalDonate, setTotalDonate] = useState(0)
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


    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("FLMPool", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("FLMPool", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    const Row = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {index+1}
            </div>
            <div className="col id">
                {item.pid}
            </div>

            <div className="col id">
                {item.rewardCycle}
            </div>
            <div className="col id">
                {item.amount / 10**18}
            </div>
            <div className="col id">
                {dealTime(item.time)}
            </div>

            <div className="col address">
                {item.user && (
                    <a href={develop.ethScan + "address/" + item._user} target="_blank">
                        {item.user.substring(0, 6) + "..." + item.user.substring(item.user.length - 3, item.user.length)}
                    </a>
                )}
            </div>


        </div>
    }

    const Row2 = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {index+1}
            </div>
            <div className="col id">
                {item.pid}
            </div>
            <div className="col id">
                {item.fid}
            </div>
            <div className="col id">
                {item.lpAmount / 10**18}
            </div>
            <div className="col id">
                {dealTime(item.time)}
            </div>
            <div className="col address">
                {item.user && (
                    <a href={develop.ethScan + "address/" + item._user} target="_blank">
                        {item.user.substring(0, 6) + "..." + item.user.substring(item.user.length - 3, item.user.length)}
                    </a>
                )}
            </div>


        </div>
    }

    const getoneBlockAward = async ()=>{
        let res = await handleViewMethod("oneBlockAward", [])
        setoneBlockAward(parseInt(res/10**14) / 10000)
    }

    const getMonth = async (value) => {
        setMonth(value )
    }


    const getTokenBalance = async (value) => {
        let contractTemp = await getContractByContract("erc20", addressMap["FLMPoolLPAddress"].address, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [value])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        return balance
    }

    const getFLM_AMOUNT = async () => {
        let res = await handleViewMethod("FLM_AMOUNT", [])
        setFLM_AMOUNT( parseInt(res/10**18) / 100)
    }
    const getPool = async () => {
        let res = await handleViewMethod("Pool", [])
        const balance = await getTokenBalance(res)
        setFDTBalance(balance)
        setPool(res)
    }
    const getallowance =async ()=>{
        const contractTemp = await getContractByContract("erc20", addressMap["FLMPoolLPAddress"].address, state.api,)
        const allowance = await viewMethod(contractTemp, state.account, "allowance", [state.account, addressMap["FLMPool"].address])
        setAllowance(allowance)
    }
    const approve = async () => {
        const contractTemp = await getContractByContract("erc20", addressMap["FLMPoolLPAddress"].address, state.api,)
        await dealMethod(contractTemp, state.account, "approve", [addressMap["FLMPool"].address, state.api.utils.toWei((10 ** 18).toString())])
    }
    const getcanClaim = async () => {
        const balance = await handleViewMethod("canClaim", [state.account])
        setCanClaim(balance / 10**18)
    }
    const getRecord = async ()=>{
        const res = await getFLMPoolData()
        console.log(res)
        setClaimRecords(res.data.extractLpRecords)
        let myRecord= [],myClaimRecord =[]
        res.data.adminTransferRecords.forEach(item=>{
            if(item.user.toLowerCase() === state.account){
                myRecord.push(item)
            }
        })
        res.data.extractLpRecords.forEach(item=>{
            if(item.user.toLowerCase() === state.account){
                myClaimRecord.push(item)
            }
        })
        setAllRecords(allRecords)
        setMyClaimRecords(myClaimRecord)
    }
    const getData = async () => {
        try {
            getRecord()
            let judgeRes = await judgeStatus(state)
            if (!judgeRes) {
                return
            }
            getFLM_AMOUNT()
            getPool()
            getoneBlockAward()
            getBalance()
            getallowance()
            getisNotActivation()
            getcanClaim()
            getIDArr()
        } catch (e) {

        }
        // dispatch({type: "SET_PidArr", payload: tempArr})
    }
    const getBalance = async ()=>{
        const mylpBlance = await getTokenBalance(state.account)
        setMylpBalance(mylpBlance)
    }
    const getisNotActivation = async ()=>{
        const isNotActivation =  await handleViewMethod("isNotActivation", [state.account] )
        // setStatus(new Date(parseInt(isNotActivation*1000)))
    }
    const onChangePage = async (page) => {
        await setCurPage(page)
    }

    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const getIDArr = async ()=>{
        const length =  await handleViewMethod("getuserlockDetailsLength", [state.account] )
        console.log(length)
        for(let i = 0;i<length;i++){

            const detail =await handleViewMethod("userlockDetails", [state.account,i] )
            console.log(detail)
        }
    }
    const Claim =async ()=>{
        await handleDealMethod("Claim", [month, 0,] )
    }
    const activateExtraction =async ()=>{
        await handleDealMethod("activateExtraction", [] )
    }
    const ClaimFLM =async ()=>{
        await handleDealMethod("ClaimFLM", [0 ] )
    }
    const lockLp = async () => {
        await handleDealMethod("lockLp", [month, state.api.utils.toWei(form.getFieldValue().amount) ] )
        getBalance()
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
                            LP Mining
                        </div>
                        <div className="donate-info">

                            <div className="flex-box">
                                <div className="info-item">
                                    <div className="name">
                                        FDT/ETH LP
                                    </div>
                                    <div className="value">
                                        {mylpBalance}
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="name">
                                        FLM
                                    </div>
                                    <div className="value">
                                        {FLM_AMOUNT}
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
                            <h2>FDT/ETH Lock-up Amount(s)</h2>
                            <div className="balance-box">
                                <div className="name">
                                    Balance
                                </div>
                                <div className="value">
                                    {mylpBalance} <span>lp</span>
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

                            {
                                typeNav==1&&  <div>
                                    <div className="list-header flex-box">
                                        <div className="col">
                                            No.
                                        </div>
                                        <div className="col">
                                            PID
                                        </div>
                                        <div className="col">
                                            rewardCycle
                                        </div>
                                        <div className="col">
                                            Amount
                                        </div>
                                        <div className="col">
                                            time
                                        </div>
                                        <div className="col">
                                            User
                                        </div>
                                    </div>
                                    {recordNav==1&& allRecords.map((item,index)=>{
                                        return (
                                            Row(item,index)
                                        )
                                    })}
                                    {recordNav==2&& myRecords.map((item,index)=>{
                                        return (
                                            Row(item,index)
                                        )
                                    })}
                                </div>
                            }
                            {
                                typeNav==2&&  <div>
                                    <div className="list-header flex-box">
                                        <div className="col">
                                            No.
                                        </div>
                                        <div className="col">
                                            PID
                                        </div>
                                        <div className="col">
                                            weightCoefficient
                                        </div>
                                        <div className="col">
                                            lpAmount
                                        </div>
                                        <div className="col">
                                            time
                                        </div>
                                        <div className="col">
                                            User
                                        </div>
                                    </div>
                                    {recordNav==1&& claimRecords.map((item,index)=>{
                                        return (
                                            Row2(item,index)
                                        )
                                    })}
                                    {recordNav==2&& claimMyRecords.map((item,index)=>{
                                        return (
                                            Row2(item,index)
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
