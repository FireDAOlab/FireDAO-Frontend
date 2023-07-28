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

    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        setIsConnect(true)
        if (state.networkId == develop.chainId) {
            setStep(2)
        }

    }, [state.account, state.isConnected, state.networkId]);


    return (
        <StyleBox>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    My Draft
                </div>
                <div className="panel-container">
                    <div className="fire-list-box">
                        <div className="list-header">
                            <div className="col">
                                Proposal
                            </div>
                            <div className="col">
                                Created
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </StyleBox>
    )
}
export default Distribution
