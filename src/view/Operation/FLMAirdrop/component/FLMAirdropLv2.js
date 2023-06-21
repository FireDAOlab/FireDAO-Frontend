import React, { useEffect, useState } from 'react';
import { useConnect } from '../../../../api/contracts';
import addressMap from "../../../../api/addressMap";
import { getContractByName, getContractByContract } from '../../../../api/connectContract';
import { dealMethod, viewMethod } from "../../../../utils/contractUtil"
import { useNavigate } from "react-router-dom";
import { Button, Pagination, Select, Descriptions, message, Form, List, Input, notification } from 'antd';
import FLMAirdropLv2Style from './FLMAirdropLv2Style';


const FLMAirdropLv2 = (props) => {
  const [activeNav, setNav] = useState(1)

  let { state, dispatch } = useConnect();
  const [curPage, setCurPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)
  const [searchData, setSearchData] = useState("")
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
              console.log('');
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

  const addWhiteList = async ()=>{
    const res=await handleDealMethod("addWhiteList",[[state.account],[0]])
    console.log(res);
  }

  useEffect(() => {
    if (!state.account) {
        return
    }

}, [state.account])
  const Row = (item, index) => {
    return <div className="hh" key={index} >
      <div className="xuhao">
        {/* {item.pid} */}
        {(index + 1)}
      </div>
      <div className="pd">
        <p>1234</p>
      </div>
      <div className="zchang">
        {/* {item.username} */}
        <p>FireSeed</p>
      </div>
      <div className="fd">
        {/* {item.fd} */}
        <p>1234</p>
      </div>
      <div className="address">
        {/* <a href={develop .ethScan + "address/" + item.account} target="_blank">
                {item.account.substr(0, 6) + "..." + item.account.substr(item.account.length - 3, item.account.length)}
            </a> */}
        <p>0x21641….B60d</p>
      </div>
      <div className="zchang">
        {/* {item.username} */}
        3000
      </div>
      <div className="zchang">
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
        <FLMAirdropLv2Style>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        <div className='title'>
                            <p>Set Whitelist</p>
                        </div>
                        <div className='allrewz'>
                            <Button className='allwz'  onClick={()=>{addWhiteList()}}>
                                <p>Add Whitelist</p>
                            </Button >
                            <Button className='rewz' onClick={()=>{}}>
                                <p>Delete</p>
                            </Button>
                        </div>
                    </div>


                    <div className='records'>
                        <div className='lb'>
                            <div className='xuhao'>No.</div>
                            <div className='pd'>PID</div>
                            <div className='zchang'>Username</div>
                            <div className='fd'>FID</div>
                            <div className='address'>Address</div>
                            <div className='zchang'>Amount(s)</div>
                            <div className='zchang'>Time(UTC)</div>
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
        </FLMAirdropLv2Style>
    )


}
export default FLMAirdropLv2