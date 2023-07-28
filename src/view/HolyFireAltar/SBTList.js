import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { useConnect } from "../../api/contracts";
import { Card, Button, Descriptions, message, Form, List, Input, notification } from 'antd';
import { getContractByName, getContractByContract } from "../../api/connectContract";
import { dealMethod, viewMethod } from "../../utils/contractUtil"
import user3 from "../../imgs/user3.png";
import { getIpfs } from "../../utils/ipfsApi";

const SBTList = (props) => {
    const [form] = Form.useForm();
    const SBTList = styled.div`


@media screen and (min-width: 1500px) {
    .panel-container {
    padding:30px 4.6%;
.fire-list-box{
    .list-header{
        text-align:left;
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
          &:nth-child(1){
            width:10%;
          }
          &:nth-child(2){
            width: 16%;
          }
          &:nth-child(3){
            width: 17%;
          }
          &:nth-child(4){
            width: 18%;
          }
          &:nth-child(5){
            width:15%;
          }
          &:nth-child(6){
            width:15%;
          }
          &:nth-child(7){
            width: 9%;
          }
        }
        .list-header{
          display: flex;
          justify-content: flex-start;
          font-size: 18px;
          font-weight: bold;
          padding: 20px 1.5em;
        }
        .list-item{
          padding: 0.5em 1em;
          display: flex;
          justify-content: flex-start;
          background: #3F3535;
          border-radius: 10px;
          margin: 0.5em 0;
        }
      }
    }

    .fire-list-box{
        margin: 1em 0em;
        text-align:left;

        .list-header1 {
            font-size: 18px;
    font-weight: bold;
    color: #8A8080;
            padding: 20px 1em;
    .col{
        text-align:left;

      &:nth-child(1){
        margin-left:70px;
        width:22%;
      }
      &:nth-child(2){
        width: 22%;
      }
      &:nth-child(3){
        width: 22%;
      }
      &:nth-child(4){
        width: 22%;
      }
     
    }
}  
        .list-item, .list-header1 {
          justify-content: flex-start;
        }

}
    .soulaccount{
    margin: 10px 0;
    display: flex;
    align-items: center;
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
    }
    .value{
      text-align:center;
      margin-left: 20px;
      line-height:30px;
      width: 160px;
height: 30px;
background: rgba(205,158,87,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
    }
  }
  .fidscore{

margin: 10px 50px;
display: flex;
align-items: center;
.name{
  font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
}
.score{
  text-align:center;
  margin-left: 20px;
  font-size: 15px;
  line-height:30px;
  width: 160px;
height: 30px;
background: rgba(254,109,70,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
}
}
}
@media screen and (max-width: 1500px) {
    .panel-container {
    padding:30px 4.6%;
.fire-list-box{
    .list-header{
        text-align:left;
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
            font-size:13px;
          &:nth-child(1){
            width:10%;
          }
          &:nth-child(2){
            width: 16%;
          }
          &:nth-child(3){
            width: 17%;
          }
          &:nth-child(4){
            width: 18%;
          }
          &:nth-child(5){
            width:15%;
          }
          &:nth-child(6){
            width:15%;
          }
          &:nth-child(7){
            width: 9%;
          }
        }
        .list-header{
          display: flex;
          justify-content: flex-start;
          font-size: 13px;
          font-weight: bold;
          padding: 20px 1.5em;
        }
        .list-item{
          padding: 0.5em 1em;
          display: flex;
          justify-content: flex-start;
          background: #3F3535;
          border-radius: 10px;
          margin: 0.5em 0;
        }
      }
    }

    .fire-list-box{
        margin: 1em 0em;
        text-align:left;

        .list-header1 {
    font-weight: bold;
    color: #8A8080;
            padding: 20px 1em;
    .col{
        text-align:left;

      &:nth-child(1){
        margin-left:70px;
        width:22%;
      }
      &:nth-child(2){
        width: 22%;
      }
      &:nth-child(3){
        width: 22%;
      }
      &:nth-child(4){
        width: 22%;
      }
     
    }
}  
        .list-item, .list-header1 {
          justify-content: flex-start;
        }

}
    .soulaccount{
    margin: 10px 0;
    display: flex;
    align-items: center;
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:14px;
    }
    .value{
        font-size:14px;
      text-align:center;
      margin-left: 20px;
      line-height:30px;
      width: 160px;
height: 30px;
background: rgba(205,158,87,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
    }
  }
  .fidscore{

margin: 10px 50px;
display: flex;
align-items: center;
.name{
  font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:14px;
}
.score{
  text-align:center;
  margin-left: 20px;
  font-size: 14px;
  line-height:30px;
  width: 160px;
height: 30px;
background: rgba(254,109,70,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
}
}
}
    `
    let { state, dispatch } = useConnect();
    const [PIDARR, setPIDARR] = useState([])

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
    const getSoulAccount = async () => {
        const address = await handleViewMethod("getSoulAccount", [state.account])
        console.log(address)
    }


    useEffect(() => {
        getSoulAccount()
    }, [state.account]);


    return (
        <SBTList>
            <div className="panel-box">
                <div className="panel-container">
                    <div style={{ display: 'flex' }}>
                        <h2 className="panel-title">
                            SBT List
                        </h2>
                        <Button style={{ float: 'right', background: '#373232', margin: '0px 13px', textAlign: 'center', lineHeight: '28px', width: "32px", height: '32px', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '50%', }}>
                            <img src={user3} style={{ width: '22px', marginLeft: '-10px', marginTop: '-10px' }} />
                        </Button>
                    </div>
                    <div className="fire-list-box">
                        {/* <div className="list-box"> */}
                        <div className="list-header flex-box">
                            <div className="col">
                                Token
                            </div>
                            <div className="col">
                                Issued Today
                            </div>
                            <div className="col">
                                Issued Weekly
                            </div>
                            <div className="col">
                                Issued Monthly
                            </div>
                            <div className="col">
                                Issued Year
                            </div>
                            <div className="col">
                                Issued Year
                            </div>
                            <div className="col">
                                Other
                            </div>
                        </div>
                        {
                            PIDARR.map(item => (
                                <div className="list-item ">
                                    <div className="col"  style={{color:'#E48686'}}>
                                        1
                                    </div>
                                    <div className="col">
                                        {item.blockNumber}
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
                        {/* </div> */}
                    </div>


                </div>


                <div className="panel-container">
                    <h2 className="panel-title">
                        My SBTs
                    </h2>
                    <div style={{ display: 'flex' }}>
                        <div className="soulaccount">
                            <div className="name">
                                My SoulAccount
                            </div>
                            <div className="value">
                                {/* {UserToSoul} */}
                            </div>
                        </div>
                        <div className="fidscore">
                            <div className="name">
                                FID ReputationScore
                            </div>
                            <div className="score">
                                {/* {score} */}
                            </div>
                        </div>
                    </div>
                    <div className="fire-list-box">
                        {/* <div className="list-box"> */}
                        <div className="list-header1 flex-box">
                            <div className="col">
                                SBT
                            </div>
                            <div className="col">
                                Amount(s)
                            </div>
                            <div className="col">
                                Weight
                            </div>
                            <div className="col">
                                Score
                            </div>

                        </div>
                        {
                            PIDARR.map(item => (
                                <div className="list-item ">
                                    <div className="col" style={{color:'#E48686'}}>
                                        1 
                                    </div>
                                    <div className="col">
                                        {item.blockNumber}
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
                        {/* </div> */}
                    </div>


                </div>
            </div>
        </SBTList>
    )
}
export default SBTList
