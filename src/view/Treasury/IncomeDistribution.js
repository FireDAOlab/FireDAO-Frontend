import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../api/connectContract";
import {dealMethod, viewMethod} from "../../utils/contractUtil"
import {getIpfs} from "../../utils/ipfsApi";

const IncomeDistribution = (props) => {
    const [form] = Form.useForm();
    const IncomeDistribution = styled.div`
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
        let contractTemp = await getContractByName("user", state.api,)
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
        const length = await handleUserViewMethod("getUserCount", [])
        let arr = []
        for(let i=0;i<length;i++){
            let user =  await handleUserViewMethod("users", [i])
            console.log(user)
            arr.push(user)
        }
        setPIDARR(arr)
    }


    useEffect(() => {
        getData()
    }, [state.account]);


    return (
        <IncomeDistribution>
            <div className="panel-box">
                <div className="panel-title">
                    Income Distribution Publicity
                </div>
                <div className="list-box">
                    <div className="list-box">
                        <div className="list-header flex-box">
                            <div className="col">
                                PID
                            </div>
                            <div className="col">
                                FID
                            </div>
                            <div className="col">
                                Username
                            </div>
                            <div className="col">
                                Wallet Address
                            </div>
                        </div>
                        {
                            PIDARR.map(item=>(
                                <div className="list-item ">
                                    <div className="col">
                                        {item.id}
                                    </div>
                                    <div className="col">
                                    </div>
                                    <div className="col">
                                        {item.username}
                                    </div>
                                    <div className="col">
                                        {item.account}
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </IncomeDistribution>
    )
}
export default IncomeDistribution
