import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../../../api/contracts";
import AddWhiteListAddrStyle from "./AddWhiteListAddrStyle";
import {Button, Card, Form, Input, message, notification, Radio, Switch} from "antd";
import {getContractByName} from "../../../../../api/connectContract";
import {dealMethod} from "../../../../../utils/contractUtil";
import {UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import * as XLSX from "xlsx"
import AdminPage from "../../../../passportAdmin";
import BigNumber from "bignumber.js";

const FireLock = (props) => {
    const {closeDialog, updateData} = props

    let {state, dispatch} = useConnect();
    const [form] = Form.useForm();
    const [ownerArr, setOwnerArr] = useState(['owner0'])
    const [addressString, setCurAddrString] = useState()
    const [amountString, setAmountString] = useState()
    const [infoString, setInfoString] = useState()
    const [addCount, setAddCount] = useState(0)
    const [errAccountArr, setErrAccountArr] = useState([])


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


    const handleSetAddress = async () => {

        let _to = [], _amount = []
        _to = addressString.toString().split('\n')
        _amount = amountString.toString().split('\n')
        _to.forEach((address, index) => {
            address = address.trim()
            if (!state.api.utils.isAddress(address)) {
                _to.splice(index, 1)
            }

        })
        for (let i=0;i<_amount.length;i++){
            _amount[i] =  BigNumber(_amount[i]).multipliedBy(10**18).toFixed(0).toString()
        }
        await handleDealMethod("addAirDropList", [_to, _amount, infoString])
        updateData()
    }
    const Excel = (e) => {
        // 错误情况判断
        const files = e.target.files
        if (files.length <= 0) {
            return false;
        } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
            message.warn("上传格式不正确，请上传xls或者xlsx格式")
            return false
        }
        // 读取表格
        const fileReader = new FileReader()
        let addressString = "", amountString = "", infoString = ""
        fileReader.onload = ev => {
            try {
                const data = ev.target.result;
                const workbook = XLSX.read(data, {
                    type: "binary"
                })
                const wsname = workbook.SheetNames[0]
                const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])
                let count = 0
                let errAccountArrT = []
                ws.forEach((item, index) => {
                    let address = item.address.trim()

                    if (state.api.utils.isAddress(address)) {
                        count++
                        if (index == ws.length - 1) {
                            addressString += address
                            amountString += item.amount

                        } else {
                            addressString += address + "\n"
                            amountString += item.amount + "\n"
                        }

                    }else{
                        errAccountArrT.push({
                            address: address,
                            amount:item.amount
                        })
                    }

                    if (item.info) {
                        infoString += item.info
                    }
                })
                setErrAccountArr(errAccountArrT)
                setAddCount(count)
                setCurAddrString(addressString)
                setAmountString(amountString)
                setInfoString(infoString)
            } catch (e) {
                return false
            }
        }
        fileReader.readAsBinaryString(files[0])
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
                        Add Wallet
                    </div>
                    <div className="file-box">
                        Excel上传
                        <input
                            type="file"
                            accept=".xls,.xlsx"
                            className="upload-file"
                            onChange={(e) => {
                                Excel(e)
                            }}/>
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
                    <h2>Add number:{addCount}</h2>
                    <Form form={form} name="control-hooks">
                        <div className="address-item">
                            <Form.Item
                                name="address"
                                label="Wallet Address"
                                className="address-box"
                            >
                                <div className="flex-box">
                                    <TextArea placeholder="one address perline" rows={10} value={addressString} onChange={(e) => {
                                        setCurAddrString(e.target.value)
                                    }}/>
                                </div>
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                                name="amount"
                                label="Amount"
                                className="number-box"
                            >
                                <div className="flex-box">
                                    <TextArea placeholder="one amount perline" rows={10} value={amountString} onChange={(e) => {
                                        setAmountString(e.target.value)
                                    }}/>
                                </div>
                            </Form.Item>
                        </div>
                        <Form.Item
                            name="info"
                            label="Info"
                        >
                            <div className="flex-box">
                                <TextArea value={infoString} onChange={(e) => {
                                    setInfoString(e.target.value)
                                }}/>
                            </div>
                        </Form.Item>
                        <h2>ERR Address</h2>
                        <div className="fire-list-box" style={{ minWidth:'100%'}}>
                            <div className="list-header">
                                <div className="col">
                                    Address
                                </div>
                                <div className="col">
                                    Amount
                                </div>
                            </div>
                            {errAccountArr.map(item=>{
                                return (<div className="list-item">
                                    <div className="col">
                                        {item.address}
                                    </div>
                                    <div className="col">
                                        {item.amount}
                                    </div>
                                </div>)
                            })}
                        </div>
                    </Form>
                </div>
                <Button className="sub-btn" onClick={handleSetAddress} type="primary">
                    Submit
                </Button>
            </div>
        </AddWhiteListAddrStyle>
    )
}
export default FireLock
