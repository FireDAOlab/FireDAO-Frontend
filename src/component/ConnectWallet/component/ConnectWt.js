import React, { useEffect, useRef, useState } from 'react';
import { useConnect,connect } from "../../../api/contracts";
import { useLocation, useNavigate } from "react-router-dom";
import develop from "../../../env";
import { Network } from "../../../config/constants";
import ConnectWStyle from "./ConnectWStyle.js";
import sz from "../../../imgs/sz.png"
import walletc from "../../../imgs/walletc.png"
const ConnectWallet = (props) => {
    const { closeDialog, updateData } = props
    let { state, dispatch } = useConnect();
    const location = useLocation()
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
    return (
        <ConnectWStyle>
            <div className="mask" onClick={closeDialog}>

            </div>
            <div className="dialog-content">
                <div className="header">
                <div className="title">
                    Connect Wallet
                </div>
                    {/* <div className="close" onClick={closeDialog}>
                        <svg t="1681179633627" className="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2615" width="26" height="26">
                            <path
                                d="M753.365333 843.861333a64 64 0 0 0 90.496-90.496L602.496 512l241.365333-241.365333a64 64 0 0 0-90.496-90.496L512 421.504 270.634667 180.138667a64 64 0 1 0-90.496 90.496L421.504 512l-241.365333 241.365333a64 64 0 0 0 90.496 90.496L512 602.496l241.365333 241.365333z"
                                fill="#ffffff" p-id="2616"></path>
                        </svg>
                    </div> */}
                </div>
                
                <div className="address-list">
                    <div className="fire-list-icon">
                        <div className="list-icon" onClick={() => { connectWallet() }}>
                            <img src={sz} style={{ width:'80px',height:'80px'}}/>
                            <p className='icon-name'>MetaMask</p>
                        </div>
                        <div className="list-icon">
                            <div style={{ width:'48px',height:'48px',marginLeft: '41%', marginTop: '13px', textAlign: 'center',  marginBottom: '20px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                                <img style={{ width: '60%',marginTop:'9px' }} src={walletc} />
                            </div>
                            <p className='icon-name'>WalletConnect</p>
                        </div>
                    </div>
                </div>
            </div>
        </ConnectWStyle>
    )
}
export default ConnectWallet