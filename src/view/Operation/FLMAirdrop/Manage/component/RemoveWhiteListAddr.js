import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../../../api/contracts";
import AddWhiteListAddrStyle from "./AddWhiteListAddrStyle";
import { Button, Card, Form, Input, notification, Radio, Switch } from "antd";
import { getContractByName } from "../../../../../api/connectContract";
import { dealMethod } from "../../../../../utils/contractUtil";
import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { formatAddress } from '../../../../../utils/publicJs';
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
        let contractTemp = await getContractByName("FLMAirdrop", state.api,)
        if (!contractTemp) {
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const delDate = (item, index) => {

        let tempArr = []
        props.delDataArr.map((item, index) => {
            if (item.checked == true) {
                tempArr.push(item)

            }
        })
        console.log(tempArr);
        setOwnerArr(tempArr)
    }
    const handleSetAddress = async () => {
        let _to = []
        props.delDataArr.map((item, index) => {
            if (item.checked == true) {
                _to.push(item.address)

            }
        })
        console.log(_to);
        await handleDealMethod("removeAdminsLevelTwo", [_to])
        updateData()
        setOwnerArr(_to)
        closeDialog()
    }
    useEffect(() => {
        delDate()
    }, []);

    return (
        <AddWhiteListAddrStyle>
            <div className="mask">

            </div>
            <div className="dialog-content">
                <div className="header">
                    <div className="title">
                        Delete
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
                        <div className="list-header flex-box">
                            <div className="col">
                                No.
                            </div>

                            <div className="col">
                                Address
                            </div>
                        </div>

                        {ownerArr.map((item, index) => {
                            return (
                                <div className="address-item" key={index}>
                                    <Form form={form} name="control-hooks">
                                        <div className="flex-box" key={index}>
                                            <Form.Item className="col no1"  >
                                                {index + 1}
                                            </Form.Item >

                                            <Form.Item
                                                name={item}
                                                className="col address1" >
                                                {formatAddress(item.address)}
                                            </Form.Item>

                                        </div>

                                        {/* {(ownerArr.length > 1 && index == 0) && (
                                            <UserDeleteOutlined className="icon" onClick={() => {
                                                removeOwner()
                                            }} />)}
                                        {(index == ownerArr.length - 1) && (
                                            <UserAddOutlined className="icon" onClick={() => {
                                                addOwner()
                                            }} />)} */}
                                    </Form>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className='phone-list'>
                    <div className="content-item">
                        {ownerArr.map((item, index) => {
                            return (
                                <div className='discount' >


                                    <Form form={form} name="control-hooks">
                                        <div className='mintfee' key={index}>
                                            <div className="fee1">
                                                <div className="name">
                                                    No.
                                                </div>

                                                <Form.Item className="value"   >
                                                    {index + 1}
                                                </Form.Item >
                                            </div>
                                            <div className='fee1'>
                                                <div className="name">
                                                    Address
                                                </div>
                                                <Form.Item
                                                    className='value'
                                                    name={item}
                                                    validateTrigger="onBlur"

                                                >
                                                    {formatAddress(item.address)}
                                                </Form.Item>
                                            </div>
                                        </div>

                                    </Form>
                                </div>
                            )
                        })}
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
