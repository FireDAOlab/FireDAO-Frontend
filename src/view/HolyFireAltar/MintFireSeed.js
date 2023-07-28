import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../api/contracts";
import {
    Button,
    message,
    Form,
    notification,
    AutoComplete
} from 'antd';
import coinInfo from "../../config/coinInfo"

import {getContractByName, getContractByContract} from "../../api/connectContract";
import {dealPayMethod, dealMethod, viewMethod} from "../../utils/contractUtil"
import {useNavigate} from "react-router-dom";
import FireSeed from "../../imgs/long.png"
import ethereum from "../../imgs/ethereum.png"
import judgeStatus from "../../utils/judgeStatus";

const MintFireSeed = (props) => {
    const [form] = Form.useForm();

    const MintFireSeed = styled.div`
      .ant-form-item-control-input {
        border-radius: 50px;
      }

      .ant-select:not(.ant-select-customize-input) {
        .ant-select-selector {
          border-radius: 25px;
        }
      }

      /* width: 100%; */
      overflow: hidden;
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;
      .flex-title{
        display: flex;
        justify-content: space-between;
      }
      @media screen and (min-width: 1500px) {
        .content-box {
          display: flex;
          padding: 2em 0;
        }

        .panel-box {

        }

        .ant-form-item-label > label {
          font-size: 16px;
          color: rgba(138, 128, 128, 1);
          height: 40px;
        }

        .left-content {
          width: 50%;
          padding-right: 5%;
          /* position: relative; */

          .img-box {
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 5%;
            background: linear-gradient(136deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            padding: 10px;
            font-family: Squada One-Regular, Squada One;
            font-weight: 600;
            text-align: center;

            p {
              font-size: 23px;
              line-height: 50px;
            }

            img {
              box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
              display: inline-block;
              border: 1px solid rgba(255, 255, 255, 0.5);
              border-radius: 20px;
              width: 100%;

              margin: 0 auto;
            }
          }

        }

        .right {
          width: 50%;
          /* max-width: 500px; */
          display: flex;

          .form {
            margin-top: 0em;

            .button-box {
              margin-top: 7em;
            }

            .mint-fee {
              padding: 0 1em;
            }

            .subBtn {
              padding: 0 2em;
              border-radius: 50px;
              background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            }

            .tip {
              margin-top: 3em;
              font-size: 16px;
              font-family: PingFangSCSemibold-, PingFangSCSemibold, sans-serif;
              font-weight: normal;
              color: #AC8989;
              line-height: 25px;
            }
          }
        }
      }


      @media screen and (max-width: 1500px) {
        .content-box {
          display: flex;
          padding: 2em 0;
        }

        .panel-box {

        }

        .ant-form-item-label > label {
          font-size: 13px;
          color: rgba(138, 128, 128, 1);
          height: 20px;
        }

        .left-content {
          width: 50%;
          padding-right: 5%;
          /* position: relative; */

          .img-box {
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 5%;
            background: linear-gradient(136deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            padding: 10px;
            font-family: Squada One-Regular, Squada One;
            font-weight: 600;
            text-align: center;

            p {
              font-size: 18px;
              line-height: 45px;
            }

            img {
              box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
              display: inline-block;
              border: 1px solid rgba(255, 255, 255, 0.5);
              border-radius: 20px;
              width: 100%;

              margin: 0 auto;
            }
          }

        }

        .right {
          width: 50%;
          /* max-width: 500px; */
          display: flex;

          .form {
            margin-top: 0em;

            .button-box {
              margin: 1.5em 0em;
            }

            .mint-fee {
              padding: 0 1em;
            }

            .subBtn {
              padding: 0 2em;
              border-radius: 50px;
              background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            }

            .tip {
              margin-top: 1em;
              font-size: 13px;
              font-family: PingFangSCSemibold-, PingFangSCSemibold, sans-serif;
              font-weight: normal;
              color: #AC8989;
              line-height: 18px;
            }
          }
        }
      }



    `

    let {state, dispatch} = useConnect();
    const [fee, setFee] = useState(0.08)
    const [feeStatus, setStatus] = useState(true)
    const [inputValue, setInputValue] = useState(1)
    const [coinOptions, setCoinOptions] = useState([
        {
            label: "10",
            value: '10',
        },
        {
            label: "20",
            value: '20',
        },
        {
            label: "30",
            value: '30',
        },
        {
            label: "40",
            value: '40',
        },
        {
            label: "50",
            value: '50',
        },
        {
            label: "60",
            value: '60',
        },
        {
            label: "70",
            value: '70',
        },
        {
            label: "80",
            value: '80',
        },
        {
            label: "90",
            value: '90',
        },
        {
            label: "100",
            value: '100',
        },
    ])


    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        if (feeStatus) {
            dealPayMethod(contractTemp, state.account, name, params, state.api.utils.toWei(fee.toString()))
        } else {
            dealMethod(contractTemp, state.account, name, params,)
        }

    }

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const onChooseAmount = (value) => {
        value = parseFloat(value)
        setInputValue(value)
        setFee(0.08 * value)
        if (value >= 10) {
            setFee(0.08 * 1000 * 0.9 * value / 1000)
        }
        if (value >= 20) {
            setFee(0.08 * 1000 * 0.8 * value / 1000)
        }
        if (value >= 30) {
            setFee(0.08 * 1000 * 0.7 * value / 1000)
        }
        if (value >= 40) {
            setFee(0.08 * 1000 * 0.6 * value / 1000)
        }
        if (value >= 50) {
            setFee(0.08 * 1000 * 0.5 * value / 1000)
        }
    }
    const Mint = async (item) => {
        // params _token

        if (inputValue < 1 || inputValue > 100) {
            message.warn("please input right mintAmount")
        }
        if (parseFloat(fee) > parseFloat(state.ethBalance)) {
            message.warn("balance not enough")
            return
        }

        handleDealMethod("mintWithETH", [inputValue])
    }
    const FeeStatus = async () => {
        let status = await handleViewMethod("FeeStatus", [])
        setStatus(status)
    }

    const getWhitelist = async () => {
        const length = await handleViewMethod("wListLength", [])
        for (let i = 0; i < length; i++) {
            const item = await handleViewMethod("whiteList", [i])
            if (item.toString().toLowerCase() == state.account.toLowerCase()) {

                setCoinOptions([
                    {
                        label: "10",
                        value: '10',
                    },
                    {
                        label: "20",
                        value: '20',
                    },
                    {
                        label: "30",
                        value: '30',
                    },
                    {
                        label: "40",
                        value: '40',
                    },
                    {
                        label: "50",
                        value: '50',
                    },
                    {
                        label: "60",
                        value: '60',
                    },
                    {
                        label: "70",
                        value: '70',
                    },
                    {
                        label: "80",
                        value: '80',
                    },
                    {
                        label: "90",
                        value: '90',
                    },
                    {
                        label: "100",
                        value: '100',
                    },
                    {
                        label: "10000",
                        value: '10000',
                    }
                ])
            }
        }

    }

    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        // FeeStatus()
        getWhitelist()
    }, [state.account]);
    return (
        <MintFireSeed>
            <div className="panel-box">
                <div className="panel-container">
                    <h2 className="panel-title flex-title">
                        Mint FireSeed
                        {/*<div className="add-coin" onClick={addToken}>*/}
                        {/*    Add FireSeed Address*/}
                        {/*</div>*/}
                    </h2>
                    <div className="content-box">
                        <div className="left-content">
                            <div className="img-box">
                                <img className="img" src={FireSeed} alt=""/>
                                <p>Pass FireSeed,Cast FireSoul</p>
                                <div style={{display: 'flex', marginTop: '-20px', height: '30px'}}>
                                    <hr style={{width: '25%', opacity: ' 0.15'}}/>
                                    <span style={{fontSize: '13px'}}>&nbsp;FireDAO Ecosystem&nbsp;</span>
                                    <hr style={{width: '25%', opacity: ' 0.15'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Form form={form} name="control-hooks" className="form">

                                <Form.Item
                                    name="mintAmount"
                                    label="Mint Amount(s) "
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <AutoComplete
                                        allowClear
                                        value={inputValue}
                                        onChange={(e) => {
                                            onChooseAmount(e)
                                        }}
                                        options={coinOptions}
                                        placeholder=""
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Minting Fee"
                                >
                                    <div className="mint-fee">
                                        {fee}
                                        <div style={{float: 'right'}}>
                                            <img src={ethereum}/><span style={{marginLeft: '10px'}}>ETH</span>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item className="button-box">
                                    <Button className="subBtn" htmlType="submit" type="primary"
                                            size="large"
                                            onClick={() => Mint()}>Mint FireSeed</Button>
                                </Form.Item>
                                <div className="tip">
                                    <p>
                                        1.Every time you cast a FireSeed, you need to donate 0.1ETH. Ordinary users can
                                        cast up
                                        to 100 pieces at a time, and the official white list can cast up to 1,000 pieces
                                        at a time;
                                    </p>
                                    <p>
                                        2.It has a casting discount function, a single casting ≥10 pieces will get 10%
                                        off,
                                        ≥20 pieces will get 20% off, ≥30 pieces will get 30% off, ≥40 pieces will get
                                        40% off,
                                        ≥50 pieces will get 50% off.

                                    </p>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>

            </div>
        </MintFireSeed>
    )
}
export default MintFireSeed
