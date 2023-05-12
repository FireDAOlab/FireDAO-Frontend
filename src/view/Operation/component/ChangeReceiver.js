import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import ChangeRecerverStyle from "./ChangeRecerverStyle";
import {Button, Card, Form, Input, notification, Radio, Switch} from "antd";
import {dealMethod} from "../../../utils/contractUtil";
import {getContractByContract, getContractByName} from "../../../api/connectContract";

const FireLock = (props) => {
    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
            },
        });
    };
    let {state, dispatch} = useConnect();
    const {curRec,updateData, id, address, closeDialog} = props
    const [form] = Form.useForm();
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByContract("fireLock", address, state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        dealMethod(contractTemp, state.account, name, params)
    }
    const changeReceiver = async () => {
        await handleDealMethod("setLockMemberAddr", [id, form.getFieldValue().address])
        closeDialog()
        updateData()
    }
    useEffect(() => {
    }, []);

    return (
        <ChangeRecerverStyle>
            <div className="mask">

            </div>
            <div className="dialog-content">
                <div className="header">
                    <div className="title">
                        Transfer Contract Owner
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
                <div className="dialog-name">
                    Current Receiver
                </div>
                <div className="dialog-value">
                    {curRec}
                </div>

                <Form form={form} name="control-hooks">
                    <div className="input-box">
                        <Form.Item
                            name="address"
                            label=" New Receiver"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input Address!'},
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </div>
                    <Button className="sub-btn" onClick={changeReceiver} type="primary">
                        Change
                    </Button>

                </Form>
            </div>
        </ChangeRecerverStyle>
    )
}
export default FireLock
