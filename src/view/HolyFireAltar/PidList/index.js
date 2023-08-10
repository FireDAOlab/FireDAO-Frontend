import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import listIcon from "../../../imgs/list-icon.webp"
import {SearchOutlined} from "@ant-design/icons";
import search from '../../../imgs/search.png'
import {getIpfs} from "../../../utils/ipfsApi";
import {getPidList, getPidCount,getSearchData} from "../../../graph/pidlist";
import develop from "../../../env"
import {useNavigate} from "react-router-dom";
import fresh from "../../../imgs/fresh_icon.webp";
import StyleBox from "./style"
const PidList = (props) => {
    
    const [activeNav, setNav] = useState(1)
    let {state, dispatch} = useConnect();
    const [MYPIDARR, setMYPIDARR] = useState([])
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [searchData, setSearchData] = useState("")
    const [total, setTotal] = useState(0)
    const [searchArr, setSearchArr] = useState(false)
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
    const Row = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {item.pid}
            </div>
            <div className="col fid">
                0
            </div>
            <div className="col">
                {item.username}
            </div>

            <div className="col address">
                <a  href={develop.ethScan + "address/" + item.account} target="_blank">
                    {item.account&&<span>{item.account.substr(0, 7) + "..." + item.account.substr(item.account.length - 3, item.account.length)}</span>}
                </a>
            </div>
           
            <div className="col">
                BTC Sector
            </div>
            <div className="col">
                Only discuss
            </div>
            <div className="col">
                0
            </div>
            <div className="col">
                0
            </div>
             {/* <div className="col link">

                <a href={"https://twitter.com/" + (item.Twitter ? item.Twitter : "")}
                   target="_blank">
                    {item.Twitter ? item.Twitter : "——"}
                </a>
            </div>
            <div className="col link">
                <a href={"https://t.me/" + (item.telegram ? item.telegram : "")}
                   target="_blank">
                    {item.telegram ? item.telegram : "——"}
                </a>
            </div> */}

            {/* <div className="col">
                <a href={develop.forum + "/index.php?action=profile;u=" + (item.pid ? item.pid : "0")}
                   target="_blank">
                    {item.pid}
                </a>
            </div> */}
            {/* <div className="col">
                <Button type="primary" onClick={() => {
                    history("/Passport", {state: item.account})
                }}>
                    View
                </Button>
            </div> */}
        </div>
    }
    const getData = async (page) => {
        let count = parseInt((await getPidCount()).data.registers[0].pid)
        setTotal(count)

        if(!page){
            page=1
        }
        let pidListRes = await getPidList(pageCount, (page-1)*pageCount)

        let arr = pidListRes.data.registers
        let tempArr = []

        arr.sort((a, b) => {
            return b.pid - a.pid
        })

        dispatch({type: "SET_PidArr", payload: arr})


        for (const item of arr) {
            const info = getIpfs(item.information);
            const mergedItem = {...item, ...await info};
            tempArr.push(mergedItem);

        }
        dispatch({type: "SET_PidArr", payload: tempArr})
    }
    const handleSearchChange = async (e) => {
        setSearchData(e.target.value);
    }
    const onChangePage = async (page) => {
        getData(page)
        await setCurPage(page)
    }
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const handleSearch = async () => {
        let data = await getSearchData(searchData,state.api)
        setSearchArr(data.data.registers)
    }
    useEffect(() => {
        getData()
    }, []);
    useEffect(async () => {

        try{
            let myPid = await getSearchData(state.account,state.api)
            setMYPIDARR([{
                ...myPid.data.registers[0],
                ...getIpfs(myPid.data.registers[0].information)
            }])
        }catch (e){
            console.log(e)
        }
    }, [state.account]);

    return (
        <StyleBox>
            <div className="panel-box" >
                <div className="panel-container" >
                    <div className="panel-title">
                        PID List
                    </div>
                    <div className="header-box">
                        <div className="nav-list-box">
                            <div className=" fire-nav-list">
                                <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                                    setNav(1)
                                }}>
                                    All PID
                                </div>
                                <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                                    setNav(2)
                                }}>
                                    My PID
                                </div>
                            </div>
                        </div>
                        {/* <img className="fresh-icon" onClick={getData} src={fresh} alt=""/> */}

                        <div className="search-container">
                            <form className="search-box">
                                {/* <Select
                                        defaultValue="PID"
                                        style={{width: 120}}
                                        options={[
                                            {
                                                value: '1',
                                                label: 'PID',
                                            },
                                            {
                                                value: '2',
                                                label: 'FID',
                                            },

                                        ]}
                                    /> */}
                                <Input style={{borderRadius:'50px'}} allowClear value={searchData} onChange={handleSearchChange}  placeholder="Search"/>
                                <Button className="search-btn" style={{ width:'45px',borderRadius:'45px',height:'40px'}}  onClick={handleSearch} type="primary">
                                    <img src={search}  style={{width:'25px',margin:'0px -10px'}}/>
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="fire-list-box">
                        <div className="list-header flex-box">
                            <div className="col">
                                PID
                                {/* <img src={listIcon} alt="" className="list-icon"/> */}
                            </div>
                            <div className="col">
                                FID
                                {/* <img src={listIcon} alt="" className="list-icon"/> */}
                            </div>
                            <div className="col">
                                Username
                            </div>
                            <div className="col">
                                Wallet Address
                            </div>
                           
                            <div className="col">
                                Forum Profile
                            </div>
                            <div className="col">
                                Forum Position
                            </div>
                            <div className="col">
                                Forum Posts
                                {/* <img src={listIcon} alt="" className="list-icon"/> */}
                            </div>
                            <div className="col">
                                Forum Merits
                                {/* <img src={listIcon} alt="" className="list-icon"/> */}
                            </div>
                             {/* <div className="col">
                                Twitter
                            </div>
                            <div className="col">
                                Telegram
                            </div>
                            <div className="col">
                                Forum ID
                            </div>*/}
                            {/* <div className="col">
                                More
                            </div> */}
                        </div>
                        {
                            !searchData && activeNav == 1 && state.PidArr.map((item, index) => (
                                Row(item, index)
                            ))
                        }
                        {
                            activeNav == 2 && MYPIDARR.map((item, index) => (
                                index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                Row(item, index)
                            ))
                        }
                        {
                            searchArr.length>0 && searchArr.map((item, index) => (
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
        </StyleBox>
    )

}
export default PidList
