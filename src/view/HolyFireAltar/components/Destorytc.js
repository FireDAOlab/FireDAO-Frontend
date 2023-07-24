import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import {Button, Card, Form, Input, Radio, Switch,message} from "antd";
import {getContractByName} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil";
import {useNavigate} from "react-router-dom";
import DestorytcStyle from './DestorytcStyle';

const Firetc = (props) => {
    const {closeDialog,UserFID,UserToSoul} = props
    let {state, dispatch} = useConnect();
    const [length,setLength] = useState(0)
    const history = useNavigate();
    const [form] = Form.useForm();


    return (
        <DestorytcStyle>
            <div className="dialog-content">
                <div className="header">
                    <div className="close" onClick={closeDialog}>
                        <svg t="1681179633627" className="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2615" width="26" height="26">
                            <path
                                d="M753.365333 843.861333a64 64 0 0 0 90.496-90.496L602.496 512l241.365333-241.365333a64 64 0 0 0-90.496-90.496L512 421.504 270.634667 180.138667a64 64 0 1 0-90.496 90.496L421.504 512l-241.365333 241.365333a64 64 0 0 0 90.496 90.496L512 602.496l241.365333 241.365333z"
                                fill="#ffffff" p-id="2616"></path>
                        </svg>
                    </div>
                </div>
                <div className="dialog-name">
                    Destroy
                </div>
                <div className="dialog-info">
                    <p>Canceling FireSoul will cancel FireSoul's NFT, 
                        destroy the soul account, destroy the generated FID, 
                        and destroy various SBTs in the soul account. Are you sure you want to destroy?</p>
                </div>
                <div className="btn-box">
                    <Button className="sub-btn" onClick={() => {  }} type="primary">
                    Destroy
                    </Button>

                </div>
            </div>
        </DestorytcStyle>
    )
}
export default Firetc