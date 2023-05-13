import {Routes, Route, Link, useNavigate, useLocation} from "react-router-dom";
import Register from "./view/HolyFireAltar/Register";
import UserInfo from "./view/UserInfo"
import CreateLock from "./view/createLock"
import LockList from "./view/LockList"
import Home from "./view/Home"
import "animate.css";

import SbtAdmin from "./view/sbtAdmin"
import PassFireSeed from "./view/HolyFireAltar/PassFireSeed"
import MintFireSoul from "./view/HolyFireAltar/MintFireSoul"
import AdminPage from "./view/passportAdmin"
import MyPassport from "./view/HolyFireAltar/MyPassport"
import GlobalStyle from "./style/style";
import AntdOverride from "./style/antdOverride";
import React from "react";
import {ConnectProvider, useConnect} from "./api/contracts";
import FireDAOHeader from "./component/FireDAOHeader/FireDAOHeader";
import FireDAOFooter from "./component/FireDAOFooter/FireDAOFooter";
import OnBuilding from "./view/OnBuilding";
import Passport from "./view/HolyFireAltar/Passport";

import MintFireSeed from "./view/HolyFireAltar/MintFireSeed";
import PidList from "./view/HolyFireAltar/PidList";
import FIDList from "./view/HolyFireAltar/FIDList";
import SBTList from "./view/HolyFireAltar/SBTList";
import ChangeUserInfo from "./view/HolyFireAltar/ChangeUserInfo";
import Reputation from "./view/HolyFireAltar/Reputation";
import ReputationManage from "./view/HolyFireAltar/ReputationManage";

import firebg from "./imgs/firebg.mp4"
import NavList from "./component/NavList";

//Seed Manage
import FireSeedManage from "./view/HolyFireAltar/FireSeedManage"
import FireSoulManage from "./view/HolyFireAltar/FireSoulManage"

//Treasury
import IncomeDistribution from "./view/Treasury/IncomeDistribution";
import IncomeSource from "./view/Treasury/IncomeSource";
import PidAirdrop from "./view/HolyFireAltar/PidAirdrop";
import TreasuryDistributionManage from "./view/Treasury/TreasuryDistributionManage";
import Distribution from "./view/Treasury/Distribution"
import TreasurySource from "./view/Treasury/Source"
import SourceDetail from "./view/Treasury/SourceDetail"

//FDTSquare
import OGPool from "./view/FDTSquare/OGPool/OGPool";
import OGPoolAdmin from "./view/FDTSquare/OGPool/OGPoolAdmin";

//Operation
import FireLock from "./view/Operation/FireLock/FireLock";
import FireLockView from "./view/Operation/FireLockView"
import CreateFireLock from "./view/Operation/CreateFireLock";
import CreateCityNode from "./view/Operation/CreateCityNode"

import CityNodeManage from "./view/Operation/CityNodeManage"
import CityNode from "./view/Operation/CityNode"
import CityNodeDetail from "./view/Operation/CItyNodeDetail"
import GuildManage from "./view/Operation/GuildManage"
import Guild from "./view/Operation/Guild"
import CreateGuild from "./view/Operation/CreateGuild"
import GuildDetail from "./view/Operation/GuildDetail"

function App() {
    const history = useNavigate();
    const location = useLocation()

    return (

        <ConnectProvider>
            <GlobalStyle/>
            <AntdOverride/>

            {
                location.pathname==="/"&&<Home/>
            }
            {location.pathname !== "/"&&
                <div className="content">
                    <video webkit-playsinline="true"  playsInline={true}  x5-video-orientation="portraint"   x5-playsinline="true" className="firebg" width="100%" autoPlay="autoplay" loop="loop" muted="muted">
                        <source src={firebg} type="video/mp4"/>
                    </video>
                    <FireDAOHeader/>
                    <NavList className="app-nav"/>
                    <div className="App" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop:"6em"
                    }}>

                        <div className="flex-container" style={{
                            width:"100%",
                            flexGrow:"1"
                        }}>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/OnBuilding" element={<OnBuilding/>}/>
                                <Route path="/MintPassport" element={<Register/>}/>
                                <Route path="/MyPassport" element={<MyPassport/>}/>
                                <Route path="/PIDList" element={<PidList/>}/>
                                <Route path="/ChangeUserInfo" element={<ChangeUserInfo/>}/>
                                <Route path="/Passport" element={<Passport/>}/>
                                <Route path="/PidAirdrop" element={<PidAirdrop/>}/>

                                <Route path="/FireSeedManage" element={<FireSeedManage/>}/>
                                <Route path="/FireSoulManage" element={<FireSoulManage/>}/>

                                <Route path="/UserInfo" element={<UserInfo/>}/>
                                <Route path="/PassportAdmin" element={<AdminPage/>}/>
                                <Route path="/CreateLock" element={<CreateLock/>}/>
                                <Route path="/LockList" element={<LockList/>}/>
                                <Route path="/MintFireSeed" element={<MintFireSeed/>}/>
                                <Route path="/MintFireSoul" element={<MintFireSoul/>}/>
                                <Route path="/PassFireSeed" element={<PassFireSeed/>}/>
                                <Route path="/SbtAdmin" element={<SbtAdmin/>}/>
                                <Route path="/FIDList" element={<FIDList/>}/>
                                <Route path="/SBTList" element={<SBTList/>}/>
                                <Route path="/Reputation" element={<Reputation/>}/>

                                <Route path="/ReputationManage" element={<ReputationManage/>}/>
                                {/*Treasury*/}
                                <Route path="/IncomeDistribution" element={<IncomeDistribution/>}/>
                                <Route path="/IncomeSource" element={<IncomeSource/>}/>
                                <Route path="/TreasuryDistributionManage" element={<TreasuryDistributionManage/>}/>
                                <Route path="/Distribution" element={<Distribution/>}/>
                                <Route path="/Source" element={<TreasurySource/>}/>
                                <Route path="/SourceDetail" element={<SourceDetail/>}/>


                                {/* FDTSquare*/}
                                <Route path="/OGPool" element={<OGPool/>}/>
                                <Route path="/OGPoolAdmin" element={<OGPoolAdmin/>}/>
                                {/*Operation*/}
                                <Route path="/FireLock" element={<FireLock/>}/>
                                <Route path="/FireLockView" element={<FireLockView/>}/>
                                <Route path="/CreateFireLock" element={<CreateFireLock/>}/>
                                <Route path="/CityNode" element={<CityNode/>}/>

                                <Route path="/CityNodeManage" element={<CityNodeManage/>}/>
                                <Route path="/CreateCityNode" element={<CreateCityNode/>}/>
                                <Route path="/CityNodeDetail/:id" element={<CityNodeDetail/>}/>
                                <Route path="/GuildManage" element={<GuildManage/>}/>
                                <Route path="/Guild" element={<Guild/>}/>
                                <Route path="/CreateGuild" element={<CreateGuild/>}/>
                                <Route path="/GuildDetail/:id" element={<GuildDetail/>}/>
                            </Routes>
                        </div>
                    </div>
                    <FireDAOFooter/>
                </div>
            }
        </ConnectProvider>

    )
}

export default App;
