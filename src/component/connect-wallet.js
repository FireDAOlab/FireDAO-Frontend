import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "antd"
import {useConnect,connect} from "../api/contracts";
import {
    WalletOutlined
} from '@ant-design/icons';
const ConnectWallet = () => {
    const ConnectBox = styled.div`
        .connect-button{
          background: rgba(32,20,20,0.7);
          border-radius: 5px;
          border: 1px solid #414141;
        }
    `
    let {state, dispatch} = useConnect();
    const location = useLocation()
    const connectWallet = async () => {

        await connect(state,dispatch)
        console.log(state)
    }
    return (
        <ConnectBox>
            {
                location.pathname === "/"&&(
                    <Button type="normal" onClick={() => connectWallet()} className="connect-button" icon={<WalletOutlined />}>
                        {
                            state.account ? state.account.substr(0,5) + "..."+ state.account.substr(state.account.length-5,state.account.length) : " Connect Wallet"
                        }
                    </Button>
                )
            }
            {
                location.pathname !== "/"&&(
                    <Button type="primary" onClick={() => connectWallet()} className="" icon={<WalletOutlined />}>
                        {
                            state.account ? state.account.substr(0,5) + "..."+ state.account.substr(state.account.length-5,state.account.length) : " Connect Wallet"
                        }
                    </Button>
                )
            }
        </ConnectBox>
    )

}
export default ConnectWallet
