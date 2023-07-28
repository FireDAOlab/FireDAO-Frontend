import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { useConnect } from "../../api/contracts";
import { Pagination,Card, Button, Descriptions, message, Form, List, Input, notification } from 'antd';
import { getContractByName, getContractByContract } from "../../api/connectContract";
import { dealMethod, viewMethod } from "../../utils/contractUtil"
import search from '../../imgs/search.png'
import { getIpfs } from "../../utils/ipfsApi";

const FIDList = (props) => {

    const [activeNav, setNav] = useState(1)
    const [form] = Form.useForm();
    const FIDList = styled.div`

@media screen and (min-width: 1500px) {
    .panel-container {
    padding:30px 4.6%;
        .header-box {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .nav-list-box {
            margin: 2em 0;
            display: flex;
            width: 90%;
            .fire-nav-list{
                height: 45px;
                width: 260px;
                margin: 0;
            }
          }

          .search-container {
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 50px;
              border: 1px solid #333333;
              padding: 2px;
              .ant-input-affix-wrapper{
                    line-height:2;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }

    }

    .fire-list-box {
        .list-header {
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }

        .col {
          text-align: left;

          &:nth-child(1) {
            min-width: 5%;
          }
          &:nth-child(2) {
            min-width: 5%;
          }
          &:nth-child(3) {
            min-width: 9%;
          }
          &:nth-child(4) {
            min-width: 13%;
          }
          &:nth-child(5) {
            min-width: 12%;
          }
          &:nth-child(6) {
            min-width: 8%;
          }
          &:nth-child(7) {
            min-width: 8%;
          }
          &:nth-child(8) {
            min-width: 8%;
          }
          &:nth-child(9) {
            min-width: 8%;
          }
          &:nth-child(10) {
            min-width: 8%;
          }
          &:nth-child(11) {
            min-width: 8%;
          }
          &:nth-child(12) {
            min-width: 10%;
          }
        }
    }
    .list-item {
            padding: 0.5em 1em;
          .col {
            overflow: hidden;
            padding-left: 0.5%;
            //text-overflow: ellipsis;

          }
        }
}
 

@media screen and (max-width: 1500px) {


    .panel-container {
    padding:30px 4.6%;
        .header-box {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .nav-list-box {
            margin: 2em 0;
            display: flex;
            width: 90%;
            .fire-nav-list{
                height: 45px;
                width: 260px;
                margin: 0;
            }
          }

          .search-container {
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 50px;
              border: 1px solid #333333;
              padding: 2px;
              .ant-input-affix-wrapper{
                    line-height:2;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }

    }

    .fire-list-box {
        .list-header {
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }

        .col {
          text-align: left;
font-size:13px;
          &:nth-child(1) {
            min-width: 4%;
          }
          &:nth-child(2) {
            min-width: 4%;
          }
          &:nth-child(3) {
            min-width: 9%;
          }
          &:nth-child(4) {
            min-width: 13%;
          }
          &:nth-child(5) {
            min-width: 12%;
          }
          &:nth-child(6) {
            min-width: 8%;
          }
          &:nth-child(7) {
            min-width: 8%;
          }
          &:nth-child(8) {
            min-width: 8%;
          }
          &:nth-child(9) {
            min-width: 8%;
          }
          &:nth-child(10) {
            min-width: 8%;
          }
          &:nth-child(11) {
            min-width: 8%;
          }
          &:nth-child(12) {
            min-width: 10%;
          }
        }
    }
    .list-item {
            padding: 0.5em 1em;
          .col {
            overflow: hidden;
            padding-left: 0.5%;
            //text-overflow: ellipsis;

          }
        }
}
    .pagination {
        text-align: center;
      }

    `
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
        <FIDList>
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
                                activeNav == 2 && FIDARR.map((item, index) => (
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
                                    <div className="col">
                                        {item.fid}
                                    </div>
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                    <div className="col">
                                        {item.soulAccount}
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
        </FIDList>
    )
}
export default FIDList
