import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../../api/contracts";
import AddWhiteListAddrStyle from "./AddWhiteListAddrStyle";
import { Button, Card, Form, Input, notification, Radio, Switch } from "antd";
import { getContractByName } from "../../../../api/connectContract";
import { dealMethod } from "../../../../utils/contractUtil";
import add from "../../../../imgs/add.png";
import remove1 from "../../../../imgs/remove.png";
import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";
const FireLock = (props) => {
    const { closeDialog, updateData } = props

    let { state, dispatch } = useConnect();
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
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)
        if (!contractTemp) {
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleSetAddress = async () => {
        let _to = [], _rate = []
        for (let i = 0; i < ownerArr.length; i++) {
            _to.push(form.getFieldValue()["owner" + i])
            _rate.push(form.getFieldValue()["rate" + i])
        }

        await handleDealMethod("addAllocationFundAddress", [_to, _rate])
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
                        Add Category
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
                    <div className="fire-list-box1">
                        {/* <div className="list-header flex-box">
                            <div className="col">
                                No.
                            </div>

                            <div className="col">
                                Contract Address
                            </div>
                            <div className="col">
                                Percentage
                            </div>
                        </div> */}
                        <Form form={form} name="control-hooks">
                            {ownerArr.map((item, index) => {
                               
                                return (
                                    <div className="address-item" key={index}>
                                        <Form.Item className="col no1"
                                            label='No.'>
                                            {index + 1}
                                        </Form.Item >
                                        <Form.Item
                                          
                                            label='Category'
                                            className="col"
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={item}
                                            label='Contract Address'
                                            className="col address1"
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={"rate" + index}
                                            className="col number"
                                            label='Percentage'
                                        >
                                            <Input type="number" max={100} />

                                        </Form.Item>
                                        {(index == ownerArr.length - 1) && (
                                             <img className="icon" src={add} onClick={() => {
                                                addOwner()
                                            }} />)}
                                        {(ownerArr.length >= 1 && index > 0) && (
                                            <img className="icon" src={remove1} onClick={() => {
                                                removeOwner()
                                            }} />)}
                                        
                                    </div>
                                )
                            })}
                        </Form>
                    </div>
                </div>
                <Button className="sub-btn" onClick={handleSetAddress} type="primary">
                    Submit
                </Button>
            </div>
        </AddWhiteListAddrStyle>
    )
}
export default FireLock
