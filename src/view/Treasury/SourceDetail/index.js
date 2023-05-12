import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {useNavigate, useLocation} from "react-router-dom";
import {getRecords} from "../../../graph/treasury";
import judgeStatus from "../../../utils/judgeStatus";
import MyPassportStyle from "./style"
import {dealTime} from "../../../utils/timeUtil";

const MyPassport = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const location = useLocation()
    const [records, setRecords] = useState([])
    let numtemp = location.search.split("=")[1];
    const [num, setNum] = useState(numtemp)

    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const handleSoulViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleSeedViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }


    useEffect(async () => {
        let record = await getRecords()
        let data = record.data.incomeRecords
        console.log(data)
        setRecords(data)
    }, [])
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }

    }, [state.account, state.networkId]);


    return (
        <MyPassportStyle>
            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    Treasury
                </div>
                <div className="panel-container">
                    <div className="white-list">
                        <div className="list-item">
                            <div className="address">
                                No.
                            </div>
                            <strong className="pid">
                                Time
                            </strong>
                            <div className="address">
                                Amount
                            </div>
                            <strong className="user">
                                User
                            </strong>

                        </div>
                        {records.map((item, index) => {
                            if (item.num == num) {
                                return (
                                    <div className="list-item">
                                        <div className="col">
                                            {index + 1}
                                        </div>
                                        <div className="col">
                                            {dealTime(item.blockTimestamp)}
                                        </div>
                                        <div className="col">
                                            {item.amount/10**18}
                                        </div>
                                        <div className="col">
                                            {item.user.substr(0,5)+ "..."+ item.user.substr(item.user.length-3,item.user.length)}

                                        </div>


                                    </div>
                                )
                            }

                        })}

                    </div>
                </div>
            </div>

        </MyPassportStyle>
    )
}
export default MyPassport
