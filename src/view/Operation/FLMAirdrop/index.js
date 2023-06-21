import React, { useEffect, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Button, Pagination, Select, Descriptions, message, Form, List, Input, notification } from 'antd';
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil"
import user from "../../../imgs/user3.png"
// import BigNumber from 'bignumber.js';

import FLMAirdropStyle from './style';
import { useNavigate } from "react-router-dom";
// import { getFlmairdrop } from '../../../graph/flmairdrop';

const FlmAirdrop = (props) => {
  const [activeNav, setNav] = useState(1)
  const [form] = Form.useForm();

  let { state, dispatch } = useConnect();
  const [curPage, setCurPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)
  const [searchData, setSearchData] = useState("")
  const [balance, setBalance] = useState(0)
  const [withdraw, setWithdraw] = useState(0)
  const [getin, setGetin] = useState(0)
  const [getmac, setGetmac] = useState(0)
  const [total, setTotal] = useState(0)
  const [MYPIDARR, setMYPIDARR] = useState([])
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
  // const handleUserViewMethod = async (name, params) => {
  //   let contractTemp = await getContractByName("user", state.api,)
  //   if (!contractTemp) {
  //     openNotification("Please connect")
  //   }
  //   return await viewMethod(contractTemp, state.account, name, params)
  // }
  const userStores = async () => {
    const res = await handleViewMethod("userStores", [state.account])
    setBalance(res.storeAmount)
    setWithdraw(res.claimedAmount)
    setTotal(Number(res.storeAmount) + Number(res.claimedAmount))
    console.log(res);
  }
  const Claim = async () => {
    const res = await handleDealMethod("claim", [state.api.utils.toWei(form.getFieldValue().flmw.toString())])
    // console.log();
  }

const getmax=()=>{
  form.setFieldsValue({"flmw":getmac})
  // console.log(form);
}
  // const managerList=async ()=>{
  //   const res = await handleViewMethod("managerList",[state.account])
  //   console.log(res);
  // }

  useEffect(() => {
    if (!state.account) {
      return
    }
    userStores()
  }, [state.account])


  const Row = (item, index) => {
    
    return <div className="hh list-item" key={index} >
      <div className="xuhao col">
        {/* {item.pid} */}
        {(index + 1)}
      </div>
      <div className="pd col">
        {item.pid}
        <p>1234</p>
      </div>
      <div className="zchang col">
        {item.username}
        <p>FireSeed</p>
      </div>
      <div className="fd col">
        {/* {item.fd} */}
        <p>1234</p>
      </div> 
      <div className="address col">
        {/* <a href={develop .ethScan + "address/" + item.account} target="_blank">
                {item.account.substr(0, 6) + "..." + item.account.substr(item.account.length - 3, item.account.length)}
            </a> */}
        <p>0x21641….B60d</p>
      </div>
      <div className="zchang col">
        {/* {item.username} */}
        3000
      </div>
      <div className="sj col">
        {/* {item.username} */}
        January 01, 2023 13:44
      </div>

      {/* <div className="col">
            <Button type="primary" onClick={() => {
                history("/Passport", {state: item.account})
            }}>
                View
            </Button>
        </div> */}
    </div>
  }


  const handleSearchChange = async (e) => {
    // setSearchData(e.target.value);
  }
  const onChangePage = async (page) => {
    // getData(page)
    // await setCurPage(page)
  }
  const handleShowSizeChange = async (page, count) => {
    // setPageCount(count)
  }
  const handleSearch = async () => {
    // let data = await getSearchData(searchData,state.api)
    // setSearchArr(data.data.registers)
  }

  
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
                <Button className='maxright' type="primary" onClick={()=>getmax()}>
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

            <div className="nav-list-box">
              <div className="nav-list">
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
              <div className='pd col'>PID</div>
              <div className='zchang col'>Username</div>
              <div className='fd col'>FID</div>
              <div className='address col'>Address</div>
              <div className='zchang col'>Amount(s)</div>
              <div className='sj col'>Time(UTC)</div>
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
              searchArr.length > 0 && searchArr.map((item, index) => (
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