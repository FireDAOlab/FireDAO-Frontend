import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import ChangeFeeAddrStyle from "./ChangeFeeAddrStyle";
import {Button, Card, Form, Input, notification, Radio, Switch} from "antd";
import {getContractByName} from "../../../api/connectContract";
import {dealMethod} from "../../../utils/contractUtil";
const FireLock = (props) => {
    const {closeDialog,fee,address} = props

    let {state, dispatch} = useConnect();
    const [form] = Form.useForm();
    const handleFeeDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("firelockFee", state.api,)
        if (!contractTemp) {
            notification.error({
                message: "Please connect",
                description:
                    "",
                onClick: () => {
                },
            });
        }
        dealMethod(contractTemp, state.account, name, params)
    }
    const complateLock = ()=>{

    }
    const handleSetFee = async ()=>{
        await handleFeeDealMethod("setFee",[state.api.utils.toWei(form.getFieldValue().newFee)])
    }
    const  handleSetAddress = async ()=>{
        await handleFeeDealMethod("setAddress",[form.getFieldValue().newAddress])
    }
    useEffect(() => {
    }, []);

    return (
        <ChangeFeeAddrStyle>
            <div className="mask">

            </div>
            <div className="dialog-content">
                <div className="header">
                    <div className="title">
                        Change Fee & Receive Wallet
                    </div>
                    <div className="close" onClick={closeDialog}>
                        <svg t="1681179633627" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2615" width="26" height="26">
                            <path
                                d="M753.365333 843.861333a64 64 0 0 0 90.496-90.496L602.496 512l241.365333-241.365333a64 64 0 0 0-90.496-90.496L512 421.504 270.634667 180.138667a64 64 0 1 0-90.496 90.496L421.504 512l-241.365333 241.365333a64 64 0 0 0 90.496 90.496L512 602.496l241.365333 241.365333z"
                                fill="#ffffff" p-id="2616"></path>
                        </svg>
                    </div>
                </div>


                <Form form={form} name="control-hooks">
                    <div className="dialog-name">
                        Current Fee
                    </div>
                    <div className="dialog-value">
                        {fee} ETH
                    </div>
                    <div className="dialog-name">

                    </div>
                    <Form.Item
                        name="newFee"
                        label="New Fee"
                        validateTrigger="onBlur"
                        validateFirst={true}
                        rules={[
                            {required: true, message: 'Please input fee!'},
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Button className="sub-btn"  onClick={handleSetFee} type="primary">
                        Submit
                    </Button>
                    <div className="dialog-name">
                        Current Receiving Wallet
                    </div>
                    <div className="dialog-address">
                        {address}
                    </div>
                    <Form.Item
                        name="newWallet"
                        label="New Receiving Wallet"
                        validateTrigger="onBlur"
                        validateFirst={true}
                        rules={[
                            {required: true, message: 'Please input wallet!'},
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Form>

                <Button className="sub-btn"  onClick={handleSetAddress} type="primary">
                    Submit
                </Button>
            </div>
        </ChangeFeeAddrStyle>
    )
}
export default FireLock
