import {useConnect, connect} from "../../api/contracts";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import {useEffect, useState} from "react";
import {Button, Select} from 'antd';
import passportIcon from "../../imgs/passportIcon.webp"
import {useLocation, useNavigate} from "react-router-dom";
import NavList from "../MNavList";
import develop from "../../env"

import FireDAOHeaderStyle from "./FireDAOHeaderStyle";

const FireDAOHeader = () => {
    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const [chain, setChain] = useState("Arbitrum Goerli")
    const goPage = (url) => {
        history(url);
    }
    const location = useLocation()

    const handleChange = (chain) => {
        if(chain == "0x66eed"){
            window.open("http://apptest.firedao.co" + location.pathname,"_self")
            return
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId:  chain,
                        chainName: 'Arbitrum Goerli',
                        rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'] ,
                        nativeCurrency:{
                            symbol:"AGOR",
                            name:"AGOR",
                            decimals:18
                        }
                    },
                ],
            });
        }else if(chain == "0xa4b1"){
            window.open("http://app01.firedao.co"+ location.pathname,"_self")
            return
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId:  chain,
                        chainName: 'Arbitrum One',
                        rpcUrls: ['https://endpoints.omniatech.io/v1/arbitrum/one/public'] /* ... */,
                        nativeCurrency:{
                            symbol:"ETH",
                            name:"ETH",
                            decimals:18
                        }
                    },
                ],
            });
        }

    }
    useEffect(async () => {
        if (!window.ethereum) {
            return false;
        }
        if(window.location.href.toString().indexOf("apptest")>=0){
            setChain("0x66eed")
        }else{
            setChain("0xa4b1")
        }
        // const request = (window.ethereum).request;
        // let chainId = await request({method: "eth_chainId"})
        // if (chainId != "0x66eed" && chainId !="0xa4b1") {
        //     setChain("Unsupported")
        // }
        // window.ethereum.on('chainChanged', (netWarkId) => {
        //     if (netWarkId == "0x66eed" ) {
        //         setChain(netWarkId)
        //         dispatch({type: "SET_NETWORKID", payload: 421613})
        //     }else if(netWarkId == "0xa4b1"){
        //         setChain(netWarkId)
        //         dispatch({type: "SET_NETWORKID", payload: 42161})
        //     } else {
        //         setChain("Unsupported")
        //     }
        //
        // });
    }, [])
    return (
        <FireDAOHeaderStyle>
            {state.isShowNav && <div className="m-nav">
                <div className="m-nav-content">
                    <div className="close" onClick={() => {
                        dispatch({type: "SET_IsShowNav", payload: false})
                    }}>
                        <svg t="1675219743493" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2668" width="20" height="20">
                            <path
                                d="M925.468404 822.294069 622.19831 512.00614l303.311027-310.331931c34.682917-27.842115 38.299281-75.80243 8.121981-107.216907-30.135344-31.369452-82.733283-34.259268-117.408013-6.463202L512.000512 399.25724 207.776695 87.993077c-34.675754-27.796066-87.272669-24.90625-117.408013 6.463202-30.178323 31.414477-26.560936 79.375815 8.121981 107.216907l303.311027 310.331931L98.531596 822.294069c-34.724873 27.820626-38.341237 75.846432-8.117888 107.195418 30.135344 31.43699 82.72919 34.326806 117.408013 6.485715l304.178791-311.219137 304.177767 311.219137c34.678824 27.841092 87.271646 24.951275 117.408013-6.485715C963.808618 898.140501 960.146205 850.113671 925.468404 822.294069z"
                                fill="#ffffff" p-id="2669"></path>
                        </svg>
                    </div>
                    <NavList className="firenav"/>
                </div>
            </div>}

            <div className="firedao-header">

                <div className="currentTitle">
                </div>
                <div className="nav-list">
                    <div className="nav-item">
                        <a href="http://firedao.co/" target="_blank">
                            Home
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href={develop.webside} target="_blank">
                            APP
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href={develop.forum} target="_blank">
                            Forum
                        </a>
                    </div>
                </div>
                <Button onClick={() => {
                    goPage('/MyPassport')
                }} className="passport-icon" type="primary">
                    <img src={passportIcon} alt=""/>
                </Button>
                <Select
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
                />
                <ConnectWallet/>
                <svg onClick={() => {
                    dispatch({type: "SET_IsShowNav", payload: true})
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
            </div>

        </FireDAOHeaderStyle>
    )

}
export default FireDAOHeader
