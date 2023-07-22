import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd"
import { useConnect, connect } from "../../api/contracts";

import WalletOutlined from "../../imgs/connect.png"
import develop from "../../env";
import { Network } from "../../config/constants";
import ConnectWalletStyle from "./ConnectWalletStyle";
import Ethereum from "../Ethereum/Ethereum";
import group1 from '../../imgs/Group.png'
// import connect2 from './demo.css'
const ConnectWallet = () => {
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
        <ConnectWalletStyle>
            {
                location.pathname === "/" && (
                    <Button type="normal" onClick={() => connectWallet()} className="connect-button">
                        <img src={WalletOutlined} alt="" style={{ marginRight: '10px', verticalAlign: 'middle', }} />
                        {
                            state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : " Connect Wallet"
                        }

                    </Button>
                )
            }
            {
                location.pathname !== "/" && (
                    <Button type="primary" onClick={() => connectWallet()} className="" >
                        <img src={WalletOutlined} alt="" style={{ marginRight: '10px', verticalAlign: 'middle', }} />
                        {
                            state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : " Connect Wallet"
                        }
                    </Button>
                )
            }
            

        </ConnectWalletStyle>
    )

}
export default ConnectWallet
