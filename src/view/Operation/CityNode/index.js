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
import CityNodeStyle from "./style"
import pubJs from "../../../utils/publicJs"
import {dealTime} from "../../../utils/timeUtil";
import addressMap from "../../../api/addressMap";

const CityNode = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [myClassAddress, setMyClass] = useState("")
    const [myClassPid, setMyClassPid] = useState(0)
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
        let contractTemp = await getContractByName("cityNode", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("cityNode", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getAllCityNode = async ()=>{
        const length =await handleViewMethod("getCityNodeLength",[])
        let arr = []
        for(let i = 0 ;i<length;i++){
            const node = await handleViewMethod("cityNodeInfos",[i])
            const nodeTreasuryBalance = await getTokenBalance(node.Treasury)
            const cityNodeAdmin = await handleViewMethod("cityNodeAdmin",[node.NodeId])

            const nodeInfo =await getIpfs(node.ipfsStr)
            arr.push({
                ...node,
                city:nodeInfo.city,

                nodeTreasuryBalance,
                cityNodeAdmin
            })
            console.log(arr)
        }
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
        getAllCityNode()
        const node = await handleViewMethod("userInNodeInfo",[state.account])
        const cityNodeAdmin = await handleViewMethod("cityNodeAdmin",[node.NodeId])
        node.cityNodeAdmin = cityNodeAdmin
        const nodeTreasuryBalance = await getTokenBalance(node.Treasury)
        node.assets = nodeTreasuryBalance
        const nodeIpfs = await getIpfs(node.hash)
        const score = await handleViewMethod("getCityNodeReputation",[node.NodeId])
        node.score = score/10**18
        node.intro = nodeIpfs.intro
        node.city = nodeIpfs.city
        setMyNode(node)
    }, [state.account, state.networkId]);

    return (
        <CityNodeStyle>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    City Node
                </div>
                <div className="panel-container">
                    <div className="panel-header">
                        <div className="nav-list">
                            <div className={"nav-item " + (curNav == 1 ? "active" : "")} onClick={()=>{setCurNav(1)}}>
                                CityNode
                            </div>
                            <div className={"nav-item " + (curNav == 2 ? "active" : "")} onClick={()=>{setCurNav(2)}}>
                                MyNode
                            </div>
                        </div>
                        <div className="operate-box">
                            <Button type="primary" onClick={()=>{history("/CreateCityNode")}}> Create </Button>
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
                        {cityNodes.map(item=>{
                            return(
                                <div className="list-item" key={item.NodeId}>
                                    <div className="col">
                                        {item.NodeId}
                                    </div>
                                    <div className="col name">
                                        {item.NodeName}
                                    </div>
                                    <div className="col name">
                                        {item.city}
                                    </div>
                                    <div className="col">
                                        {pubJs.dealSubAddr(item.cityNodeAdmin)}
                                    </div>
                                    <div className="col">
                                        {pubJs.dealSubAddr(item.Treasury)}
                                    </div>
                                    <div className="col">
                                        {item.nodeTreasuryBalance}
                                    </div>
                                    <div className="col admin">
                                        {pubJs.dealSubAddr(item.NodeOwner)}
                                    </div>


                                    <div className="col">
                                        {dealTime(item.createTime)}
                                    </div>

                                    <div className="col">
                                        {item.memberLength}
                                    </div>


                                    <div className="col">
                                        <Button onClick={()=>{
                                            history("/CityNodeDetail/"+ item.NodeId)
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
                        <div className="list-item">
                            <div className="address col">
                                {myNode.NodeId}
                            </div>
                            <strong className="pid col">
                                {myNode.NodeName}

                            </strong>

                            <strong className="pid col">
                                {myNode.city}

                            </strong>

                            <div className="col">
                                {pubJs.dealSubAddr(myNode.cityNodeAdmin)}
                            </div>
                            <div className="col">
                                {pubJs.dealSubAddr(myNode.Treasury)}
                            </div>
                            <div className="col">
                                {myNode.nodeTreasuryBalance}
                            </div>
                            <div className="col admin">
                                {pubJs.dealSubAddr(myNode.NodeOwner)}
                            </div>


                            <div className="col">
                                {dealTime(myNode.createTime)}
                            </div>

                            <div className="col">
                                {myNode.memberLength}
                            </div>


                            <div className="col">
                                <Button onClick={()=>{
                                    history("/CityNodeDetail/"+ myNode.NodeId)
                                }}>View</Button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>

        </CityNodeStyle>
    )
}
export default CityNode
