import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { useConnect } from "../../api/contracts";
import { Pagination, Card, Button, Select, Descriptions, message, Form, List, Input, notification } from 'antd';
import { SendOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import { getContractByName, getContractByContract } from "../../api/connectContract";
import { dealMethod, viewMethod } from "../../utils/contractUtil"
import passport from "../../imgs/long.png"
import { useNavigate } from "react-router-dom";
import user3 from "../../imgs/user3.png";
import fireseed from "../../imgs/FireSeed@2x.webp"
import judgeStatus from "../../utils/judgeStatus.js"
import { getPasslist } from "../../graph/myFireseed";

let logs = []

const LockList = (props) => {
  const [form] = Form.useForm();
  const LockList = styled.div`
      width: 100%;
      .ant-form-item-control-input{
    border-radius: 25px;
 }
 .ant-select:not(.ant-select-customize-input) {
        .ant-select-selector{
            border-radius:25px;
        }
    }
    .ant-input{
        border-radius:25px;
    }
    @media screen and (min-width: 1500px) {
        .ant-btn {
        font-weight: 600;
        font-size:16px;
      }
        .ant-form-item-label>label{
    color: white;
    font-size:16px;
 }
 .flex-box{
    border-radius: 25px;
    width: 100%;
 }
      .panel-title{
  font-size:30px;
}
.panel-container1{
  border: none;
  padding: 3em 0em;
  position: relative;
background: rgba(36, 27, 27, 1);
width: 100%;
  .tp{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .tpitem{
      
/* height: 300px; */
      /* text-align:center; */
      width: 24%;
background: #140E0E;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.1); 
      text-align: center;

      img{
       margin-top:10px;
        width: 90%;
      }
      p{
        text-align: left;
        margin: 10px;
        font-size: 20px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
      }
    }
  }
}
.describe{
    width: 40%;
    text-align:center;
    background-color: #1A1414;
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
margin: 4em auto;
margin-bottom: 0em;
}

      .form-value{
        padding: 0 10px;
      }
      .panel-box {
        margin: 0 auto;

        .panel-container {
          width: 100%;
        }
      }

      .send-fireseed {
        margin: 20px 0px;
        .ant-form-item {
          margin: 0em auto;
          width: 92% !important;
          display: flex;

        }

        .send-button {
          width: 92%;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          margin: 1em 0em;
          height: 40px;
          /* margin-left: calc(50% - 100px); */
        }

      }


      .nav-list-box {
        margin: 2em 0;
        display: flex;
        width: 100%;
      }

      .fire-nav-list{
        width: 48%;
        height: 45px;
      }
      /* .nav-list { */

        /* display: flex;
        background: #3F3535;
        border-radius: 10px;
        border: 1px solid #333333;
        padding: 3px; */

        .nav-item {
          width: 23%;
          cursor: pointer;
          /* padding: 10px 30px; */
          border-radius: 25px;
          /* margin-right: 5px; */
          font-size: 16px;
          font-weight: bold;
          &.active {
            
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
      /* } */
      .ant-form-item-row {
    width: 100%;
    margin: 0.5em 0em;
      }
      .ant-form-horizontal .ant-form-item-label{
       width: 100%; 
        text-align:left; 
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .list-item {
          cursor: pointer;
          padding: 10px;
          margin-top: 2em;
          margin-right: 2.5%;
          background: #3F3535;
          border-radius: 10px;
          border: 1px solid #7F6868;
          width: 23%;

          &:nth-child(4n) {
            margin-right: 0;
          }

          .img {
            width: 100%;
          }

          .item-info {
            margin-top: 1em;
            display: flex;
            justify-content: space-between;

            .id {
              font-size: 16px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 19px;
            }

            .number-box {
              background: rgba(#DD3642, 0.5);

              .number {
                text-align: center;
                width: 60px;
                height: 24px;
                box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
                border-radius: 10px;
                border: 1px solid;
                border-image: linear-gradient(316deg, rgba(221, 54, 66, 1), rgba(255, 192, 44, 1)) 1 1;
              }
            }

          }
        }
      }

      .content2 {
        margin: 2em auto;
display: flex;
justify-content:space-between;
width: 100%;

        .myrecommend {
            height: 150px;
            background: #1A1414;
            width: 48%;
          align-items: center;
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
padding: 1.5em;
          .name {
            font-size: 16px;
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: #8A8080;
            line-height: 26px;
          }

          .value {
            margin: 1.5em 0em;
            line-height: 40px;
            padding: 0 10px;
            width: 100%;
            justify-content:space-between;
            background: rgba(205,158,87,0.1);
            color: #CD9E57;
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
          }
        }
.myteamsize{
    padding: 2em;
    height: 150px;
    background: #1A1414;
    width: 48%;
    border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
        .box-title {
            font-size: 16px;
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: #8A8080;
            line-height: 26px;
        }

        .refer-list {
          display: flex;
justify-content: space-between;
          .refer-item {
            margin-right: 10px;
            text-align: center;
            margin-top: 0.2em;
            
            .name {
              line-height: 40px;
              margin-top: 10px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 22px;
            }

            .value {
              font-size: 14px;
              font-family: Krungthep;
              line-height: 50px;
              color: #fff;
              text-align:left;
            }

            
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
        }

        .col {
          text-align: left;
          align-items: center;
          &:nth-child(1) {
            width: 5%;
          }

          &:nth-child(2) {
            width: 9%;
          }

          &:nth-child(3) {
            width: 5%;
          }

          &:nth-child(4) {
            width: 5%;
          }

          &:nth-child(5) {
            width: 10%;
          }

          &:nth-child(6) {
            width: 16%;
          }

          &:nth-child(7) {
            width: 14%;
          }

          &:nth-child(8) {
            width: 14%;
          }

          &:nth-child(9) {
            width: 13%;
            text-align: center;

          }

          &:nth-child(10) {
            width: 8%;
            text-align: center;
          }

          &:nth-child(11) {
            width: 8%;
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

        .list-item {
            padding: 0.5em 1em;
          .col {
            overflow: hidden;
            padding-left: 0.5%;
            
            //text-overflow: ellipsis;

          }
          .no{
            color: #FE6D46;
          }
          .pid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .fid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
            margin-right:20px;
          }
          .address {
            a{
                color: rgba(205, 158, 87, 1);
            }
               
            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            border-radius:25px;
            width: 130px;
            margin-right:40px;
           
          }
        }
    }

    }

    @media screen and (max-width: 1500px) {
        .ant-btn {
        font-weight: 600;
        font-size:14px;
      }

        .ant-form-item-label>label{
    color: white;
    font-size:15px;
 }
 .flex-box{
    border-radius: 25px;
    width: 100%;
 }
      .panel-title{
  font-size:30px;
}
.panel-container1{
  border: none;
  padding: 3em 0em;
  position: relative;
background: rgba(36, 27, 27, 1);
width: 100%;
  .tp{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .tpitem{
      
/* height: 300px; */
      /* text-align:center; */
      width: 24%;
background: #140E0E;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.1); 
      text-align: center;

      img{
       margin-top:10px;
        width: 90%;
      }
      p{
        text-align: left;
        margin: 10px;
        font-size: 20px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
      }
    }
  }
}
.describe{
    width: 55%;
    text-align:center;
    background-color: #1A1414;
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
margin: 4em auto;
margin-bottom: 0em;
}

      .form-value{
        padding: 0 10px;
      }
      .panel-box {
        margin: 0 auto;

        .panel-container {
          width: 100%;
        }
      }

      .send-fireseed {
        margin: 20px 0px;

        .ant-form-item {
          margin: 0em auto;
          width: 92% !important;
          display: flex;

        }

        .send-button {
          width: 92%;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          margin: 1em 0em;
          height: 40px;
         
          /* margin-left: calc(50% - 100px); */
        }

      }
 

      .nav-list-box {
        margin: 2em 0;
        display: flex;
        width: 100%;
      }

      .fire-nav-list{
        width: 73%;
        height: 45px;
    
      }
        .nav-item {
          cursor: pointer;
          width: 23%;
          border-radius: 25px;
          font-size: 16px;
          font-weight: bold;
          &.active {
            
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
      .ant-form-item-row {
    width: 100%;
    margin: 0.2em 0em;
      }
      .ant-form-horizontal .ant-form-item-label{
       width: 100%; 
        text-align:left; 
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .list-item {
          cursor: pointer;
          padding: 10px;
          margin-top: 2em;
          margin-right: 2.5%;
          background: #3F3535;
          border-radius: 10px;
          border: 1px solid #7F6868;
          width: 23%;

          &:nth-child(4n) {
            margin-right: 0;
          }

          .img {
            width: 100%;
          }

          .item-info {
            margin-top: 1em;
            display: flex;
            justify-content: space-between;

            .id {
              font-size: 16px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 19px;
            }

            .number-box {
              background: rgba(#DD3642, 0.5);

              .number {
                text-align: center;
                width: 60px;
                height: 24px;
                box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
                border-radius: 10px;
                border: 1px solid;
                border-image: linear-gradient(316deg, rgba(221, 54, 66, 1), rgba(255, 192, 44, 1)) 1 1;
              }
            }

          }
        }
      }

      .content2 {
        margin: 2em auto;
display: flex;
justify-content:space-between;
width: 100%;

        .myrecommend {
            height: 150px;
            background: #1A1414;
            width: 48%;
          align-items: center;
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
padding: 1.5em;
          .name {
            font-size: 15px;
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: #8A8080;
            line-height: 26px;
          }

          .value {
            font-size:13px;
            margin: 1.5em 0em;
            line-height: 40px;
            padding: 0 10px;
            width: 100%;
            justify-content:space-between;
            background: rgba(205,158,87,0.1);
            color: #CD9E57;
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
          }
        }
.myteamsize{
    padding: 2em;
    height: 150px;
    background: #1A1414;
    width: 48%;
    border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
        .box-title {
            font-size: 15px;
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: #8A8080;
            line-height: 26px;
        }

        .refer-list {
          display: flex;
justify-content: space-between;
          .refer-item {
            margin-right: 10px;
            text-align: center;
            margin-top: 0.2em;
            
            .name {
              line-height: 40px;
              margin-top: 10px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 22px;
            }

            .value {
              font-size: 14px;
              font-family: Krungthep;
              line-height: 50px;
              color: #fff;
              text-align:left;
            }

            
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
        }

        .col {
            font-size:13px;
          text-align: left;
          align-items: center;
          &:nth-child(1) {
            width: 5%;
          }

          &:nth-child(2) {
            width: 9%;
          }

          &:nth-child(3) {
            width: 5%;
          }

          &:nth-child(4) {
            width: 5%;
          }

          &:nth-child(5) {
            width: 10%;
          }

          &:nth-child(6) {
            width: 16%;
          }

          &:nth-child(7) {
            width: 14%;
          }

          &:nth-child(8) {
            width: 14%;
          }

          &:nth-child(9) {
            width: 13%;
            text-align: center;

          }

          &:nth-child(10) {
            width: 8%;
            text-align: center;
          }

          &:nth-child(11) {
            width: 8%;
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
        .list-item {
            padding: 0.5em 1em;
          .col {
            overflow: hidden;
            padding-left: 0.5%;
            
            //text-overflow: ellipsis;

          }
          .no{
            color: #FE6D46;
          }
          .pid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .fid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
            margin-right:20px;
          }
          .address {
            a{
                color: rgba(205, 158, 87, 1);
            }
               
            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            border-radius:25px;
            width: 130px;
            margin-right:40px;
           
          }
        }
    }
    }

    .pagination {
        text-align: center;
      }



    `
  let { state, dispatch } = useConnect();
  const [curPage, setCurPage] = useState(1)
  const [pageCount, setPageCount] = useState(20)
  const [curId, setID] = useState([])
  const [logArr, setLogArr] = useState([])
  const [level2Arr, setLevel2Arr] = useState([])
  const [level3Arr, setLevel3Arr] = useState([])
  const [total, setTotal] = useState(0)
  const [level1, setLevel1] = useState(0)
  const [level2, setLevel2] = useState(0)
  const [level3, setLevel3] = useState(0)
  const [isAdmin, setIsadmain] = useState("")
  const [hasTransfer, setHasTransfer] = useState(false)
  const history = useNavigate();
  const [activeNav, setNav] = useState(1)
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
    let contractTemp = await getContractByName("MintFireSeed", state.api,)
    if (!contractTemp) {
      openNotification("Please connect")
    }
    return await viewMethod(contractTemp, state.account, name, params)
  }
  const getData = async (page) => {

  }

  const onChangePage = async (page) => {
    getData(page)
    await setCurPage(page)
  }
  const handleShowSizeChange = async (page, count) => {
    setPageCount(count)
  }
  const myClass = async () => {
    const address = await handleViewMethod("upclass", [state.account])
    const recommenderLength = await handleViewMethod("recommenderNumber", [state.account])
    let recommenderInfoArr = [], total = 0, level2TotalLength = 0, level3TotalLength = 0
    total = parseInt(recommenderLength)
    for (let i = 0; i < recommenderLength; i++) {
      const level1Address = await handleViewMethod("recommenderInfo", [state.account, i])
      recommenderInfoArr.push(level1Address)
      const level2Length = await handleViewMethod("recommenderNumber", [level1Address])
      console.log("level2Length" + level2Length)
      total += parseInt(level2Length)
      level2TotalLength += parseInt(level2Length)
      for (let j = 0; j < level2Length; j++) {
        const level2Address = await handleViewMethod("recommenderInfo", [level1Address, i])
        const level3Length = await handleViewMethod("recommenderNumber", [level2Address])
        level3TotalLength += parseInt(level3Length)
        total += parseInt(level3Length)

      }
    }
    dispatch({ type: "SET_MyRecommender", payload: address })
    setLevel1(recommenderInfoArr.length)
    setLevel2(level2TotalLength)
    setLevel3(level3TotalLength)
    setTotal(total)
  }
  const getIsadmain = async () => {
    const ownerAddr = await handleViewMethod("owner", [])
    const isAdmin = (ownerAddr.toLowerCase() == state.account.toLowerCase()) ? true : false
    setIsadmain(isAdmin)
  }
  const getMyFireSeed = async () => {
    const listLength = await handleViewMethod(" getIsadmainIdlength", [])
    let list = []
    if (listLength <= 0) {
      return
    }
    for (let i = 0; i < listLength; i++) {
      const id = await handleViewMethod("ownerOfId", [state.account, i])
      const balance = await handleViewMethod("balanceOf", [state.account, id])
      list.push({
        id,
        balance,
        value: id,
        label: id
      })
    }

    dispatch({ type: "SET_FIREDSEEDLIST", payload: list })
  }

  const transfer = async () => {
    const { toAddress, amount } = form.getFieldValue()
    // params _token
    handleDealMethod("safeTransferFrom", [state.account, toAddress, curId, amount, "0x00"])
  }
  const check = async () => {
    let address = form.getFieldValue().toAddress
    const hide = message.loading('Checking', 0);
    console.log(address, logs)
    setHasTransfer(false)
    for (let i = 0; i < logs.length; i++) {
      if (address.toString().toLowerCase() == logs[i].to.toLowerCase()) {
        setHasTransfer(true)
      }
    }
    setTimeout(hide, 100);
  }
  const getLevel2 = async (address) => {
    console.log(address)
    let arr = []
    for (let i = 0; i < logs.length; i++) {
      try {
        // console.log(address1, address2, address3)
        if (logs[i].from.toString().toLowerCase() == address.toLowerCase()) {
          arr.push({
            transferTime: logs[i].transferTime,
            from: address,
            to: logs[i].to
          })
          getLevel3(logs[i].to)
        }

      } catch (e) {
      }
    }
    setLevel2Arr(arr)
  }
  const getLevel3 = async (address) => {
    let arr = []
    for (let i = 0; i < logs.length; i++) {
      try {
        // console.log(address1, address2, address3)
        if (logs[i].from.toString().toLowerCase() == address.toLowerCase()) {
          arr.push({
            transferTime: logs[i].transferTime,
            from: address,
            to: logs[i].to
          })
        }

      } catch (e) {
      }
    }
    setLevel3Arr(arr)
  }
  const getTransfer = async () => {
    // logs = await state.api.eth.getPastLogs({
    //     fromBlock: 0, toBlock: "pending",
    //     address: "0xc06c0d7f3d85064cdbc185cf76ccaeea8af90f59",
    //     topics: ["0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"]
    // })
    //state.api.eth.abi.decodeParameter

    console.log(logs)
    let arr = []
    for (let i = 0; i < logs.length; i++) {
      try {
        // console.log(address1, address2, address3)
        console.log(logs[i].from.toString().toLowerCase(), logs[i].to)
        if (logs[i].from.toString().toLowerCase() == state.account.toLowerCase()) {
          arr.push({
            transferTime: logs[i].transferTime,
            from: logs[i].from,
            to: logs[i].to
          })
          getLevel2(logs[i].to)
        }
      } catch (e) {
      }
    }
    setLogArr(arr)
  }
  const handleChooseId = (id) => {
    setID(id)
  }
  useEffect(async () => {
    let judgeRes = await judgeStatus(state)
    if (!judgeRes) {
      return
    }
    getMyFireSeed()
    myClass()
    getIsadmain()
    logs = await getPasslist()
    if (logs.data) {
      logs = logs.data.passFireSeeds
    }
    getTransfer()
  }, [state.account]);
  return (
    <LockList>
      <div className="panel-box">
        <div className="panel-container">
          <div className="panel-title">
            My FireSeed
            {
              isAdmin && (
                <Button style={{ float: 'right', background: '#373232', margin: '0px 13px', textAlign: 'center', lineHeight: '28px', width: "32px", height: '32px', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '50%', }}
                  onClick={() => {
                    history("/FireSeedManage")
                  }}>
                  <img src={user3} style={{ width: '22px', marginLeft: '-10px', marginTop: '-10px' }} />
                </Button>)
            }
          </div>

          <div className="content1">

            <div className="list">
              {
                state.fireSeedList.map(item => (
                  <div className="list-item" onClick={() => {
                    setID(item.id)
                  }}>
                    <img className="img" src={fireseed} alt="" />
                    <div className="item-info">
                      <div className="id">
                        FireSeed # {item.id}
                      </div>
                      <div className="number-box">
                        <div className="number">
                          ×{item.balance}
                        </div>
                      </div>

                    </div>
                  </div>
                ))
              }
            </div>
            <div className="panel-container1">
              <div className='tp'>
                <div className='tpitem'>
                  <img src={passport} />
                  <p>FireSeed</p>
                </div>
                <div className='tpitem'>
                  <img src={passport} />
                  <p>FireSeed</p>
                </div>
                <div className='tpitem'>
                  <img src={passport} />
                  <p>FireSeed</p>
                </div>
                <div className='tpitem'>
                  <img src={passport} />
                  <p>FireSeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="panel-box">
        <div className="panel-container">
          <div className="panel-title">
            Pass FireSeed
          </div>
          <div className='describe'>
            <Descriptions.Item label="transfer" >
              <Form form={form} className="send-fireseed">
                <Form.Item
                  name="FireSeed ID"
                  label="FireSeed ID"
                >
                  <Select
                    className="select-chain"
                    defaultValue={curId}
                    onChange={handleChooseId}
                    value={curId}
                    options={state.fireSeedList}
                  />
                </Form.Item>
                <Form.Item
                  
                  label="Form"
                  validateTrigger="onBlur"
                  validateFirst={true}
                  rules={[
                    // { required: true, message: 'Please input Title!' },
                  ]}
                  style={{
                    
                    width:'100%'
                  }}
                >
                  <div className="flex-box" style={{
                    paddingLeft:'10px',
                    border: '1px solid rgba(205,158,87,0.5)', 
                    backgroundColor: 'rgba(205,158,87,0.1)', 
                    borderRadius: '25px', 
                    height:'35px',
                    lineHeight:'35px',
                    width:'100%',
                    color: '#CD9E57'}}>
                   {state.account}

                  </div>
                </Form.Item>
                <Form.Item
                  name="toAddress"
                  label="To"
                  validateTrigger="onBlur"
                  validateFirst={true}
                  rules={[
                    // { required: true, message: 'Please input Title!' },
                  ]}
                  style={{
                    width: '100%'
                  }}
                >
                  <div className="flex-box">
                    <Input  />

                  </div>
                </Form.Item>
                <div style={{display:'flex'}}>
                <a style={{ textDecoration: 'underline', color: '#CD9E57',paddingLeft:'130px' }} onClick={() => {
                  check()
                }}>
                  Check
                </a>
                  <div className="flex-box form-value" style={{paddingLeft:'50px'}}>
                    <p>To:</p>
                    {hasTransfer ? "Yes" : "No"}
                  </div>
                </div>
                <Form.Item
                  name="amount"
                  label="Amount"
                  validateTrigger="onBlur"
                  validateFirst={true}
                  rules={[
                    // { required: true, message: 'Please input Title!' },
                  ]}

                >
                  <div className="flex-box">
                    <Input placeholder='Enter Amounts' />
                  </div>
                </Form.Item>
                <Button className="send-button" type="primary" htmlType="submit" onClick={() => {
                  transfer()
                }}>
                  Send
                </Button>
              </Form>
            </Descriptions.Item>
          </div>
        </div>
      </div>
      <div className="panel-box content2-part2">
        <div className="panel-container" style={{ padding: '30px 4.6%' }}>
          <div className="panel-title">
            My Team
          </div>
          <div className="content2">
            <div className="myrecommend">
              <div className="name">
                Contract Address
              </div>
              <div className="value">
                {state.myRecommender}
              </div>
            </div>
            <div className="myteamsize">
              <div className="box-title">
                My Team Size
              </div>
              <div className="refer-list">
                <div className="refer-item">
                  <div className="name">
                    Level 1
                  </div>
                  <div className="value">
                    {level1}
                  </div>


                </div>
                <div className="refer-item">
                  <div className="name">
                    Level 2
                  </div>
                  <div className="value">
                    {level2}
                  </div>


                </div>
                <div className="refer-item">
                  <div className="name">
                    Level 3
                  </div>
                  <div className="value">
                    {level3}
                  </div>


                </div>
                <div className="refer-item">
                  <div className="name">
                    Total
                  </div>
                  <div className="value">
                    {total}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-box">
            <div className="nav-list-box">
              <div className="fire-nav-list">
                <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                  setNav(1)
                }}>
                  All
                </div>
                <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                  setNav(2)
                }}>
                  Level 2
                </div>
                <div className={"nav-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                  setNav(3)
                }}>
                  Level 3
                </div>
                <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                  setNav(4)
                }}>
                  Level 4
                </div>
              </div>
            </div>
          </div>
          <div className="fire-list-box">
            <div className="list-header flex-box">
              <div className="col">
                No.
              </div>
              <div className="col">
                Address
              </div>
              <div className="col">
                PID
              </div>
              <div className="col">
                FID
              </div>
              <div className="col">
                Forum ID
              </div>
              <div className="col">
                <span >FDT Transaction <br />Tax</span>
              </div>
              <div className="col">
                Mint FireSeed  <br />Fees
              </div>
              <div className="col">
                Seed Donation <br /> Fees
              </div>
              <div className="col">
                Consensus <br /> Donation Fees
              </div>
              <div className="col">
                Time(UTC)
              </div>
            </div>
            {
              logArr.map(item => (
                <div className="list-item ">
                  <div className="col no">
                    1
                  </div>
                  <div className="col address">
                    {item.transferTime}
                  </div>
                  <div className="col pid">
                    {item.from}
                  </div>
                  <div className="col fid">
                    {item.to}
                  </div>
                  <div className='col'>

                  </div>
                  <div className='col'>

                  </div>
                  <div className='col'>

                  </div>
                  <div className='col'>

                  </div>
                  <div className='col'>

                  </div>
                  <div className='col'>

                  </div>
                </div>
              ))

            }
            {
              level2Arr.map(item => (
                <div className="list-item ">
                  <div className="col">
                    2
                  </div>
                  <div className="col">
                    {item.transferTime}
                  </div>
                  <div className="col">
                    {item.from}
                  </div>
                  <div className="col">
                    {item.to}
                  </div>
                </div>
              ))

            }
            {
              level3Arr.map(item => (
                <div className="list-item ">
                  <div className="col">
                    3
                  </div>
                  <div className="col">
                    {item.transferTime}
                  </div>
                  <div className="col">
                    {item.from}
                  </div>
                  <div className="col">
                    {item.to}
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


    </LockList>
  )
}
export default LockList
