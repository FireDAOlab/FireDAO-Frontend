import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { useConnect } from "../../../api/contracts";
import { Card,Empty, Button, Descriptions, message, Form, List, Input, notification } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import user3 from "../../../imgs/user3.png";
import { useNavigate } from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import DistributionStyle from "./style"
import addressMap from "../../../api/addressMap";
const Distribution = (props) => {

    let { state, dispatch } = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [myClassAddress, setMyClass] = useState("")
    const [assets, setAssets] = useState(0)
    const [allocationFundAddress, setAllocationFundAddress] = useState([])

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

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const getAssets = async () => {
        const assets = await handleViewMethod("getTokenBalance", [])
        setAssets(assets / 10 ** 18)
        getAllocationFundAddress()

    }
    const AllocationFund = async () => {
        await handleDealMethod("AllocationFund", [])
        getAssets()
    }
    const getTokenBalance = async (value) => {
        let contractTemp = await getContractByContract("erc20", addressMap["WETH"].address, state.api,)
        const decimal = await viewMethod(contractTemp, value, "decimals", [])
        let balance = await viewMethod(contractTemp, value, "balanceOf", [value])
        balance = balance / (10 ** parseInt(decimal))
        return balance
    }
    const getAllocationFundAddress = async () => {
        const length = await handleViewMethod("getAllocationFundAddressLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            const address = await handleViewMethod("AllocationFundAddress", [i])
            const rate = await handleViewMethod("distributionRatio", [address])
            arr.push({ address, rate, amount: assets * rate / 100, balance: await getTokenBalance(address) })
        }
       
        setAllocationFundAddress(arr)
    }
    const dealNum = (num) => {
        return parseInt(num * 1000) / 1000
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getAssets()
    }, [state.account, state.networkId]);


    return (
        <DistributionStyle>

            <div className="panel-box userinfo-box">
                <div className="panel-container">
                    <div className="panel-title">
                        Income Distribution Publicity
                        <Button onClick={() => goPage("/TreasuryDistributionManage")} className="disAd">
                            <img src={user3} style={{ width: '22px', marginLeft: '-10px', marginTop: '-10px' }} />
                        </Button>
                    </div>
                    <div className="assets-box">
                        <div className='title'>
                        Assets
                        </div>
                        <div className="asset">
                            {assets}
                        </div>
                        <Button type="primary" className='ant-btn ant-btn-primary' onClick={() => {
                            AllocationFund()
                        }}>AllocationFund
                        </Button>
                    </div>
                    <div className="white-list">
                        <div className="fire-list-box">
                            <div className='listheadert'>
                                <div className="list-header flex-box11">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        Type
                                    </div>
                                    <div className="col">
                                        Contract Address
                                    </div>
                                    <div className="col">
                                        Percentage
                                    </div>
                                    <div className="col">
                                        Amount(ETH)
                                    </div>
                                    <div className="col">
                                        AccountBalance(ETH)
                                    </div>

                                </div>

                                {  allocationFundAddress.length == 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                                allocationFundAddress.map((item, index) => {
                                    return (
                                        <div className="list-item" 
                                        key={index}
                                        >
                                            <div className="col no">
                                                {index + 1}
                                            </div>
                                            <div className='col'>
                                              
                                            </div>
                                            <div className="col address">
                                                <a>
                                                    {item.address.substr(0, 6) + "..." + item.address.substr(item.address.length - 3, item.address.length)}
                                                </a>
                                            </div>
                                            <div className="col">
                                                {item.rate}%
                                            </div>
                                            <div className="col">
                                                {dealNum(item.amount)}
                                            </div>
                                            <div className="col">
                                                {dealNum(item.balance)}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </DistributionStyle>
    )
}
export default Distribution
