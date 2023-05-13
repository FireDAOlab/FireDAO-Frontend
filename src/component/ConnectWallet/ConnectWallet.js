import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "antd"
import {useConnect, connect} from "../../api/contracts";
import {
    WalletOutlined
} from '@ant-design/icons';
import develop from "../../env";
import ConnectWalletStyle from "./ConnectWalletStyle";
const ConnectWallet = () => {
    let {state, dispatch} = useConnect();
    const location = useLocation()
    const connectWallet = async () => {
        try {
            if (state.networkId != develop.chainId) {
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
                        params: [{chainId: '0x' + develop.chainId.toString(16)}],
                    });

                } else {
                    if (develop.chainId == "42161") {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: "0xa4b1",
                                    chainName: 'Arbitrum One',
                                    nativeCurrency: {
                                        name: 'Arbitrum Ether',
                                        symbol: 'ETH',
                                        decimals: 18,
                                    },
                                    rpcUrls: ['https://arb1.arbitrum.io/rpc', 'https://endpoints.omniatech.io/v1/arbitrum/one/public'],
                                    blockExplorerUrls: ['https://arbiscan.io'],
                                },
                            ],
                        });
                    } else {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: "0x" + develop.chainId.toString(16),
                                    chainName: 'Arbitrum Goerli',
                                    rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
                                    nativeCurrency: {
                                        symbol: "AGOR",
                                        name: "AGOR",
                                        decimals: 18
                                    },
                                    blockExplorerUrls: ['https://goerli-rollup-explorer.arbitrum.io'],
                                },
                            ],
                        });
                    }
                }
                const ChainId = (await window.ethereum.request({method: 'eth_chainId'}))
                if (ChainId == "0x66eed") {
                    dispatch({type: "SET_NETWORKID", payload: 421613})
                } else if (ChainId == "0xa4b1") {
                    dispatch({type: "SET_NETWORKID", payload: 42161})
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
                    <Button type="normal" onClick={() => connectWallet()} className="connect-button"
                            icon={<WalletOutlined/>}>
                        {
                            state.account ? state.account.substr(0, 5) + "..." + state.account.substr(state.account.length - 5, state.account.length) : " Connect Wallet"
                        }
                    </Button>
                )
            }
            {
                location.pathname !== "/" && (
                    <Button type="primary" onClick={() => connectWallet()} className="" icon={<WalletOutlined/>}>
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
