import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd"
import { useConnect, connect } from "../../api/contracts";

import WalletOutlined from "../../imgs/connect.png"
import WalletStyle from "./WalletStyle.js";

const Wallet = () => {
    return (
        <WalletStyle>
            <div className="select_item clearfix left">
                <div className="select_module_con left">
                    <div className="select_result">
                        <img style={{ display: 'none', width: '25px', height: '25px', margin: '5px' }} alt="" />
                            <span>English</span>
                            <div className="triangle"></div>
                    </div>
                    <ul style={{ display: "none" }}>
                        <li className="yuyan"><img className="guoj" alt="" /><span>English</span><img className="dui" style={{ display: "block" }} alt="" /></li>
                        <li className="yuyan"><img className="guoj" alt="" /><span>Chinese</span><img className="dui" alt="" /></li>
                    </ul>
                </div>
            </div>
        </WalletStyle>
    )
}
export default Wallet;