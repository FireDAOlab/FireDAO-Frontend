import { useConnect, connect } from "../../api/contracts";
import ConnectWallet from "../ConnectWallet/ConnectWallet";

import { useEffect, useState } from "react";
import { Button, notification, Select } from 'antd';
import passportIcon from "../../imgs/ethereum.png"
import right from "../../imgs/right.png"
import eth from "../../imgs/eth.png"
import polygon from "../../imgs/polygon.png"
import { useLocation, useNavigate } from "react-router-dom";
import NavList from "../NavList/MNavList";
import logo from "../../imgs/logo.png"
import develop from "../../env"
import user from "../../imgs/user.png";
import FireDAOHeaderStyle from "./FireDAOHeaderStyle";
import { getContractByName } from "../../api/connectContract";
import { viewMethod } from "../../utils/contractUtil";
import { Dropdown, Space } from 'antd';
import judgeStatus from "../../utils/judgeStatus";
const items = [
    {
        label: <div style={{
            width: '230px', marginLeft: '-3px', display: 'flex', height: '65px',
            background: '#241B1B',
            borderRadius: '20px', padding: '0px 5px', border: '1px solid rgba(234,234,234,0.1)'
        }}>
            <img style={{ width: '50px', height: '50px', marginTop: '8px' }} src={eth} /><span style={{ width: '50%', fontSize: '16px', lineHeight: '63px', marginLeft: '5px' }}>Ethereum</span><img style={{ width: '20px', height: '15px', marginTop: '23px', marginLeft: '25px' }} src={right} /></div>
        // key: '0',
    },
  
    {
        label: <div style={{
            width: '230px', marginLeft: '-3px', display: 'flex', height: '65px', background: '#241B1B',
            borderRadius: '20px', padding: '0px 5px', border: '1px solid rgba(234,234,234,0.1)'
        }}>
            <img style={{ width: '50px', height: '50px', marginTop: '8px' }} src={polygon} /><span style={{ width: '50%', fontSize: '16px', lineHeight: '63px', marginLeft: '5px' }}>Polygon</span><img style={{ width: '20px', height: '15px', marginTop: '23px', marginLeft: '25px', display: 'none' }} src={right} /></div>
        // key: '1',
    },

];

