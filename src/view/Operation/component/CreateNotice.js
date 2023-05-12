import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import CreateNoticetyle from "./CreateNoticetyle";
import {Button, Card, Form, Input, Radio, Switch,message} from "antd";
import {getContractByName} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil";
import {useNavigate} from "react-router-dom";
const FireLock = (props) => {
    const {closeDialog,showNotice} = props
    let {state, dispatch} = useConnect();
    const [length,setLength] = useState(0)
    const history = useNavigate();
    const [form] = Form.useForm();
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("fireLockFactory", state.api,)
        if (!contractTemp) {
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("fireLockFactory", state.api,)
        if (!contractTemp) {
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getAddress = async ()=>{
        const listLength = await handleViewMethod("getOwnerLockLenglength", [])
        if(listLength<0){
            message.warn("Please submit create",3)
            return
        }
        let addrArr = []
        for(let i=0;i<listLength;i++){
            const address = await handleViewMethod("ownerLock", [state.account, i])
            const isInit = await handleViewMethod("uninitialized", [address])
            if(!isInit){
                addrArr.push({
                    value:address,
                    label:address,
                    address,
                    isInit
                })
            }

        }

        setLength(addrArr.length)
    }
    const createLock = async () => {
        await handleDealMethod("createLock", []).then((res)=>{
            console.log(res)
            if(res){
                message.warn(res.message)
            }else{
                closeDialog()
                showNotice()
            }
        }).catch()
    }
    const retrieve=async () => {
        closeDialog()
        showNotice()

    }
    useEffect(()=>{
        getAddress()
    },[])
    return (
        <CreateNoticetyle>
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
                    Notice
                </div>
                <div className="dialog-info">
                    A lock contract address will be newly created, and your tokens will be locked into this address.
                </div>
                <div className="btn-box">
                    <Button className="sub-btn"  onClick={createLock} type="primary">
                        Create
                    </Button>
                    {length>0 &&<Button className="sub-btn"  onClick={retrieve} type="primary">
                        Retrieve
                        </Button>}

                </div>
            </div>
        </CreateNoticetyle>
    )
}
export default FireLock
