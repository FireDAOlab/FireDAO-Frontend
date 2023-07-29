import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import StyleBox from "./style"
const Reputation = (props) => {
    const [form] = Form.useForm();

    let {state, dispatch} = useConnect();
    const [PIDARR, setPIDARR] = useState([])

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
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleSeedViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getData = async () => {

        setPIDARR([])
    }
    const increase = ()=>{

    }

    useEffect(() => {
        getData()
    }, [state.account]);


    return (
        <StyleBox>
            <div className="panel-box">
                <div className="panel-title">
                    On-Chain Reputation
                </div>
                <div className="list-box">
                    <div className="list-box">
                        <div className="list-header flex-box">
                            <div className="col">
                                No
                            </div>
                            <div className="col">
                                Address
                            </div>
                            <div className="col">
                                Token Symbol
                            </div>
                            <div className="col">
                                Weight Coefficient
                            </div>
                        </div>
                        {
                            PIDARR.map(item=>(
                                <div className="list-item ">
                                    <div className="col">
                                        {item.id}
                                    </div>
                                    <div className="col">
                                    </div>
                                    <div className="col">
                                        {item.username}
                                    </div>
                                    <div className="col">
                                        {item.account}
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
            <div className="panel-box">
                <div className="panel-title">
                    Increase
                </div>
                <div className="panel-content">
                    <Form form={form}>

                        <Form.Item
                            name="Address"
                            label="Address:"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input Address!'},
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="WeightCoefficient"
                            label="Weight Coefficient"
                            validateTrigger="onBlur"
                            validateFirst={true}
                            rules={[
                                {required: true, message: 'Please input Weight Coefficient!'},
                            ]}

                        >
                            <div className="flex-box">
                                <Input/>

                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={() => {
                                increase()
                            }}>
                                Increase
                            </Button>
                        </Form.Item>
                    </Form>


                </div>
            </div>
        </StyleBox>
    )
}
export default Reputation
