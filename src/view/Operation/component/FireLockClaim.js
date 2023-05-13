import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import FireLockClaimStyle from "./FireLockClaimStyle";
import {Button, Card, Form, Input, Radio, Switch,message} from "antd";
import {getContractByContract, getContractByName} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil";
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import {handleCopy} from "../../../utils/copyUtil";
import {FireLockDecimal} from "../../../utils/constants";
const FireLock = (props) => {
    const {closeDialog,address,canW,updateData} = props
    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const [form] = Form.useForm();
    const [contractAddress, setAddress] = useState()
    const [amount, setAmount] = useState(undefined)
    const handleDealMethod = async (name, address, params) => {
        let contractTemp = await getContractByContract("fireLock", address, state.api,)
        if (!contractTemp) {
            message.warn("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("fireLockFactory", state.api,)
        if (!contractTemp) {
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };
    const unLock = async () => {
        await handleDealMethod("claim", address, [state.api.utils.toWei(amount.toString())]).then(()=>{
           setTimeout(()=>{
               closeDialog()
               updateData()
           },3000)
        }).catch(()=>{

        })
    }

    return (
        <FireLockClaimStyle>
            <div className="mask">

            </div>
            <div className="dialog-content">
                <div className="header">
                    <div className="close" onClick={closeDialog}>
                        <svg t="1681179633627" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2615" width="26" height="26">
                            <path
                                d="M753.365333 843.861333a64 64 0 0 0 90.496-90.496L602.496 512l241.365333-241.365333a64 64 0 0 0-90.496-90.496L512 421.504 270.634667 180.138667a64 64 0 1 0-90.496 90.496L421.504 512l-241.365333 241.365333a64 64 0 0 0 90.496 90.496L512 602.496l241.365333 241.365333z"
                                fill="#ffffff" p-id="2616"></path>
                        </svg>
                    </div>
                </div>
                <div className="dialog-name">
                    Claim
                </div>

                <Form form={form} name="control-hooks">
                    <div className="input-box">
                        <Form.Item
                            name="Amount"
                            label="Claim amount"
                            className="short-input"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input Amount!'},
                            ]}

                        >
                            <Input type="text" value={amount} onChange={handleInputChange}/>
                            <Button type="primary" className="max-btn" onClick={() => {
                                setAmount(canW)
                            }}>
                                Max
                            </Button>
                        </Form.Item>
                    </div>
                    <div className="info-box">
                        <div className="name">
                            Balance
                        </div>
                        <div className="value">
                            {canW}
                        </div>
                    </div>
                </Form>
                <Button className="sub-btn"  onClick={unLock} type="primary">
                    Claim
                </Button>
            </div>
        </FireLockClaimStyle>
    )
}
export default FireLock
