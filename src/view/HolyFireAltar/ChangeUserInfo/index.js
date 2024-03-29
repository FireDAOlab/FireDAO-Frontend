import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {getContractByName} from "../../../api/connectContract"
import {Button, Form, message, Input, Tooltip, notification} from 'antd';
import {uploadJson, uploadFile} from "../../../utils/ipfsApi"
import {useNavigate} from 'react-router-dom'
import {
    TwitterOutlined,
    SendOutlined,
    UserOutlined
} from '@ant-design/icons';
import {dealMethod,dealPayMethod} from "../../../utils/contractUtil";
import StyleBox from "./style"
const ChangeUserInfo = (props) => {
    const [form] = Form.useForm();

    let {state, dispatch} = useConnect();

    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
                console.log('');
            },
        });
    };

    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        dealMethod(contractTemp, state.account, name, params)
    }
    let handleChange = async () => {
        let { BIO, Email, Twitter, telegram, Website} = {...(form.getFieldsValue())}
        let errList = form.getFieldsError()
        let isPass = true
        for (let i = 0; i < errList.length; i++) {
            if (errList[i].errors.length > 0) {
                errList[i].errors.forEach(err => {
                    openNotification(err)
                })
                isPass = false
            }
        }
        if (!isPass) {
            return
        }

        if (!Email ) {
            openNotification("Please input Email")
            return
        }

        const hide1 = message.loading('Upload User Info', 0);
        let jsonUrl = await uploadJson({
            name: state.userInfo.username,
            BIO,
            Email,
            Twitter,
            telegram,
            Website
        })

        setTimeout(hide1, 1000);

        handleDealMethod("changeUserInfo",[ jsonUrl.IpfsHash])
    };
    const history = useNavigate();
    const goPath = (url) => {
        history(url);
    }
    const getData =async ()=>{

    }
    useEffect(() => {
        getData()
    }, [state.account]);
    const Table = () => {

        const {TextArea} = Input;
        return (
            <Form form={form} name="control-hooks">

                <Form.Item
                    label=" User Name"
                >
                    <div className="username">
                        {state.userInfo.username}
                    </div>
                </Form.Item>
                <Form.Item
                    name="Email"
                    label=" Email"
                    rules={[{required: true, message: 'Please input your Email!'},
                        {max: 50, message: "Email length need < 50"},

                        {
                            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                            message: "Email error"
                        }
                    ]}
                >
                    <Input allowClear/>
                </Form.Item>
                <Form.Item
                    name="BIO"
                    label="BIO"
                    initialValue={"Let's build the Bit Civilization together!"}
                    rules={[
                        {max: 200, message: "BIO length need < 200"},]}
                >
                    <TextArea defaultValue={"Let's build the Bit Civilization together!"}  allowClear/>
                </Form.Item>
                <Form.Item
                    name="Twitter"
                    label="Twitter"
                    initialValue={"FireDAOlab"}
                    rules={[
                        {max: 50, message: "Twitter length need < 50"},]}
                >
                    <Input
                        prefix={<TwitterOutlined/>}
                        defaultValue={"FireDAOlab"}
                        allowClear
                    />
                </Form.Item>
                <Form.Item
                    name="telegram"
                    label="Telegram"
                    initialValue={"FireDAOEN"}
                    rules={[
                        {max: 50, message: "Telegram length need < 50"},]}
                >
                    <Input
                        prefix={<SendOutlined/>}
                        defaultValue={"FireDAOEN"}
                        allowClear
                    />
                </Form.Item>
                <Form.Item
                    name="Website"
                    label="Website"
                    initialValue={"www.FireDAO.co"}
                    rules={[
                        {max: 50, message: "Website length need < 50"},]}
                >
                    <Input defaultValue={"www.FireDAO.co"} allowClear
                    />
                </Form.Item>
                <Form.Item className="button-box">
                    <Button className="subBtn" htmlType="submit" type="primary"
                            onClick={() => handleChange()}>Update</Button>
                </Form.Item>

            </Form>
        )
    }
    return (
        <StyleBox className='daoHome daoContentBg'>
            <div className=" panel-box">
                <div className="panel-container">
                    <h2 className="panel-title">
                        Edit
                        <div className="close" onClick={()=>{goPath("/MyPassport")}}>
                            x
                        </div>
                    </h2>
                    <div className="content-box ">
                        {Table()}
                    </div>
                </div>
            </div>

        </StyleBox>
    )
}

export default ChangeUserInfo
