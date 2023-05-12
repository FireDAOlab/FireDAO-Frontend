import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../api/contracts";
import {Card, Button, Select, Descriptions, message, Form, List, Input, notification} from 'antd';
import {SendOutlined, TwitterOutlined, UserOutlined} from "@ant-design/icons";
import {getContractByName, getContractByContract} from "../../api/connectContract";
import {dealMethod, viewMethod} from "../../utils/contractUtil"
import {useNavigate} from "react-router-dom";
import fireseed from "../../imgs/FireSeed@2x.webp"
import {getPasslist} from "../../graph/myFireseed";

let logs = []

const LockList = (props) => {
    const [form] = Form.useForm();
    const LockList = styled.div`
      width: 100%;
      .form-value{
        padding: 0 10px;
      }
      .panel-box {
        width: 90%;
        margin: 0 auto;

        .panel-container {
          width: 100%;
        }
      }

      .send-fireseed {
        margin-top: 20px;

        .ant-form-item {
          margin: 0 auto;
          width: 60% !important;
        }

        .send-button {
          width: 200px;
          margin-top: 20px;
          margin-left: calc(50% - 100px);
        }

      }

      .more-btn {
        width: 300px;
        height: 40px;
        background: #3F3535;
        border-radius: 5px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        margin: 2em auto 0;
        cursor: pointer;
      }

      .nav-list-box {
        margin: 2em 0;
        display: flex;
      }

      .nav-list {

        display: flex;
        background: #3F3535;
        border-radius: 10px;
        border: 1px solid #333333;
        padding: 3px;

        .nav-item {
          cursor: pointer;
          padding: 10px 30px;
          border-radius: 10px;
          margin-right: 10px;
          font-size: 16px;
          font-weight: bold;

          &.active {
            background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
      }

      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .list-item {
          cursor: pointer;
          padding: 10px;
          margin-top: 2em;
          margin-right: 2.5%;
          background: #3F3535;
          border-radius: 10px;
          border: 1px solid #7F6868;
          width: 23%;

          &:nth-child(4n) {
            margin-right: 0;
          }

          .img {
            width: 100%;
          }

          .item-info {
            margin-top: 1em;
            display: flex;
            justify-content: space-between;

            .id {
              font-size: 16px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 19px;
            }

            .number-box {
              background: rgba(#DD3642, 0.5);

              .number {
                text-align: center;
                width: 60px;
                height: 24px;
                box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
                border-radius: 10px;
                border: 1px solid;
                border-image: linear-gradient(316deg, rgba(221, 54, 66, 1), rgba(255, 192, 44, 1)) 1 1;
              }
            }

          }
        }
      }

      .content2 {
        margin: 2em auto;

        .myrecommend {
          display: flex;
          align-items: center;

          .name {
            font-size: 16px;
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 19px;
            margin-right: 10px;
          }

          .value {
            line-height: 40px;
            padding: 0 20px;
            width: 600px;
            height: 40px;
            background: #3F3535;
            border-radius: 10px;
            border: 1px solid #342727;
          }
        }

        .box-title {
          margin-top: 2em;
          font-size: 16px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
        }

        .refer-list {
          display: flex;

          .refer-item {
            margin-right: 10px;
            text-align: center;
            margin-top: 1em;
            justify-content: space-between;
            width: 325px;
            height: 120px;
            background: #3F3535;
            border-radius: 10px;
            border: 1px solid #7F6868;
            padding: 20px;

            .value {
              font-size: 40px;
              font-family: Krungthep;
              line-height: 50px;
              color: #fff;
            }

            .name {
              line-height: 40px;
              margin-top: 10px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 22px;
            }
          }

        }


      }

      .content2-part2 {
        .list-box {
          margin: 2em 0 1em;

          .col {
            &:nth-child(1) {
              width: 5%;
            }

            &:nth-child(2) {
              width: 5%;
            }

            &:nth-child(3) {
              width: 30%;
            }

            &:nth-child(4) {
              width: 30%;
            }
          }

          .list-header {
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: bold;
            padding: 0.5em 1em;
          }

          .list-item {
            padding: 0.5em 1em;
            display: flex;
            justify-content: space-between;
            background: #3F3535;
            border-radius: 10px;
            margin: 0.5em 0;
          }
        }
      }
    `
    let {state, dispatch} = useConnect();

    const [curId, setID] = useState([])
    const [logArr, setLogArr] = useState([])
    const [level2Arr, setLevel2Arr] = useState([])
    const [level3Arr, setLevel3Arr] = useState([])
    const [total, setTotal] = useState(0)
    const [level1, setLevel1] = useState(0)
    const [level2, setLevel2] = useState(0)
    const [level3, setLevel3] = useState(0)
    const [hasTransfer, setHasTransfer] = useState(false)
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
                value:id,
                label:id
            })
        }

        dispatch({type: "SET_FIREDSEEDLIST", payload: list})
    }

    const transfer = async () => {
        const {toAddress, amount} = form.getFieldValue()
        // params _token
        handleDealMethod("safeTransferFrom", [state.account, toAddress, curId, amount, "0x00"])
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
        getMyFireSeed()
        myClass()
        logs = await getPasslist()
        logs = logs.data.passFireSeeds
        getTransfer()
    }, [state.account]);
    return (
        <LockList>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        My FireSeed
                    </div>

                    <div className="content1">

                        <div className="list">
                            {
                                state.fireSeedList.map(item => (
                                    <div className="list-item" onClick={() => {
                                        setID(item.id)
                                    }}>
                                        <img className="img" src={fireseed} alt=""/>
                                        <div className="item-info">
                                            <div className="id">
                                                FireSeed # {item.id}
                                            </div>
                                            <div className="number-box">
                                                <div className="number">
                                                    ×{item.balance}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="more-btn">
                            MORE
                        </div>
                    </div>
                </div>
            </div>


            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        Pass FireSeed
                    </div>
                    <Descriptions.Item label="transfer">
                        <Form form={form} className="send-fireseed">
                            <Form.Item
                                name="FireSeed ID:"
                                label="FireSeed ID:"

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
                                name="toAddress"
                                label="Transfer Address"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input Title!'},
                                ]}
                            >
                                <div className="flex-box">
                                    <Input/>
                                    <Button type="primary" onClick={() => {
                                        check()
                                    }}>
                                        Check
                                    </Button>
                                </div>
                            </Form.Item>
                            <Form.Item
                                label="hasTransfer"
                                validateTrigger="onBlur"
                            >
                                <div className="flex-box form-value">
                                    {hasTransfer ? "Yes" : "No"}
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="amount"
                                label="Transfer Amount"
                                validateTrigger="onBlur"
                                validateFirst={true}
                                rules={[
                                    {required: true, message: 'Please input Title!'},
                                ]}

                            >
                                <div className="flex-box">
                                    <Input/>
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
            <div className="panel-box content2-part2">
                <div className="panel-container">
                    <div className="panel-title">
                        My PassList
                    </div>
                    <div className="content2">
                        <div className="myrecommend">
                            <div className="name">
                                My Recommender:
                            </div>
                            <div className="value">
                                {state.myRecommender}
                            </div>
                        </div>

                        <div className="box-title">
                            My Team Size:
                        </div>
                        <div className="refer-list">
                            <div className="refer-item">
                                <div className="value">
                                    {level1}
                                </div>
                                <div className="name">
                                    Level 1
                                </div>

                            </div>
                            <div className="refer-item">
                                <div className="value">
                                    {level2}
                                </div>
                                <div className="name">
                                    Level 2:
                                </div>

                            </div>
                            <div className="refer-item">
                                <div className="value">
                                    {level3}
                                </div>
                                <div className="name">
                                    Level 3:
                                </div>

                            </div>
                            <div className="refer-item">
                                <div className="value">
                                    {total}
                                </div>
                                <div className="name">
                                    Total:
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="list-box">
                        <div className="list-header flex-box">
                            <div className="col">
                                Level
                            </div>
                            <div className="col">
                                transferTime
                            </div>
                            <div className="col">
                                From
                            </div>
                            <div className="col">
                                To
                            </div>
                        </div>
                        {
                            logArr.map(item => (
                                <div className="list-item ">
                                    <div className="col">
                                        1
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
                </div>
            </div>


        </LockList>
    )
}
export default LockList
