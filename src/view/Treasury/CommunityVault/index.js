import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"

import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import DistributionStyle from "./style"
import addressMap from "../../../api/addressMap";
import headerImg from "../../../imgs/header_icon.webp";
import twitterIcon from "../../../imgs/twitter.webp"
const Distribution = (props) => {

    let {state, dispatch} = useConnect();
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
            arr.push({address, rate, amount: assets * rate / 100, balance: await getTokenBalance(address)})
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
                    <div className="header-box">
                        <div className="panel-title ">
                            Community Vault
                        </div>
                        <div className="btn-box">
                            <Button type="primary" onClick={() => {
                                history("/CreateProposal")
                            }}>New Proposals</Button>
                            <Button type="primary" onClick={() => {
                                history("/CommunityMyDraft")
                            }}>My Draft</Button>

                            <Button type="primary" onClick={() => {
                                history("/")
                            }}>My Draft</Button>
                        </div>
                    </div>
                    <div className="header-content">
                        <div className="banner">

                        </div>
                        <div className="header-icon">
                            <img src={headerImg} alt=""/>
                        </div>
                        <div className="community-info">
                            <div className="title">
                                FireDAO
                            </div>
                            <div className="bio-box">
                                <strong>BIO:</strong>
                                <span>
                                    Let's build the Bit Civilization together！
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        Contract Parameters
                    </div>
                    <div className="content-box">
                        <div className="content-item">
                            <div className="header">
                                Contract address
                            </div>
                            <div className="content-list">
                                <div className="in-line">
                                    <div className="name">Governor</div>
                                    <div className="value">
                                        0x21641….B60d
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-item">
                            <div className="header">
                                Parameters
                            </div>
                            <div className="content-list">
                                <div className="in-line">
                                    <div className="name">Governor</div>
                                    <div className="value">
                                        0x21641….B60d
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-container">
                    <div className="info-list">
                        <div className="info-item">
                            <div className="value">
                                40
                            </div>
                            <div className="name">
                                Proposals
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="value">
                                40
                            </div>
                            <div className="name">
                                FDT Holders
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="value">
                                40
                            </div>
                            <div className="name">
                                PID Holders
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="value">
                                40
                            </div>
                            <div className="name">
                                FID Holders
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="value">
                                40
                            </div>
                            <div className="name">
                                Voters
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        Proposals
                    </div>
                    <div className="fire-list-box proposal-list">
                        <div className="list-header">
                            <div className="col">
                                Proposal
                            </div>
                            <div className="col">
                                Proposer
                            </div>
                            <div className="col">
                                Votes YAE
                            </div>
                            <div className="col">
                                Votes NAY
                            </div>
                            <div className="col">
                                Votes ABSTAIN
                            </div>
                            <div className="col">
                                Total votes
                            </div>
                        </div>

                    </div>
                </div>

                <div className="panel-container">
                    <div className="panel-title">
                        Trendding Delegates
                    </div>
                    <div className="delegate-list">
                        <div className="delegate-item">
                            <div className="header">
                                <div className="left">
                                    <img src={headerImg} className="headerIcon" alt=""/>
                                    <div className="left-content">
                                        <div className="name">
                                            Username
                                        </div>
                                        <div className="value">
                                            FRT：50K
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <Button type="primary">Delegate</Button>
                                </div>
                            </div>
                            <div className="delegate-content">
                                <div className="intro">
                                    Introduction
                                </div>
                                <div className="twitter">
                                    <img className="icon" src={twitterIcon} alt=""/>
                                    @FireDAO
                                </div>
                                <div className="">
                                    Trusted by 34 accounts
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </DistributionStyle>
    )
}
export default Distribution
