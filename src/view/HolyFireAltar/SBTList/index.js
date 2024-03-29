import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Card, Button, Descriptions, message, Form, List, Input,Empty , notification } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import user3 from "../../../imgs/user3.png";
import { useNavigate } from "react-router-dom";
import { getIpfs } from "../../../utils/ipfsApi";
import StyleBox from "./style"
const SBTList = (props) => {    
    let { state, dispatch } = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [form] = Form.useForm();

    const [PIDARR, setPIDARR] = useState([])

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
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        dealMethod(contractTemp, state.account, name, params)
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
    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getSoulAccount = async () => {
        const address = await handleViewMethod("getSoulAccount", [state.account])
        console.log(address)
    }


    useEffect(() => {
        getSoulAccount()
    }, [state.account]);


    return (
        <StyleBox>
            <div className="panel-box">
                <div className="panel-container">
                    <div style={{ display: 'flex' }}>
                        <h2 className="panel-title">
                            SBT List
                        </h2>
                        <Button onClick={() => goPage("/sbtAdmin")} className='sbtAd'>
                            <img src={user3} style={{ width: '22px', marginLeft: '-10px', marginTop: '-10px' }} />
                        </Button>
                    </div>
                    <div className="fire-list-box ss1">
                        {/* <div className="list-box"> */}
                        <div className='listheadert'>
                            <div className="list-header flexsbt">
                                <div className="col">
                                    Token
                                </div>
                                <div className="col">
                                    Issued Today
                                </div>
                                <div className="col">
                                    Issued Weekly
                                </div>
                                <div className="col">
                                    Issued Monthly
                                </div>
                                <div className="col">
                                    Issued Year
                                </div>
                                <div className="col">
                                    Total Issue
                                </div>
                                <div className="col">
                                    Other
                                </div>
                            </div>
                           { 
                           PIDARR.length==0? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />:
                           PIDARR.map((item,index) => (
                                
                            <div className="list-item sbtl">
                                <div className="col no" style={{ color: '#E48686' }}>
                                {index+1}
                                </div>
                                <div className="col">
                                    {item.blockNumber}
                                 
                                </div>
                                <div className="col">
                                    {item.from}
                                   
                                </div>
                                <div className="col">
                                    {item.to}
                                  
                                </div>
                                <div className="col">
                               
                                </div>
                                <div className="col">
                                 
                                </div>
                                <div className="col">
                                   
                                </div>
                            </div>
                             ))

                        }  
                        </div>
                    </div>
                </div>





                <div className="panel-container">
                    <h2 className="panel-title">
                        My SBTs
                    </h2>
                    <div className='disabox'>
                        <div className="soulaccount">
                            <div className="name">
                                My SoulAccount
                            </div>
                            <div className="value">
                                {/* {UserToSoul ? UserToSoul : "-"} */}
                            </div>
                        </div>
                        <div className="fidscore">
                            <div className="name">
                                FID ReputationScore
                            </div>
                            <div className="score">
                                {/* {score ? score :"-"} */}
                            </div>
                        </div>
                    </div>
                    <div className="fire-list-box sbt11">
                        <div className="list-header flex-box2">
                            <div className="col" >
                                SBT
                            </div>
                            <div className="col">
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
                             PIDARR.length==0? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />:
                             PIDARR.map((item,index) => (
                        <div className="list-item flex-nn">
                            <div className="col no" style={{ color: '#E48686' }}>
                                {index+1}
                            </div>
                            <div className="col">
                                {item.blockNumber}
                                
                            </div>
                            <div className="col">
                                {item.from}
                                
                            </div>
                            <div className="col">
                                {item.to}
                                
                            </div>
                        </div>
                         ))

                        } 
                    </div>


                </div>
            </div>
        </StyleBox >
    )
}
export default SBTList
