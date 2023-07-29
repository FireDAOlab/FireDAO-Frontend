import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {useNavigate} from "react-router-dom";
import FirePassport from "../../../imgs/passport@2x.webp"
import develop from "../../../env"
import StyleBox from "./style"
const PidList = (props) => {
    const [activeNav, setNav] = useState(1)
    const [isClaim, setIsClaim] = useState(false)
    let {state, dispatch} = useConnect();
    const [endTime, setEndTime] = useState("")
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth() +1)
    const [day, setDay] = useState(new Date().getDate())
    const [time, setTime] = useState("00:00")
    const history = useNavigate();
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
        let contractTemp = await getContractByName("airdrop", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        await dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("airdrop", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getIsClaim = async ()=>{
        let res = await handleViewMethod("Claimed",[state.account])
        setIsClaim(res)
    }
    const getEndTime = async ()=>{
        let endT = await handleViewMethod("endTime",[])
        endT = new Date(endT*1000)
        setEndTime(endT)
        setDay(endT.getDay())
        setYear(endT.getFullYear())
        setMonth(endT.getMonth() +1)
        let time = ""
        const hours = endT.getHours();
        const minutes = endT.getMinutes();
        const seconds = endT.getSeconds();
        time +=(hours>10?hours:`0${hours}`).toString()
        time+=(":" + (minutes>10?minutes:`0${minutes}`))
        time +=(":" + (seconds>10?seconds:`0${seconds}`))

        setTime(time)
    }
    const getData = async () => {
        getUserInfo()
        getEndTime()
        getIsClaim()
    }

    const claim = async () => {
        try {
            await handleDealMethod("Claim", [])
            getIsClaim()
        }catch (e){}
    }
    const judgePid = (pid) => {
        if(isClaim){
            return 0
        }
        if (0< pid&&pid < 101) {
            return 10
        } else if (100< pid&&pid < 201) {
            return 9
        } else if (200< pid&&pid < 301) {
            return 8
        } else if (300< pid&&pid < 401) {
            return 7
        } else if (400< pid&&pid < 501) {
            return 6
        } else if (500< pid&&pid < 601) {
            return 5
        } else if (600< pid&&pid < 701) {
            return 4
        } else if (701< pid&&pid < 801) {
            return 3
        } else if (800< pid&&pid < 901) {
            return 2
        } else if (900< pid&&pid < 1001) {
            return 1
        } else {
            return 0
        }
    }
    const getUserInfo = async () => {
        if (!state.pid) {
            const userInfo = await handleUserViewMethod("userInfo", [state.account])
            dispatch({type: "SET_PID", payload: userInfo.PID})
        }
    }
    useEffect(() => {
        if (!state.api) {
            openNotification("Please connect")
            return
        }
        if(!state.networkId){
            return
        }
        if(state.networkId&&state.networkId !== develop.chainId){
            openNotification("The testnet is not available now, please connect to" + develop.Name)
            return
        }
        getData()
    }, [state.account]);


    return (
        <StyleBox>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        PID Airdrop
                    </div>
                    <div className="airdrop-info">
                        <div className="left">
                            <div className="img-box">
                                <img className="img" src={FirePassport} alt=""/>
                                <div className="title">
                                    Fire Passport #{state.pid}
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="title1">
                                ERC721 Non-transferable
                            </div>
                            <div className="title2">
                                PID : {state.pid}
                            </div>
                            <div className="available">
                                Available
                            </div>
                            <div className="fireseed">
                                <strong>
                                    {
                                        (state.pid)}
                                </strong>
                                <span>
                                    FireSeed
                                </span>
                            </div>
                            <Button type="primary" onClick={claim}>
                                Claim
                            </Button>
                            <div className="amount-box">
                                <h3><strong> Airdrop Rules</strong></h3>
                                <div className="airdrop-list">
                                    <div className="header">
                                        <span>
                                            PID No
                                        </span>
                                        <span>
                                            Airdrop Amounts
                                        </span>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    1
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    100
                                </span>
                                        </div>
                                        <div className="col">
                                            10
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    101
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    200
                                </span>
                                        </div>
                                        <div className="col">
                                            9
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    201
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    300
                                </span>
                                        </div>
                                        <div className="col">
                                            8
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    301
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    400
                                </span>
                                        </div>
                                        <div className="col">
                                            7
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    401
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    500
                                </span>
                                        </div>
                                        <div className="col">
                                            6
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    501
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    600
                                </span>
                                        </div>
                                        <div className="col">
                                            5
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    601
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    700
                                </span>
                                        </div>
                                        <div className="col">
                                            4
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    701
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    800
                                </span>
                                        </div>
                                        <div className="col">
                                            3
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    801
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    900
                                </span>
                                        </div>
                                        <div className="col">
                                            2
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    901
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    1000
                                </span>
                                        </div>
                                        <div className="col">
                                            1
                                        </div>
                                    </div>
                                    {/*<div className="row">*/}
                                    {/*    <div className="col" style={{background: "none", border: "none"}}>*/}
                                    {/*        Total*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col" style={{background: "none", border: "none"}}>*/}

                                    {/*    </div>*/}
                                    {/*    <div className="col">*/}
                                    {/*        100*/}
                                    {/*    </div>*/}

                                    {/*</div>*/}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="panel-box">
                <div className="panel-container">
                    <h3>
                        <strong>Set Time (UTC)</strong>
                    </h3>
                    <div className="airdrop-time">

                        <div className="header">
                            End Time
                        </div>
                        <div className="row">
                            <div className="col">
                                {year}
                            </div>
                            <span>
                                Years
                            </span>
                            <div className="col">
                                {month}
                            </div>
                            <span>
                                Month
                            </span>
                            <div className="col">
                                {day}
                            </div>
                            <span>
                                Day
                            </span>
                        </div>
                        <div className="row">
                            <div className="col">
                                {time}
                            </div>
                            <span>Time</span>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="panel-box">*/}
            {/*    <div className="panel-container">*/}
            {/*        <div className="panel-title">*/}
            {/*            Airdrop List*/}
            {/*        </div>*/}
            {/*        <div className="airdrop-claim-list">*/}
            {/*            <div className="header">*/}
            {/*                <div className="col">*/}
            {/*                    No.*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    PID*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    Address*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    Amounts*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    Time（UTC）*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*            <div className="row">*/}
            {/*                <div className="col" style={{color:"#FF5D69"}}>*/}
            {/*                    1*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    1*/}
            {/*                </div>*/}
            {/*                <div className="col"  style={{color:"#FF9260"}}>*/}
            {/*                    0x1234…567*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    100,000*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    2023-02-01 18 18:21:20*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </StyleBox>
    )
}
export default PidList
