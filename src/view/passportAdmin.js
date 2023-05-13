import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../api/contracts";
import {Card, Button, Switch, message, Form, Input, notification} from 'antd';
import {getContractByName} from "../api/connectContract";
import {dealMethod,viewMethod } from "../utils/contractUtil"

const AdminPage = (props) => {
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [form3] = Form.useForm();
    const [form4] = Form.useForm();
    const [form5] = Form.useForm();
    const [form6] = Form.useForm();
    const [form7] = Form.useForm();
    const [form8] = Form.useForm();
    const AdminPage = styled.div`
      .ant-card{
        margin-top: 2em;
        .info{
          margin-bottom: 1em;
          box-shadow: #fff 0px 0px 2px;
          padding: 10px;
        }
      }
      .info-box {
        width: 1200px;
        margin: 3em auto;
        border-radius: 30px;

        .connect {
          margin: 3em 0;
        }
      }
    `

    let {state, dispatch} = useConnect();
    const [contract, setContract] = useState(null)
    const [isFeeOn, setIsFeeOn] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const [owner, setOwner] = useState(false)
    const [fee, setFee] = useState(0.008)
    const [feeReceiverAddress, setFeeReceiver] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        await setContract(contractTemp)
        dealMethod(contractTemp, state.account, name, params)
    }
    const handleDealReputationMethod = async (name, params) => {
        let contractTemp = await getContractByName("Reputation", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        await setContract(contractTemp)
        dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewReputationMethod = async (name, params) => {
        let contractTemp = await getContractByName("Reputation", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        await setContract(contractTemp)
       return  viewMethod(contractTemp, state.account, name, params)
    }
    const handleSetFee = async () => {
        if (!contract) {
            let contractTemp = await getContractByName("user", state.api,)
            if (!contractTemp) {
                openNotification("Please connect")
            }
            await setContract(contractTemp)
        }
        let {Fee} = {...(form.getFieldsValue())}
        handleDealMethod("setFee", [Fee*10**18])
    }
    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setIsFeeOn(checked)
    };

    const onChangeIsPause = (checked) => {
        console.log(`switch to ${checked}`);
        setIsPause(checked)
    };
    const handleChangeOwner = async () => {
        if (!contract) {
            let contractTemp = await getContractByName("user", state.api,)
            await setContract(contractTemp)
        }
        let {address} = {...(form7.getFieldsValue())}
        handleDealMethod("changeOwner", [address])
    }
    const handleSetFeeOn = async () => {
        if (!contract) {
            let contractTemp = await getContractByName("user", state.api,)
            await setContract(contractTemp)
        }

        handleDealMethod("setFeeOn", [isFeeOn])
    }
    const pauseRegister = async () => {
        if (!contract) {
            let contractTemp = await getContractByName("user", state.api,)
            await setContract(contractTemp)
        }

        handleDealMethod("pauseRegister", [isPause])
    }
    const changeFeeReceiver = async () => {
        if (!contract) {
            let contractTemp = await getContractByName("user", state.api,)
            await setContract(contractTemp)
        }

        let {Address} = {...(form2.getFieldsValue())}
        console.log(Address)

        handleDealMethod("changeFeeReceiver", [Address])

    }
    const addSBTAddress = async () => {
        handleDealReputationMethod("addSBTAddress", [form3.getFieldValue()._sbt, form3.getFieldValue()._coefficient])
    }
    const setSBTAddress = async () => {
        handleDealReputationMethod("setSBTAddress", [form4.getFieldValue().num, form4.getFieldValue()._sbt])
    }
    const setCoefficient= async () => {
        handleDealReputationMethod("setCoefficient", [form5.getFieldValue().num, form5.getFieldValue()._coefficient])
    }
    const checkReputation= async () => {
        let res = await handleViewReputationMethod("checkReputation", [form6.getFieldValue().user, ])
        alert(res)
    }
    const getPassportAdmin =async ()=>{
        const owner = await handleUserViewMethod("owner", [])
        setOwner(owner)
        if (state.account.toLowerCase() == owner.toString().toLowerCase()) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }
    const feeOn = async () => {
        return await handleUserViewMethod("feeOn",[])

    }

    const getPause = async () => {
        let isP =  await handleUserViewMethod("pause",[])
        setIsPause(isP)
    }
    const feeReceiver = async () => {
        let feeR =  await handleUserViewMethod("feeReceiver",[])
        setFeeReceiver(feeR)
    }
    const getFee = async () => {
        return await  handleUserViewMethod("fee",[])
    }
    const getFeeInfo =async ()=>{
        const isOpenFeeOn = await feeOn()
        console.log(isOpenFeeOn)
        setIsFeeOn(isOpenFeeOn)
        if (isOpenFeeOn) {
            let feeValue = await getFee() / 10 ** 18
            setFee(feeValue)
        }
    }
    const setBaseURI = async () => {
        handleDealMethod("setBaseURI", [form8.getFieldValue().BaseURL])
    }
    useEffect(()=>{
        getPassportAdmin()
        getFeeInfo()
        feeReceiver()
        getPause()

    },[state.account])
    return (
        <AdminPage>
            {isAdmin&&(
                <div>
                    <h2>User</h2>
                    <Card title="changeOwner修改管理员" extra={<a href="#"></a>} style={{width: "50vw"}}>
                        <div className="info">
                            <strong>当前管理员：</strong>
                            <span>{owner}</span>
                        </div>
                        <Form form={form7} name="control-hooks">
                            <div className="input-box">
                                <Form.Item
                                    name="address"
                                    label="owner address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input owner Address!'},
                                    ]}

                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                        </Form>
                        <Button onClick={() => {
                            handleChangeOwner()
                        }}>修改</Button>
                    </Card>
                    <Card title="setFee修改费用" extra={<a href="#"></a>} style={{width: "50vw"}}>
                        <div className="info">
                            <strong>当前费用：</strong>
                            <span>{fee}</span>
                        </div>
                        <Form form={form} name="control-hooks">
                            <div className="input-box">
                                <Form.Item
                                    name="Fee"
                                    label="Fee"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input Fee!'},
                                    ]}

                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                        </Form>
                        <Button onClick={() => {
                            handleSetFee()
                        }}>修改</Button>
                    </Card>
                    <Card title="setFeeOn费用开关" extra={<a href="#"></a>} style={{width: "50vw"}}>
                        <div className="info">
                            <strong>当前状态：</strong>
                            <span>{isFeeOn&&"开启"} {!isFeeOn&&"关闭"}</span>
                        </div>
                        <Switch defaultChecked onChange={onChange}/>
                        <Button onClick={() => {
                            handleSetFeeOn()
                        }}>打开/关闭</Button>
                    </Card>

                    <Card title="changeFeeReceiver修改费用接收地址" extra={<a href="#"></a>} style={{width: "50vw"}}>
                        <div className="info">
                            <strong>当前费用接收地址：</strong>
                            <span>{feeReceiverAddress} </span>
                        </div>

                        <Form form={form2} name="control-hooks">
                            <div className="input-box">
                                <Form.Item
                                    name="Address"
                                    label="Address"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input Address!'},
                                    ]}

                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                        </Form>
                        <Button onClick={() => {
                            changeFeeReceiver()
                        }}>修改</Button>
                    </Card>
                    <Card title="pauseRegister暂停护照开关" extra={<a href="#"></a>} style={{width: "50vw"}}>
                        <div className="info">
                            <strong>当前状态：</strong>
                            <span>{isPause&&"暂停"} {!isPause&&"未暂停"}</span>
                        </div>
                        <Switch defaultChecked onChange={onChangeIsPause}/>
                        <Button onClick={() => {
                            pauseRegister()
                        }}>打开/关闭</Button>
                    </Card>
                    <Card title="setBaseURI 护照管理：" extra={<a href="#"></a>} style={{width: "50vw"}}>
                        <div className="info">
                            <strong>BaseURL地址</strong>
                            <span>{feeReceiverAddress} </span>
                        </div>

                        <Form form={form8} name="control-hooks">
                            <div className="input-box">
                                <Form.Item
                                    name="BaseURL"
                                    label="BaseUrl"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input BaseUrl!'},
                                    ]}

                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                        </Form>
                        <Button onClick={() => {
                            setBaseURI()
                        }}>修改</Button>
                    </Card>
                </div>
            )}

        </AdminPage>
    )
}
export default AdminPage
