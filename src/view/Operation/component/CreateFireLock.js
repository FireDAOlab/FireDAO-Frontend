import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import CreateFireLockStyle from "./CreateFireLockStyle";
import {Button, Card, Form, Input, Radio, Switch, message, Select} from "antd";
import {getContractByName} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil";
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
const FireLock = (props) => {
    const {closeDialog} = props
    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const [form] = Form.useForm();
    const [contractAddressArr, setAddressArr] = useState([])
    const [contractAddress, setAddress] = useState()
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
    const createLock = async () => {
        if(contractAddressArr.length<=0){
            message.warn("No Lock is available",3)
            return
        }
        if(!contractAddress){
            message.warn("No Lock is available",3)
            return
        }
        history("/CreateFireLock?address=" + contractAddress)
    }
    const handleChange = (val)=>{
        setAddress(val)
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
        setAddress(addrArr[0].value)
        setAddressArr(addrArr)
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        await getAddress()
    }, [state.account]);

    return (
        <CreateFireLockStyle>
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
                    Complete
                </div>
                <div className="dialog-info">
                    Your lock contract address
                </div>
                <div className="dialog-address">
                    <Select
                        className="select-lockAddress"
                        defaultValue={contractAddress}
                        onChange={handleChange}
                        value={contractAddress}
                        options={contractAddressArr}
                    />
                    {/*<svg onClick={()=>{handleCopy(contractAddress)}} t="1681804539298" className="icon" viewBox="0 0 1024 1024" version="1.1"*/}
                    {/*     xmlns="http://www.w3.org/2000/svg" p-id="2607" width="20" height="20">*/}
                    {/*    <path*/}
                    {/*        d="M725.333333 960H128c-23.466667 0-42.666667-19.2-42.666667-42.666667V277.333333c0-23.466667 19.2-42.666667 42.666667-42.666666h128V106.666667c0-23.466667 19.2-42.666667 42.666667-42.666667h597.333333c23.466667 0 42.666667 19.2 42.666667 42.666667v640c0 23.466667-19.2 42.666667-42.666667 42.666666h-128v128c0 23.466667-19.2 42.666667-42.666667 42.666667zM170.666667 874.666667h512V320H170.666667v554.666667z m170.666666-725.333334v85.333334h384c23.466667 0 42.666667 19.2 42.666667 42.666666v426.666667h85.333333V149.333333H341.333333z"*/}
                    {/*        fill="#FF9260" p-id="2608"></path>*/}
                    {/*    <path*/}
                    {/*        d="M298.666667 490.666667h128c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666667h-128c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667M512 576H298.666667c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666666h213.333333c23.466667 0 42.666667-19.2 42.666667-42.666666s-19.2-42.666667-42.666667-42.666667"*/}
                    {/*        fill="#FF9260" p-id="2609"></path>*/}
                    {/*</svg>*/}
                </div>

                <Button className="sub-btn"  onClick={createLock} type="primary">
                    Next
                </Button>
            </div>
        </CreateFireLockStyle>
    )
}
export default FireLock
