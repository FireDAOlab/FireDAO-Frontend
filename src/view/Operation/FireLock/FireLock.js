import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import listIcon from "../../../imgs/list-icon.webp"
import {SearchOutlined} from "@ant-design/icons";
import {getFireLockList,getSearchData} from "../../../graph/fireLock";
import {FireLockDecimal} from "../../../utils/constants";
import {useNavigate} from "react-router-dom";
import fresh from "../../../imgs/fresh_icon.webp";
import FireLockStyle from "./FireLockStyle";
import CreateFireLock from "../component/CreateFireLock";
import CreateNotice from "../component/CreateNotice";
import ChangeFeeAddr from "../component/ChangeFeeAddr";
import judgeStatus from "../../../utils/judgeStatus";
import {dealTime} from "../../../utils/timeUtil";
import {numToDecimal2} from "../../../utils/publicJs";
import moment from "moment";

const FireLock = (props) => {
    const [activeNav, setNav] = useState(1)

    let {state, dispatch} = useConnect();

    const [lockArr, setLockArr] = useState([])
    const [MyFireLock, setMyFireLock] = useState([])
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [searchData, setSearchData] = useState("")
    const [fee, setFee] = useState(0.008)
    const [owner, setOwner] = useState(undefined)
    const [address, setAddress] = useState("")
    const [total, setTotal] = useState(0)
    const [searchArr, setSearchArr] = useState(false)
    const [isShowCreate, setShowCreate] = useState(false)
    const [isShowNotice, setShowNotice] = useState(false)
    const [isShowChange, setShowChange] = useState(false)
    const history = useNavigate();
    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
            },
        });
    };
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("fireLockFactory", state.api,)
        if (!contractTemp) {

        }
        return dealMethod(contractTemp, state.account, name, params)
    }

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleFeeViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("firelockFee", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getCliff = (item)=>{
        let tempSec =   item.cliffPeriod - item.lockTime
        return numToDecimal2(tempSec / 86400)
    }
    const getFinalUnlock=(item)=>{
        let endTime
        let  UnlockCycle = item.unlockCycle,UnlockRound = item.unlockRound,CliffPeriod = item.cliffPeriod
        if (UnlockCycle && UnlockRound && parseInt(UnlockCycle) > 0 && (parseInt(UnlockRound) > 0)) {
            const dateTime = new Date(CliffPeriod*1000).getTime()
            let date = new Date(dateTime + parseInt(UnlockRound) * parseInt(UnlockCycle) * 86400000 )
            endTime = moment(date).format('YYYY-MM-DD, hh:mm:ss');
        } else if (CliffPeriod ) {
            const dateTime = new Date(CliffPeriod*1000).getTime()
            endTime = moment(dateTime).format('YYYY-MM-DD, hh:mm:ss');
        }
        return endTime
    }
    const Row = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {lockArr.length-index}
            </div>
            <div className="col">
                {item.lockAddr?item.lockAddr.substr(0,4)+"..."+item.lockAddr.substr(item.lockAddr.length-4,item.lockAddr):""}
            </div>
            <div className="col">
                {item.title}
            </div>

            <div className="col address">
                {item.token}
            </div>
            <div className="col ">
                { numToDecimal2(item.lockAmount/FireLockDecimal)}
            </div>
            <div className="col ">
                {dealTime(item.lockTime)}
            </div>
            <div className="col ">
                {getCliff(item)}
            </div>
            <div className="col ">
                {item.unlockCycle}
            </div>
            <div className="col ">
                {item.unlockRound}
            </div>
            <div className="col ">
                {getFinalUnlock(item)}
            </div>
            <div className="col">
                <Button type="primary" onClick={() => {
                    history("/FireLockView", {state: {
                            addr:item.lockAddr,
                            amount:item.lockAmount,
                            cliff:getCliff(item)
                        },})
                }}>
                    View
                </Button>
            </div>
        </div>
    }

    const handleSearchChange = async (e) => {
        setSearchData(e.target.value);
    }
    const getOwner = async ()=>{
        const owner = await handleFeeViewMethod("owner",[])
        setOwner(owner)
    }
    const getFee = async ()=>{
        const fee = await handleFeeViewMethod("getFee",[])
        setFee(fee/FireLockDecimal)
    }
    const  getAddress = async ()=>{
        const address = await handleFeeViewMethod("getAddress",[])
        setAddress(address)
    }

    const onChangePage = async (page) => {
        getData(page)
        await setCurPage(page)
    }
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const handleSearch = async () => {
        let data = await getSearchData(searchData)
        if(data.data&&data.data.allLockItems&&data.data.allLockItems.length>0){
            setSearchArr(data.data.allLockItems)
        }else{
            setSearchArr([])
        }
    }
    const getList = async ()=>{
        let data =await getFireLockList()
        let arr = data.data.allLockItems
        console.log(arr)
        let myArr = []
        setLockArr(arr)
        for(let i=0;i<arr.length;i++){
            if(arr[i].admin==state.account){
                myArr.push(arr[i])
            }
        }
        setMyFireLock(myArr)
    }
    const getData = async (page) => {

        getOwner()
        getFee()
        getAddress()
    }
    const createLock = async () => {
        setShowNotice(true)
    }
    useEffect(async () => {
        getList()
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getData()
    }, [state.account]);

    return (
        <FireLockStyle>
            {isShowNotice&&<CreateNotice closeDialog={()=>{setShowNotice(false)}} showNotice={()=>{setShowCreate(true)}}/>}
            {isShowCreate&&<CreateFireLock closeDialog={()=>{setShowCreate(false)}}/>}
            {isShowChange&&<ChangeFeeAddr fee={fee} address={address} closeDialog={()=>{setShowChange(false)}}/>}
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        FireLock List
                    </div>
                    <div className="header-box">
                        <div className="nav-list-box">
                            <div className="nav-list">
                                <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                                    setNav(1)
                                }}>
                                    All Lock
                                </div>
                                <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                                    setNav(2)
                                }}>
                                    My Lock
                                </div>
                            </div>
                        </div>
                        <img className="fresh-icon" onClick={getList} src={fresh} alt=""/>

                        <div className="search-container">
                            <form className="search-box">
                                <Input placeholder="title" allowClear value={searchData} onChange={handleSearchChange}/>
                                <Button className="search-btn"  onClick={handleSearch} type="primary">
                                    <SearchOutlined/>
                                </Button>
                            </form>
                        </div>
                        <div className="btn-box">
                            <Button className="search-btn"   onClick={()=>{setShowNotice(true)}} type="primary">
                                Create
                            </Button>
                            {
                                owner==state.account&&      <Button className="search-btn"  onClick={()=>{setShowChange(true)}} type="primary">
                                    Change
                                </Button>
                            }
                        </div>

                    </div>

                    <div className="fire-list-box">
                        <div className="list-header flex-box">
                            <div className="col">
                                No.
                            </div>
                            <div className="col">
                                Contract
                            </div>
                            <div className="col">
                                Title
                            </div>
                            <div className="col">
                                {/*Token*/}
                            </div>
                            <div className="col">
                                Lock-up Amount
                            </div>
                            <div className="col">
                                Lock Start
                            </div>
                            <div className="col">
                                Cliff Period
                            </div>
                            <div className="col">
                                Unlock<br/> Period
                            </div>
                            <div className="col">
                                Unlock <br/>Round
                            </div>
                            <div className="col">
                                Last Unlock End
                            </div>
                            <div className="col">
                                Detail
                            </div>
                        </div>
                        {
                            !searchData && activeNav == 1 && lockArr.map((item, index) => (
                                Row(item, index)
                            ))
                        }
                        {
                            activeNav == 2 && MyFireLock.map((item, index) => (
                                Row(item, index)
                            ))
                        }
                        {
                                searchArr.length>0 && activeNav == 1 && searchArr.map((item, index) => (
                                Row(item, index)
                            ))
                        }
                    </div>
                    <div className="pagination">
                        {
                            activeNav==1&& <Pagination current={curPage} showSizeChanger onShowSizeChange={handleShowSizeChange}
                                                       onChange={onChangePage} total={total}
                                                       defaultPageSize={pageCount}/>
                        }
                    </div>
                </div>
            </div>
        </FireLockStyle>
    )
}
export default FireLock
