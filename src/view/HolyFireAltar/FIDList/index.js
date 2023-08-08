import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Pagination,Card, Button, Descriptions, message, Form, List, Input, notification } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import search from '../../../imgs/search.png'
import { getIpfs } from "../../../utils/ipfsApi";
import StyleBox from "./style"
const FIDList = (props) => {

    const [activeNav, setNav] = useState(1)
    const [form] = Form.useForm();

    let { state, dispatch } = useConnect();
    const [FIDARR, setFIDARR] = useState([])
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [searchData, setSearchData] = useState("")
    const [total, setTotal] = useState(0)
    const [searchArr, setSearchArr] = useState(false)
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

    const Row = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {/* {item.pid} */}
            </div>
        </div>
    }


    const getData = async () => {
        const length = await handleViewMethod("getUserHaveFIDLength", [])
        let arr = []
        for (let i = 0; i < length; i++) {
            let address = await handleViewMethod("UserHaveFID", [i])
            const soulAccount = await handleViewMethod("getSoulAccount", [address])
            let fid = await handleViewMethod("UserFID", [address])
            arr.push({
                fid,
                soulAccount
            })
        }
        dispatch({ type: "SET_PidArr", payload: arr })
    }
    const onChangePage = async (page) => {
        getData(page)
        await setCurPage(page)
    }
    const handleSearchChange = async (e) => {
        setSearchData(e.target.value);
    }
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const handleSearch = async () => {

    }
    useEffect(() => {
        getData()
    }, [state.account]);


    return (
        <StyleBox>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        FID List
                    </div>
                    <div className="header-box">
                        <div className="nav-list-box">
                            <div className=" fire-nav-list">
                                <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                                    setNav(1)
                                }}>
                                    All FID
                                </div>
                                <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                                    setNav(2)
                                }}>
                                    My FID
                                </div>
                            </div>
                        </div>
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
                                <Input style={{ borderRadius: '50px' }} allowClear value={searchData} onChange={handleSearchChange} placeholder="Search" />
                                <Button className="search-btn" style={{ width: '45px', borderRadius: '45px',height:'40px' }} onClick={handleSearch} type="primary">
                                    <img src={search} style={{ width: '25px', margin: '0px -10px' }} />
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="fire-list-box">
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
                            <div className="col">
                                Soul Contract
                            </div>
                            <div className="col">
                                SBT-001
                            </div>
                            <div className="col">
                                SBT-002
                            </div>
                            <div className="col">
                                SBT-003
                            </div>
                            <div className="col">
                                SBT-004
                            </div>
                            <div className="col">
                                SBT-005
                            </div>
                            <div className="col">
                                SBT-006
                            </div>
                            <div className="col">
                                Reputation
                            </div>
                            {/* {
                                !searchData && activeNav == 1 && state.PidArr.map((item, index) => (
                                    Row(item, index)
                                ))
                            } */}
                            {
                                activeNav == 1 && FIDARR.map((item, index) => (
                                    index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                    Row(item, index)
                                ))
                            }
                            {
                                searchArr.length > 0 && searchArr.map((item, index) => (
                                    Row(item, index)
                                ))
                            }
                        </div>

                        {
                            state.PidArr.map(item => (
                                <div className="list-item ">
                                    <div className="col pid">
                                    
                                    </div>
                                    <div className="col fid">
                                        {item.fid}
                                    </div>
                                    <div className="col">
                                    
                                    </div>
                                    <div className="col address">
                                        {item.soulAccount}
                                    </div>
                                    <div className="col">
                                        
                                    </div>
                                    <div className="col">
                                    
                                    </div>
                                    <div className="col">
                                    
                                    </div>
                                    <div className="col">
                                     
                                    </div>
                                    <div className="col">
                                    
                                    </div>
                                    <div className="col">
                                    
                                    </div>
                                    <div className="col">
                                    
                                    </div>
                                    <div className="col">
                                    
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                    <div className="pagination">
                        {
                            activeNav == 1 && <Pagination current={curPage} showSizeChanger onShowSizeChange={handleShowSizeChange}
                                                          onChange={onChangePage} total={total}
                                                          defaultPageSize={pageCount} />
                        }
                    </div>
                </div>
            </div>
        </StyleBox>
    )
}
export default FIDList
