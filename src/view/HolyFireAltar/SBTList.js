import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../api/connectContract";
import {dealMethod, viewMethod} from "../../utils/contractUtil"
import {getIpfs} from "../../utils/ipfsApi";

const SBTList = (props) => {
    const [form] = Form.useForm();
    const SBTList = styled.div`
      .list-box{
        margin: 2em 0 1em;
        .col{
          &:nth-child(1){
            width: 5%;
          }
          &:nth-child(2){
            width: 5%;
          }
          &:nth-child(3){
            width: 30%;
          }
          &:nth-child(4){
            width: 30%;
          }
        }
        .list-header{
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: bold;
          padding: 0.5em 1em;
        }
        .list-item{
          padding: 0.5em 1em;
          display: flex;
          justify-content: space-between;
          background: #3F3535;
          border-radius: 10px;
          margin: 0.5em 0;
        }
      }
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
    const getSoulAccount = async () => {
        const address = await handleViewMethod("getSoulAccount", [state.account])
        console.log(address)
    }


    useEffect(() => {
        getSoulAccount()
    }, [state.account]);


    return (
        <SBTList>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="fire-list-box">
                        <div className="list-box">
                            <div className="list-header flex-box">
                                <div className="col">
                                    Level
                                </div>
                                <div className="col">
                                    blockNumber
                                </div>
                                <div className="col">
                                    From
                                </div>
                                <div className="col">
                                    To
                                </div>
                            </div>
                            {
                                PIDARR.map(item=>(
                                    <div className="list-item ">
                                        <div className="col">
                                            1
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
            </div>
        </SBTList>
    )
}
export default SBTList
