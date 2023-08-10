import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd"
import { useConnect, connect } from "../../api/contracts";
import detectEthereumProvider from '@metamask/detect-provider';
import WalletOutlined from "../../imgs/connect.png"
import develop from "../../env";
import { Network } from "../../config/constants";

import ConnectWalletStyle from "./ConnectWalletStyle";
import Ethereum from "../Ethereum/Ethereum";
import right from "../../imgs/right.png"
import ethereum from "../../imgs/ethereum.png"
import usdt from "../../imgs/usdt.png"
import sz from "../../imgs/sz.png"
import fz from "../../imgs/fz.png"
import coinbase from "../../imgs/coinbase.png"
import walletc from "../../imgs/walletc.png"
import ConnectWt from "./component/ConnectWt"
import group1 from '../../imgs/Group.png'
import { Dropdown, Space } from 'antd';
// import connect2 from './demo.css'

const ConnectWallet = (props) => {
    const { closeDialog, updateData } = props
    let { state, dispatch } = useConnect();
    const location = useLocation()
    const [isShowWallet, setShowWallet] = useState(false)

    useEffect(()=>{
        detectEthereumProvider()
            .then(async (provider) => {
                if (!provider) {
                    console.log("noe provider")
                } else {
                    const accounts = await window.ethereum.request({method: 'eth_accounts'});
                    if (accounts && accounts[0]) {
                        await connect(state, dispatch)

                    } else {

                    }

                }
            })
    },[])
    const connectWallet = async () => {
        try {
            let curChainId = await window.ethereum.request({ method: "eth_chainId" })
            if (curChainId != develop.chainId) {
                const permissions = await window.ethereum.request({
                    method: 'wallet_getPermissions',
                });

                const hasPermission = permissions.some((permission) =>
                    permission.parentCapability === 'eth_chainId' && permission.caveats.some((caveat) => {
                        const chainId = caveat.type === 'chainId' && caveat.value;
                        return chainId === develop.chainId;
                    }),
                );
                if (hasPermission) {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x' + develop.chainId.toString(16) }],
                    });

                } else {
                    const chainId = "0x13881"
                    try {
                        let paramsArry = [
                            {
                                chainId: Network[chainId].chainId,
                                chainName: Network[chainId].chainName,
                                rpcUrls: Network[chainId].rpcUrls,
                                nativeCurrency: Network[chainId].nativeCurrency,
                                blockExplorerUrls: Network[chainId].blockExplorerUrls ? Network[chainId].blockExplorerUrls : null,
                            },
                        ];
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: paramsArry,
                        });

                        await this.$refs["wallet"].registerWeb3()
                    } catch (addError) {
                        console.log({ addError });
                    }
                }
                const ChainId = (await window.ethereum.request({ method: 'eth_chainId' }))
                if (ChainId == "0x66eed") {
                    dispatch({ type: "SET_NETWORKID", payload: 421613 })
                } else if (ChainId == "0xa4b1") {
                    dispatch({ type: "SET_NETWORKID", payload: 42161 })
                }
                console.log(state.networkId)
            }
        } catch (e) {
            console.log(e)
        }
        await connect(state, dispatch)
    }
    const items = [
        {
            label: <div className="sss" style={{
                width: '230px', marginLeft: '-3px', display: 'flex', height: '65px',
                background: '#241B1B',
                borderRadius: '20px', padding: '0px 5px', border: '1px solid rgba(234,234,234,0.1)'
            }} onClick={() => { connectWallet() }}>
                <img style={{ width: '50px', height: '50px', marginTop: '10px' }} src={sz} />
               
                <span style={{ width: '50%', fontSize: '15px', lineHeight: '63px'}}>MetaMask
                <span style={{ dontSize:'14px',color:'#999999',display:'block',marginTop: '-40px' }}> {
                                state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : ""
                            }
                    </span>
                    {/* <img style={{width:'15px',margin: '-132px 0px 0px 100px'}} src={fz} /> */}
                </span>
                <img style={{ width: '20px', height: '15px', marginTop: '23px', marginLeft: '20px' }} src={right} />
                
                </div>
            // key: '0',
        },
        {
            label: <div style={{
                width: '230px', marginLeft: '-3px', display: 'flex', height: '65px', background: '#241B1B',
                borderRadius: '20px', padding: '0px 5px', border: '1px solid rgba(234,234,234,0.1)'
            }}>
                <div style={{ marginLeft:'10px',marginTop: '18px',textAlign:'center', width: '30px', height: '30px', padding: '2px',backgroundColor:'rgba(255,255,255,0.1)',border: '1px solid rgba(255,255,255,0.1)' ,borderRadius:'50%'}}>
                    <img style={{ width: '80%', }} src={coinbase} />
                </div>
                <span style={{ width: '50%', fontSize: '15px', lineHeight: '63px', marginLeft: '20px' }}>Coinbase Wallet</span>
                <img style={{ width: '20px', height: '15px', marginTop: '23px', marginLeft: '20px', display: 'none' }} src={right} />
            </div>
            // key: '1',
        },
        {
            label: <div style={{
                width: '230px', marginLeft: '-3px', display: 'flex', height: '65px',
                background: '#241B1B',
                borderRadius: '20px', padding: '0px 5px', border: '1px solid rgba(234,234,234,0.1)'
            }}>
                <div style={{ marginLeft:'10px',marginTop: '18px',textAlign:'center', width: '30px', height: '30px', padding: '2px',backgroundColor:'rgba(255,255,255,0.1)',border: '1px solid rgba(255,255,255,0.1)',borderRadius:'50%' }}>
                    <img style={{ width: '80%', }} src={walletc} />
                </div>
                <span style={{ width: '50%', fontSize: '15px', lineHeight: '63px', marginLeft: '20px' }}>WalletConnect</span>
                <img style={{ width: '20px', height: '15px', display: 'none', marginTop: '23px', marginLeft: '20px' }} src={right} />
            </div>
            // key: '0',
        },
        {
            label: <p style={{
                fontSize: '16px',
                fontFamily: 'Roboto-Medium, Roboto',
                fontWeight: '500',
                color: '#8A8080',
                textAlign: 'center',
                fontSize: '15px'
                
            }}>
                Log Out</p>
        },
        {
            label: <p style={{
                fontSize: '16px',
                fontFamily: 'Roboto-Medium, Roboto',
                fontWeight: '500',
                color: '#8A8080',
                lineHeight: '19px',
                textAlign: 'left',
                fontSize: '15px'
            }}>
                Balances</p>
        }, {
            label:
                <div ><img src={ethereum} style={{ width: "25px", margin: '0px 10px 5px 0px' }} /><span style={{ fontSize: '15px' }}>ETH</span><span style={{ float: 'right' }}></span></div>

        },
        {
            label: <div><img src={usdt} style={{ width: "25px", margin: '0px 10px 5px 0px' }} /><span style={{ fontSize: '15px' }}>USDT</span><span style={{ float: 'right' }}></span></div>
        }

    ];
    return (
        <ConnectWalletStyle>
            
             {isShowWallet && <ConnectWt updateData={() => {  }} closeDialog={() => { setShowWallet(false) }} />}
            {
                location.pathname === "/" && (
                    <div>
                    <Dropdown
                        className="dropdow"
                        menu={{
                            items,
                        }}
                        trigger={['click']}

                    >
                        <Button type="normal" onClick={(e) => e.preventDefault()} className="connect-button but2">
                            <img src={WalletOutlined} alt="" style={{ width: '20px', marginRight: '10px', verticalAlign: 'middle', }} />
                            {
                                state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : " Connect Wallet"
                            }

                        </Button>
                    </Dropdown>
                    {/* e.preventDefault() */}
                    <Button type="normal" onClick={(e) => { setShowWallet(true) }} className="connect-button but1">
                            <img src={WalletOutlined} alt="" style={{ width: '20px', marginRight: '10px', verticalAlign: 'middle', }} />
                            {
                                state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : " Connect Wallet"
                            }

                        </Button>
                    </div>
                )
            }
            {
                location.pathname !== "/" && (
                <div className='buttt'>
                    <Dropdown
                    className="dropdow"
                        placement='bottomRight'
                        menu={{
                            items,
                        }}
                        overlayStyle={{
                            width: '250px',
                            height: '360px',
                            backgroundColor: '#241B1B',
                            boxShadow: '0px 20px 20px 10px rgba(0,0,0,0.2)',
                            borderRadius: '20px',
                            opacity: '1',
                            border: '1px solid rgba(226,226,226,0.1)',
                            // marginLeft:'-180px'
                        }}
                        trigger={['click']}
                    >
                        <Button type="primary" onClick={(e) => e.preventDefault()} className="connect-button but2" >
                            <img src={WalletOutlined} alt="" style={{ marginRight: '10px', verticalAlign: 'middle', }} />
                            {
                                state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : " Connect Wallet"
                            }
                        </Button>
                    </Dropdown>
                    <Button type="primary" onClick={(e) =>{ setShowWallet(true) }} className="connect-button but1" >
                            <img src={WalletOutlined} alt="" style={{ marginRight: '10px', verticalAlign: 'middle', }} />
                            {
                                state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : " Connect Wallet"
                            }
                        </Button>
                   </div> 
                )
            }


        </ConnectWalletStyle>
    )

}
export default ConnectWallet
