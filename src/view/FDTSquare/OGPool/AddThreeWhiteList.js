import React, {useEffect, useRef, useState} from 'react';

import {useConnect} from "../../../api/contracts";
import {
    Button,
    message,
    Form,
    Input, Modal,

} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"
import develop from "../../../env";
import AddThreeWhiteListStyle from "./AddThreeWhiteListStyle";


const AddWhiteList = ({allRecords}) => {
    let {state, dispatch} = useConnect();
    const [isAdmin, setIsThreeAdmin] = useState(true)
    const [addWhiteArr, setAddWArr] = useState([{}])
    const [curWhiteUser, setCurWhiteUser] = useState({})

    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [isDelMolOpen, setDelOpen] = useState(false)
    const [adminWhiteList, setAdminWhiteList] = useState([])
    const [refRecords, setREFRecords] = useState([])
    const [maxThree, setMaxThree] = useState(0)

    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }
    const addOneWhite = async () => {
        let addWhiteArrT = JSON.parse(JSON.stringify(addWhiteArr))
        addWhiteArrT.push({})
        setAddWArr(addWhiteArrT)
    }
    const removeOneWhite = async () => {
        let addWhiteArrT = JSON.parse(JSON.stringify(addWhiteArr))
        addWhiteArrT.shift()
        setAddWArr(addWhiteArrT)
    }

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getAdminWhiteList = async () => {
        try {
            let length = await handleViewMethod("getAdminWhiteListLength", [])
            let adminWhiteList = []
            for (let i = 0; i < length; i++) {
                let res = await handleViewMethod("adminInviter", [state.account, i])
                adminWhiteList.push(res)
            }
            setAdminWhiteList(adminWhiteList)

            let refArr = []
            allRecords.forEach(item => {
                adminWhiteList.forEach(adminItem => {
                    if (adminItem.user.toLowerCase() == item.addr.toLowerCase().toString()) {
                        refArr.push(item)
                    }
                })
            })
            let tAmount = 0, tETH = 0, tUSDT = 0
            refArr.forEach(item => {
                tAmount += parseFloat(item.fdtAmount)
                tETH += parseFloat(item.ethAmount)
                tUSDT += parseFloat(item.usdtAmount)
            })
            refArr.push({
                name: "Total",
                fdtAmount: tAmount,
                ethAmount: tETH,
                usdtAmount: tUSDT
            })
            setREFRecords(refArr)

        } catch (e) {

        }
    }
    const addWhiteList = async () => {
        let arr = []
        for (let i = 0; i < addWhiteArr.length; i++) {
            arr.push(form2.getFieldValue()["address" + i])
        }
        await handleDealMethod("addWhiteList", [arr])
        getAdminWhiteList()
    }
    const getMaxThree = async () => {
        let res = await handleViewMethod("maxThree", [])
        setMaxThree(res)
    }
    const removeWhiteList = async () => {
        await handleDealMethod("removeWhiteList", [form2.getFieldValue().address])
        getAdminWhiteList()
    }
    const removeWhiteListUser = async () => {
        await handleDealMethod("removeWhiteList", [curWhiteUser.user])
        setDelOpen(false)
        getAdminWhiteList()
    }

    const deleteWhite = async (user) => {
        setCurWhiteUser(user)
        setDelOpen(true)
    }

    useEffect(() => {
        if (!state.account) return
        getAdminWhiteList()
        getMaxThree()
    }, [state.account]);


    return (
        <AddThreeWhiteListStyle>
            <Modal className="model-dialog" title="Delete WhiteList User" open={isDelMolOpen} onOk={removeWhiteListUser}
                   onCancel={() => {
                       setDelOpen(false)
                   }}>
                <h3>
                    PID
                </h3>
                <div className="value">
                    {curWhiteUser.Pid}
                </div>
                <h3>
                    UserName
                </h3>
                <div className="value">
                    {curWhiteUser.name}
                </div>
                <h3>
                    Wallet Address
                </h3>
                <div className="value">
                    {curWhiteUser.user}
                </div>
            </Modal>
            <div className="part3">
                <div className="panel-box">
                    <div className="panel-container">
                        <h3 className="tip">
                            I can have <strong>{maxThree}</strong> whitelists, I've
                            got <strong>{adminWhiteList.length}</strong> whitelists, I can
                            have <strong>{maxThree - adminWhiteList.length}</strong> whitelists.

                        </h3>
                        <div className="fire-list-box">
                            <div className="list-header3 flex-box">
                                <div className="col">
                                    No.
                                </div>
                                <div className="col">
                                    PID
                                </div>
                                <div className="col">
                                    Username
                                </div>
                                <div className="col">
                                    Address
                                </div>
                                <div className="col">
                                    Del
                                </div>

                            </div>

                            {
                                adminWhiteList.map((item, index) => (
                                    <div className="list-item row3-list-item" key={index}>
                                        <div className="col no">
                                            {index + 1}
                                        </div>
                                        <div className="col id">
                                            {item.Pid}
                                        </div>
                                        <div className="col">
                                            {item.name}
                                        </div>
                                        <div className="col address">
                                            <a href={develop.ethScan + "address/" + item.user} target="_blank">
                                                {item.user.substr(0, 6) + "..." + item.user.substr(item.user.length - 6, item.user.length)}
                                            </a>
                                        </div>
                                        <Button className="col" onClick={() => {
                                            deleteWhite(item)
                                        }}>
                                            Delete
                                        </Button>

                                    </div>)
                                )
                            }

                        </div>

                        <Form form={form2} name="control-hooks" className="form">

                            {addWhiteArr.map((item, index) => {
                                return (
                                    <Form.Item
                                        name={"address" + index}
                                        validateTrigger="onBlur"
                                        label="Address"
                                        validateFirst={true}
                                    >
                                        <div className="input-box">
                                            {/*<Input type="text" value={addressValue} onChange={handleInputChange}*/}
                                            {/*       onPaste={handlePaste}/>*/}
                                            <Input type="text"></Input>
                                        </div>
                                    </Form.Item>
                                )
                            })}
                            <div className="icon-box">
                                <svg onClick={() => {
                                    addOneWhite()
                                }} t="1679715594436" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="2724" width="30" height="30">
                                    <path
                                        d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z m192 448h-128v128c0 35.392-28.608 64-64 64a64 64 0 0 1-64-64v-128h-128a64 64 0 1 1 0-128h128v-128a64.021333 64.021333 0 0 1 128 0v128h128a64 64 0 0 1 64 64c0 35.392-28.608 64-64 64z"
                                        fill="#ffffff" p-id="2725"></path>
                                </svg>
                                <svg onClick={() => {
                                    removeOneWhite()
                                }} t="1679716770324" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="3771" width="30" height="30">
                                    <path
                                        d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z m192 448H320a64 64 0 1 1 0-128h384a64 64 0 0 1 64 64c0 35.392-28.608 64-64 64z"
                                        fill="#ffffff" p-id="3772"></path>
                                </svg>
                            </div>
                        </Form>
                        <div className="btns">
                            <Button className="add-btn" type="primary" onClick={() => {
                                addWhiteList()
                            }}>Add Whitelist</Button>
                            <Button className="add-btn" type="primary" onClick={() => {
                                removeWhiteList()
                            }}>Remove</Button>
                        </div>

                    </div>
                </div>
            </div>


        </AddThreeWhiteListStyle>
    )
}
export default AddWhiteList
