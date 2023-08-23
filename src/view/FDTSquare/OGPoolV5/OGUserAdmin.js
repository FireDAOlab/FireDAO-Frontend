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
import {getDonateRecord,getAllRegisters} from "../../../graph/donateV5";
import OGPoolStyle from "./OGPoolStyle";
import OgSetActive from "./components/OgSetActive";
import OgSetBlacklist from "./components/OgSetBlacklist";
import listIcon from "../../../imgs/list-icon.webp";
import {ETHDecimals, FDTDecimals, FLMDecimals, USDTDecimals} from "../../../config/constants";

const OGPoolPublic = (props) => {
    let {state, dispatch} = useConnect();
    const [activeNav, setActiveNav] = useState(1)

    const [isSecondAdmin, setIsSecondAdmin] = useState(false)
    const [isThreeAdmin, setIsThreeAdmin] = useState(false)
    const [isFourAdmin, setIsFourAdmin] = useState(false)
    const [isFiveAdmin, setIsFiveAdmin]  = useState(false)
    const [total, setTotal] = useState(0)
    const [allRecords, setAllRecords] = useState([])
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)


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
        let contractTemp = await getContractByName("PrivateExchangePoolOGV5", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }


    const handlePayDealMethod = async (name, params, value) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOGV5", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealPayMethod(contractTemp, state.account, name, params, value)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOGV5", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }



    const getIsAdmin = async () => {
        const isSecond = await handleViewMethod("checkAddrForAdminLevelTwo", [state.account])
        const isThree = await handleViewMethod("checkAddrForAdminLevelThree", [state.account])
        const isFour = await handleViewMethod("checkAddrForAdminLevelFour", [state.account])
        const isFive = await handleViewMethod("checkAddrForAdminLevelFive", [state.account])
        setIsSecondAdmin(isSecond)
        setIsThreeAdmin(isThree)
        setIsFourAdmin(isFour)
        setIsFiveAdmin(isFive)
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
    const getRefArr = async (address,myTeamArr) => {
        let refRes = await getAllRegisters(address)
        console.log(refRes)
        if (refRes.data && refRes.data.allRegisters&&refRes.data.allRegisters.length>0) {
            const refArr = refRes.data.allRegisters
            myTeamArr.push(...refArr)
            for(let i=0;i<refArr.length;i++){
                getRefArr(refArr[i].user,myTeamArr)
            }
        }else{
            return myTeamArr
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
            const refArr = await getRefArr(state.account,[])
            console.log(refArr)
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

    useEffect(() => {
        setActiveNav()
        getData()
        getRecord()

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
                        (isSecondAdmin ||isFiveAdmin) &&
                        <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                            setActiveNav(1)
                        }}>
                            Set Active Accounts
                        </div>
                    }

                    {
                        <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                            setActiveNav(2)
                        }}>
                             Team Income
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
                    {
                        isFourAdmin && (

                            <div className={"nav-item " + (activeNav == 7 ? "active" : "")} onClick={() => {
                                setActiveNav(7)
                            }}>
                                Set Lv5 Admin
                            </div>
                        )
                    }
                </div>

            </div>

            {activeNav == 1 && (<OgSetActive isFiveAdmin={isFiveAdmin}/>)}
            {activeNav == 5 && (<OgSetBlacklist/>)}

            {activeNav ==2 &&(<div className="panel-box part2">
                <div className="panel-container">
                    <div className="list-top-part">
                        <div className="panel-title">
                            Team Income
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
            {activeNav == 4 && (<AddThreeWhiteList isLevel2={isSecondAdmin} isThreeAdmin={isThreeAdmin} allRecords={allRecords}/>)}
            {activeNav == 6 && (<AddThreeWhiteList isLevel2={isSecondAdmin} isThreeAdmin={isThreeAdmin} allRecords={allRecords}/>)}
            {activeNav == 7 && (<AddThreeWhiteList isLevel2={isSecondAdmin} isLevel3={isThreeAdmin} isFourAdmin={isFourAdmin} allRecords={allRecords}/>)}
        </OGPoolStyle>
    )
}
export default OGPoolPublic
