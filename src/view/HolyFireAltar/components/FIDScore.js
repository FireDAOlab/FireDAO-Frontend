import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Button, Card, Form, Input, Radio, Switch, message, notification } from "antd";
import { getContractByContract, getContractByName } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil";
import { useNavigate } from "react-router-dom";
import FIDScoreStyle from "./FIDScoreStyle";
import fireseed from "../../../imgs/FireSeed@2x.webp"
import judgeStatus from "../../../utils/judgeStatus";
const FIDScore = (props) => {
    const { list } = props
    let { state, dispatch } = useConnect();
    const [length, setLength] = useState(0)
    const [arr, setTokens] = useState([])
    const [UserFID, setUserFID] = useState(0)

    const [UserToSoul, setUserToSoul] = useState("")
    const [score, setCheckReputation] = useState(0)



    const history = useNavigate();
    const [form] = Form.useForm();

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("Reputation", state.api,)
        if (!contractTemp) {
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getToken = async (address) => {
        let contractTemp = await getContractByContract("erc20", address.toString().trim(), state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        const name = await viewMethod(contractTemp, state.account, "name", [])
        const symbol = await viewMethod(contractTemp, state.account, "symbol", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [state.account])
        balance = balance / (10 ** parseInt(decimal))
        return {
            name,
            symbol,
            decimal,
            balance
        }
    }
    const handleReViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("Reputation", state.api,)

        return await viewMethod(contractTemp, state.account, name, params)
    }

    const handleSoulViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getUserFIDAndAddr = async () => {
        const UserToSoul = await handleSoulViewMethod("UserToSoul", [state.account])
        const UserFID = await handleSoulViewMethod("UserFID", [state.account])
        await setUserToSoul(UserToSoul)
        await setUserFID(UserFID)
        const checkReputation = await handleReViewMethod("checkReputation", [state.account])
        setCheckReputation(checkReputation)
    }

    const getTokens = async () => {
        const length = await handleViewMethod("getTokensLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const item = await handleViewMethod("tokens", [i])
            const coefficients = await handleViewMethod("coefficients", [item])
            const coin = await getToken(item)
            console.log(coin)
            arr.push({
                address: item,
                coefficients: coefficients,
                name: coin.name,
                balance: coin.balance
            })
        }
        setTokens(arr)
    }

    useEffect(async () => {
        if (!state.account) {
            return
        }
        getTokens()
        getUserFIDAndAddr()
    }, [state.account])
    return (
        <FIDScoreStyle>
            <div  className="panel-box">
                <div className="panel-container" style={{ border: 'none',paddingTop: "3em" }}>
                    <div className="panel-title" style={{fontSize:'30px'}}>
                        FID Score
                    </div>
                    <div style={{display:'flex',marginTop:'25px'}}>
                        <div className="my-soul">
                            <div className="name">
                                My SoulAccount
                            </div>
                            <div className="value">
                                {UserToSoul}
                            </div>
                        </div>
                        <div className="total-score">
                            <div className="name">
                                FID ReputationScore
                            </div>
                            <div className="score">
                                {score}
                            </div>
                        </div>
                    </div>
                    <div className="content1">

                        <div className="fire-list-box">
                            <div className="list-header flex-box">
                                <div className="col" >
                                    SBT
                                </div>
                                <div className="col" >
                                    Amount(s)
                                </div>
                                <div className="col">
                                    Weight
                                </div>
                                <div className="col">
                                    Score
                                </div>
                            </div>
                            {
                                arr.map(item => (
                                    <div className="list-item" onClick={() => {
                                    }}>
                                        <div className="col name">
                                            {item.name}
                                        </div>
                                        <div className="col balance">
                                            {item.balance}
                                        </div>
                                        <div className="col coefficients">
                                            {item.coefficients}
                                        </div>
                                        <div className="col balance">
                                            {item.balance * item.coefficients}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </FIDScoreStyle>
    )
}
export default FIDScore
