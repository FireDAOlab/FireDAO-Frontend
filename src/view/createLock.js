import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../api/contracts";
import {Card, Button, Radio, Switch, message, Form, Input, notification} from 'antd';
import {SendOutlined, TwitterOutlined, UserOutlined,UserAddOutlined,UserDeleteOutlined} from "@ant-design/icons";
import {getContractByContract, getContractByName} from "../api/connectContract";
import {dealMethod, viewMethod} from "../utils/contractUtil"
import {useNavigate} from "react-router-dom";
import moment from "moment"
const CreatePage = (props) => {
    const [form] = Form.useForm();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const CreatePage = styled.div`
      .info-box {
        width: 1200px;
        margin: 3em auto;
        border-radius: 30px;

        .connect {
          margin: 3em 0;
        }
      }
      .address-list{
        .address-item{
          display: flex;
          .address{
            width: 20em;
          }
          .number{
            width: 10em;
          }
          cursor: pointer;
          .icon{
            width: 50px;
            line-height: 30px;
            font-size: 26px;
          }
        }
      }
    `
    let {state, dispatch} = useConnect();
    const [contract, setContract] = useState(null)

    const [coinInfo, setCoinInfo] = useState({})
    const [isTerminatePermission, setIsTP] = useState(false)
    const [isChooseManage, setIsCM] = useState(1)
    const [endTime, setEndTime] = useState("")
    const [ownerType, setOwnerType] = useState(1)
    const [ownerArr, setOwnerArr] = useState(['owner0'])
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
        let contractTemp = await getContractByName("fireLockFactory", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleDealCoinMethod = async (name, address, params) => {
        let contractTemp = await getContractByContract("erc20", address, state.api,)
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        if (!contract) {
            let contractTemp = await getContractByName("fireLockFactory", state.api,)
            if (!contractTemp) {
                openNotification("Please connect")
            }
            await setContract(contractTemp)
        }
        return await viewMethod(contract, state.account, name, params)
    }
    const handleDealMethod2 = async (name, address, params) => {
        let contractTemp = await getContractByContract("fireLock", address, state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        dealMethod(contractTemp, state.account, name, params)
    }
    const createLock = async () => {
        await handleDealMethod("createLock", [])
    }
    const approve = async () => {
        const listLength = await handleViewMethod("getOwnerLockLenglength", [])
        const address = await handleViewMethod("ownerLock", [state.account, listLength - 1])
        /*eslint-disable*/
        handleDealCoinMethod("approve", form.getFieldValue().TokenAddress.toString().trim(), [address, BigInt(10 ** 50).toString()])
    }
    const lock = async () => {
        const listLength = await handleViewMethod("getOwnerLockLenglength", [])
        const address = await handleViewMethod("ownerLock", [state.account, listLength - 1])
        const {TokenAddress, CliffPeriod, UnlockCycle, UnlockRound, Amount, Title} = form.getFieldValue()
        let amount = 0
        if(coinInfo.decimal&&parseInt(coinInfo.decimal)>0){
            amount = BigInt(Amount* parseInt((10**coinInfo.decimal))).toString()

        }else{
            /*eslint-disable*/
            amount = BigInt(Amount*10**18).toString()
            message.error("please input Token Address")
        }
        if(!Amount){
            message.error("please input Amount")
        }
        if(ownerType==2){
            let _rate=[],_to=[]
            for (let i=0;i<ownerArr.length;i++){
                _to.push(form.getFieldValue()["owner"+i])
                _rate.push(form.getFieldValue()["rate"+i])
            }
            await handleDealMethod2("groupLock", address, [TokenAddress.toString().trim(), UnlockCycle, UnlockRound, amount,_to,_rate,Title, CliffPeriod,  isTerminatePermission])

        }else{
            await handleDealMethod2("lock", address, [TokenAddress.toString().trim(), UnlockCycle, UnlockRound, amount, CliffPeriod, Title, isTerminatePermission])
        }

    }

    const checkAddress = async (value) => {
        console.log(value)
        let contractTemp = await getContractByContract("erc20", value.toString().trim(), state.api,)
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        const name = await viewMethod(contractTemp, state.account, "name", [])
        const symbol = await viewMethod(contractTemp, state.account, "symbol", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [state.account])
        balance = balance / (10 ** parseInt(decimal))
        setCoinInfo({
            name,
            symbol,
            decimal,
            balance
        })
    }
    const getEndTime = (type)=>{
        console.log("getEndTime")
        let CliffPeriod = form.getFieldValue().CliffPeriod
        let UnlockCycle = form.getFieldValue().UnlockCycle
        let UnlockRound = form.getFieldValue().UnlockRound
        console.log(CliffPeriod,UnlockCycle,UnlockRound,form.getFieldValue())
        let endTime = moment(new Date()).format('YYYY-MM-DD, hh:mm:ss');

        if(CliffPeriod&&parseInt(CliffPeriod)>0 && UnlockCycle&&UnlockRound&&parseInt(UnlockCycle)>0 &&(parseInt(UnlockRound)>0)){
            const dateTime = new Date().getTime()
            console.log( parseInt(UnlockRound) *parseInt(UnlockCycle))
            let date= new Date(dateTime  + parseInt(UnlockRound) *parseInt(UnlockCycle) * 86400000 + parseInt(CliffPeriod) * 86400*1000)
            endTime = moment(date).format('YYYY-MM-DD, hh:mm:ss');
        }else if(CliffPeriod&&parseInt(CliffPeriod)>0){
            const dateTime = new Date().getTime()
            let date= new Date(dateTime  + parseInt(CliffPeriod) * 86400*1000)
            endTime= moment(date).format('YYYY-MM-DD, hh:mm:ss');
        }
        setEndTime(endTime)
    }
    const removeOwner = ()=>{
        let tempArr =  Object.assign([],ownerArr)
        tempArr.shift()
        setOwnerArr(tempArr)
    }
    const addOwner = ()=>{
        let tempArr =  Object.assign([],ownerArr)
        tempArr.push('owner' + tempArr.length)
        setOwnerArr(tempArr)
    }
    return (
        <CreatePage>
            <Card title="Create your contract lock" extra={<a href="#"></a>} >
                <Form form={form} name="control-hooks">
                    <div className="input-box">
                        <Form.Item
                            name="Title"
                            label="Title"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input Title!'},
                            ]}

                        >
                            <Input/>
                        </Form.Item>
                    </div>
                    <div className="input-box">
                        <Form.Item
                            name="TokenAddress"
                            label="TokenAddress"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input TokenAddress!'},
                                {
                                    validator: (rule, value, fn) => {
                                        checkAddress(value, fn)
                                    }
                                }
                            ]}

                        >
                            <Input/>
                        </Form.Item>
                    </div>
                    {coinInfo.name&&(
                        <div>
                            <Form.Item
                                label="Name"
                            >
                                {coinInfo.name}
                            </Form.Item>
                            <Form.Item
                                label="Symbol"
                            >
                                {coinInfo.symbol}
                            </Form.Item>
                            <Form.Item
                                label="Decimals"
                            >{coinInfo.decimal}
                            </Form.Item>
                            <Form.Item
                                label="Balance"
                            >{coinInfo.balance}
                            </Form.Item>
                        </div>
                        )
                    }
                    <Form.Item
                        name="Amount"
                        label="Amount"
                        validateTrigger="onBlur"
                        validateFirst={true}
                        rules={[
                            {required: true, message: 'Please input Amount!'},
                        ]}

                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="Owner"
                        label="Owner"
                        className="no-bg"
                        initialValue={1}
                    >
                        <Radio.Group onChange={(e)=>{
                            setOwnerType(e.target.value)
                        }} defaultValue={1}>
                            <Radio value={1}>Itself</Radio>
                            <Radio value={2}>Other</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {ownerType==2&&(<div>
                        <div className="address-list">
                            {ownerArr.map((item, index)=>{
                                return (
                                    <div className="address-item" key={index}>
                                        <Form.Item
                                            name={item}
                                            label="Owner"
                                        >
                                            <div className="flex-box">
                                                <Input className="address"/>
                                            </div>
                                        </Form.Item>
                                        <Form.Item
                                            name={"rate"+index}
                                            label="Rate"
                                        >
                                            <div className="flex-box">
                                                <Input className="number" type="number" max={100}/>
                                            </div>
                                        </Form.Item>
                                        {(ownerArr.length>1&&index==0)&&(   <UserDeleteOutlined  className="icon" onClick={()=>{
                                            removeOwner()
                                        }}/>)}
                                        {(index==ownerArr.length-1)&&(   <UserAddOutlined  className="icon" onClick={()=>{
                                            addOwner()
                                        }}/>)}
                                    </div>
                                )
                            })}
                        </div>
                    </div>)}
                    <Form.Item
                        name="Terminate permission"
                        label="Terminate permission"
                        validateTrigger="onBlur"
                        validateFirst={true}
                        rules={[
                            {required: true, message: 'Please input Amount!'},
                        ]}

                    >
                        <Switch checked={isTerminatePermission} onChange={(value) => {
                            setIsTP(value)
                        }}/>
                    </Form.Item>
                    {
                        isTerminatePermission&&(<div>
                            <Form.Item
                                name="ContractManager"
                                label="Contract Manage"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input Contract Manage!'},
                                ]}

                            >
                                <Radio.Group value={isChooseManage} onChange={(e) => {
                                    setIsCM(e.target.value)
                                }}>
                                    <Radio value={1}>itSelf</Radio>
                                    <Radio value={2}>other</Radio>

                                </Radio.Group>
                            </Form.Item>
                        </div>)
                    }

                    {(isChooseManage == 2) && (
                        <Form.Item
                            name="ManageAddress"
                            label="Manage Address"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input Manage!'},
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    )}
                    <h2>Lock Parameters</h2>
                    <div>
                        <Form.Item
                            name="CliffPeriod"
                            label="Cliff Period"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input Cliff Period!'},
                            ]}
                        >
                            <Input type="number" onBlur={()=>{getEndTime(1)}}/>
                        </Form.Item>
                        Days
                    </div>
                    <Form.Item
                        name="UnlockCycle"
                        label="Unlock Cycle"
                        validateTrigger="onBlur"
                        validateFirst={true}
                        rules={[
                            {required: true, message: 'Please input Unlock Cycle!'},
                        ]}
                    >
                        <Input type="number" onBlur={()=>{getEndTime(2)}}/>
                    </Form.Item>
                    <Form.Item
                        name="UnlockRound"
                        label="Unlock Round"
                        validateTrigger="onBlur"
                        validateFirst={true}
                        rules={[
                            {required: true, message: 'Please input Unlock Round!'},
                        ]}
                    >
                        <Input type="number" onBlur={()=>{getEndTime(2)}}/>
                    </Form.Item>
                    {endTime&&(
                        <div>
                            <Form.Item
                                label="End Time"
                                validateFirst={true}
                            >
                                {endTime}
                            </Form.Item>
                    </div>)
                    }
                </Form>


                <Button onClick={() => {
                    createLock()
                }}>初始化(createLock)</Button>
                <Button onClick={() => {
                    approve()
                }}>授权(approve)</Button>
                <Button onClick={() => {
                    lock()
                }}>创建(lock)</Button>
                <Button onClick={() => {
                    goPage("/LockList")
                }}>
                    查看列表
                </Button>
            </Card>

        </CreatePage>
    )
}
export default CreatePage
