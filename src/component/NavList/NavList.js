import styled from "styled-components";
import {Component, useEffect, useReducer} from "react";
import React, {useState} from 'react';
import logo from "../../imgs/logo.webp"

import english from "../../imgs/english.webp"
import {Button, Menu} from 'antd';
import {useLocation, useNavigate} from "react-router-dom";
import develop from "../../env"
import navMap from "../../config/navMap";
import NavListStyle from "./NavListStyle";

const items = navMap;
const NavList = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(["Holy Fire Altar", "MintPassport"]);
    const [selectNav, setSelectNav] = useState("Holy Fire Altar");
    const [openKeys, setOpenKeys] = useState(['Holy Fire Altar']);
    const rootSubmenuKeys = navMap.map(items=>{
        return items.key
    });
    console.log(navMap)
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
    useEffect(()=>{

        let keyPath= []
        const curKey = location.pathname.substring(1,location.pathname.length)
        navMap.forEach(navObj=>{
            navObj.children.forEach(async nav=>{
                if(nav.key==curKey){
                    await setSelectNav(navObj.key)
                    setOpenKeys([navObj.key])
                    keyPath.push(navObj.key)
                    keyPath.push(nav.key)
                    setSelectedKeys(keyPath)
                }
            })
        })
    },[])
    return (
        <NavListStyle>
            <div className="nav-box-box">
                <div
                    className="navBox"
                    style={{
                        width: 256,
                    }}
                >
                    {/*<Button*/}
                    {/*    type="primary"*/}
                    {/*    onClick={toggleCollapsed}*/}
                    {/*    style={{*/}
                    {/*        marginBottom: 16,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
                    {/*</Button>*/}
                    <div className="logo-box">
                        <a href="https://firedao.co/" target="_blank"> <img className="logo" src={logo} alt=""/></a>
                    </div>
                    <div className="selectNav">
                        {selectNav}
                    </div>
                    <Menu
                        className="menu"
                        mode="inline"
                        defaultSelectedKeys={[]}
                        defaultOpenKeys={[selectNav]}
                        selectedKeys={selectedKeys}
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        onClick={(e) => goPage(e)}
                    />
                    <div className="lng-choose">
                        <a href="https://apptest.firedao.co/MintPassport" target="_blank">
                            <span>Arbitrum Goerli</span>
                        </a>
                    </div>
                    <div className="lng-choose">
                        <img src={english} alt=""/>
                        <span>English</span>
                    </div>
                </div>
            </div>
        </NavListStyle>
    )

}

export default NavList
