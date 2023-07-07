import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../../api/contracts";
import {Card, Button, Steps, Upload, message, Form, List, Input, notification, Tooltip} from 'antd';
import {getContractByName, getContractByContract} from "../../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../../utils/contractUtil"

import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../../utils/judgeStatus";
import ConnectWallet from "../../../../component/ConnectWallet/ConnectWallet";
import StyleBox from "./style"
import develop from "../../../../env";
import {LoadingOutlined, PlusOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {Editor, EditorState} from 'draft-js';

const Distribution = (props) => {
    const [form] = Form.useForm();

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }


    const [isConnected, setIsConnect] = useState(false)
    const [step, setStep] = useState(0)
    const [pageStep, setPageStep] = useState(0)
    const [curAction, setCurAction] = useState(0)
    const [actionArr,setActionArr] = useState([])
    const [uploading,setUploading] = useState()
    const [imageUrl,setImageUrl] = useState()
    const [fileList, setFileList] = useState([]);
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)
        if (!contractTemp) {
            message.warn("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("TreasuryDistribution", state.api,)
        if (!contractTemp) {
            message.warn("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const goStep = (step) => {
        switch (step) {
            case 2:
                if(!form.getFieldValue().title){
                    return
                }
        }

        setPageStep(step)
    }
    const setType = (item, type)=>{
        item.type= type
        setActionArr([...actionArr])
    }
    const addAction = ()=>{
        let tempArr = [...actionArr]
        tempArr.push({})
        setActionArr(tempArr)
    }
    const removeAction= ()=>{
        let tempArr = [...actionArr]
        tempArr.pop()
        setActionArr(tempArr)
    }
    const uploadButton = (
        <div>
            {uploading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    function MyEditor() {
        const [editorState, setEditorState] = React.useState(
            () => EditorState.createEmpty(),
        );

        return <Editor
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
            }}
            editorState={editorState} onChange={setEditorState} />;
    }

    const handleUpload = () => {
        const formData = new FormData();
        console.log(fileList)
        const fr = new FileReader()
        if(!fileList&&fileList.length==0){
            return
        }
        fileList.forEach((file) => {
            console.log(file)
            fr.readAsArrayBuffer(file)
            fr.onload = () => {
                // 读取到的 ArrayBuffer
                console.log(fr.result)
                const  res = fr.result
                console.log(res)
                formData.append('files[]',res );

                const metadata = JSON.stringify({
                    name: file.name,
                });
                formData.append('pinataMetadata', metadata);
                const options = JSON.stringify({
                    cidVersion: 0,
                })
                formData.append('pinataOptions', options);


                // You can use any AJAX library you like
                fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
                    method: 'POST',
                    maxBodyLength: "Infinity",
                    body: formData,
                    headers:{
                        "authorization": "Bearer "+process.env.REACT_APP_PinataAPIJWT
                    }
                })
                    .then((res) => res.json())
                    .then(() => {
                        setFileList([]);
                        message.success('upload successfully.');
                    })
                    .catch(() => {
                        message.error('upload failed.');
                    })
                    .finally(() => {
                        setUploading(false);
                    });
            }


        });

    };
    const fileprops = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        setIsConnect(true)
        setStep(1)
        if (state.networkId == develop.chainId) {
            setStep(2)
        }

    }, [state.account, state.isConnected, state.networkId]);


    return (
        <StyleBox>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    Create Proposal
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        <div className="index-box">1</div>  Connect your wallet & sign in
                    </div>
                    {pageStep==0&&(<div>
                        <Steps
                            direction="vertical"
                            className="step-box"
                            current={step}
                            items={[
                                {
                                    title: '  You must connect your wallet.',
                                    description: (<div>{!isConnected && <ConnectWallet/>}</div>)
                                },
                                {
                                    title: 'Wallet is connected to arbiturm.',
                                },
                                {
                                    title: '    You must be a member of this group.',
                                },
                            ]}
                        />
                        <Button type="primary" className="continue-btn" onClick={() => {
                            setPageStep(1)
                        }}>
                            Continue
                        </Button>
                        <Upload
                            {...fileprops}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                        <Button
                            type="primary"
                            onClick={handleUpload}
                            disabled={fileList.length === 0}
                            loading={uploading}
                            style={{ marginTop: 16 }}
                        >
                            {uploading ? 'Uploading' : 'Start Upload'}
                        </Button>
                    </div>)}
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        <div className="index-box">1</div> Name your proposal
                    </div>
                    {pageStep==1&&(<div>
                        <div className="tip-box">
                            Give your proposal a title and a description. They will be public when your proposal goes live!
                        </div>
                        <Form form={form} name="control-hooks" className="form">

                            <Form.Item
                                name="title"
                                validateTrigger="onBlur"
                                label="Title"
                                validateFirst={true}
                            >
                                <Input type="text"></Input>
                            </Form.Item>
                            <Form.Item
                                name="description"
                                validateTrigger="onBlur"
                                label="Description"
                                validateFirst={true}
                            >
                                <div className="tip">
                                    Support for formatting with
                                    <span>Markdown</span>
                                </div>
                                <textarea type="text" className="desc-box"></textarea>
                                <MyEditor/>
                            </Form.Item>
                        </Form>
                        <Button type="primary" className="continue-btn" onClick={() => {
                            setPageStep(2)
                        }}>
                            Continue
                        </Button>
                    </div>)}
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        <div className="index-box">3</div> Add actions(optional)
                        <Tooltip
                            title="Actions are on-chain calls that will execute after a proposal passes and then gets executed.If you choose to skip this step, a transfer of 0 ETH to you (the proposer) will be added, as Governor requires one executable action for the proposal to be submitted on-chain.">
                            <QuestionCircleOutlined className="toolTip"/>
                        </Tooltip>
                    </div>
                    {pageStep==2&&(<div>
                        {actionArr.map((item,index)=>{
                            return (<div key={index} className="action-box">
                                <h3 className="title">
                                    Action{index+1}
                                </h3>
                                {!item.type&&(
                                    <div className="action-choose">
                                        <div className={"choose-item " + (curAction == 1 ? "active" : "")} onClick={() => {
                                            setType(item,1)
                                        }}>
                                            Transfer Token
                                        </div>
                                        <div className={"choose-item " + (curAction == 2 ? "active" : "")} onClick={() => {
                                            setType(item,2)
                                        }}>
                                            Custom Action
                                        </div>
                                    </div>
                                )}
                                {item.type==1&&(
                                    <Form form={form} name="control-hooks" className="form">
                                        <Form.Item
                                            name="contract"
                                            validateTrigger="onBlur"
                                            label="Transfer address(FireDAO community contract)"
                                            validateFirst={true}
                                        >
                                            <Input type="text"></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name="address"
                                            validateTrigger="onBlur"
                                            label="Target address"
                                            validateFirst={true}
                                        >
                                            <Input type="text"></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name="value"
                                            validateTrigger="onBlur"
                                            label="Value"
                                            validateFirst={true}
                                        >
                                            <div className="tip-box">
                                                The amount of token to send from the transfer address to the target address
                                            </div>
                                            <Input type="text"></Input>
                                        </Form.Item>
                                    </Form>
                                )}
                                {item.type==2&&(
                                    <Form form={form} name="control-hooks" className="form">
                                        <Form.Item
                                            name="contract"
                                            validateTrigger="onBlur"
                                            label="Target contract address(FireDAO contract)"
                                            validateFirst={true}
                                        >
                                            <Input type="text"></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name="address"
                                            validateTrigger="onBlur"
                                            label="Select an ABI or upload yours"
                                            validateFirst={true}
                                        >

                                        </Form.Item>
                                        <Form.Item
                                            name="methods"
                                            validateTrigger="onBlur"
                                            label="Contract method"
                                            validateFirst={true}
                                        >
                                            <Input type="text"></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name="methods"
                                            validateTrigger="onBlur"
                                            label="Calldatas"
                                            validateFirst={true}
                                        >
                                            <div className="tip-box">
                                                The data for the function arguments you wish to send when the action executes
                                            </div>
                                            <Input type="text"></Input>
                                        </Form.Item>
                                    </Form>
                                )}
                            </div>)
                        })}

                        <div className="btn-box">
                            <Button type="primary" onClick={addAction}>Add action</Button>
                            <Button type="primary"  onClick={removeAction}>Remove action</Button>
                        </div>
                        <div className="btn-box">
                            <Button type="primary" className="continue-btn" onClick={() => {
                                goStep(1)
                            }}>
                                Back
                            </Button>
                            <Button type="primary" className="continue-btn" onClick={() => {
                                goStep(2)
                            }}>
                                Continue
                            </Button>
                        </div>
                    </div>)}
                </div>
                <div className="panel-container">
                    <div className="panel-title">
                        <div className="index-box">4</div> Preview your proposal
                    </div>
                    {pageStep==3&&<div>
                        <div className="tip-box">
                            Please review your proposal carefully！
                        </div>
                    </div>}

                </div>
            </div>
        </StyleBox>
    )
}
export default Distribution
