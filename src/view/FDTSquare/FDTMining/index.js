import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {getIpfs} from "../../../utils/ipfsApi";
import headerImg from "../../../imgs/header_icon.webp"
import {useNavigate} from "react-router-dom";
import {getRecords} from "../../../graph/treasury";
import judgeStatus from "../../../utils/judgeStatus";
import MyPassportStyle from "./style"
import contractMap from "../../../config/contractMap";

const MyPassport = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [myClassAddress, setMyClass] = useState("")
    const [myClassPid, setMyClassPid] = useState(0)
    const [myPassport, setPassport] = useState("")
    const [records, setRecords] = useState([])


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
        let map = contractMap

        if (record && record.data) {
            for (let i = 0; i < data.length; i++) {
                let item = data[i]

                const nowT= parseInt(new Date().getTime()/1000)

                if((nowT -item.blockTimestamp)<2592000  ){
                    map[item.num].incomeInmonth=  map[item.num].incomeInmonth + parseFloat(item.amount )/10**18
                }
                if((nowT -item.blockTimestamp)<604800  ){
                    map[item.num].incomeInweek=  map[item.num].incomeInweek + parseFloat(item.amount )/10**18
                }
                map[item.num].total=  map[item.num].total + parseFloat(item.amount )/10**18

            }
           Object.keys(map).forEach(item=>{
               map[item].incomeInmonth = parseInt(map[item].incomeInmonth * 1000)/1000
               map[item].incomeInweek = parseInt(map[item].incomeInweek * 1000)/1000
               map[item].total = parseInt(map[item].total * 1000)/1000
           })
           setRecords(map)
        }
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
                            <div className="address col">
                                No.
                            </div>
                            <div className="col">
                                Name
                            </div>
                            <strong className="pid col">
                                Contract Address
                            </strong>
                            <div className="address col">
                                Income this week(ETH)
                            </div>
                            <strong className="user col">
                                Income this month(ETH)
                            </strong>

                            <div className="address col">
                                Total income(ETH)
                            </div>
                            <div className="detail col">
                                Detail
                            </div>
                        </div>
                        {Object.keys(records).map((item, index) => {
                            return (
                                <div className="list-item">
                                    <div className="col">
                                        {index + 1}
                                    </div>
                                    <div className="col">
                                        {records[item].name}
                                    </div>
                                    <div className="col">
                                        {records[item].address?records[item].address.substr(0,5)+ "..." + records[item].address.substr(records[item].address.length-3,records[item].address.length):""}
                                    </div>
                                    <div className="col">
                                        {records[item].incomeInweek}
                                    </div>
                                    <div className="col">
                                        {records[item].incomeInmonth}
                                    </div>
                                    <div className="col">
                                        {records[item].total}
                                    </div>
                                    <div className="col">
                                        <Button onClick={()=>{history("/SourceDetail?num=" + (item))}}>Detail</Button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </MyPassportStyle>
    )
}
export default MyPassport
