import styled from "styled-components";
import {Component, useReducer} from "react";
import React, { useState } from 'react';
import logo from "../imgs/logo.webp"
import fireIcon1 from "../imgs/fire_icon1.webp"
import fireIcon2 from "../imgs/fire_icon2.webp"
import fireIcon3 from "../imgs/fire_icon3.webp"
import fireIcon4 from "../imgs/fire_icon4.webp"
import fireIcon7 from "../imgs/fire_icon7.webp"
import fireIcon5 from "../imgs/fire_icon5.webp"
import fireIcon6 from "../imgs/fire_icon6.webp"
import english from "../imgs/english.webp"
import { Button, Menu } from 'antd';
import {useNavigate} from "react-router-dom";
import develop from  "../env"
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Holy Fire Altar', 'Holy Fire Altar',<img className="fireIcon" src={fireIcon1} />, [
        getItem('Mint Passport', 'MintPassport'),
        getItem('PID Airdrop', 'PidAirdrop'),
        getItem('Mint FireSeed', 'MintFireSeed'),
        getItem('Mint FireSoul', 'MintFireSoul'),
        getItem('Pass FireSeed', 'PassFireSeed'),
        getItem('My Passport', 'MyPassport'),
        getItem('PID List', 'PIDList'),
        getItem('FID List', 'FIDList'),
        getItem('SBT List', 'SBTList'),
    ]),
    getItem('SBB Square', 'SBBSquare', <img className="fireIcon" src={fireIcon2} />,[
        getItem('General', 'General'),
        getItem('DeFi', 'DeFi'),
        getItem('DAOs', 'DAOs'),
        getItem('NFT', 'NFT'),
        getItem('Metaverse', 'Metaverse'),
        getItem('SocilFi', 'SocilFi'),
        getItem('GameFi', 'GameFi'),
    ]),


    getItem('FDT Square', 'FDTSquare', <img className="fireIcon" src={fireIcon7} />, [
        getItem('OG Pool', 'OGPool'),
        getItem('Seed Pool', 'SeedPool'),
        getItem('Consensus Pool', 'ConsensusPool'),
        getItem('FLM Pool', 'FLMPool'),
        getItem('Uniswap Pool', 'UniswapPool'),
        getItem('FDT Release', 'FDTRelease'),
        getItem('FLM Release', 'FLMRelease'),
        getItem('FDT Holder', 'FDTHolder'),

    ]),
    getItem('Operation', 'Operation', <img className="fireIcon" src={fireIcon3} />, [
        getItem('Guild', 'Guild'),
        getItem('Citynode', 'Citynode'),
        getItem('LP Mining', 'LP Mining'),
        getItem('FDT Mining', 'FDT Mining'),
        getItem('Soul Airdrop', 'Soul Airdrop'),
        getItem('FireLock', 'FireLock'),
    ]),
    getItem('Treasury', 'Treasury', <img className="fireIcon" src={fireIcon4} />,[
        getItem('Source', 'Source'),
        getItem('Distribution', 'Distribution'),
        getItem('Community Vault', 'Community Vault'),
        getItem('Repurchase&Burn', 'Repurchase&Burn'),
        getItem('FireSeed Competition', 'FireSeedCompetition'),
        getItem('Citynode Competition', 'CitynodeCompetition'),
        getItem('Incentive Fund', 'IncentiveFund'),
    ]),
    getItem('Governance', 'Governance', <img className="fireIcon" src={fireIcon5} />,[
        getItem('FID Reputation', 'FIDReputation'),
        getItem('Referendum', 'Referendum'),
        getItem('Create Proposal', 'Create Proposal'),
    ]),
    getItem('Ecological Forum', 'EcologicalForum', <img className="fireIcon" src={fireIcon6} />,[
        getItem('Tokenomics', 'Tokenomics'),
        getItem('Guild', 'EcologicalForumGuild'),
        getItem('Citynode', 'EcologicalForumCitynode'),
        getItem('Governance', 'EcologicalForumGovernance'),
        getItem('Communication', 'Communication'),
        getItem('Local', 'Local'),
        getItem('Management', 'Management'),
    ]),
];
const NavList = () => {
    const NavListBox = styled.div`
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      z-index: 1;
      font-weight: bold;
      .ant-menu-submenu-title{
        i{
          display: none;
        }
      }
      .ant-menu-sub{
        .ant-menu-title-content{
          padding-left: 0.8em;
        }
      }
      .ant-menu-root{
        >.ant-menu-item-selected{
          position: relative;
          &:after{
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 2px;
            height: 50px;
            background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
          }
        }
      }

      .ant-menu-submenu-selected{
        background: #070000;
        .ant-menu-submenu-title{
          position: relative;
          &:after{
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 2px;
            height: 50px;
            background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
          }
        }
      }

      .logo-box{
        width: 100%;
        text-align: center;
        margin-bottom: 1em;
        .logo{
          width: 40%;
          margin:  0.5em;
        }
      }

      .nav-box-box{
        height: 100%;
        &::-webkit-scrollbar-thumb{
          width: 3px;
        }
        &::-webkit-scrollbar{
          width: 3px;
        }
      }
      .navBox{
        background: #201414;
        display: flex;
        padding-bottom: 2em;
        flex-direction: column;
        &::-webkit-scrollbar-thumb{
          width: 3px;
        }
        &::-webkit-scrollbar{
          width: 3px;
        }
        height: 100%;
        overflow-y: scroll;

        .menu{
          flex-grow: 1;
        }
        .lng-choose{
          display: flex;
          align-items: center;
          background: #070000;
          border-radius: 5px;
          border: 1px solid #414141;
          width: 160px;
          height: 40px;
          padding:0 1em;
          justify-content: space-between;
          margin: 0 auto;
          flex-shrink: 0;
          img{
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
        }
      }
      .fireIcon{
        width: 26px;
        height: 26px;
      }
      .selectNav{
        position: absolute;
        right: -10em;
        top: calc(0.9em );
        font-size: 18px;
      }
    `
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(["Holy Fire Altar","MintPassport"]);
    const [selectNav, setSelectNav] = useState("Holy Fire Altar");
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const history = useNavigate();
    const goPage = (obj) => {
        if(develop.ENV === "dev"){
            setSelectedKeys(obj.keyPath)
            history("/"+ obj.key );
            setSelectNav(obj.keyPath[1])
            localStorage.setItem("activeNav",obj.keyPath[1])
        }else if(develop.ENV === "production"){
            if(obj.key=="MintPassport" ||obj.key== "PIDList" ||obj.key== "MyPassport"  ){
                setSelectedKeys(obj.keyPath)
                history("/"+ obj.key );
                setSelectNav(obj.keyPath[1])
            }else{
                history("/OnBuilding" );
            }
        }else{
            if(obj.key=="MintPassport" ||obj.key== "PIDList" ||obj.key== "MyPassport"||obj.key== "PidAirdrop"   ){
                setSelectedKeys(obj.keyPath)
                history("/"+ obj.key );
                setSelectNav(obj.keyPath[1])
            }else{
                history("/OnBuilding" );
            }
        }

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
        <NavListBox>
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
                        <img className="logo" src={logo} alt="" onClick={()=>{history("/")}}/>
                    </div>
                    <div className="selectNav">
                        {selectNav}
                    </div>
                    <Menu
                        className="menu"
                        defaultSelectedKeys={[]}
                        defaultOpenKeys={[selectNav]}
                        selectedKeys={selectedKeys }
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        onClick={(e)=>goPage(e)}
                    />
                    <div className="lng-choose">
                        <img src={english} alt=""/>
                        <span>English</span>
                    </div>
                </div>
            </div>
        </NavListBox>
    )

}

export default NavList