const FireDAOHeader = () => {
    let { state, dispatch } = useConnect();
    const history = useNavigate();
    const [chain, setChain] = useState("Arbitrum Goerli")
    const goPage = (url) => {
        history(url);
    }
    const location = useLocation()

    const handleSoulViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            return
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            return
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            return
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getUserFIDAndAddr = async () => {
        const UserFID = await handleSoulViewMethod("UserFID", [state.account])
        const userInfo = await handleUserViewMethod("userInfo", [state.account])
        dispatch({ type: "SET_PID", payload: userInfo.PID })
        dispatch({ type: "SET_FID", payload: UserFID })
    }
    const handleChange = (chain) => {
        if (chain == "0x66eed") {
            window.open("http://apptest.firedao.co" + location.pathname, "_self")
            return
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: chain,
                        chainName: 'Arbitrum Goerli',
                        rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
                        nativeCurrency: {
                            symbol: "AGOR",
                            name: "AGOR",
                            decimals: 18
                        }
                    },
                ],
            });
        } else if (chain == "0xa4b1") {
            window.open("http://app01.firedao.co" + location.pathname, "_self")
            return
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: chain,
                        chainName: 'Arbitrum One',
                        rpcUrls: ['https://endpoints.omniatech.io/v1/arbitrum/one/public'] /* ... */,
                        nativeCurrency: {
                            symbol: "ETH",
                            name: "ETH",
                            decimals: 18
                        }
                    },
                ],
            });
        }

    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        getUserFIDAndAddr()

    }, [state.account, state.networkId]);
    return (
        <FireDAOHeaderStyle>
            {state.isShowNav && <div className="m-nav">
                <div className="m-nav-content">
                    <div className="close" onClick={() => {
                        dispatch({ type: "SET_IsShowNav", payload: false })
                    }}>
                        <svg t="1675219743493" className="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2668" width="20" height="20">
                            <path
                                d="M925.468404 822.294069 622.19831 512.00614l303.311027-310.331931c34.682917-27.842115 38.299281-75.80243 8.121981-107.216907-30.135344-31.369452-82.733283-34.259268-117.408013-6.463202L512.000512 399.25724 207.776695 87.993077c-34.675754-27.796066-87.272669-24.90625-117.408013 6.463202-30.178323 31.414477-26.560936 79.375815 8.121981 107.216907l303.311027 310.331931L98.531596 822.294069c-34.724873 27.820626-38.341237 75.846432-8.117888 107.195418 30.135344 31.43699 82.72919 34.326806 117.408013 6.485715l304.178791-311.219137 304.177767 311.219137c34.678824 27.841092 87.271646 24.951275 117.408013-6.485715C963.808618 898.140501 960.146205 850.113671 925.468404 822.294069z"
                                fill="#ffffff" p-id="2669"></path>
                        </svg>
                    </div>
                    <NavList className="firenav" closeDialog= {()=>{dispatch({ type: "SET_IsShowNav", payload: false })}}/>   
                </div>
            </div>}

            <div className="firedao-header">

                <div className="currentTitle">
                <div className="logo-box1">
                        <a href="https://firedao.co/" target="_blank"> <img className="logo" src={logo} alt="" /></a>
                    </div>
                </div>
                <div className="nav-list">

                    <div className="nav-item">
                        <a href="https://docs.firedao.co/" target="_blank">
                            DOCS
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href={develop.webside} target="_blank">
                            White Paper
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href={develop.github} target="_blank">
                            Github
                        </a>
                    </div>
                </div>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement='bottom'
                    trigger={['click']}
                    overlayStyle={{
                        width: '250px',
                        height: '160px',
                        background: '#241B1B',
                        boxShadow: '0px 20px 20px 10px rgba(0,0,0,0.2)',
                        borderRadius: '20px',
                        opacity: '1',
                        border: '1px solid rgba(226,226,226,0.1)',
                    }}
                >
                    <Button onClick={(e) => {
                        // goPage('/MyPassport'),
                        e.preventDefault()

                    }} className="passport-icon" type="primary">
                        <div style={{ display: 'flex' }}>
                            <img src={passportIcon} alt="" />
                            <span style={{ margin: '0px 10px', verticalAlign: 'middle', fontSize: '13px' }}>Ethereum</span>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(216, 216, 216, 1)', margin: 'auto' }}></div>
                        </div>
                    </Button>
                </Dropdown>
                {/* <Select
                    className="select-chain"
                    defaultValue="Goerli network"
                    onChange={handleChange}
                    value={chain}
                    options={[
                        {
                            value: '0x66eed',
                            label: 'Arbitrum Goerli network',
                        },
                        {
                            value: '0xa4b1',
                            label: 'Arbitrum One',
                        },
                    ]}
                /> */}
                <ConnectWallet />
                <svg onClick={() => {
                    dispatch({ type: "SET_IsShowNav", payload: true })
                }} className="menu" t="1675153518613" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2667" width="32" height="32">
                    <path
                        d="M128 469.333333m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533334l0 4.266666q0 40.533333-40.533333 40.533334l-686.933334 0q-40.533333 0-40.533333-40.533334l0-4.266666q0-40.533333 40.533333-40.533334Z"
                        p-id="2668" fill="#ffffff"></path>
                    <path
                        d="M128 682.666667m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z"
                        p-id="2669" fill="#ffffff"></path>
                    <path
                        d="M128 256m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z"
                        p-id="2670" fill="#ffffff"></path>
                </svg>
                {/* <Button style={{ background: '#373232', margin: '0px 13px', textAlign: 'center', lineHeight: '28px', width: "32px", height: '32px', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '50%' }}>
                    <img src={user} style={{ width: '22px', marginLeft: '-10px', marginTop: '-10px' }} />
                </Button> */}
            </div>

        </FireDAOHeaderStyle>
    )

}
export default FireDAOHeader
