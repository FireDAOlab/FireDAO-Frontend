import React, { useEffect, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Button, Pagination, Select, Descriptions, message, Form, List, Input, notification } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import { getFLMlistc, getSearchDatac, getFLMCountc } from "../../../graph/withdrawlist"
import CreateNotice from "../component/CreateNotice";
import develop from "../../../env"
import formatAddress from "../../../utils/publicJs"
import judgeStatus from "../../../utils/judgeStatus";
import { dealTime } from "../../../utils/timeUtil";
import user from "../../../imgs/user3.png"
// import BigNumber from 'bignumber.js';

import FLMAirdropStyle from './style';
import { useNavigate } from "react-router-dom";
// import { getFlmairdrop } from '../../../graph/flmairdrop';

const FlmAirdrop = (props) => {
  const [activeNav, setNav] = useState(1)
  const [form] = Form.useForm();

  let { state, dispatch } = useConnect();
  const [FlmArr, setFlmArr] = useState([])
  const [FlmAirdro, setFlmAirdro] = useState([])
  const [curPage, setCurPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)
  const [searchData, setSearchData] = useState("")
  const [balance, setBalance] = useState(0)
  const [withdraw, setWithdraw] = useState(0)
  const [getin, setGetin] = useState(0)
  const [getmac, setGetmac] = useState(0)
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
  const goPage = (url) => {
    history(url);
  }

  const handleDealMethod = async (name, params) => {
    let contractTemp = await getContractByName("FLMExchange", state.api,)
    if (!contractTemp) {
      openNotification("Please connect")
    }
    return dealMethod(contractTemp, state.account, name, params)
  }

  const handleViewMethod = async (name, params) => {
    let contractTemp = await getContractByName("FLMExchange", state.api,)
    if (!contractTemp) {
      openNotification("Please connect")
    }
    return await viewMethod(contractTemp, state.account, name, params)
  }

  const userStores = async () => {
    const res = await handleViewMethod("userStores", [state.account])
    setBalance(res.storeAmount)
    setWithdraw(res.claimedAmount)
    setTotal(Number(res.storeAmount) + Number(res.claimedAmount))
    // console.log(res);
  }
  const Claim = async () => {
    const res = await handleDealMethod("claim", [state.api.utils.toWei(form.getFieldValue().flmw.toString())])
    // console.log();
  }

  const getmax = () => {
    form.setFieldsValue({ "flmw": getmac })
  }

  useEffect(() => {
    if (!state.account) {
      return
    }
    userStores()
  }, [state.account])


  const Row = (item, index) => {

    return <div className="hh list-item" key={index} >
      <div className="xuhao col">
        {FlmArr.length - index}
      </div>
      {/* <div className="pd col">
        {item.pid}
       
      </div>
      <div className="zchang col">
        
        <p>{item.username}</p>
      </div>
      <div className="fd col">

        <p>{ }</p>
      </div> */}
      <div className="address col">
        {item._user?item._user.substr(0,7)+"..."+item._user.substr(item._user.length-4,item._user.length):""}
        
      </div>
      <div className="zchang col">
        {item._amount}
      </div>
      {/* <div className="time col">

      </div> */}

      
    </div>
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
    let data = await getSearchDatac(searchData)
    // console.log(data.data)

    if (data.data && data.data.claims && data.data.claims.length > 0) {
      setSearchArr(data.data.claims)
    } else {
      setSearchArr([])
    }
  }

  const getList = async () => {
    let data = await getFLMlistc()
    let arr = data.data.claims
    console.log(arr)
    let myArr = []
    setFlmArr(arr)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].admin == state.account) {
        myArr.push(arr[i])
      }
    }
    setFlmAirdro(myArr)
  }


  const getData = async (page) => {
    
  }

  const createList = async () => {
    setShowNotice(true)
  }
  useEffect(async () => {
    getList()
    let judgeRes = await judgeStatus(state)
    if (!judgeRes) {
      return
    }
    handleSearch()
    getData()
  }, [state.account]);
  return (
    <FLMAirdropStyle>
      <div className="panel-box">
        <div className="panel-container">
          <div className="panel-title">
            <div className='title'>
              <p>FLM Airdrop</p>
            </div>
            <div className='lv'>
              <Button className='lvleft' onClick={() => goPage("/FLMAirdropLv1")}>
                <img src={user}></img>
                <span>Lv1</span>
              </Button>
              <Button className='lvright' onClick={() => goPage("/FLMAirdropLv2")}>
                <img src={user}></img>
                <span>Lv2</span>
              </Button>
            </div>
          </div>
          <div className='FLMup'>
            <div className='flmleft'>
              <p className='pool-wz'>FLM Airdrop Pool</p>
              <div>
                <span className='pool-zhi'>{total}</span>
              </div>
              <div className='pool-shu'>
                <div >
                  <p className='pool-wz'>Total</p>
                  <p className='pool-wz2'>{total}</p>
                </div>
                <div className='pool-wz3'>
                  <p className='pool-wz'>Withdrawn</p>
                  <p className='pool-wz2'>{withdraw}</p>
                </div>
                <div className='pool-wz3'>
                  <p className='pool-wz'>Balance</p>
                  <p className='pool-wz2'>{balance}</p>
                </div>
              </div>
            </div>
            <div className='flmright'>
              {/* <p className='pool-wz'>Withdraw</p> */}
              <div className='maxzhi'>
                <Form form={form} >
                  {/* <p className='pool-wz'></p> */}
                  <Form.Item label="Withdraw" name="flmw">
                    <Input className='maxleft' name="getin" value={getin} onChange={e => setGetin(e.target.value)} />

                  </Form.Item>
                </Form>
                <Button className='maxright' type="primary" onClick={() => getmax()}>
                  <span className="maxwz">MAX</span>
                </Button>
              </div>
              <Button className='withdraw' type='primary' onClick={() => {
                Claim()
              }}>
                <p className='withwz'>Withdraw</p>
              </Button>
            </div>
          </div>
        </div>
        <div className='panel-container2'>
          <div className='panel'>
            <p className='panelwz'>Withdraw Records</p>

            <div className="nav-list-box ">
              <div className=" fire-nav-list">
                <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                  setNav(1)
                }}>
                  All Records
                </div>
                <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                  setNav(2)
                }}>
                  My Records
                </div>
              </div>
            </div>
          </div>
          <div className='records fire-list-box'>
            <div className='lb list-header'>
              <div className='xuhao col'>No.</div>
              {/* <div className='pd col'>PID</div>
              <div className='zchang col'>Username</div>
              <div className='fd col'>FID</div> */}
              <div className='address col'>Address</div>
              <div className='zchang col'>Amount(s)</div>
              {/* <div className='sj col'>Time(UTC)</div> */}
            </div>
            {
              !searchData && activeNav == 1 && FlmArr.map((item, index) => (

                Row(item, index)
              ))
            }
            {
              activeNav == 2 && FlmAirdro.map((item, index) => (
                Row(item, index)
              ))
            }
            {
               searchData.length>0 && activeNav == 1 && searchData.map((item, index) => (
                Row(item, index)
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
    </FLMAirdropStyle>
  )
}

export default FlmAirdrop