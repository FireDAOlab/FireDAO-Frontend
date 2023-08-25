import React, {useEffect, useRef, useState} from 'react';
import {formatAddress} from "../../../../utils/publicJs";
import {useConnect} from "../../../../api/contracts";
import {
    Button,
    message,
    Form,
    Input, Modal,

} from 'antd';
import {getContractByName, getContractByContract} from "../../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../../utils/contractUtil"
import develop from "../../../../env";
import AddThreeWhiteListStyle from "./OgAdminLevelStyle";
import judgeStatus from "../../../../utils/judgeStatus";


const AddThreeWhiteList = ({allRecords, isLevel2, isThreeAdmin,isFourAdmin}) => {
    let {state, dispatch} = useConnect();
    const [addWhiteArr, setAddWArr] = useState([{}])
    const [curWhiteUser, setCurWhiteUser] = useState("")

    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [isDelMolOpen, setDelOpen] = useState(false)
    const [adminWhiteList, setAdminWhiteList] = useState([])
    const [refRecords, setREFRecords] = useState([])
    const [maxSet, setMax] = useState(0)
    const [canSetLevel, setCanSetLevel] = useState(0)


    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOGV5", state.api,)
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
        let contractTemp = await getContractByName("PrivateExchangePoolOGV5", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const getUserSetAdminsLevelThree = async () => {
        try {
            let length = await handleViewMethod("getAdminsLevelThreeLength", [state.account])
            let adminWhiteList = []
            for (let i = 0; i < length; i++) {
                let res = await handleViewMethod("setAdminLevelThree_", [state.account, i])
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
    const getUserSetAdminsLevelFive = async () => {
        try {
            let length = await handleViewMethod("getAdminsLevelFiveLength", [state.account])
            let adminWhiteList = []
            for (let i = 0; i < length; i++) {
                let res = await handleViewMethod("setAdminLevelFive_", [state.account, i])
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
            console.log(e)
        }
    }
    const getUserSetAdminsLevelFour = async () => {
        try {
            let length = await handleViewMethod("getAdminsLevelFourLength", [state.account])
            let adminWhiteList = []
            for (let i = 0; i < length; i++) {
                let res = await handleViewMethod("setAdminLevelFour_", [state.account, i])
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
            console.log(e)
        }
    }
    const handleSetAdminLevelFour = async () => {
        let arr = []
        for (let i = 0; i < addWhiteArr.length; i++) {
            arr.push(form2.getFieldValue()["address" + i])
        }
        await handleDealMethod("setAdminLevelFour", [arr])
        getUserSetAdminsLevelFour()
    }
    const handleSetAdminLevelFive = async () => {
        let arr = []
        for (let i = 0; i < addWhiteArr.length; i++) {
            arr.push(form2.getFieldValue()["address" + i])
        }
        await handleDealMethod("setAdminLevelFive", [arr])
        getUserSetAdminsLevelFive()
    }
    const handleSetAdminLevelThree = async () => {
        let arr = []
        for (let i = 0; i < addWhiteArr.length; i++) {
            arr.push(form2.getFieldValue()["address" + i])
        }
        await handleDealMethod("setAdminLevelThree", [arr])
        getUserSetAdminsLevelThree()
    }

    const getMaxThree = async () => {
        let res
        if (isLevel2) {
            res = await handleViewMethod("maxTwo", [])
        } else if(isThreeAdmin){
            res = await handleViewMethod("maxThree", [])
        }else{
            res = await handleViewMethod("maxFour", [])
        }
        setMax(res.toString())
    }

    const removeWhiteListUser = async () => {
        if (isLevel2) {
            await handleDealMethod("removeAdminLevelThree", [curWhiteUser])
            getUserSetAdminsLevelThree()
        } else {
            await handleDealMethod("removeAdminLevelFour", [curWhiteUser])
            getUserSetAdminsLevelFour()

        }
        setDelOpen(false)

    }

    const deleteWhite = async (user) => {
        setCurWhiteUser(user)
        setDelOpen(true)
    }

    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        console.log(isThreeAdmin)
        if (isLevel2) {
            getUserSetAdminsLevelThree()
            setCanSetLevel(3)
        } else if(isThreeAdmin){
            getUserSetAdminsLevelFour()
            setCanSetLevel(4)
        }else if(isFourAdmin){
            getUserSetAdminsLevelFive()
            setCanSetLevel(5)
        }
        getMaxThree()
    }, [state.account]);


    return (
        <AddThreeWhiteListStyle>

            <div className="part3">
                <Modal className="model-dialog" title="Delete  Dialog" open={isDelMolOpen} onOk={removeWhiteListUser}
                       onCancel={() => {
                           setDelOpen(false)
                       }}>
                    <h3>
                        Wallet Address
                    </h3>
                    <div className="value">
                        {curWhiteUser}
                    </div>
                </Modal>
                <div className="panel-box">
                    <div className="panel-container">
                        <h3 className="tip">
                            I can have <strong>{maxSet}</strong> level{canSetLevel} admin, I've
                            got <strong>{adminWhiteList.length}</strong> level{canSetLevel} admin, I can
                            set up <strong>{maxSet - adminWhiteList.length}</strong> level{canSetLevel} admin.

                        </h3>

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
                            {isLevel2 && <Button className="add-btn" type="primary" onClick={() => {
                                handleSetAdminLevelThree()
                            }}>Add Admin level3</Button>}

                            {isThreeAdmin && <Button className="add-btn" type="primary" onClick={() => {
                                handleSetAdminLevelFour()
                            }}>Add Admin level4</Button>}

                            {isFourAdmin && <Button className="add-btn" type="primary" onClick={() => {
                                handleSetAdminLevelFive()
                            }}>Add Admin level5</Button>}
                        </div>

                        <div className="fire-list-box admin3-list">
                            <div className="list-header3 list-header">
                                <div className="col">
                                    No.
                                </div>


                                <div className="col ">
                                    Address
                                </div>
                                <div className="col">
                                    Del
                                </div>

                            </div>

                            {
                                adminWhiteList.map((item, index) => (
                                    <div className="list-item " key={index}>
                                        <div className="col no">
                                            {index + 1}
                                        </div>

                                        <div className="col address">
                                            {item}
                                        </div>

                                        <div className="col">
                                            <Button className="del-button" onClick={() => {
                                                deleteWhite(item)
                                            }}>
                                                Delete
                                            </Button>
                                        </div>

                                    </div>)
                                )
                            }

                        </div>



                    </div>
                </div>
            </div>


        </AddThreeWhiteListStyle>
    )
}
export default AddThreeWhiteList
