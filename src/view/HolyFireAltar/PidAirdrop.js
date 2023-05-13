import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../api/contracts";
import {Pagination, Button, Select, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../api/connectContract";
import {dealMethod, viewMethod} from "../../utils/contractUtil"
import {useNavigate} from "react-router-dom";
import FirePassport from "../../imgs/passport@2x.webp"
import develop from "../../env"
const PidList = (props) => {
    const [activeNav, setNav] = useState(1)
    const [isClaim, setIsClaim] = useState(false)
    const PidList = styled.div`
      display: flex;
      flex-direction: column;
      align-items: stretch;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      @media screen and (min-width: 1000px) {
        .panel-box {
          min-width: 1000px;
          width: 90%;
          margin: 0 auto;
        }

        .panel-container {
          width: 100%;
        }

        .airdrop-info {

          display: flex;
          padding-top: 50px;

          .img-box {
            border: 1px solid #7F6868;
            border-radius: 5%;
            flex-shrink: 0;
            background: #3F3535;
            padding: 10px;
            width: 320px;

            img {
              border-radius: 20px;
              width: 300px;
              margin: 0 auto;
            }

            .title {
              line-height: 50px;
              font-size: 30px;
              font-weight: bold;
              color: #FFFFFF;
              text-align: center;
            }
          }

          .right-content {
            padding-left: 20px;
            .amount-box{margin-top: 60px;
              h3{
                font-weight: bold;
                color: #FFFFFF;
                font-size: 18px;
              }}
            .title1 {
              font-size: 24px;
            }

            .title2 {
              margin-top: 10px;
              font-size: 26px;
            }

            .ant-btn {
              width: 200px;
              height: 50px;
              font-size: 20px;
              font-weight: bold;
              margin-top: 20px;
            }

            .available {
              margin-top: 20px;
              font-size: 20px;
              font-weight: bold;
              color: #ccc;
              line-height: 24px;
            }

            .fireseed {
              margin-top: 20px;

              strong {
                font-size: 50px;
                font-weight: bold;
                color: #D8D8D8;
                line-height: 60px;
                background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              span {
                font-size: 20px;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 24px;
                margin-left: 10px;
              }
            }
          }
        }

        .airdrop-list {
          margin-top: 30px;


          .header {
            display: flex;
            justify-content: space-between;

            span {
              font-size: 16px;
              font-weight: bold;
              color: #ccc;
              line-height: 19px
            }
          }

          .row {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;

            .col {
              display: flex;
              justify-content: space-between;
              width: 160px;
              margin: 0 10px;
              height: 40px;
              background: #3F3535;
              border-radius: 10px;
              border: 1px solid #342727;
              line-height: 40px;
              padding: 0 20px;
              &:nth-child(1) {
                margin-left: 0;
              }
              &:nth-child(3) {
                margin-right: 0;
                justify-content: center;
              }
            }
          }
        }

        .airdrop-time {
          width: 500px;

          .header {
            font-size: 16px;
            font-weight: bold;
            color: #ccc;
            line-height: 19px;
            margin-top: 20px;

          }

          .row {
            margin-top: 16px;
            display: flex;
            align-items: center;

            text-align: center;
            color: #ccc;

            span {
              margin: 0 10px;
            }

            .col {
              color: #fff;

              width: 130px;
              height: 40px;
              background: #3F3535;
              border-radius: 10px;
              border: 1px solid #342727;
              line-height: 40px;
              padding: 0 20px;

              &:nth-child(3) {
                justify-content: center;
              }
            }
          }
        }

        .airdrop-claim-list {
          font-weight: bold;
          margin-top: 50px;

          .col {
            width: 20%;
          }

          .header {
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
          }

          .row {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            margin-top: 8px;
            background: #3F3535;
            border-radius: 10px;

          }
        }
      }
      @media screen and (max-width: 1000px) {
        .panel-box {
          width: 94%;
          margin: 0 auto;
        }

        .panel-container {
          padding: 1em!important;
          width: 100%;
        }


        .airdrop-info {

          padding-top: 50px;

          .img-box {
            border: 1px solid #7F6868;
            border-radius: 5%;
            flex-shrink: 0;
            background: #3F3535;
            padding: 10px;
            width: 100%;

            img {
              border-radius: 20px;
              width: 100%;
              margin: 0 auto;
            }

            .title {
              line-height: 50px;
              font-size: 30px;
              font-weight: bold;
              color: #FFFFFF;
              text-align: center;
            }
          }

          .right-content {
            margin-top: 50px;
            padding-left: 20px;
            .amount-box{margin-top: 60px;
              h3{
                font-weight: bold;
                color: #FFFFFF;
                font-size: 18px;
              }}
            .title1 {
              font-size: 24px;
            }

            .title2 {
              margin-top: 10px;
              font-size: 26px;
            }

            .ant-btn {
              width: 200px;
              height: 50px;
              font-size: 20px;
              font-weight: bold;
              margin-top: 20px;
            }

            .available {
              margin-top: 20px;
              font-size: 20px;
              font-weight: bold;
              color: #ccc;
              line-height: 24px;
            }

            .fireseed {
              margin-top: 20px;

              strong {
                font-size: 50px;
                font-weight: bold;
                color: #D8D8D8;
                line-height: 60px;
                background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              span {
                font-size: 20px;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 24px;
                margin-left: 10px;
              }
            }
          }
        }

        .airdrop-list {
          margin-top: 30px;
          .header {
            display: flex;
            justify-content: space-between;

            span {
              font-size: 16px;
              font-weight: bold;
              color: #ccc;
              line-height: 19px
            }
          }

          .row {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            font-size: 12px;
            .col:nth-child(3){
              width: 70px;
            }
            .col {
              display: flex;
              justify-content: space-between;
              width: 90px;
              height: 40px;
              background: #3F3535;
              border-radius: 10px;
              border: 1px solid #342727;
              line-height: 40px;
              padding: 0 14px;
              font-size: 12px;
              &:nth-child(3) {
                justify-content: center;
              }
            }
          }
        }

        .airdrop-time {
          .header {
            font-size: 16px;
            font-weight: bold;
            color: #ccc;
            line-height: 19px;
            margin-top: 20px;

          }

          .row {
            margin-top: 16px;
            display: flex;
            align-items: center;

            text-align: center;
            color: #ccc;

            span {
              margin: 0 10px;
            }

            .col {
              color: #fff;
              height: 40px;
              background: #3F3535;
              border-radius: 10px;
              border: 1px solid #342727;
              line-height: 40px;
              padding: 0 10px;

              &:nth-child(3) {
                justify-content: center;
              }
            }
          }
        }

        .airdrop-claim-list {
          font-weight: bold;
          margin-top: 50px;

          .col {
            width: 20%;
          }

          .header {
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
          }

          .row {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            margin-top: 8px;
            background: #3F3535;
            border-radius: 10px;

          }
        }
      }
    `
    let {state, dispatch} = useConnect();
    const [endTime, setEndTime] = useState("")
    const [year, setYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth() +1)
    const [day, setDay] = useState(new Date().getDate())
    const [time, setTime] = useState("00:00")
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
        let contractTemp = await getContractByName("airdrop", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        await dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("airdrop", state.api,)
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
    const getIsClaim = async ()=>{
        let res = await handleViewMethod("Claimed",[state.account])
        setIsClaim(res)
    }
    const getEndTime = async ()=>{
        let endT = await handleViewMethod("endTime",[])
        endT = new Date(endT*1000)
        setEndTime(endT)
        setDay(endT.getDay())
        setYear(endT.getFullYear())
        setMonth(endT.getMonth() +1)
        let time = ""
        const hours = endT.getHours();
        const minutes = endT.getMinutes();
        const seconds = endT.getSeconds();
        time +=(hours>10?hours:`0${hours}`).toString()
        time+=(":" + (minutes>10?minutes:`0${minutes}`))
        time +=(":" + (seconds>10?seconds:`0${seconds}`))

        setTime(time)
    }
    const getData = async () => {
        getUserInfo()
        getEndTime()
        getIsClaim()
    }

    const claim = async () => {
        try {
            await handleDealMethod("Claim", [])
            getIsClaim()
        }catch (e){}
    }
    const judgePid = (pid) => {
        if(isClaim){
            return 0
        }
        if (0< pid&&pid < 101) {
            return 10
        } else if (100< pid&&pid < 201) {
            return 9
        } else if (200< pid&&pid < 301) {
            return 8
        } else if (300< pid&&pid < 401) {
            return 7
        } else if (400< pid&&pid < 501) {
            return 6
        } else if (500< pid&&pid < 601) {
            return 5
        } else if (600< pid&&pid < 701) {
            return 4
        } else if (701< pid&&pid < 801) {
            return 3
        } else if (800< pid&&pid < 901) {
            return 2
        } else if (900< pid&&pid < 1001) {
            return 1
        } else {
            return 0
        }
    }
    const getUserInfo = async () => {
        if (!state.pid) {
            const userInfo = await handleUserViewMethod("userInfo", [state.account])
            dispatch({type: "SET_PID", payload: userInfo.PID})
        }
    }
    useEffect(() => {
        if (!state.api) {
            openNotification("Please connect")
            return
        }
        if(!state.networkId){
            return
        }
        if(state.networkId&&state.networkId !== develop.chainId){
            openNotification("The testnet is not available now, please connect to" + develop.Name)
            return
        }
        getData()
    }, [state.account]);


    return (
        <PidList>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        PID Airdrop
                    </div>
                    <div className="airdrop-info">
                        <div className="left">
                            <div className="img-box">
                                <img className="img" src={FirePassport} alt=""/>
                                <div className="title">
                                    Fire Passport #{state.pid}
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="title1">
                                ERC721 Non-transferable
                            </div>
                            <div className="title2">
                                PID : {state.pid}
                            </div>
                            <div className="available">
                                Available
                            </div>
                            <div className="fireseed">
                                <strong>
                                    {judgePid(state.pid)}
                                </strong>
                                <span>
                                    FireSeed
                                </span>
                            </div>
                            <Button type="primary" onClick={claim}>
                                Claim
                            </Button>
                            <div className="amount-box">
                                <h3><strong> Airdrop Rules</strong></h3>
                                <div className="airdrop-list">
                                    <div className="header">
                                        <span>
                                            PID No
                                        </span>
                                        <span>
                                            Airdrop Amounts
                                        </span>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    1
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    100
                                </span>
                                        </div>
                                        <div className="col">
                                            10
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    101
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    200
                                </span>
                                        </div>
                                        <div className="col">
                                            9
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    201
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    300
                                </span>
                                        </div>
                                        <div className="col">
                                            8
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    301
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    400
                                </span>
                                        </div>
                                        <div className="col">
                                            7
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    401
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    500
                                </span>
                                        </div>
                                        <div className="col">
                                            6
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    501
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    600
                                </span>
                                        </div>
                                        <div className="col">
                                            5
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    601
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    700
                                </span>
                                        </div>
                                        <div className="col">
                                            4
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    701
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    800
                                </span>
                                        </div>
                                        <div className="col">
                                            3
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    801
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    900
                                </span>
                                        </div>
                                        <div className="col">
                                            2
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    901
                                </span>
                                        </div>
                                        —
                                        <div className="col">
                                <span>
                                    PID
                                </span>
                                            <span>
                                    1000
                                </span>
                                        </div>
                                        <div className="col">
                                            1
                                        </div>
                                    </div>
                                    {/*<div className="row">*/}
                                    {/*    <div className="col" style={{background: "none", border: "none"}}>*/}
                                    {/*        Total*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col" style={{background: "none", border: "none"}}>*/}

                                    {/*    </div>*/}
                                    {/*    <div className="col">*/}
                                    {/*        100*/}
                                    {/*    </div>*/}

                                    {/*</div>*/}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="panel-box">
                <div className="panel-container">
                    <h3>
                        <strong>Set Time (UTC)</strong>
                    </h3>
                    <div className="airdrop-time">

                        <div className="header">
                            End Time
                        </div>
                        <div className="row">
                            <div className="col">
                                {year}
                            </div>
                            <span>
                                Years
                            </span>
                            <div className="col">
                                {month}
                            </div>
                            <span>
                                Month
                            </span>
                            <div className="col">
                                {day}
                            </div>
                            <span>
                                Day
                            </span>
                        </div>
                        <div className="row">
                            <div className="col">
                                {time}
                            </div>
                            <span>Time</span>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="panel-box">*/}
            {/*    <div className="panel-container">*/}
            {/*        <div className="panel-title">*/}
            {/*            Airdrop List*/}
            {/*        </div>*/}
            {/*        <div className="airdrop-claim-list">*/}
            {/*            <div className="header">*/}
            {/*                <div className="col">*/}
            {/*                    No.*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    PID*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    Address*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    Amounts*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    Time（UTC）*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*            <div className="row">*/}
            {/*                <div className="col" style={{color:"#FF5D69"}}>*/}
            {/*                    1*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    1*/}
            {/*                </div>*/}
            {/*                <div className="col"  style={{color:"#FF9260"}}>*/}
            {/*                    0x1234…567*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    100,000*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    2023-02-01 18 18:21:20*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </PidList>
    )
}
export default PidList
