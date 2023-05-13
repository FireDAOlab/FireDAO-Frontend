import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {getIpfs} from "../../../utils/ipfsApi";
import headerImg from "../../../imgs/header_icon.webp"
import {useNavigate,useParams} from "react-router-dom";
import {getRecords} from "../../../graph/treasury";
import judgeStatus from "../../../utils/judgeStatus";
import CityNodeStyle from "./style"
import pubJs from "../../../utils/publicJs"
import {dealTime} from "../../../utils/timeUtil";
import addressMap from "../../../api/addressMap";
import TransferOwner from "./component/TransferOwner";
import cityimg from "../../../imgs/cityNode_img.png"
import JoinTip from "./component/JoinTip";
import QuitTip from "./component/QuitTip";

const CityNodeDetail = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [activeIndex, setActiveIdx] = useState(1)
    const [cityNode, setCityNode] = useState({})
    const [memberArr, setNodeMember] = useState([])
    const [showTranOwn, setShowTranOwn] = useState(false)
    const [showJoinTip, setShowJoinTip] = useState(false)
    const [showQuitTip, setShowQuitTip] = useState(false)

    const params = useParams()
    console.log(params)
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
        let contractTemp = await getContractByName("cityNode", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("cityNode", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("cityNode", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getNodeInfo = async ()=>{
        let node =await handleViewMethod("cityNodeInfos",[params.id])
        node.balance = await getTokenBalance(node.Treasury)
        const memL = await  handleViewMethod("getCityNodeMemberLength",[params.id])
        node.memberLength = memL

        const isNotLightCity = await  handleViewMethod("isNotLightCity",[params.id])
        node.isNotLightCity = isNotLightCity
        const cityNodeAdmin = await handleViewMethod("cityNodeAdmin",[params.id])
        node.cityNodeAdmin = cityNodeAdmin
        const nodeTreasuryBalance = await getTokenBalance(node.Treasury)
        node.assets = nodeTreasuryBalance
        const nodeIpfs = await getIpfs(node.hash)
        const score = await handleViewMethod("getCityNodeReputation",[params.id])
        node.score = score/10**18
        node.intro = nodeIpfs.intro
        node.city = nodeIpfs.city
        await setCityNode(node)
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
    const joinCityNode = async ()=>{
        handleDealMethod("joinCityNode",[params.id])
        getNodeInfo()
    }
    const activate= async ()=>{
        handleDealMethod("lightCityNode",[])
        getNodeInfo()
    }
    const getMembers =async (length,node)=>{
        let arr = []
        for(let i = 0;i<length;i++){
            const mem = await handleViewMethod("cityNodeMember",[params.id,i])
            const userInNodeInfo = await handleViewMethod("userInNodeInfo",[node.NodeOwner])
            const contractTemp = await getContractByName("user", state.api,)
            const userInfo= await viewMethod(contractTemp, state.account, "getUserInfo", [mem])

            let contractTemp2 = await getContractByName("Reputation", state.api,)

            const score = await viewMethod(contractTemp2, state.account, "checkReputation", [mem])

            arr.push({
                addr:mem,
                score:score/10**18,
                pid:userInfo.PID,
                joinCityNodeTime:dealTime(userInNodeInfo.joinCityNodeTime)
            })

        }

        setNodeMember(arr)
    }
    useEffect(async ()=>{

    },[])
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if(!judgeRes){
            return
        }
        getNodeInfo()
    }, [state.account, state.networkId]);


    return (
        <CityNodeStyle>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    City Node Detail
                </div>
                {showTranOwn&&  <TransferOwner closeDialog={()=>{setShowTranOwn(false)}} updateData={getNodeInfo}/>
                }
                {showJoinTip&&  <JoinTip nodeId = {params.id} closeDialog={()=>{setShowJoinTip(false)}} updateData={getNodeInfo}/>
                }
                {showQuitTip&&  <QuitTip nodeId = {params.id} closeDialog={()=>{setShowQuitTip(false)}} updateData={getNodeInfo}/>
                }
                <div className="panel-container">
                    {
                        state.account&&cityNode.cityNodeAdmin&&state.account.toLowerCase() == cityNode.cityNodeAdmin.toLowerCase()&&(<div className="admin operate-box">
                            <Button type="primary" onClick={()=>{setShowTranOwn(true)}}>TransferOwner</Button>
                            <Button type="primary" onClick={activate}>Activate</Button>
                        </div>)
                    }

                    <div className="node-info">
                        <div className="img-box">
                            <img src={cityimg} alt=""/>
                            <div className="city-name">
                                <div  className={"status " + (cityNode.isNotLightCity ? "active" : "")}>
                                </div>

                                <div className="name">
                                    {cityNode.city}
                                </div>
                            </div>
                        </div>
                        <div className="right-part">

                            <div className="info-box score-box">
                                <strong className="name">
                                    FID Score
                                </strong>
                                <strong className="value">
                                    {cityNode.score}
                                </strong>
                            </div>
                            <div className="info-box">
                                <div className="name">
                                    Name
                                </div>
                                <div className="value">
                                    {cityNode.NodeName}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="name">
                                    NodeId
                                </div>
                                <div className="value">
                                    {cityNode.NodeId}
                                </div>
                            </div>
                            <div className="info-box">

                                <div className="name">
                                    Member
                                </div>
                                <div className="value">
                                    {cityNode.memberLength}
                                </div>
                            </div>

                            <div className="info-box">
                                <div className="name">
                                    Intro
                                </div>
                                <div className="value">
                                    {cityNode.intro}
                                </div>
                            </div>

                            <div className="info-box">
                                <div className="name">
                                    Assets
                                </div>
                                <div className="value">
                                    {cityNode.balance}
                                </div>
                            </div>
                            <div className="operate-box">
                                <Button type="primary" onClick={()=>{setShowJoinTip(true)}}>Join</Button>
                                <Button type="primary" onClick={()=>{setShowQuitTip(true)}}>Quit</Button>
                            </div>
                        </div>
                    </div>
                    <div className="node-info-list">
                        <div className="info-nav">
                            <div className={"nav-item " + (activeIndex == 1 ? "active" : "")}  onClick={()=>{setActiveIdx(1)}}>
                                Address Info
                            </div>
                            <div className={"nav-item " + (activeIndex == 2 ? "active" : "")}  onClick={()=>{setActiveIdx(2)}}>
                                Members
                            </div>
                            <div className={"nav-item " + (activeIndex == 3 ? "active" : "")}  onClick={()=>{setActiveIdx(3)}}>
                                Asset
                            </div>
                        </div>
                        {activeIndex==1&&<div className="info-item">
                            <div className="info-box">
                                <div className="name">
                                    Creator
                                </div>
                                <div className="value">
                                    {cityNode.NodeOwner}
                                </div>

                            </div>
                            <div className="info-box">
                                <div className="name">
                                    Node Admin
                                </div>
                                <div className="value">
                                    {cityNode.cityNodeAdmin}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="name">
                                    Node Admin
                                </div>
                                <div className="value">
                                    {cityNode.assets}
                                </div>
                            </div>
                        </div>}
                        {activeIndex==2&&<div className="member-arr">
                            <div className="mem">
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
                            {memberArr.map((item,index)=>{
                               return (<div className="mem" key={index}>
                                   <div className="index">
                                       {index+1}
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
                                       {item.joinCityNodeTime}
                                   </div>
                               </div>)
                            })}
                        </div>}
                    </div>
                </div>
            </div>

        </CityNodeStyle>
    )
}
export default CityNodeDetail
