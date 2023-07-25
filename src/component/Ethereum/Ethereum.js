import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd"
import { useConnect, connect } from "../../api/contracts";
import React, { useState,useRef, useEffect } from 'react';
import WalletOutlined from "../../imgs/connect.png"
import EthereumStyle from "./EthereumStyle.js";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


// function Dropdown(props) {
//     const [isOpen, setIsOpen] = useState(false);

//     function toggleDropdown() {
//         setIsOpen(!isOpen);
//     }

//     function handleClickOutside(event) {
//         if (!event.target.closest('.dropdown')) {
//             setIsOpen(false);
//         }
//     }


// }


const Ethereum = () => {

    return (
        <EthereumStyle>
            {/* <div className="dropdown" onClick={handleClickOutside}>
                <button onClick={toggleDropdown}>Toggle Dropdown</button>
                {isOpen && <DropdownMenu onClose={() => setIsOpen(false)} />}
            </div> */}
        </EthereumStyle>
    )
}
export default Ethereum;