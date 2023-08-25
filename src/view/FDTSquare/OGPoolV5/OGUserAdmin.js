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
import {getDonateRecord, getAllRegisters} from "../../../graph/donateV5";
import OGUserAdminStyle from "./OGUserAdminStyle";
import OgSetActive from "./components/OgSetActive";
import OgSetBlacklist from "./components/OgSetBlacklist";
import FDTIcon from "../../../imgs/fdt.png";
import ethereum from "../../../imgs/ethereum.png";
import {ETHDecimals, FDTDecimals, FLMDecimals, USDTDecimals} from "../../../config/constants";
import {showNum} from "../../../utils/bigNumberUtil";
import {dealTime} from "../../../utils/timeUtil";
import USDTIcon from "../../../imgs/usdt.png";

const OGPoolPublic = (props) => {
    let {state, dispatch} = useConnect();
    const [activeNav, setActiveNav] = useState(1)

    const [isSecondAdmin, setIsSecondAdmin] = useState(false)
    const [isThreeAdmin, setIsThreeAdmin] = useState(false)
    const [isFourAdmin, setIsFourAdmin] = useState(false)
    const [isFiveAdmin, setIsFiveAdmin] = useState(false)
    const [teamRecordArr, setTeamRecordArr] = useState([])
    const [totalETH, setTotalEth] = useState(0)
    const [totalFLM, setTotalFlm] = useState(0)

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
    const getMyLevel =  ()=>{
        if(isSecondAdmin){
            return 2
        }
        if(isThreeAdmin){
            return 3
        }
        if(isFourAdmin){
            return 4
        }
        if(isFiveAdmin){
            return 5
        }
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
    const getRefArr = async (address, myTeamArr, level) => {
        let refRes = await getAllRegisters(address)
        if (refRes.data && refRes.data.allRegisters && refRes.data.allRegisters.length > 0) {
            const refArr = refRes.data.allRegisters
            if (refArr[0]._user != address) {
                refArr.forEach(item=>{
                    item.level = level
                })
                myTeamArr.push(...refArr)
            }
            level++
            for (let i = 0; i < refArr.length; i++) {
                if (refArr[i]._user != address) {
                    await getRefArr(refArr[i]._user, myTeamArr,level)
                }
            }
        }
        return myTeamArr

    }
    function getLevelRate(level) {
        switch (level) {
            case 1:return 8;
            case 2:return 5;
            case 3:return 3;
            case 4:return 2;
            case 5:return 2;
        }
        return 0
    }
    const getRecord = async () => {
        try {
            let res = await getDonateRecord()

            if (res.data && res.data.allRecords) {
                const recordArr = res.data.allRecords
                const refArr = await getRefArr(state.account, [],1)
                let teamRecordArr = [], totalETH = 0, totalFLM = 0
                refArr.forEach(refItem => {
                    for (let j = 0; j < recordArr.length; j++) {
                        const recordItem = recordArr[j]
                        if (recordItem.addr.toLowerCase() == refItem._user.toLowerCase()) {
                            recordItem.level = refItem.level
                            recordItem.rate =  getLevelRate(getMyLevel())
                            teamRecordArr.push(recordItem)
                            totalETH = BigNumber(totalETH).plus(recordItem.ethAmount / 10 ** ETHDecimals) *  getLevelRate(getMyLevel()) / 100
                            totalFLM = BigNumber(totalFLM).plus(recordItem.flmAmount / 10 ** FLMDecimals) *  getLevelRate(getMyLevel()) / 100
                        }
                    }
                })
                setTotalEth(totalETH.toString())
                setTotalFlm(totalFLM.toString())
                setTeamRecordArr(teamRecordArr)
            }


        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        setActiveNav()
        getData()
        getRecord()

    }, [state.account]);
    useEffect(() => {

    }, [state.account, state.networkId, state.apiState])

    return (
        <OGUserAdminStyle>

            <div className="page-title">
                OG Pool Manage
            </div>
            <div className="header-nav">
                <div className="fire-nav-list ">
                    {
                        (isSecondAdmin || isFiveAdmin) &&
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

            {activeNav == 2 && (<div className="panel-box part2">
                <div className="panel-container">
                    <div className="list-top-part">
                        <div className="panel-title">
                            Team Income
                        </div>
                    </div>
                    <div className="flex-box total-box">
                        <div className="item">
                            <div className="name">ETH Total Income</div>
                            <strong><img src={ethereum} width={20} height={20} alt=""/> {showNum(totalETH)}</strong>
                        </div>
                        <div className="item">
                            <div className="name">FLM Total Income</div>
                            <strong><img src={FDTIcon} width={20} height={20} alt=""/> {showNum(totalFLM)}</strong>
                        </div>
                    </div>
                    <div className="fire-list-box donate-list" style={{minWidth: '100%'}}>
                            <div className="list-header ">
                                <div className="col">
                                    No.
                                </div>
                                <div className="col">
                                    Level
                                </div>
                                <div className="col">
                                    Divide<br/> Percentage
                                </div>
                                <div className="col">
                                    Address
                                </div>
                                <div className="col">
                                    ETH
                                </div>
                                <div className="col">
                                    FDT-OG
                                </div>

                                <div className="col">
                                    Price
                                </div>
                                <div className="col">
                                    Cost
                                </div>
                                <div className="col">
                                    Rewards
                                </div>
                                <div className="col">
                                    Time
                                </div>
                            </div>

                        {
                            teamRecordArr.map((item, index) => (
                                index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                <div className="list-item" key={index}>
                                    <div className="col no">
                                        {index + 1}
                                    </div>
                                    <div className="col">
                                        {item.level}
                                    </div>
                                    <div className="col">
                                        {item.rate}%
                                    </div>
                                    <div className="col ">
                                        <div className="address">
                                            <a target="_blank"
                                               href={develop.ethScan + "/address/" + item.addr}> {formatAddress(item.addr)} </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <img width={20} height={20} style={{marginRight: "3px"}} src={ethereum}
                                             alt=""/>
                                        {showNum(item.ethAmount / 10 ** ETHDecimals, 3)}
                                    </div>
                                    <div className="col">
                                        <img width={20} height={20} style={{marginRight: "3px"}} src={FDTIcon}
                                             alt=""/>
                                        {showNum(item.fdtAmount / 10 ** FDTDecimals, 1)}
                                    </div>
                                    <div className="col price">
                                        <img width={20} height={20} style={{marginRight: "3px"}} src={USDTIcon}
                                             alt=""/>
                                        {showNum(0.01)}
                                    </div>
                                    <div className="col cost">
                                        <img width={20} height={20} style={{marginRight: "3px"}} src={USDTIcon}
                                             alt=""/>
                                        {showNum(item.usdtAmount / 10 ** USDTDecimals, 3)}
                                    </div>
                                    <div className="col ">
                                        <div className="item">
                                            <img width={20} height={20} style={{marginRight: "3px"}}
                                                 src={ethereum} alt=""/>
                                            {showNum(BigNumber(item.ethAmount / 10 ** ETHDecimals).multipliedBy(item.rate / 100), 3)}
                                        </div>
                                        <div className="item" style={{marginLeft: "10px"}}>
                                            <img width={20} height={20} style={{marginRight: "3px"}}
                                                 src={FDTIcon} alt=""/>
                                            {showNum(BigNumber(item.fdtAmount / 10 ** FLMDecimals).multipliedBy(item.rate / 100), 1)}
                                        </div>
                                    </div>
                                    <div className="col">
                                        {dealTime(item.blockTimestamp)}
                                    </div>
                                </div>
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
            {activeNav == 4 && (
                <AddThreeWhiteList isLevel2={isSecondAdmin} isThreeAdmin={isThreeAdmin} allRecords={allRecords}/>)}
            {activeNav == 6 && (
                <AddThreeWhiteList isLevel2={isSecondAdmin} isThreeAdmin={isThreeAdmin} allRecords={allRecords}/>)}
            {activeNav == 7 && (
                <AddThreeWhiteList isLevel2={isSecondAdmin} isLevel3={isThreeAdmin} isFourAdmin={isFourAdmin}
                                   allRecords={allRecords}/>)}
        </OGUserAdminStyle>
    )
}
export default OGPoolPublic
