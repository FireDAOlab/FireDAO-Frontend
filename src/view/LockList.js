import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../api/contracts";
import {Card, Button, Descriptions, message, Form,List, Input, notification} from 'antd';

import {getContractByName,getContractByContract} from "../api/connectContract";
import {dealMethod, viewMethod} from "../utils/contractUtil"
import {useNavigate} from "react-router-dom";
import moment from "moment"
const LockList = (props) => {
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const LockList = styled.div`
      .card {
        width: 100%;
      }

    `
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    let {state, dispatch} = useConnect();
    const [contract, setContract] = useState(null)
    const [list, setList] = useState([])
    const [allList, setAllList] = useState([])
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
        if (!contract) {
            let contractTemp = await getContractByName("fireLockFactory", state.api,)
            if (!contractTemp) {
                openNotification("Please connect")
            }
            await setContract(contractTemp)
        }
        dealMethod(contract, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("fireLockFactory", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod2 = async (name,address, params) => {
        let contractTemp = await getContractByContract("fireLock",address, state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod2 = async (name,address, params) => {
        let contractTemp = await getContractByContract("fireLock",address, state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        dealMethod(contractTemp, state.account, name, params)
    }
    const allLock = async ()=>{
        const listLength = await handleViewMethod("getLockList",[])
        let list = []
        if(listLength<=0){
            return
        }
        for(let i =0;i<listLength;i++){
            const address = await handleViewMethod("lockList", [state.account, i])
            list.push({
                address,
            })

        }
        console.log(listLength, list)
        setAllList(list)
    }
    const ownerLock = async () => {
        const listLength = await handleViewMethod("getOwnerLockLenglength",[])
        let list = []
        if(listLength<=0){
            return
        }
        for(let i =0;i<listLength;i++){
            const address = await handleViewMethod("ownerLock", [state.account, i])
            const LockInfo = await handleViewMethod2("ownerLockDetail",address,[state.account,0])

            let decimal = 18
            if(LockInfo&&LockInfo.token){
                let contractTemp = await getContractByContract("erc20", LockInfo.token, state.api,)
                decimal = await viewMethod(contractTemp, state.account, "decimals", [])
            }
            if(LockInfo){
                LockInfo.cliffPeriod =  moment(new Date(LockInfo.cliffPeriod * 1000)).format('YYYY-MM-DD, hh:mm:ss');
                LockInfo.ddl = moment(new Date(LockInfo.ddl * 1000)).format('YYYY-MM-DD, hh:mm:ss');
            }
            list.push({
                address,
                LockInfo,
                decimal
            })
        }

        console.log(listLength, list)
        setList(list)
    }
    useEffect(() => {
        ownerLock()
    }, [state.account]);
    const unlock = async (item)=>{
        // params _token
        handleDealMethod2("unlock",item.address,[item.LockInfo.token])
    }
    return (
        <LockList>
            <Button onClick={()=>{
                goPage("/CreateLock")
            }}>Back</Button>
            <Card className="card" title="Lock List" extra={<a onClick={() => {
                ownerLock()
            }} href="#">Check</a>}>
                <List
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.LockTitle}>
                                <Descriptions className="card-item" title="Lock Info"
                                >
                                    <Descriptions.Item label="Address">
                                        {
                                            item.address
                                        }
                                    </Descriptions.Item>
                                    {item.LockInfo&&(<div>
                                        <Descriptions.Item label="unlockRound"> {item.LockInfo?item.LockInfo.unlockRound:""}</Descriptions.Item>
                                        <Descriptions.Item label="unlockCycle"> {item.LockInfo?item.LockInfo.unlockCycle:""}</Descriptions.Item>
                                        <Descriptions.Item label="ddl"> {item.LockInfo?item.LockInfo.ddl:""}</Descriptions.Item>
                                        <Descriptions.Item label="cliff Period"> {item.LockInfo?item.LockInfo.cliffPeriod.toString():""}</Descriptions.Item>
                                        <Descriptions.Item label="token"> {item.LockInfo?item.LockInfo.token:""}</Descriptions.Item>
                                        <Descriptions.Item label="amount"> {item.LockInfo?item.LockInfo.amount / 10**item.decimal:""}</Descriptions.Item>
                                        <Descriptions.Item label="unlock">
                                            <Button onClick={()=>{
                                                unlock(item)
                                            }}>unlock</Button>
                                        </Descriptions.Item>

                                    </div>)}
                                    {
                                        !item.LockInfo&&(<div>
                                            未初始化（lock）
                                        </div>)
                                    }
                                </Descriptions>
                            </Card>
                        </List.Item>
                    )}
                />
                {/*{list.map(item=>{*/}
                {/*    return(*/}
                {/*        <div>*/}

                {/*            {item.address}*/}
                {/*            {item.LockInfo.LockTitle}*/}
                {/*            {item.LockInfo.amount}*/}
                {/*            {item.LockInfo.token}*/}
                {/*            {item.LockInfo.cliffPeriod}*/}
                {/*            {item.LockInfo.ddl}*/}
                {/*            {item.LockInfo.unlockCycle}*/}
                {/*            {item.LockInfo.unlockRound}*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}

            </Card>

        </LockList>
    )
}
export default LockList
