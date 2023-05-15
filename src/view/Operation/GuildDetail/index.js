import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {getIpfs} from "../../../utils/ipfsApi";
import headerImg from "../../../imgs/header_icon.webp"
import {useNavigate, useParams} from "react-router-dom";
import {getRecords} from "../../../graph/treasury";
import judgeStatus from "../../../utils/judgeStatus";
import GuildStyle from "./style"
import pubJs from "../../../utils/publicJs"
import {dealTime} from "../../../utils/timeUtil";
import addressMap from "../../../api/addressMap";
import TransferOwner from "./component/TransferOwner";
import cityimg from "../../../imgs/cityNode_img.png"
import ApplyTip from "./component/ApplyTip";
import JoinTip from "./component/JoinTip";

import QuitTip from "./component/QuitTip";
import AddSubAddr from "../../HolyFireAltar/ReputationManage/component/AddSubAddr";

const GuildDetail = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [activeIndex, setActiveIdx] = useState(1)
    const [guildNode, setguildNode] = useState({})
    const [memberArr, setNodeMember] = useState([])
    const [showTranOwn, setShowTranOwn] = useState(false)
    const [showApplyTip, setShowApplyTip] = useState(false)
    const [showJoinTip, setShowJoinTip] = useState(false)

    const [showQuitTip, setShowQuitTip] = useState(false)
    const [myScore, setMyScore] = useState(0)
    const [isM2, setISM2] = useState(false)
    const [isM3, setisM3] = useState(false)
    const [asset, setAsset] = useState(0)

    const [applyArr, setapplyArr] = useState([])

    const params = useParams()
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
    const handleReputiationViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("Reputation", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("Guild", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("Guild", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getGuildInfo = async () => {
        let node = await handleViewMethod("guildInFos", [params.id])
        console.log(node)
        // node.balance = await getTokenBalance(node.Treasury)
        const memL = await  handleViewMethod("getmemberLength",[params.id])
        node.memberLength = memL
        const joinRestrictions = await handleViewMethod("joinRestrictions", [])
        node.scoreLimit = joinRestrictions

        const admin = await handleViewMethod("owner", [])
        node.admin = admin
        // const nodeTreasuryBalance = await getTokenBalance(node.Treasury)
        // node.assets = nodeTreasuryBalance
        await setguildNode(node)
        getMembers(memL,node)

    }
    const getTokenBalance = async (value) => {
        let contractTemp = await getContractByContract("erc20", addressMap["WETH"].address, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [value])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        return balance
    }
    const getERC1155Balance = async (value,id) => {
        let contractTemp = await getContractByContract("erc1155", addressMap["Guild"].address, state.api,)
        let balance = await viewMethod(contractTemp, value, "balanceOf", [value,id])
        balance = parseInt(balance * 100) / 100
        return balance
    }
    const checkReputation = async () => {
        const score = await handleReputiationViewMethod("checkReputation", [state.account])
        setMyScore(score / 10**18)
    }
    const allowJoinGuild = async (addr) => {
        handleDealMethod("allowJoinGuild", [params.id, addr])
        getGuildInfo()
    }
    const rejectedApp = async (addr) => {
        handleDealMethod("rejectedApp", [params.id, addr])
        getGuildInfo()
    }
    const getMembers = async (length, node) => {
        let arr = []
        for (let i = 0; i < length; i++) {
            const mem = await handleViewMethod("member", [params.id, i])
            console.log(mem)

            let contractTemp2 = await getContractByName("Reputation", state.api,)

            const score = await viewMethod(contractTemp2, state.account, "checkReputation", [mem.member])
            const guildInFos = await handleViewMethod("guildInFos", [params.id])

            arr.push({
                addr: mem.member,
                score: score / 10 ** 18,
                pid: mem.PID,
                joinT:mem.DATE,
                asset:guildInFos.asset

            })

        }

        setNodeMember(arr)
    }

    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getGuildInfo()
        checkReputation()

        const isM2 = await handleViewMethod("getisNotguildManager", [state.account])
        setISM2(isM2)
        const isM3 = await handleViewMethod("getisNotdeputyGuildManager", [state.account])
        setisM3(isM3)

        const length = await handleViewMethod("gettoBeAdded", [])
        let applyArr = []
        for(let i=0;i< length;i++){
            const addr = await handleViewMethod("toBeAdded", [i])
            const userApplication = await handleViewMethod("userApplication", [addr])
            const score = await handleReputiationViewMethod("checkReputation", [addr])
            const status = await handleViewMethod("userStatus", [addr])
            const userGuildNum = await handleViewMethod("userGuildNum", [addr])

            const B1155 = await getERC1155Balance(addr,userGuildNum)

            userApplication.score = score / 10**18
            console.log(
                B1155
            )
            if(B1155===1){
                userApplication.status = "Pass"
            }else if(status ===false){
                userApplication.status = "Reject"
            }else{
                userApplication.status = "Pending"
            }
            applyArr.push(userApplication)


        }
        setapplyArr(applyArr)
        const userGuildInFo  = await handleViewMethod("guildInFos", [params.id])
        setAsset(userGuildInFo.asset)
        const incomeLength  = await handleViewMethod("getinComeInfosLength", [])
        let incomeArr = []
        for (let i;i<incomeLength;i++){
            const item  = await handleViewMethod("inComeInfos", [i])
            incomeArr.push(item)
        }

    }, [state.account, state.networkId]);


    return (
        <GuildStyle>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    Guild  Detail
                </div>
                {showTranOwn && <TransferOwner closeDialog={() => {
                    setShowTranOwn(false)
                }} updateData={getGuildInfo}/>
                }
                {showApplyTip && <ApplyTip obj={guildNode} myScore={myScore} id={params.id} closeDialog={() => {
                    setShowApplyTip(false)
                }} updateData={getGuildInfo}/>
                }
                {showJoinTip && <JoinTip obj={guildNode} myScore={myScore} id={params.id} closeDialog={() => {
                    setShowJoinTip(false)
                }} updateData={getGuildInfo}/>
                }
                {showQuitTip && <QuitTip nodeId={params.id} closeDialog={() => {
                    setShowQuitTip(false)
                }} updateData={getGuildInfo}/>
                }
                <div className="panel-container">


                    <div className="node-info">
                        <div className="img-box">
                            <img src={cityimg} alt=""/>
                            <div className="city-name">
                                <div className={"status " + (guildNode.isNotLightCity ? "active" : "")}>
                                </div>

                                <div className="name">
                                    {guildNode.guildName}
                                </div>
                            </div>
                        </div>
                        <div className="right-part">

                            <div className="info-box">
                                <div className="name">
                                    Name
                                </div>
                                <div className="value">
                                    {guildNode.guildName}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="name">
                                    scoreLimit
                                </div>
                                <div className="value">
                                    {guildNode.scoreLimit}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="name">
                                    Member
                                </div>
                                <div className="value">
                                    {guildNode.memberLength}
                                </div>
                            </div>

                            <div className="info-box">
                                <div className="name">
                                    Intro
                                </div>
                                <div className="value">
                                    {guildNode.guildDescribe}
                                </div>
                            </div>

                            <div className="info-box">
                                <div className="name">
                                    Assets
                                </div>
                                <div className="value">
                                    {guildNode.asset}
                                </div>
                            </div>
                            <div className="operate-box">
                                <Button type="primary" onClick={() => {
                                    setShowJoinTip(true)
                                }}>Join</Button>
                                <Button type="primary" onClick={() => {
                                    setShowQuitTip(true)
                                }}>Quit</Button>
                                <Button type="primary" onClick={()=>{setShowApplyTip(true)}}>Apply</Button>

                            </div>
                        </div>
                    </div>
                    <div className="node-info-list">
                        <div className="info-nav">
                            <div className={"nav-item " + (activeIndex == 1 ? "active" : "")} onClick={() => {
                                setActiveIdx(1)
                            }}>
                                Address Info
                            </div>
                            <div className={"nav-item " + (activeIndex == 2 ? "active" : "")} onClick={() => {
                                setActiveIdx(2)
                            }}>
                                Members
                            </div>
                            {
                                (isM3||isM2)&&(<div className={"nav-item " + (activeIndex == 4? "active" : "")} onClick={() => {
                                    setActiveIdx(4)
                                }}>
                                    Apply List
                                </div>)
                            }
                            <div className={"nav-item " + (activeIndex == 3 ? "active" : "")} onClick={() => {
                                setActiveIdx(3)
                            }}>
                                Asset
                            </div>
                        </div>
                        {activeIndex == 1 && <div className="info-item">
                            <div className="info-box">
                                <div className="name">
                                    Owner
                                </div>
                                <div className="value">
                                    {guildNode.guildManager}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="name">
                                    Vault Admin
                                </div>
                                <div className="value">
                                    {guildNode.guildManager}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="name">
                                    Admin
                                </div>
                                <div className="value">
                                    {guildNode.admin}
                                </div>
                            </div>
                        </div>}
                        {activeIndex == 2 && <div className="member-arr fire-list-box">
                            <div className="mem list-header">
                                <div className="col">
                                    No
                                </div>
                                <div className="col">
                                    Address
                                </div>
                                <div className="col">
                                    PID
                                </div>
                                <div className="col">
                                    Score
                                </div>
                                <div className="col">
                                    Join Time
                                </div>
                            </div>
                            {memberArr.map((item, index) => {
                                return (<div className="mem" key={index}>
                                    <div className="index">
                                        {index + 1}
                                    </div>
                                    <div className="addr">
                                        {pubJs.dealSubAddr(item.addr)}
                                    </div>
                                    <div className="addr">
                                        {item.pid}
                                    </div>
                                    <div className="col">
                                        {item.score}
                                    </div>

                                    <div className="addr">
                                        {dealTime(item.joinT)}
                                    </div>
                                </div>)
                            })}
                        </div>}
                        {
                            activeIndex==3&&<div className="asset-box">
                                <div className="title">
                                    Asset <strong>{asset}</strong> ETH
                                </div>
                            </div>
                        }
                        {
                            activeIndex==4&&(<div className="applyList fire-list-box">
                                <div className="list-item list-header">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        Applicant
                                    </div>
                                    <div className="col">
                                        PID
                                    </div>
                                    <div className="col">
                                        FID Score
                                    </div>
                                    <div className="col">
                                        Apply Link
                                    </div>
                                    <div className="col">
                                        Date
                                    </div>
                                    <div className="col">
                                        State
                                    </div>
                                </div>
                                {applyArr.map((item,index)=>{
                                    return (
                                        <div className="list-item">
                                            <div className="col">
                                                {index}
                                            </div>
                                            <div className="col">
                                                {pubJs.dealSubAddr(item.applicationer)}
                                            </div>
                                            <div className="col">
                                                {item.PID}
                                            </div>
                                            <div className="col">
                                                {item.score}
                                            </div>

                                            <div className="col">
                                                {item.applicationLink}
                                            </div>

                                            <div className="col">
                                                {dealTime(item.time)}
                                            </div>
                                            <div className="col">
                                                {item.status}
                                                <Button onClick={()=>{allowJoinGuild(item.applicationer)}}>Pass</Button>
                                                <Button onClick={()=>{rejectedApp(item.applicationer)}}>Reject</Button>
                                            </div>
                                        </div>
                                    )

                                })}
                            </div>)
                        }
                    </div>
                </div>
            </div>

        </GuildStyle>
    )
}
export default GuildDetail
