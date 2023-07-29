import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {
    Button,
    message,
    Form,
    notification,
    AutoComplete
} from 'antd';
import coinInfo from "../../../config/coinInfo"

import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealPayMethod, dealMethod, viewMethod} from "../../../utils/contractUtil"
import {useNavigate} from "react-router-dom";
import FireSeed from "../../../imgs/long.png"
import ethereum from "../../../imgs/ethereum.png"
import judgeStatus from "../../../utils/judgeStatus";
import StyleBox from "./style"

const MintFireSeed = (props) => {
    const [form] = Form.useForm();



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
        const arr = await handleViewMethod("getAirDropList", [])
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
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
        <StyleBox>
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
        </StyleBox>
    )
}
export default MintFireSeed
