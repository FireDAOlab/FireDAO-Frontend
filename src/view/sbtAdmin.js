import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../api/contracts";
import {Card, Button, Switch, message, Form, Input, notification} from 'antd';
import {getContractByName} from "../api/connectContract";
import {dealMethod,viewMethod } from "../utils/contractUtil"

const SbtAdmin = (props) => {
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [form3] = Form.useForm();
    const [form4] = Form.useForm();
    const [form5] = Form.useForm();
    const [form6] = Form.useForm();
    const [form7] = Form.useForm();
    const SbtAdmin = styled.div`
      .info-box {
        width: 1200px;
        margin: 3em auto;
        border-radius: 30px;

        .connect {
          margin: 3em 0;
        }
      }
      .list{
        .row{
          display: flex;
          Button{
            margin-left: 1em;
          }
        }
        header{
          display: flex;
        }
        .col{
          padding: 1em 2em ;
        }
        .col:nth-child(2){
          width: 500px;
        }
      }
    `
    let {state, dispatch} = useConnect();
    const [contract, setContract] = useState(null)
    const [feeOn, setFeeOn] = useState(false)
    const [sbtArr, setSbtArr] = useState([])
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
        console.log(contract)
        let {Fee} = {...(form.getFieldsValue())}
        handleDealMethod("setFee", [Fee])
    }
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setFeeOn(checked)
    };
    const handleSetFeeOn = async () => {
        if (!contract) {
            let contractTemp = await getContractByName("user", state.api,)
            await setContract(contractTemp)
        }

        handleDealMethod("setFeeOn", [feeOn])
    }
    const changeFeeReceiver = async () => {
        if (!contract) {
            let contractTemp = await getContractByName("user", state.api,)
            await setContract(contractTemp)
        }

        let {Address} = {...(form2.getFieldsValue())}
        handleDealMethod("changeFeeReceiver", [Address])

    }
    const addSBTAddress = async () => {
        handleDealReputationMethod("addSBTAddress", [form3.getFieldValue()._sbt, form3.getFieldValue()._coefficient])
    }
    const setSBTAddress = async () => {
        handleDealReputationMethod("setSBTAddress", [form4.getFieldValue().num-1, form4.getFieldValue()._sbt])
    }
    const changeSbt = async(item,index)=>{

        return
        handleDealReputationMethod("setSBTAddress", [index, item.sbt])
    }
    const setCoefficient= async () => {
        handleDealReputationMethod("setCoefficient", [form5.getFieldValue().num-1, form5.getFieldValue()._coefficient])
    }
    const transferOwnership = async () => {
        handleDealReputationMethod("transferOwnership", [form7.getFieldValue().address])
    }
    const changeCoe =  async (item,index) => {
        return
        handleDealReputationMethod("setCoefficient", [index,item.coefficient])
    }
    const checkReputation= async () => {
        let res = await handleViewReputationMethod("checkReputation", [form6.getFieldValue().user, ])
        alert(res/10**18)
    }
    const getSoulAccount = async()=>{

    }
    const getSbtInfo= async () => {
        let length = await handleViewReputationMethod("getSbtLength", [])
        let sbtArr = []
        for(let i=0;i<length;i++){
            let coefficient = await handleViewReputationMethod("coefficient", [i])
            let sbt = await handleViewReputationMethod("sbt", [i])
            sbtArr.push({
                sbt,
                coefficient
            })
        }

        setSbtArr(sbtArr)
    }
    useEffect(()=>{
        getSbtInfo()
    },[state.account])
    return (
        <SbtAdmin>
            <h2>Reputation</h2>
            <div className="panel-box">
                <div className="list ">
                    <header>
                        <div className="col">
                            No
                        </div>
                        <div className="col">
                            Address
                        </div>
                        <div className="col">
                            Weight Coefficient
                        </div>
                    </header>

                    {
                        sbtArr.map((item,index)=>{
                            return (
                                <div className="row">
                                    <div className="col">
                                        {index +1 }
                                    </div>
                                    <div className="col">
                                        {item.sbt}
                                        <Button onClick={()=>{changeSbt(item,index)}}>Change</Button>
                                    </div>
                                    <div className="col">
                                        {item.coefficient}
                                        <Button onClick={()=>{
                                            changeCoe(item,index)
                                        }}>Change</Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Card title="setSBTAddress" extra={<a href="#"></a>} style={{width: "50vw"}}>
                <Form form={form4} name="control-hooks">
                    <div className="input-box">
                        <Form.Item
                            name="num"
                            label="num"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input num!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="_sbt"
                            label="_sbt"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input _sbt!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>
                    </div>
                </Form>
                <Button onClick={() => {
                    setSBTAddress()
                }}>修改</Button>
            </Card>
            <Card title="setCoefficient调整权重" extra={<a href="#"></a>} style={{width: "50vw"}}>
                <Form form={form5} name="control-hooks">
                    <div className="input-box">
                        <Form.Item
                            name="num"
                            label="num"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input num!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="_coefficient"
                            label="_coefficient"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input _coefficient!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>
                    </div>
                </Form>
                <Button onClick={() => {
                    setCoefficient()
                }}>修改</Button>
            </Card>

            <Card title="addSBTAddress增加新的合约" extra={<a href="#"></a>} style={{width: "50vw"}}>
                <Form form={form3} name="control-hooks">
                    <div className="input-box">
                        <Form.Item
                            name="_sbt"
                            label="_sbt"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input _sbt!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="_coefficient"
                            label="_coefficient"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input _coefficient!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>
                    </div>
                </Form>
                <Button onClick={() => {
                    addSBTAddress()
                }}>修改</Button>
            </Card>
            <Card title="checkReputation检查某个地址权重参数" extra={<a href="#"></a>} style={{width: "50vw"}}>
                <Form form={form6} name="control-hooks">
                    <div className="input-box">
                        <Form.Item
                            name="user"
                            label="user"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input user!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>

                    </div>
                </Form>
                <Button onClick={() => {
                    checkReputation()
                }}>查看</Button>
            </Card>
            <Card title="transferOwnership转移管理员吧" extra={<a href="#"></a>} style={{width: "50vw"}}>
                <Form form={form7} name="control-hooks">
                    <div className="input-box">
                        <Form.Item
                            name="address"
                            label="address"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input address!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>

                    </div>
                </Form>
                <Button onClick={() => {
                    transferOwnership()
                }}>转移</Button>
            </Card>
        </SbtAdmin>
    )
}
export default SbtAdmin
