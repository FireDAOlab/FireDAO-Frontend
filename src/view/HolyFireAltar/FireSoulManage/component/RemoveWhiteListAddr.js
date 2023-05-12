import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../../api/contracts";
import AddWhiteListAddrStyle from "./AddWhiteListAddrStyle";
import {Button, Card, Form, Input, notification, Radio, Switch} from "antd";
import {getContractByName} from "../../../../api/connectContract";
import {dealMethod} from "../../../../utils/contractUtil";
import {UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";
const FireLock = (props) => {
    const {closeDialog,updateData} = props

    let {state, dispatch} = useConnect();
    const [form] = Form.useForm();
    const [ownerArr, setOwnerArr] = useState(['owner0'])
    const removeOwner = () => {
        let tempArr = Object.assign([], ownerArr)
        tempArr.shift()
        setOwnerArr(tempArr)
    }
    const addOwner = () => {
        let tempArr = Object.assign([], ownerArr)
        tempArr.push('owner' + tempArr.length)
        setOwnerArr(tempArr)
    }

    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const  handleSetAddress = async ()=>{
        let  _to = []
        for (let i = 0; i < ownerArr.length; i++) {
            _to.push(form.getFieldValue()["owner" + i])
        }
        await handleDealMethod("deleteWhiteList",[_to])
        updateData()
        closeDialog()
    }
    useEffect(() => {
    }, []);

    return (
        <AddWhiteListAddrStyle>
            <div className="mask">

            </div>
            <div className="dialog-content">
                <div className="header">
                    <div className="title">
                        Remove Wallet
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

                <div className="address-list">
                    <Form form={form} name="control-hooks">
                    {ownerArr.map((item, index) => {
                        return (
                            <div className="address-item" key={index}>
                                <Form.Item
                                    name={item}
                                    label="Wallet Address"
                                    className="address"
                                >
                                    <div className="flex-box">
                                        <Input/>
                                    </div>
                                </Form.Item>

                                {(ownerArr.length > 1 && index == 0) && (
                                    <UserDeleteOutlined className="icon" onClick={() => {
                                        removeOwner()
                                    }}/>)}
                                {(index == ownerArr.length - 1) && (
                                    <UserAddOutlined className="icon" onClick={() => {
                                        addOwner()
                                    }}/>)}
                            </div>
                        )
                    })}
                    </Form>
                </div>
                <Button className="sub-btn"  onClick={handleSetAddress} type="primary">
                    Submit
                </Button>
            </div>
        </AddWhiteListAddrStyle>
    )
}
export default FireLock
