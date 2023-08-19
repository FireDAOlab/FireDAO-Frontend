import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import BigNumber from "bignumber.js"
import AddNomalWhiteList from "./ThreelWhiteList";
import AddThreeWhiteList from "./components/OgAdminLevel2";
import {formatAddress} from "../../../utils/publicJs";

import {
    message,
    Form, Pagination,
} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"

import develop from "../../../env";
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import {getDonateRecord} from "../../../graph/donate";
import OGPoolStyle from "./OGPoolStyle";
import OgSetActive from "./components/OgSetActive";
import OgSetBlacklist from "./components/OgSetBlacklist";
import listIcon from "../../../imgs/list-icon.webp";
import {ETHDecimals, FDTDecimals, USDTDecimals} from "../../../config/constants";

const OGPoolPublic = (props) => {
    let {state, dispatch} = useConnect();
    const [activeNav, setActiveNav] = useState(1)

    const [isSecondAdmin, setIsSecondAdmin] = useState(false)
    const [isThreeAdmin, setIsThreeAdmin] = useState(false)
    const [isFourAdmin, setIsFourAdmin] = useState(false)
    const [total, setTotal] = useState(0)
    const [allRecords, setAllRecords] = useState([])
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [pageCount2, setPageCount2] = useState(20)
    const [curPage2, setCurPage2] = useState(1)

    const history = useNavigate();
    const [form] = Form.useForm();

    const onChangePage = async (page) => {
        await setCurPage(page)
    }


    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
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



    const getIsAdmin = async () => {
        const isSecond = await handleViewMethod("checkAddrForAdminLevelTwo", [state.account])
        const isThree = await handleViewMethod("checkAddrForAdminLevelThree", [state.account])
        const isFour = await handleViewMethod("checkAddrForAdminLevelFour", [state.account])
        setIsSecondAdmin(isSecond)
        setIsThreeAdmin(isThree)
        setIsFourAdmin(isFour)
    }


    const getData = async () => {
        try {
            let judgeRes = await judgeStatus(state)
            if (!judgeRes) {
                return
            }
            getIsAdmin()
        } catch (e) {
            console.log(e)
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
                    setAllRecords(res.data.allRecords)
                    setTotal(res.data.allRecords.length)
                }

            }
        } catch (e) {
            console.log(e)
        }
    }
    const Row = (item, index) => {
        return <div className="list-item" key={index}>
            <div className="col no">
                {item.no}
            </div>


            <div className="col address">
                {item.addr && (
                    <a href={develop.ethScan + "address/" + item.addr} target="_blank">
                        {formatAddress(item.addr)}
                    </a>
                )}
            </div>
            <div className="col ">
                {item.ethAmount / 10 ** ETHDecimals}
            </div>
            <div className="col">
                {BigNumber(item.usdtAmount / 10 ** USDTDecimals).toFixed(2)}
            </div>

            <div className="col ">
                {BigNumber(item.fdtAmount / 10 ** FDTDecimals).toFixed(2)}
            </div>

            <div className="col">
                {item.time}
            </div>

        </div>
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
                    {
                        (isSecondAdmin || isThreeAdmin||isFourAdmin) &&
                        <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                            setActiveNav(1)
                        }}>
                            Set Active Accounts
                        </div>
                    }

                    {
                        (isSecondAdmin||isThreeAdmin ) && <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                            setActiveNav(2)
                        }}>
                            Donate Record
                        </div>
                    }
                    {
                        isSecondAdmin && (
                            <div className={"nav-item " + (activeNav == 5 ? "active" : "")} onClick={() => {
                                setActiveNav(5)
                            }}>
                                Set Blacklist
                            </div>
                        )
                    }
                    {
                        isSecondAdmin && (

                            <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                                setActiveNav(4)
                            }}>
                                Set Lv3 Admin
                            </div>
                        )
                    }
                    {
                        isThreeAdmin && (

                            <div className={"nav-item " + (activeNav == 6 ? "active" : "")} onClick={() => {
                                setActiveNav(6)
                            }}>
                                Set Lv4 Admin
                            </div>
                        )
                    }

                </div>

            </div>

            {activeNav == 1 && (<OgSetActive isFourAdmin={isFourAdmin}/>)}
            {activeNav == 5 && (<OgSetBlacklist/>)}

            {activeNav ==2 &&(          <div className="panel-box part2">
                <div className="panel-container">
                    <div className="list-top-part">
                        <div className="panel-title">
                            All Donate Records
                        </div>
                        <div className="fire-nav-list">

                        </div>
                    </div>
                    <div className="fire-list-box" style={{minWidth: '100%'}}>
                        <div className="list-header ">
                            <div className="col">
                                No.
                            </div>

                            <div className="col">
                                Wallet Address
                            </div>
                            <div className="col">
                                ETH
                            </div>
                            <div className="col">
                                Value
                            </div>

                            <div className="col">
                                Amount
                            </div>
                            <div className="col">
                                Time(UTC)
                            </div>
                        </div>

                        {
                            allRecords.map((item, index) => (
                                index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                Row(item, index)
                            ))
                        }


                    </div>
                    <div className="pagination">
                        {
                           <Pagination current={curPage} showSizeChanger
                                                          onShowSizeChange={handleShowSizeChange}
                                                          onChange={onChangePage} total={total}
                                                          defaultPageSize={pageCount}/>
                        }
                    </div>
                </div>

            </div>)}
            {activeNav == 4 && (<AddThreeWhiteList isLevel2={isSecondAdmin} allRecords={allRecords}/>)}
            {activeNav == 6 && (<AddThreeWhiteList isLevel2={isSecondAdmin} allRecords={allRecords}/>)}

        </OGPoolStyle>
    )
}
export default OGPoolPublic
