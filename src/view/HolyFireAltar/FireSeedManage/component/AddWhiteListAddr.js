import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../../api/contracts";
import AddWhiteListAddrStyle from "./AddWhiteListAddrStyle";
import { Button, Card, Form, Input, notification, Radio, Switch } from "antd";
import { getContractByName } from "../../../../api/connectContract";
import { dealMethod } from "../../../../utils/contractUtil";
import add from "../../../../imgs/add.png";
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
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
        }
        return dealMethod(contractTemp, state.account, name, params)
    }


    const handleSetAddress = async () => {
        let _to = []
        console.log(form.getFieldValue())
        for (let i = 0; i < ownerArr.length; i++) {
            _to.push(form.getFieldValue()["owner" + i])
        }

        await handleDealMethod("addWhiteListUser", [_to])
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

                    <div className="close" onClick={closeDialog}>
                        <svg t="1681179633627" className="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2615" width="26" height="26">
                            <path
                                d="M753.365333 843.861333a64 64 0 0 0 90.496-90.496L602.496 512l241.365333-241.365333a64 64 0 0 0-90.496-90.496L512 421.504 270.634667 180.138667a64 64 0 1 0-90.496 90.496L421.504 512l-241.365333 241.365333a64 64 0 0 0 90.496 90.496L512 602.496l241.365333 241.365333z"
                                fill="#ffffff" p-id="2616"></path>
                        </svg>
                    </div>
                </div>
                <div className="title">
                    Add WhiteList
                </div>
                <div className="address-list">
                    <div className="fire-list-box1">
                        <div className="list-header flex-box">
                            <div className="col">
                                No
                            </div>
                            <div className="col">
                                PID
                            </div>
                            <div className="col">
                                Address
                            </div>
                        </div>
                        {ownerArr.map((item, index) => {
                            <div className="list-item ">
                                <div className="col">
                                    {item}
                                </div>
                                <div className="col">

                                </div>
                                <div className="col">
                                    {item}
                                </div>
                                
                            </div>
                            
                            return (
                                <div className="address-item" key={index}>

                                    <div className="flex-box">
                                        <div className="col " style={{marginLeft:'30px'}}>
                                            {item}
                                        </div>
                                        <div className="col pid">
                                            {item}
                                        </div>
                                        <div className="col address" style={{width:'130px',border:'1px solid rgba(205, 158, 87, 1)',background:'rgba(205, 158, 87, 0.20)',marginLeft:'40px',textAlign:'center',borderRadius:'25px'}}>
                                            {item}
                                        </div>
                                    </div>
                                    <hr style={{opacity:'0.1',width:'85%'}} />
                                    {/* {(ownerArr.length > 1 && index == 0) && (
                                        <UserDeleteOutlined className="icon" onClick={() => {
                                            removeOwner()
                                        }} />)}  */}
                                    {(index == ownerArr.length - 1) && (
                                        <img className="icon" src={add} onClick={() => {
                                            addOwner()
                                        }} />)}
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
