import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../api/contracts";
import {Descriptions, Button, message} from 'antd';
import {getContractByName} from "../api/connectContract";
import {getIpfs} from "../utils/ipfsApi";
import {
    TwitterOutlined,
    SendOutlined,
    UserOutlined
} from '@ant-design/icons';

const UserInfo = (props) => {
    const UserInfo = styled.div`
      .info-box {
        width: 1200px;
        margin: 3em auto;
        border-radius: 30px;

        .connect {
          margin: 3em 0;
        }
      }
    `
    let {state, dispatch} = useConnect();
    const [userObj, setUser] = useState({});
    const [userIpfs, setUserIpfs] = useState({});
    let userInfo = async () => {
        let contract = await getContractByName("user", state.api)
        let res
        try {
           res= await contract.methods.userInfo(state.account).call({
                from: state.account,
            }).catch((e) => {
                console.log(e)
               message.error("get ipfs info err")
            })
        } catch (e) {
            console.log(e)
        }
        if(!res){
            return
        }
        setUser(res)

        const hide1 = message.loading('getting User Info', 0);
        let ipfsObj = await getIpfs(res.information)
        if(!ipfsObj){
            ipfsObj = {}
        }
        setTimeout(hide1, 1000);
        console.log(res, ipfsObj)
        setUserIpfs(ipfsObj)
        return res
    }
    useEffect(() => {
        userInfo()
    }, []);

    return (
        <UserInfo>

            <div className="info-box">

                <Descriptions title="User Info">
                    <Descriptions.Item label="userInfo"> <Button onClick={() => {
                        userInfo()
                    }}> GetInfo</Button></Descriptions.Item>
                    <Descriptions.Item label="Pid"> {userObj.id}  </Descriptions.Item>
                    <Descriptions.Item label="UserName"> {userObj.username}  </Descriptions.Item>
                    <Descriptions.Item label="telegram">
                        <a href={"https://t.me/" + userIpfs.telegram}></a>{userIpfs.telegram}</Descriptions.Item>
                    <Descriptions.Item label="Email">{userIpfs.Email}</Descriptions.Item>
                    <Descriptions.Item label="Twitter">
                        <a href={'https://twitter.com/' + userIpfs.Twitter}
                           target="_blank"><TwitterOutlined/> {userIpfs.Twitter}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Website">
                        <a href={userIpfs.Website} target="_blank">
                            {userIpfs.Website}
                        </a>
                    </Descriptions.Item>
                    <Descriptions.Item label="BIO">
                        {userIpfs.BIO}
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </UserInfo>
    )
}
export default UserInfo
