import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../api/connectContract";
import {dealMethod, viewMethod} from "../../utils/contractUtil"
import {getIpfs} from "../../utils/ipfsApi";

const FIDList = (props) => {
    const [form] = Form.useForm();
    const FIDList = styled.div`
    `
    let {state, dispatch} = useConnect();
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
    const getData = async () => {
        const length =  await handleViewMethod("getUserHaveFIDLength", [])
        let arr = []
        for(let i=0;i<length;i++){
            let address =  await handleViewMethod("UserHaveFID", [i])
            const soulAccount = await handleViewMethod("getSoulAccount", [address])
            let fid = await handleViewMethod("UserFID", [address])
            arr.push({
                fid,
                soulAccount
            })
        }
        dispatch({type: "SET_PidArr", payload: arr})
    }


    useEffect(() => {
        getData()
    }, [state.account]);


    return (
        <FIDList>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="list-box">
                        <div className="list-box">
                            <div className="list-header flex-box">
                                <div className="col">
                                    FID
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
                                    Soul Contract
                                </div>
                            </div>
                            {
                                state.PidArr.map(item=>(
                                    <div className="list-item ">
                                        <div className="col">
                                            {item.fid}
                                        </div>
                                        <div className="col">

                                        </div>
                                        <div className="col">

                                        </div>
                                        <div className="col">
                                            {item.soulAccount}
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>
            </div>
        </FIDList>
    )
}
export default FIDList
