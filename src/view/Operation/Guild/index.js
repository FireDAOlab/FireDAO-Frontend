import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {getIpfs} from "../../../utils/ipfsApi";
import headerImg from "../../../imgs/header_icon.webp"
import {useNavigate} from "react-router-dom";
import {getRecords} from "../../../graph/treasury";
import judgeStatus from "../../../utils/judgeStatus";
import GuildStyle from "./style"
import pubJs from "../../../utils/publicJs"
import {dealTime} from "../../../utils/timeUtil";
import addressMap from "../../../api/addressMap";

const Guild = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [myClassAddress, setMyClass] = useState("")
    const [myGuild, setMyGuild] = useState([])
    const [cityNodes, setCityNodes] = useState([])
    const [curNav, setCurNav] = useState(1)
    const [myNode, setMyNode] = useState({})


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
        let contractTemp = await getContractByName("Guild", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("Guild", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getAllGuild = async ()=>{
        const length =await handleViewMethod("getguildInFosLength",[])
        let arr = [],myArr=[]

        for(let i = 0 ;i<length;i++){
            const guild = await handleViewMethod("guildInFos",[i])
            arr.push({
                ...guild,
            })
            if(guild.guildManager.toLowerCase() == state.account.toLowerCase()){
                myArr.push(guild)
            }
        }
        setMyGuild(myArr)
        setCityNodes(arr)
    }
    const getTokenBalance = async (value) => {
        let contractTemp = await getContractByContract("erc20", addressMap["WETH"].address, state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [value])

        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        return balance
    }

    useEffect(async ()=>{

    },[])
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if(!judgeRes){
            return
        }
        getAllGuild()
        const node = await handleViewMethod("userInNodeInfo",[state.account])
        // const cityNodeAdmin = await handleViewMethod("cityNodeAdmin",[node.NodeId])
        // node.cityNodeAdmin = cityNodeAdmin
        // const nodeTreasuryBalance = await getTokenBalance(node.Treasury)
        // node.assets = nodeTreasuryBalance
        // const nodeIpfs = await getIpfs(node.hash)
        // const score = await handleViewMethod("getCityNodeReputation",[node.NodeId])
        // node.score = score/10**18

        setMyNode(node)
    }, [state.account, state.networkId]);

    return (
        <GuildStyle>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    City Node
                </div>
                <div className="panel-container">
                    <div className="panel-header">
                        <div className="nav-list">
                            <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={()=>{setCurNav(1)}}>
                                All Guild
                            </div>
                            <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={()=>{setCurNav(2)}}>
                                My Guild
                            </div>
                        </div>
                        <div className="operate-box">
                            <Button type="primary" onClick={()=>{history("/CreateGuild")}}> Create </Button>
                        </div>
                    </div>
                    {curNav==1&& <div className="white-list">
                        <div className="list-item">
                            <div className="address col">
                                ID
                            </div>
                            <strong className="pid col">
                                Name
                            </strong>
                            <div className="address col">
                                City
                            </div>
                            <strong className="user col">
                                Creator
                            </strong>
                            <div className="address col">
                                Vault
                            </div>
                            <div className="address col">
                                Assets(ETH)
                            </div>
                            <div className="detail col">
                                Node Admin
                            </div>
                            <div className="col">
                                Member
                            </div>
                            <div className="col">
                                FID Score
                            </div>
                            <div className="View col">
                                View
                            </div>
                        </div>
                        {cityNodes.map((item,index)=>{
                            return(
                                <div className="list-item" key={index}>
                                    <div className="col">
                                        {index}
                                    </div>
                                    <div className="col name">
                                        {item.guildDescribe}
                                    </div>

                                    <div className="col">
                                        {item.guildName}
                                    </div>

                                    <div className="col admin">
                                        {pubJs.dealSubAddr(item.guildManager)}
                                    </div>


                                    <div className="col">
                                        <Button onClick={()=>{
                                            history("/GuildDetail/"+ index)
                                        }}>View</Button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>}
                    {curNav==2&&<div className="white-list">
                        <div className="list-item">
                            <div className="address col">
                                ID
                            </div>
                            <strong className="pid col">
                                Name
                            </strong>
                            <div className="address col">
                                City
                            </div>
                            <strong className="user col">
                                Creator
                            </strong>
                            <div className="address col">
                                Vault
                            </div>
                            <div className="address col">
                                Assets(ETH)
                            </div>
                            <div className="detail col">
                                Node Admin
                            </div>
                            <div className="col">
                                Member
                            </div>
                            <div className="col">
                                FID Score
                            </div>
                            <div className="View col">
                                View
                            </div>
                        </div>
                        {myGuild.map((item,index)=>{
                            return(
                                <div className="list-item" key={index}>
                                    <div className="col">
                                        {index}
                                    </div>
                                    <div className="col name">
                                        {item.guildDescribe}
                                    </div>

                                    <div className="col">
                                        {item.guildName}
                                    </div>

                                    <div className="col admin">
                                        {pubJs.dealSubAddr(item.guildManager)}
                                    </div>


                                    <div className="col">
                                        <Button onClick={()=>{
                                            history("/GuildDetail/"+ index)
                                        }}>View</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </div>

        </GuildStyle>
    )
}
export default Guild
