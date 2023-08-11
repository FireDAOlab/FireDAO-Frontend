import styled from "styled-components";
import React, { useState } from 'react';

import english from "../../imgs/english.webp"
import { Button, Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import develop from "../../env"
import navMap from "../../config/navMap";
import { useConnect } from "../../api/contracts";
import MNavListStyle from "./MNavListStyle";
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = navMap;

const NavList = () => {
    let { state, dispatch } = useConnect();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(["Holy Fire Altar", "MintPassport"]);
    const [selectNav, setSelectNav] = useState("Holy Fire Altar");
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const history = useNavigate();
    const goPage = (obj) => {
        if (develop.ENV === "dev") {
            setSelectedKeys(obj.keyPath)
            history("/" + obj.key);
            setSelectNav(obj.keyPath[1])
            localStorage.setItem("activeNav", obj.keyPath[1])
        } else if (develop.ENV === "production") {
            if (obj.key == "MintPassport" || obj.key == "PIDList" || obj.key == "MyPassport") {
                setSelectedKeys(obj.keyPath)
                history("/" + obj.key);
                setSelectNav(obj.keyPath[1])
            } else {
                history("/OnBuilding");
            }
        } else {
            if (obj.key == "MintPassport" || obj.key == "PIDList" || obj.key == "MyPassport" || obj.key == "PidAirdrop") {
                setSelectedKeys(obj.keyPath)
                history("/" + obj.key);
                setSelectNav(obj.keyPath[1])
            } else {
                history("/OnBuilding");
            }
        }
        dispatch({ type: "SET_IsShowNav", payload: false })

    }

    const rootSubmenuKeys = ['Holy Fire Altar', 'FDT Square', 'Operation'];
    const [openKeys, setOpenKeys] = useState(['Holy Fire Altar']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <MNavListStyle>
           
            <div className="m-nav-box">
                <div
                    className="navBox"
                    style={{
                        width: 256,

                    }}
                >

                    <Menu
                        className="menu"
                        defaultSelectedKeys={[]}
                        defaultOpenKeys={[selectNav]}
                        selectedKeys={selectedKeys}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        onClick={(e) => goPage(e)}
                    />
                    <div className="lng-choose">
                        <img src={english} alt="" />
                        <span>English</span>
                    </div>
                </div>
            </div>
        </MNavListStyle>
    )

}

export default NavList
