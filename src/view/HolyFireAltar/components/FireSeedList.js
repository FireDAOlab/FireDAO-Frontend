import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import { Button, Card, Form, Input, Radio, Switch, message } from "antd";
import { getContractByName } from "../../../api/connectContract";
import { dealMethod, viewMethod } from "../../../utils/contractUtil";
import { useNavigate } from "react-router-dom";
import passport from "../../../imgs/long.png"
import FireSeedListStyle from "./FireSeedListStyle";
import fireseed from "../../../imgs/FireSeed@2x.webp"
const FireSeedList = (props) => {
    const { list } = props
    let { state, dispatch } = useConnect();
    const [length, setLength] = useState(0)

    const history = useNavigate();
    const [form] = Form.useForm();

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
        }
        return await viewMethod(contractTemp, state.account, name, params)
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
        dispatch({ type: "SET_FIREDSEEDLIST", payload: list })
    }


    useEffect(() => {
        getMyFireSeed()
    }, [state.account])
    return (
        <FireSeedListStyle>
            <div className="panel-box">
                <div className="panel-container" style={{ border: 'none' }}>
                    <div className="panel-title" style={{fontSize:'30px'}}>
                        My FireSeed
                    </div>

                    <div className="content1">

                        <div className="list">
                            {
                                state.fireSeedList.map(item => (
                                    
                                    <div className="list-item" onClick={() => {
                                    }}>
                                        <img className="img" src={fireseed} alt="" />
                                        <div className="item-info">
                                            <div className="id">
                                            <p>FireSeed</p> 
                                            </div>
                                            <div className="number-box">
                                                <div className="number">
                                                    <span># {item.id}</span>
                                                    ×{item.balance}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                       
                    </div>
                    <div className="panel-container1">
                            <div className='tp'>
                                <div className='tpitem'>
                                    <img src={passport} />
                                    <p>FireSeed</p>
                                </div>
                                <div className='tpitem'>
                                    <img src={passport} />
                                    <p>FireSeed</p>
                                </div>
                                <div className='tpitem'>
                                    <img src={passport} />
                                    <p>FireSeed</p>
                                </div>
                                <div className='tpitem'>
                                    <img src={passport} />
                                    <p>FireSeed</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </FireSeedListStyle>
    )
}
export default FireSeedList
