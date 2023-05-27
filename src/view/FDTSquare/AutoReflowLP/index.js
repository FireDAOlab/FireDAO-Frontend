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

    const [isMeNav, setIsMeNav] = useState(1)

    const [form] = Form.useForm();
    const [exchangeRecord, setChangeRecord] = useState([])
    const [claimRecord, setClaimRecord] = useState([])
    const [myExchangeRecord, setMyChangeRecord] = useState([])
    const [myClaimRecord, setMyClaimRecord] = useState([])
    const [wethAmount, setWeth] = useState(0)

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
        let contractTemp = await getContractByName("autolp", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("autolp", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getTokenInfo = async () => {
        let contractTemp = await getContractByContract("erc20",addressMap["WETH"].address, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [state.account])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        setWeth(balance)

    }

    const buyAndAddLiquidity = async () => {
        await handleDealMethod("buyAndAddLiquidity", [])
    }


    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }

        try {


        } catch (e) {

        }
    }, [state.account]);

    return (
        <FLMPoolStyle>
            <h1 className="title">
                Auto Reflow LP
            </h1>
            <div className="panel-box">
                <div className="panel-container">
                    <h3>
                        Contract Address
                    </h3>
                    <div className="contract">
                        {addressMap["autolp"].address}
                    </div>
                    <h3>WETH Balance</h3>
                    <p>{wethAmount}</p>
                    <Button type="primary" onClick={buyAndAddLiquidity}>Auto Reflow</Button>
                </div>
                <div className="panel-container">
                    <div className="op-box">

                    </div>
                    <div className="nav-list">
                        <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={() => {
                            setCurNav(1)
                        }}>
                            All Record
                        </div>
                        <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={() => {
                            setCurNav(2)
                        }}>
                            My Record
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
                                        {item.lockedAmount/10**18}
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
