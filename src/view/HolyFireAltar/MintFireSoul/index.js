import React, { useEffect, useRef, useState } from 'react';
import { useConnect } from "../../../api/contracts";
import {
    Card,
    Select,
    Button,
    InputNumber,
    Descriptions,
    message,
    Form,
    List,
    Input,
    notification,
    Switch,
    Radio
} from 'antd';
import user3 from "../../../imgs/user3.png";
import passportIcon from "../../../imgs/ethereum.png"
import { getContractByName, getContractByContract } from "../../../api/connectContract";
import { dealPayMethod, dealMethod, viewMethod } from "../../../utils/contractUtil"
import { useNavigate } from "react-router-dom";
import FireSoul from "../../../imgs/FireSoul.png"
import MintSoulTip from "../components/MintSoulTip";
import judgeStatus from "../../../utils/judgeStatus";
import { FireLockDecimal } from "../../../utils/constants";
import addressMap from "../../../api/addressMap";
import StyleBox from "./style"
const MintFireSoul = (props) => {

    const history = useNavigate();
    const [form] = Form.useForm();

    let { state, dispatch } = useConnect();
    const [fee, setFee] = useState(0.1)
    const [status, setStatus] = useState(false)


    const [list, setList] = useState([])
    const [isFocusSelect, setFocusSelect] = useState(false)
    const [balance, setBalance] = useState([])
    const [chooseId, setId] = useState(undefined)
    const [showTip, setShowTip] = useState(false)
    const [allowance, setAllowance] = useState(false)
    const [UserToSoul, setUserToSoul] = useState("")
    const [UserFID, setUserFID] = useState(0)



    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleSoulViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        if (!status) {
            return dealMethod(contractTemp, state.account, name, params)
        } else {
            return dealPayMethod(contractTemp, state.account, name, params, state.api.utils.toWei(fee.toString()))
        }
    }
    const handleDealSeedMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        dealMethod(contractTemp, state.account, name, params)

    }
    const handleSeedViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getUserFIDAndAddr = async () => {
        const UserToSoul = await handleSoulViewMethod("UserToSoul", [state.account])
        const UserFID = await handleSoulViewMethod("UserFID", [state.account])
        await setUserToSoul(UserToSoul)
        await setUserFID(UserFID)

    }
    const getUserInfo = async () => {
        if (!state.pid) {
            const userInfo = await handleUserViewMethod("userInfo", [state.account])
            dispatch({ type: "SET_PID", payload: userInfo.PID })
        }
    }
    const goPath = (url) => {
        history(url);
    }
    const handleDealCoinMethod = async (name, address, params) => {
        let contractTemp = await getContractByContract("erc20", address, state.api,)
        return dealMethod(contractTemp, state.account, name, params)
    }
    const getFee = async () => {
        const feeOn = await handleSoulViewMethod("feeOn", [])
        const fee = await handleSoulViewMethod("fee", [])
        console.log(feeOn, fee)
        setFee(fee / 10 ** 18)
        setStatus(feeOn)
    }
    const approve = async () => {
        const contractAddr = addressMap["mintFireSoul"].address
        handleDealSeedMethod("setApprovalForAll", [contractAddr, true])
        allowance1155(true)
    }
    const Mint = async () => {
        handleDealMethod("burnToMint", [chooseId]).then(async () => {
            await getUserFIDAndAddr()
            setShowTip(true)
        }).catch(err => {
            console.log(err)
        })
    }
    const allowance1155 = async () => {
        const contractAddr = addressMap["mintFireSoul"].address
        const isApproved = await handleSeedViewMethod("isApprovedForAll", [state.account, contractAddr])
        setAllowance(isApproved)
    }
    const ownerNFT = async () => {
        const listLength = await handleViewMethod("getOwnerIdlength", [])

        let list = []
        if (listLength <= 0) {
            return
        }
        for (let i = 0; i < listLength; i++) {
            const id = await handleViewMethod("ownerOfId", [state.account, i])
            const balance = await handleViewMethod("balanceOf", [state.account, id])
            list.push({
                label: id,
                value: id,
                balance: balance
            })
        }

        setList(list)
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        allowance1155()
        ownerNFT()
        getUserInfo()
        getFee()
        getUserFIDAndAddr()
    }, [state.account]);

    const focusSelect = () => {
        setFocusSelect(true)
    }
    const chooseSelect = (item) => {
        setFocusSelect(false)
        setId(item.label)
        setBalance(item.balance)
    }
    return (
        <StyleBox>
            {showTip &&
                <MintSoulTip closeDialog={() => { setShowTip(false) }} UserToSoul={UserToSoul} UserFID={UserFID} />}
            <div className="panel-box">
                <div className="panel-container">
                    <div style={{ display: 'flex' }}>
                        <h2 className="panel-title" >
                            Mint FireSoul
                        </h2>
                        <Button style={{ float: 'right', background: '#373232', margin: '0px 13px', textAlign: 'center', lineHeight: '28px', width: "32px", height: '32px', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '50%', }}>
                            <img src={user3} style={{ width: '22px', marginLeft: '-10px', marginTop: '-10px' }} />
                        </Button>
                    </div>
                    <div className="content-box">
                        <div className="left-content">
                            <div className="img-box">
                                <img className="img" src={FireSoul} alt="" />
                                <p >Pass FireSeed,Cast FireSoul</p>
                                <div style={{ display: 'flex', marginTop: '-20px', height: '30px' }} >
                                    <hr className='ecoshr' />
                                    <span className='ecos'>&nbsp;FireDAO Ecosystem&nbsp;</span>
                                    <hr className='ecoshr' />
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <Form form={form} name="control-hooks" className="form">
                                <div className="flex-box">

                                    <Form.Item
                                        name="pid"
                                        label="Your PID"
                                        validateTrigger="onBlur"
                                        validateFirst={true}

                                    >
                                        <Input placeholder={state.pid} />
                                    </Form.Item>
                                    <Button type="primary" className="go-btn" onClick={() => {
                                        goPath('/MintPassport')
                                    }}>
                                        Mint Passport
                                    </Button>
                                </div>

                                <div className="flex-box">
                                    <Form.Item
                                        label="Your FireSeedID:"
                                    >
                                        <div className="choose-id" onClick={focusSelect}>
                                            
                                            <Select
                                        className="select-chain"
                                        defaultValue={chooseId}
                                        value={chooseId}
                                        options={balance}
                                    />
                                            {/* <div className="cur-amount">
                                               
                                            </div> */}
                                        </div>

                                    </Form.Item>
                                    <div className="select-box">
                                        {isFocusSelect && (
                                            <div className="select-list">
                                                {list.map(item => {
                                                    return (
                                                        <div onClick={() => {
                                                            chooseSelect(item)
                                                        }} className="select-item" value={item.value}>
                                                            <div>{item.label}</div>
                                                            <div>×{item.balance}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                    <Button type="primary" className="go-btn" onClick={() => {
                                        goPath('/MintFireSeed')
                                    }}>
                                        Mint FireSeed
                                    </Button>
                                </div>
                                <div className='fee'>
                                    <span style={{ fontFamily: 'Roboto-SemiBold, Roboto', fontWeight: '600', paddingTop: '5px' }}>Fee : </span>
                                    <div style={{display:'flex'}}><img src={passportIcon} />
                                        <span className='eewz'>{fee}ETH</span>
                                    </div>
                                </div>
                                <Form.Item className="button-box" >
                                    {!allowance && <Button className="subBtn" htmlType="submit" type="primary"
                                        size="large"
                                        onClick={() => approve()}>Approve</Button>}

                                    <Button className="subBtn" htmlType="submit" type="primary"
                                        size="large"
                                        onClick={() => Mint()}>Mint</Button>
                                </Form.Item>

                                <div className="tip">
                                    <p>
                                        1.FireSoul: ERC721, each user can only mint one, non-transferable, is the soul
                                        account
                                        of FireDAO official members, used to store various types of SBT and SBB.
                                        Generate a
                                        unique FID and FID-based on-chain reputation.
                                    </p>
                                    <p>
                                        2.You must have a FirePassport and burn a FireSeed to create a FireSoul account.
                                        If you
                                        don't have one, please mint a FirePassport and FireSeed first.
                                    </p>
                                    <p>

                                        3.FireSoul can be destroyed, and the corresponding soul account, FID,
                                        NFT and various SBTs will also be canceled after destruction.
                                        You can burn a FireSeed again to generate a brand new SoulAccount.
                                    </p>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>

            </div>

        </StyleBox>
    )
}
export default MintFireSoul
