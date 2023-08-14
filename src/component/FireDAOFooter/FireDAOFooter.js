import React, { useState } from 'react';
import { Component, useEffect, useReducer } from "react";
import logo from "../../imgs/logo.png"
import icon1 from "../../imgs/11.png"
import icon2 from "../../imgs/22.png"
import icon3 from "../../imgs/33.png"
import icon4 from "../../imgs/44.png"
import icon5 from "../../imgs/55.png"
import icon6 from "../../imgs/66.png"
import icon7 from "../../imgs/77.png"
import icon8 from "../../imgs/88.png"
import icon9 from "../../imgs/99.png"
import { useLocation, useNavigate } from "react-router-dom";
import footerMap from "../../config/footerMap";
import { Menu } from 'antd';
import FireDAOFooterStyle from "./FireDAOFooterStyle";
function getItem(label, key, hr, children, type) {
    return {
        key,
        hr,
        children,
        label,
        type,
    };
}

const items = footerMap;
const FireDAOFooter = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(["Holy Fire Altar", "MintPassport"]);
    const [selectNav, setSelectNav] = useState("Holy Fire Altar");
    const [openKeys, setOpenKeys] = useState(['Holy Fire Altar']);
    const rootSubmenuKeys = footerMap.map(items => {
        return items.key
    });
    console.log(footerMap)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const history = useNavigate();
    const location = useLocation()
    const goPage = (obj) => {
        setSelectedKeys(obj.keyPath)
        history("/" + obj.key);
        // setSelectNav(obj.keyPath[1])
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
        footerMap.forEach(navObj => {
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
        <FireDAOFooterStyle>
            <div className="footer">
                <div className="lb">
                    <div className="bottom-box-box">
                        <div
                            className="navBox"
                            style={{
                                width: '100%'
                            }}
                        >
                           
                            <Menu
                                className="menu"
                                mode="inline"
                                defaultSelectedKeys={[]}
                                defaultOpenKeys={[]}
                                selectedKeys={selectedKeys}
                                
                                onOpenChange={onOpenChange}
                                theme="dark"
                                inlineCollapsed={collapsed}
                                items={items}
                                onClick={(e) => goPage(e)}
                            />
                          
                        </div>
                    </div>
                </div>
                <div className="left">
                    <img className="logo" src={logo} alt="" />
                    <div className="link-list">
                        <div className="link-item">
                            <img className="icon" src={icon1} alt="" />
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon2} alt="" />
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon3} alt="" />
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon4} alt="" />
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon5} alt="" />
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon6} alt="" />
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon7} alt="" />
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon8} alt="" />
                        </div>
                        <div className="link-item">
                            <img className="icon" src={icon9} alt="" />
                        </div>

                    </div>
                    <div className="copyrightphone">
                        Copyright ©FireDAO
                    </div>
                </div>
                <div className="right">
                    <div className="link-box">
                        <div className="link-col">
                            <div className="link-row title">
                                Holy Fire Altar
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                SBB
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                FDT Square
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Operation
                            </div>


                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Treasury
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Governance
                            </div>

                        </div>
                        <div className="link-col">
                            <div className="link-row title">
                                Ecological Forum
                            </div>

                        </div>
                    </div>
                    <div className="link-list">
                        <a href="https://www.firedao.co/fdpaperen.pdf" target="_blank" className="link">
                            White Paper
                        </a>
                        <a href="https://www.firedao.co/faq.html" target="_blank" className="link">
                            FAQ
                        </a>
                        <a href="https://forum.firedao.co/" target="_blank" className="link">
                            Forum
                        </a>
                        <a href="https://docs.firedao.co/" target="_blank" className="link">
                            Docs
                        </a>
                    </div>
                    <div className="copyright">
                        Copyright ©FireDAO
                    </div>
                </div>
            </div>
        </FireDAOFooterStyle>
    )

}
export default FireDAOFooter
