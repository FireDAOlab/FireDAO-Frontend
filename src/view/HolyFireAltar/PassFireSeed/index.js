import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Pagination, Card, Button, Select, Descriptions, message, Form, List, Input, notification, Tooltip} from 'antd';
import {QuestionCircleOutlined, SendOutlined, TwitterOutlined, UserOutlined} from "@ant-design/icons";
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import passport from "../../../imgs/long.png"
import {useNavigate} from "react-router-dom";
import user3 from "../../../imgs/user3.png";
import judgeStatus from "../../../utils/judgeStatus.js"
import {getPasslist} from "../../../graph/myFireseed";
import coinInfo from "../../../config/coinInfo";
import StyleBox from "./style"
let logs = []

const LockList = (props) => {
    const [form] = Form.useForm();

    let {state, dispatch} = useConnect();
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [curId, setID] = useState([])
    const [logArr, setLogArr] = useState([])
    const [level2Arr, setLevel2Arr] = useState([])
    const [level3Arr, setLevel3Arr] = useState([])
    const [total, setTotal] = useState(0)
    const [level1, setLevel1] = useState(0)
    const [level2, setLevel2] = useState(0)
    const [level3, setLevel3] = useState(0)
    const [isAdmin, setIsadmain] = useState("")
    const [hasTransfer, setHasTransfer] = useState(0)
    const history = useNavigate();
    const [activeNav, setNav] = useState(1)
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
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getData = async (page) => {

    }

    const onChangePage = async (page) => {
        getData(page)
        await setCurPage(page)
    }
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const myClass = async () => {
        const address = await handleViewMethod("upclass", [state.account])
        const recommenderLength = await handleViewMethod("recommenderNumber", [state.account])
        let recommenderInfoArr = [], total = 0, level2TotalLength = 0, level3TotalLength = 0
        total = parseInt(recommenderLength)
        for (let i = 0; i < recommenderLength; i++) {
            const level1Address = await handleViewMethod("recommenderInfo", [state.account, i])
            recommenderInfoArr.push(level1Address)
            const level2Length = await handleViewMethod("recommenderNumber", [level1Address])
            console.log("level2Length" + level2Length)
            total += parseInt(level2Length)
            level2TotalLength += parseInt(level2Length)
            for (let j = 0; j < level2Length; j++) {
                const level2Address = await handleViewMethod("recommenderInfo", [level1Address, i])
                const level3Length = await handleViewMethod("recommenderNumber", [level2Address])
                level3TotalLength += parseInt(level3Length)
                total += parseInt(level3Length)

            }
        }
        dispatch({type: "SET_MyRecommender", payload: address})
        setLevel1(recommenderInfoArr.length)
        setLevel2(level2TotalLength)
        setLevel3(level3TotalLength)
        setTotal(total)
    }
    const getIsadmain = async () => {
        const ownerAddr = await handleViewMethod("owner", [])
        const isAdmin = (ownerAddr.toLowerCase() == state.account.toLowerCase()) ? true : false
        setIsadmain(isAdmin)
    }
    const getMyFireSeed = async () => {
        const listLength = await handleViewMethod("getOwnerIdlength", [])
        let list = []
        if (listLength <= 0) {
            return
        }
        for (let i = 0; i < listLength; i++) {
            const id = await handleViewMethod("ownerOfId", [state.account, i])
            const balance = await handleViewMethod("balanceOf", [state.account, id])
            list.push({
                id,
                balance,
                value: id,
                label: id
            })
        }

        dispatch({type: "SET_FIREDSEEDLIST", payload: list})
    }

    const transfer = async () => {
        const {toAddress, amount} = form.getFieldValue()
        // params _token
        await handleDealMethod("safeTransferFrom", [state.account, toAddress, curId, amount, "0x00"])
        getData()
    }
    const check = async () => {
        let address = form.getFieldValue().toAddress
        const hide = message.loading('Checking', 0);
        console.log(address, logs)
        setHasTransfer(false)
        for (let i = 0; i < logs.length; i++) {
            if (address.toString().toLowerCase() == logs[i].to.toLowerCase()) {
                setHasTransfer(true)
            }
        }
        setTimeout(hide, 100);
    }
    const getLevel2 = async (address) => {
        console.log(address)
        let arr = []
        for (let i = 0; i < logs.length; i++) {
            try {
                // console.log(address1, address2, address3)
                if (logs[i].from.toString().toLowerCase() == address.toLowerCase()) {
                    arr.push({
                        transferTime: logs[i].transferTime,
                        from: address,
                        to: logs[i].to
                    })
                    getLevel3(logs[i].to)
                }

            } catch (e) {
            }
        }
        setLevel2Arr(arr)
    }
    const getLevel3 = async (address) => {
        let arr = []
        for (let i = 0; i < logs.length; i++) {
            try {
                // console.log(address1, address2, address3)
                if (logs[i].from.toString().toLowerCase() == address.toLowerCase()) {
                    arr.push({
                        transferTime: logs[i].transferTime,
                        from: address,
                        to: logs[i].to
                    })
                }

            } catch (e) {
            }
        }
        setLevel3Arr(arr)
    }
    const getTransfer = async () => {
        // logs = await state.api.eth.getPastLogs({
        //     fromBlock: 0, toBlock: "pending",
        //     address: "0xc06c0d7f3d85064cdbc185cf76ccaeea8af90f59",
        //     topics: ["0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"]
        // })
        //state.api.eth.abi.decodeParameter

        console.log(logs)
        let arr = []
        for (let i = 0; i < logs.length; i++) {
            try {
                // console.log(address1, address2, address3)
                console.log(logs[i].from.toString().toLowerCase(), logs[i].to)
                if (logs[i].from.toString().toLowerCase() == state.account.toLowerCase()) {
                    arr.push({
                        transferTime: logs[i].transferTime,
                        from: logs[i].from,
                        to: logs[i].to
                    })
                    getLevel2(logs[i].to)
                }
            } catch (e) {
            }
        }
        setLogArr(arr)
    }
    const handleChooseId = (id) => {
        setID(id)
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getMyFireSeed()
        myClass()
        getIsadmain()
        logs = await getPasslist()
        if (logs.data) {
            logs = logs.data.passFireSeeds
        }
        getTransfer()
    }, [state.account]);
    const addToken = async (tokenId) => {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: coinInfo.fireSeed.type,
                options: {
                    address: coinInfo.fireSeed.address,
                    symbol: "FLM",
                    tokenId: tokenId,
                    image: coinInfo.fireSeed.image,
                },
            },
        });
    }
    return (
        <StyleBox>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        My FireSeed
                        {
                            isAdmin && (
                                <Button style={{
                                    float: 'right',
                                    background: '#373232',
                                    margin: '0px 13px',
                                    textAlign: 'center',
                                    lineHeight: '28px',
                                    width: "32px",
                                    height: '32px',
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    borderRadius: '50%',
                                }}
                                        onClick={() => {
                                            history("/FireSeedManage")
                                        }}>
                                    <img src={user3} style={{width: '22px', marginLeft: '-10px', marginTop: '-10px'}}/>
                                </Button>)
                        }
                    </div>

                    <div className="content1">

                        <div className="list">

                        </div>
                        <div className="panel-container1">
                            <div className='tp'>
                                {
                                    state.fireSeedList.map(item => (
                                        <div className='tpitem' onClick={() => {
                                            setID(item.id)
                                        }}>
                                            <img src={passport}/>
                                            <p>FireSeed # {item.id} ×{item.balance}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        Pass FireSeed
                    </div>
                    <div className='describe'>
                        <Descriptions.Item label="transfer">
                            <Form form={form} className="send-fireseed">
                                <Form.Item
                                    name="FireSeed ID"
                                    label="FireSeed ID"
                                >
                                    <Select
                                        className="select-chain"
                                        defaultValue={curId}
                                        onChange={handleChooseId}
                                        value={curId}
                                        options={state.fireSeedList}
                                    />
                                </Form.Item>
                                <Form.Item

                                    label="Form"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        // { required: true, message: 'Please input Title!' },
                                    ]}
                                    style={{

                                        width: '100%'
                                    }}
                                >
                                    <div className="flex-box" style={{
                                        paddingLeft: '10px',
                                        border: '1px solid rgba(205,158,87,0.5)',
                                        backgroundColor: 'rgba(205,158,87,0.1)',
                                        borderRadius: '25px',
                                        height: '35px',
                                        lineHeight: '35px',
                                        width: '100%',
                                        color: '#CD9E57'
                                    }}>
                                        {state.account}

                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="toAddress"
                                    label="To"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        // { required: true, message: 'Please input Title!' },
                                    ]}
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    <div className="flex-box">
                                        <Input/>

                                    </div>
                                </Form.Item>
                                <div className="check-box">
                                    {
                                        hasTransfer===0&&(
                                            <a className="check-btn"
                                               onClick={() => {
                                                   check()
                                               }}>
                                                <span>Check</span>
                                                <Tooltip
                                                    title="Unlocinimum set-up is 1 day. ">
                                                    <QuestionCircleOutlined className="icon"/>
                                                </Tooltip>
                                            </a>
                                        )
                                    }
                                    {
                                        hasTransfer===true&&(
                                            <div className="check-btn yes">
                                                <span>Yes</span>
                                                <Tooltip
                                                    title="Unt-up is 1 day. ">
                                                    <QuestionCircleOutlined className="icon"/>
                                                </Tooltip>
                                            </div>
                                        )
                                    }
                                    {
                                        hasTransfer===false&&(
                                            <div className="check-btn no">
                                                <span>No</span>
                                                <Tooltip
                                                    title="Unlocke minimum set-up is 1 day. ">
                                                    <QuestionCircleOutlined className="icon"/>
                                                </Tooltip>
                                            </div>
                                        )
                                    }

                                </div>
                                <Form.Item
                                    name="amount"
                                    label="Amount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                    rules={[
                                        // { required: true, message: 'Please input Title!' },
                                    ]}

                                >
                                    <div className="flex-box">
                                        <Input placeholder='Enter Amounts'/>
                                    </div>
                                </Form.Item>
                                <Button className="send-button" type="primary" htmlType="submit" onClick={() => {
                                    transfer()
                                }}>
                                    Send
                                </Button>
                            </Form>
                        </Descriptions.Item>
                    </div>
                </div>
            </div>
            <div className="panel-box content2-part2">
                <div className="panel-container" style={{padding: '30px 4.6%'}}>
                    <div className="panel-title">
                        My Team
                    </div>
                    <div className="content2">
                        <div className="myrecommend">
                            <div className="name">
                                My Recommender
                            </div>
                            <div className="value">
                                {state.myRecommender}
                            </div>
                        </div>
                        <div className="myteamsize">
                            <div className="box-title">
                                My Team Size
                            </div>
                            <div className="refer-list">
                                <div className="refer-item">
                                    <div className="name">
                                        Level 1
                                    </div>
                                    <div className="value">
                                        {level1}
                                    </div>


                                </div>
                                <div className="refer-item">
                                    <div className="name">
                                        Level 2
                                    </div>
                                    <div className="value">
                                        {level2}
                                    </div>


                                </div>
                                <div className="refer-item">
                                    <div className="name">
                                        Level 3
                                    </div>
                                    <div className="value">
                                        {level3}
                                    </div>


                                </div>
                                <div className="refer-item">
                                    <div className="name">
                                        Total
                                    </div>
                                    <div className="value">
                                        {total}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-box">
                        <div className="nav-list-box">
                            <div className="fire-nav-list">
                                <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                                    setNav(1)
                                }}>
                                    All
                                </div>
                                <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                                    setNav(2)
                                }}>
                                    Level 2
                                </div>
                                <div className={"nav-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                                    setNav(3)
                                }}>
                                    Level 3
                                </div>
                                <div className={"nav-item " + (activeNav == 4 ? "active" : "")} onClick={() => {
                                    setNav(4)
                                }}>
                                    Level 4
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fire-list-box">
                        <div className="list-header flex-box">
                            <div className="col">
                                No.
                            </div>
                            <div className="col">
                                Address
                            </div>
                            <div className="col">
                                PID
                            </div>
                            <div className="col">
                                FID
                            </div>
                            <div className="col">
                                Forum ID
                            </div>
                            <div className="col">
                                <span>FDT Transaction <br/>Tax</span>
                            </div>
                            <div className="col">
                                Mint FireSeed <br/>Fees
                            </div>
                            <div className="col">
                                Seed Donation <br/> Fees
                            </div>
                            <div className="col">
                                Consensus <br/> Donation Fees
                            </div>
                            <div className="col">
                                Time(UTC)
                            </div>
                        </div>
                        {
                            logArr.map(item => (
                                <div className="list-item ">
                                    <div className="col no">
                                        1
                                    </div>
                                    <div className="col address">
                                        {item.transferTime}
                                    </div>
                                    <div className="col pid">
                                        {item.from}
                                    </div>
                                    <div className="col fid">
                                        {item.to}
                                    </div>
                                    <div className='col'>

                                    </div>
                                    <div className='col'>

                                    </div>
                                    <div className='col'>

                                    </div>
                                    <div className='col'>

                                    </div>
                                    <div className='col'>

                                    </div>
                                    <div className='col'>

                                    </div>
                                </div>
                            ))

                        }
                        {
                            level2Arr.map(item => (
                                <div className="list-item ">
                                    <div className="col">
                                        2
                                    </div>
                                    <div className="col">
                                        {item.transferTime}
                                    </div>
                                    <div className="col">
                                        {item.from}
                                    </div>
                                    <div className="col">
                                        {item.to}
                                    </div>
                                </div>
                            ))

                        }
                        {
                            level3Arr.map(item => (
                                <div className="list-item ">
                                    <div className="col">
                                        3
                                    </div>
                                    <div className="col">
                                        {item.transferTime}
                                    </div>
                                    <div className="col">
                                        {item.from}
                                    </div>
                                    <div className="col">
                                        {item.to}
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                    <div className="pagination">
                        {
                            activeNav == 1 &&
                            <Pagination current={curPage} showSizeChanger onShowSizeChange={handleShowSizeChange}
                                        onChange={onChangePage} total={total}
                                        defaultPageSize={pageCount}/>
                        }
                    </div>
                </div>
            </div>


        </StyleBox>
    )
}
export default LockList
