import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification, Card} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {useNavigate, useLocation} from "react-router-dom";
import FLMPoolStyle from "./style";
import judgeStatus from "../../../utils/judgeStatus";
import {getFLMExchange} from "../../../graph/square";
import addressMap from "../../../api/addressMap";
import publicJs from "../../../utils/publicJs";
import {dealTime} from "../../../utils/timeUtil";

const FLMPool = (props) => {
    let {state, dispatch} = useConnect();

    const [curNav, setCurNav] = useState(1)

    const [fdtCoinInfo, setFDTCoinInfo] = useState({})
    const [ogCoinInfo, setFLMCoinInfo] = useState({})
    const [canExchange, setCanExchange] = useState(0)
    const [canClaim, setCanClaim] = useState(0)
    const [isMeNav, setIsMeNav] = useState(1)

    const [form] = Form.useForm();
    const [exchangeRecord, setChangeRecord] = useState([])
    const [claimRecord, setClaimRecord] = useState([])
    const [myExchangeRecord, setMyChangeRecord] = useState([])
    const [myClaimRecord, setMyClaimRecord] = useState([])
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
        let contractTemp = await getContractByName("FLMPool", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("FLMPool", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getTokenInfo = async (value) => {
        let contractTemp = await getContractByContract("erc20", value.toString().trim(), state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [state.account])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        return {
            address: value,
            decimal,
            balance
        }

    }
    const getTokens = async () => {
        const fdt = await getTokenInfo(addressMap["FDT"].address)
        const og = await getTokenInfo(addressMap["FLM"].address)
        setFDTCoinInfo(fdt)
        setFLMCoinInfo(og)
    }
    const getCanClaim = async () => {
        const CanClaim = await handleViewMethod("CanClaim", [])
        setCanClaim(CanClaim / 10 ** 18)
    }
    const approve = async () => {
        const contractTemp = await getContractByContract("erc20", addressMap["FLM"].address, state.api,)
        await dealMethod(contractTemp, state.account, "approve", [addressMap["FLMPool"].address, state.api.utils.toWei((10 ** 18).toString())])
    }
    const exchange = async () => {
        await handleDealMethod("exchange", [state.api.utils.toWei(form.getFieldValue().amount.toString())])
        getTokens()
    }
    const withdraw = async () => {
        await handleDealMethod("Claim", [state.api.utils.toWei(form.getFieldValue().wAmount.toString())])
        getTokens()
        getCanClaim()
    }
    const dealNum = (num) => {
        return parseInt(num * 100) / 100
    }
    const getCanExc = async (event) => {
        setCanExchange(event.target.value * 0.001)
    }
    const setMax = () => {
        form.setFieldsValue({"amount": ogCoinInfo.balance})
        setCanExchange(ogCoinInfo.balance*0.001)
    }
    const setMax2 = () => {
        form.setFieldsValue({"wAmount": canClaim})
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getTokens()
        getCanClaim()
        try {
            const res = await getFLMExchange()
            const excArr = res.data.allExchangeRecords, claArr = res.data.allClaimRecords
            setChangeRecord(excArr)
            setClaimRecord(claArr)
            let myEecArr = [],myClaimArr = []
            for(let i=0;i<excArr.length;i++){
                if(excArr[i].user.toLowerCase() == state.account.toLowerCase()){
                    myEecArr.push(excArr[i])
                }
            }
            for(let i=0;i<claArr.length;i++){
                if(claArr[i].user.toLowerCase() == state.account.toLowerCase()){
                    myClaimArr.push(claArr[i])
                }
            }
            console.log(myEecArr,myClaimArr)
            setMyChangeRecord(myEecArr)
            setMyClaimRecord(myClaimArr)
        } catch (e) {

        }
    }, [state.account]);

    return (
        <FLMPoolStyle>
            <h1 className="title">
                FLM Pool
            </h1>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="op-box">
                        <div className="exchange-box">
                            <div className="exchange">
                                <div className="part1">
                                    <div className="left">
                                        <strong>FLM</strong>
                                    </div>
                                    <div className="right">
                                        <Form form={form} name="control-hooks">
                                            <Form.Item
                                                name="amount"
                                            >
                                                <Input type="number" onChange={event => {
                                                    getCanExc(event)
                                                }}/>
                                            </Form.Item>
                                        </Form>
                                        <Button className="sub-btn" onClick={() => {
                                            setMax()
                                        }} type="primary">
                                            Max
                                        </Button>
                                        <div className="balance">
                                            Balance:
                                            {ogCoinInfo.balance}
                                        </div>
                                    </div>
                                </div>
                                <div className="to">
                                    TO
                                </div>
                                <div className="part2">
                                    <div className="left">
                                        FDT
                                    </div>
                                    <div className="right">
                                        <div className="can-exc">
                                            {canExchange}
                                        </div>
                                        <div className="balance">
                                            Balance:
                                            {fdtCoinInfo.balance}
                                        </div>
                                    </div>
                                </div>
                                <div className="tip">
                                    1 FLM=0.001FDT($0.001)
                                </div>
                                <Button type="primary" onClick={approve}> Approve </Button>
                                <Button type="primary" onClick={exchange}> Exchange </Button>
                            </div>
                        </div>
                        <div className="withdraw-box">
                            <div className="name">
                                Number of FDT that can be withdrawn
                            </div>
                            <div className="value">
                                {canClaim}
                            </div>
                            <div className="input-box">
                                <div className="name">
                                    Withdraw Amount(s)
                                </div>
                                <Form form={form} name="control-hooks">
                                    <Form.Item
                                        name="wAmount"
                                        className="withdraw-input"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Form>
                                <Button type="primary" onClick={setMax2}>Max </Button>
                            </div>
                            <Button type="primary" onClick={withdraw}>Withdraw </Button>
                        </div>
                    </div>
                    <div className="nav-list">
                        <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={() => {
                            setCurNav(1)
                        }}>
                            Exchange Record
                        </div>
                        <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={() => {
                            setCurNav(2)
                        }}>
                            Claim Record
                        </div>
                    </div>
                    <div className="nav-list">
                        <div className={"nav-item " + (isMeNav == 1 ? "active" : "")} onClick={() => {
                            setIsMeNav(1)
                        }}>
                            All
                        </div>
                        <div className={"nav-item " + (isMeNav == 2 ? "active" : "")} onClick={() => {
                            setIsMeNav(2)
                        }}>
                            My
                        </div>
                    </div>
                    {curNav==1&&isMeNav==1&&(
                        <div className="fire-list-box">
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
                                    Wallet Address
                                </div>
                                <div className="col">
                                    Amounts
                                </div>
                                <div className="col">
                                    Time(UTC)
                                </div>
                            </div>
                            {exchangeRecord.map((item, index) => {
                                return (   <div className="list-item" key={index}>
                                    <div className="col">
                                        {index}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.name}
                                    </div>
                                    <div className="col">
                                        {publicJs.dealSubAddr(item.user)}
                                    </div>
                                    <div className="col">
                                        {item.amount/10**18}
                                    </div>
                                    <div className="col">
                                        {dealTime(item.time)}
                                    </div>

                                </div>)

                            })}
                        </div>
                    )}
                    {curNav==1&&isMeNav==2&&(
                        <div className="fire-list-box">
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
                                    Wallet Address
                                </div>
                                <div className="col">
                                    Amounts
                                </div>
                                <div className="col">
                                    Time(UTC)
                                </div>
                            </div>
                            {myExchangeRecord.map((item, index) => {
                                return (   <div className="list-item" key={index}>
                                    <div className="col">
                                        {index}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.name}
                                    </div>
                                    <div className="col">
                                        {publicJs.dealSubAddr(item.user)}
                                    </div>
                                    <div className="col">
                                        {item.amount/10**18}
                                    </div>
                                    <div className="col">
                                        {dealTime(item.time)}
                                    </div>

                                </div>)

                            })}
                        </div>
                    )}
                    {curNav==2&&isMeNav==1&&(
                        <div className="fire-list-box">
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
                                    Wallet Address
                                </div>
                                <div className="col">
                                    Amounts
                                </div>
                                <div className="col">
                                    Time(UTC)
                                </div>
                            </div>
                            {claimRecord.map((item, index) => {
                                return (   <div className="list-item" key={index}>
                                    <div className="col">
                                        {index}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.name}
                                    </div>
                                    <div className="col">
                                        {publicJs.dealSubAddr(item.user)}
                                    </div>
                                    <div className="col">
                                        {item.amount/10**18}
                                    </div>
                                    <div className="col">
                                        {dealTime(item.time)}
                                    </div>

                                </div>)

                            })}
                        </div>
                    )}
                    {curNav==2&&isMeNav==2&&(
                        <div className="fire-list-box">
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
                                    Wallet Address
                                </div>
                                <div className="col">
                                    Amounts
                                </div>
                                <div className="col">
                                    Time(UTC)
                                </div>
                            </div>
                            {myClaimRecord.map((item, index) => {
                                return (   <div className="list-item" key={index}>
                                    <div className="col">
                                        {index}
                                    </div>
                                    <div className="col">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.name}
                                    </div>
                                    <div className="col">
                                        {publicJs.dealSubAddr(item.user)}
                                    </div>
                                    <div className="col">
                                        {item.amount/10**18}
                                    </div>
                                    <div className="col">
                                        {dealTime(item.time)}
                                    </div>

                                </div>)

                            })}
                        </div>
                    )}
                </div>
            </div>
        </FLMPoolStyle>
    )
}
export default FLMPool
