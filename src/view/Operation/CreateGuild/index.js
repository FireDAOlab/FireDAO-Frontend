import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {getIpfs, uploadFile, uploadJson} from "../../../utils/ipfsApi";
import headerImg from "../../../imgs/header_icon.webp"
import {useNavigate} from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {  Upload } from 'antd';
import {getRecords} from "../../../graph/treasury";
import judgeStatus from "../../../utils/judgeStatus";
import GuildStyle from "./style"
const CityNode = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
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
        let contractTemp = await getContractByName("Guild", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("Guild", state.api,)
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
    const create = async () => {
        const hide1 = message.loading('Upload User Info', 0);
        // let jsonUrl = await uploadJson({
        //     name: form.getFieldValue().GuildName,
        //     city: form.getFieldValue().limit,
        //     intro: form.getFieldValue().introduction
        // })
        setTimeout(hide1, 1000);
        handleDealMethod("createGuild", [ form.getFieldValue().GuildName,  form.getFieldValue().limit,form.getFieldValue().introduction]).then(() => {
            history("/Guild")
        }).catch(()=>{

        })
    }

    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        checkReputation()
    }, [state.account, state.networkId]);

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        uploadFile(file)

        return isJpgOrPng && isLt2M;
    };
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    return (
        <GuildStyle>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    Create Guild
                </div>
                <div className="panel-container create-content">
                    <div className="left-part">

                        {/*<Upload*/}
                        {/*    name="avatar"*/}
                        {/*    listType="picture-card"*/}
                        {/*    className="avatar-uploader"*/}
                        {/*    showUploadList={false}*/}
                        {/*    beforeUpload={beforeUpload}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    action="https://api.pinata.cloud/pinning/pinFileToIPFS"*/}
                        {/*    headers={{*/}
                        {/*        "authorization": process.env.REACT_APP_PinataAPIJWT*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    {imageUrl ? (*/}
                        {/*        <img*/}
                        {/*            src={imageUrl}*/}
                        {/*            alt="avatar"*/}
                        {/*            style={{*/}
                        {/*                width: '100%',*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    ) : (*/}
                        {/*        uploadButton*/}
                        {/*    )}*/}
                        {/*</Upload>*/}
                    </div>
                    <div className="right-part">

                        <div className="content-item">
                            <h3>Owner Address</h3>
                            <Form form={form} name="control-hooks">
                                <Form.Item
                                    name="GuildName"
                                    label="Guild Name"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input GuildName  !'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="limit"
                                    label="limit"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input limit  !'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    name="introduction"
                                    label="introduction"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        {required: true, message: 'Please input introduction!'},
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Button type="primary" className="sub-btn" onClick={() => {
                                create()
                            }}>
                                Submit
                            </Button>

                        </div>
                    </div>

                </div>
            </div>

        </GuildStyle>
    )
}
export default CityNode
