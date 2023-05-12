import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {getIpfs, uploadJson} from "../../../utils/ipfsApi";
import headerImg from "../../../imgs/header_icon.webp"
import {useNavigate} from "react-router-dom";
import {getRecords} from "../../../graph/treasury";
import judgeStatus from "../../../utils/judgeStatus";
import CreateCityNode from "./style"
import cityNodeImg from "../../../imgs/cityNode_img.png"
const CityNode = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [myClassAddress, setMyClass] = useState("")
    const [myClassPid, setMyClassPid] = useState(0)
    const [CityNode, setPassport] = useState("")
    const [score, setScore] = useState(0)

    const [form] = Form.useForm();

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

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("cityNode", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("cityNode", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleRepuViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("Reputation", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const checkReputation = async () => {
        const score = await handleRepuViewMethod("checkReputation", [state.account])
        setScore(score / 10 ** 18)
    }
    const createCityNode = async () => {
        const hide1 = message.loading('Upload User Info', 0);
        let jsonUrl = await uploadJson({
            name: form.getFieldValue().name,
            city: form.getFieldValue().city,
            intro: form.getFieldValue().introdution
        })
        setTimeout(hide1, 1000);
        handleDealMethod("createCityNode", [form.getFieldValue().name, jsonUrl.IpfsHash]).then(() => {
            history("/CityNode")
        })
    }

    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        checkReputation()
    }, [state.account, state.networkId]);


    return (
        <CreateCityNode>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    Create City Node
                </div>
                <div className="panel-container create-content">
                    <div className="left-part">
                        <img src={cityNodeImg} alt=""/>
                    </div>
                    <div className="right-part">
                        <div className="fid-score">
                            <div className="name">
                                FID Score
                            </div>
                            <div className="value">
                                {score}
                            </div>
                        </div>
                        <div className="content-item">
                            <h3>Owner Address</h3>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="name"
                                    label="city node name"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input city node name  !'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="city"
                                    label="city name"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input city node name  !'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="introdution"
                                    label="introdution"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input introdution!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="sub-btn" onClick={() => {
                                createCityNode()
                            }}>
                                Submit
                            </Button>

                        </div>
                    </div>

                </div>
            </div>

        </CreateCityNode>
    )
}
export default CityNode
