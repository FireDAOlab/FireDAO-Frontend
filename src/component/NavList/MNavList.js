import styled from "styled-components";
import React, { useState } from 'react';
import { Component, useEffect, useReducer } from "react";
import english from "../../imgs/english.webp"
import { Button, Menu } from 'antd';
import { useLocation,useNavigate } from "react-router-dom";
import develop from "../../env"
import navMap from "../../config/navMap";
import { useConnect } from "../../api/contracts";
import MNavListStyle from "./MNavListStyle";


const items = navMap;

const NavList = (props) => {
    const { closeDialog } = props
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(["Holy Fire Altar", "MintPassport"]);
    const [selectNav, setSelectNav] = useState("Holy Fire Altar");
    const [openKeys, setOpenKeys] = useState(['Holy Fire Altar']);

    const rootSubmenuKeys = navMap.map(items => {
        return items.key
    });
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const history = useNavigate();
    const location = useLocation()
    const goPage = (obj) => {
        setSelectedKeys(obj.keyPath)
        history("/" + obj.key);
        setSelectNav(obj.keyPath[1])
    }
    const onOpenChange = (keys) => {
        console.log(keys)
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    useEffect(() => {
        let keyPath = []
        const curKey = location.pathname.substring(1, location.pathname.length)
        navMap.forEach(navObj => {
            navObj.children.forEach(async nav => {
                if (nav.key == curKey) {
                    await setSelectNav(navObj.key)
                    setOpenKeys([navObj.key])
                    keyPath.push(navObj.key)
                    keyPath.push(nav.key)
                    setSelectedKeys(keyPath)
                }
            })
        })
    }, [])
    return (
        <MNavListStyle>
             <div className="mask" onClick={closeDialog }>

            </div>
            <div className="m-nav-box">
            
                <div
                    className="navBox"
                    onClick={closeDialog }
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
