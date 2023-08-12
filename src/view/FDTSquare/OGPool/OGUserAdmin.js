import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import BigNumber from "bignumber.js"
import AddNomalWhiteList from "./ThreelWhiteList";
import AddThreeWhiteList from "./WhiteList";
import { showNum } from "../../../utils/bigNumberUtil";
import ethereum from "../../../imgs/ethereum.svg";
import { formatAddress } from "../../../utils/publicJs";
import ConnectWallet from "../../../component/ConnectWallet/ConnectWallet";
import user3 from "../../../imgs/user3.png"
import download from "../../../imgs/download.png"
import manage from "../../../imgs/svg/manage.svg"
import {
    Button,
    message,
    AutoComplete,
    Form,
    Pagination
} from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, dealPayMethod, viewMethod } from "../../../utils/contractUtil"
import ethIcon from "../../../imgs/eth_icon.webp";
import downIcon from "../../../imgs/down_icon.webp";
import listIcon from "../../../imgs/list-icon.webp";
import develop from "../../../env";
import { useNavigate } from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import { getDonateRecord } from "../../../graph/donate";
import OGPoolStyle from "./OGPoolStyle";


const OGPoolPublic = (props) => {
    let { state, dispatch } = useConnect();
    const [activeNav, setActiveNav] = useState(1)

    const [isSAdmin, setIsSecondAdmin] = useState(false)
    const [isTAdmin, setIsThreeAdmin] = useState(false)
    const [allRecords, setAllRecords] = useState([])


    const history = useNavigate();
    const [form] = Form.useForm();


    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }


    const handlePayDealMethod = async (name, params, value) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealPayMethod(contractTemp, state.account, name, params, value)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getUserInfo = async () => {
        if (!state.pid) {
            const userInfo = await handleUserViewMethod("userInfo", [state.account])
            dispatch({ type: "SET_PID", payload: userInfo.PID })
        }
    }

    const handleCoinViewMethod = async (name, coinName, params) => {
        let contractTemp = await getContractByName(coinName, state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const Row = (item, index) => {
        return <div className="list-item row1" key={index}>
            <div className="col no">
                {item.no}
            </div>
            <div className="col pid">
                {item.pid}
            </div>
            <div className="col ">
                {item.name}
            </div>

            <div className="col address">
                {item.addr && (
                    <a href={develop.ethScan + "address/" + item.addr} target="_blank">
                        {formatAddress(item.addr)}
                    </a>
                )}
            </div>
            <div className="col ">
                {item.ethAmount / 10 ** 18}
            </div>
            <div className="col">
                {BigNumber(item.usdtAmount / 10 ** 18).toFixed(2)}
            </div>

            <div className="col">
                {item.rate}%
            </div>
            <div className="col ">
                {BigNumber(item.fdtAmount / 10 ** 18).toFixed(2)}
            </div>

            <div className="col">
                {item.time}
            </div>

        </div>
    }
    const Row2 = (item, index) => {
        return <div className="list-item row2-list-item" key={index}>
            <div className="col no">
                {index + 1}
            </div>
            <div className="col pid">
                {item.Pid}
            </div>
            <div className="col name">
                {item.name}
            </div>

            <div className="col address">
                {
                    item.user && <a href={develop.ethScan + "address/" + item.user} target="_blank">
                        {(item.user)}
                    </a>
                }

            </div>


        </div>
    }





    const getIsAdmin = async () => {
        const secondArr = await handleViewMethod("getAdminsLevelTwoList", [])
        const threeArr = await handleViewMethod("getAdminsLevelThreeList", [])
        let isS = false, isT = false
        secondArr.forEach(item => {
            if (item.toLowerCase() === state.account.toLowerCase()) {
                isS = true
            }
        })
        threeArr.forEach(item => {
            if (item.toLowerCase() === state.account.toLowerCase()) {
                isT = true
            }
        })

        setIsSecondAdmin(isS)
        setIsThreeAdmin(isT)
    }





    const getData = async () => {
        try {
            let judgeRes = await judgeStatus(state)
            if (!judgeRes) {
                return
            }
            getIsAdmin()
            getUserInfo()
        } catch (e) {

        }
    }
    const getRecord = async () => {
        try {
            let res = await getDonateRecord()
            if (res.data) {
                let arr = []
                res.data.allRecords.forEach(item => {
                    if (item.time) {
                        item.time = new Date(item.time * 1000).toUTCString()
                    }
                    if (state.account && item.addr.toString() == state.account.toLowerCase()) {
                        arr.push(item)
                    }
                })

                if (res.data.allRecords && res.data.allRecords.length > 0) {
                    res.data.allRecords.shift()
                    setAllRecords(res.data.allRecords)
                }

            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(async () => {

        getRecord()

    }, []);
    useEffect(() => {
        getData()
    }, [state.account]);
    useEffect(() => {

    }, [state.account, state.networkId, state.apiState])

    return (
        <OGPoolStyle>

            <div className="page-title">
                OG Pool Manage
            </div>
            <div className="header-nav">
                <div className="fire-nav-list ">
                    <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                        setActiveNav(1)
                    }}>
                        OG Donate Pool
                    </div>
                    <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                        setActiveNav(2)
                    }}>
                        WhiteList
                    </div>
                    {
                        isSAdmin && (

                            <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {

                                setActiveNav(4)
                            }}>
                                Set Admin
                            </div>
                        )
                    }
                    {

                        (isTAdmin) && (

                            <div className={"nav-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                                setActiveNav(3)
                            }}>
                                Set WhiteList
                            </div>
                        )
                    }

                </div>

            </div>


            {activeNav == 3 && (
                <div>
                    <AddThreeWhiteList allRecords={allRecords}></AddThreeWhiteList>

                </div>
            )}
            {activeNav == 4 && (
                <div>
                    <AddNomalWhiteList allRecords={allRecords}></AddNomalWhiteList>
                </div>
            )}

        </OGPoolStyle>
    )
}
export default OGPoolPublic
