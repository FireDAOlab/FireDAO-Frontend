import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../../api/contracts";
import {Card, Button, Descriptions, message, Form, List, Input, notification} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, viewMethod} from "../../../utils/contractUtil"
import {getIpfs} from "../../../utils/ipfsApi";
import passport from "../../../imgs/passport@2x.webp"
import FireSoul from "../../../imgs/FireSoul@2x.webp"
import passportHeaderBg from "../../../imgs/passport_header_bg.webp"
import headerImg from "../../../imgs/header_icon.webp"
import {useNavigate} from "react-router-dom";
import editIcon from "../../../imgs/edit_icon.webp"
import copyIcon from "../../../imgs/copy_icon.webp";
import adminIcon from "../../../imgs/admin_icon.webp";
import judgeStatus from "../../../utils/judgeStatus";
import MyPassportStyle from "./style"
import FireSeedList from "../components/FireSeedList";
import FIDScore from "../components/FIDScore";
const MyPassport = (props) => {

    let {state, dispatch} = useConnect();
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const [userInfo, setUserInfo] = useState({})
    const [userData, setUserData] = useState({})
    const [myClassAddress, setMyClass] = useState("")
    const [myClassPid, setMyClassPid] = useState(0)
    const [myPassport, setPassport] = useState("")
    const [SBTARR, setSBTARR] = useState([{}])
    const [curSBTPage, setCurSBTPage] = useState(1)
    const [isAdmin, setIsAdmin] = useState(false)
    const [UserFID, setUserFID] = useState(0)
    const [UserToSoul, setUserToSoul] = useState("")
    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const handleSoulViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            notification.error("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("mintFireSoul", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleSeedViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("MintFireSeed", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getSoulAccount = async () => {
        const address = await handleViewMethod("getSoulAccount", [state.account])
        setPassport(address)
    }
    const getUserInfo = async () => {
        const userInfo = await handleUserViewMethod("userInfo", [state.account])
        dispatch({type: "SET_PID", payload: userInfo.PID})
        dispatch({type: "SET_USERINFO", payload: userInfo})
    }
    const myClass = async () => {
        const address = await handleSeedViewMethod("upclass", [state.account])
        const userInfo = await handleUserViewMethod("userInfo", [address])
        setMyClassPid(userInfo.PID)
        setMyClass(address)
    }
    const myInfo = async () => {
        try {
            const userInfoData = await handleUserViewMethod("userInfo", [state.account])
            let info = await getIpfs(userInfoData.information)
            setUserInfo(userInfoData)

            if (info) {
                setUserData(info)
            }
        } catch (e) {
            console.log(e)
        }
    }
    const getUserFIDAndAddr = async ()=>{
        const UserToSoul = await handleSoulViewMethod("UserToSoul", [state.account])
        const UserFID = await handleSoulViewMethod("UserFID", [state.account])
        await setUserToSoul(UserToSoul)
        await setUserFID(UserFID)
        dispatch({type: "SET_FID", payload: UserFID})

    }


    const getPassportAdmin = async () => {
        const owner = await handleUserViewMethod("owner", [])
        if (state.account.toLowerCase() == owner.toString().toLowerCase()) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }
    useEffect(async () => {
        let judgeRes = await judgeStatus(state)
        if(!judgeRes){
            return
        }

        myInfo()
        getUserInfo()
        getPassportAdmin()
        getUserFIDAndAddr()
        // getFid()
        // myClass()
        // getSoulAccount()
        // getMyFireSeed()

    }, [state.account, state.networkId]);


    return (
        <MyPassportStyle>

            <div className="panel-box userinfo-box">
                <div className="panel-title">
                    My Passport
                </div>
                <div className="panel-container user-info">
                    <div className="passport-header-bg">

                    </div>

                    <div className="userinfo-header">
                        <div className="header-icon">
                            <img src={headerImg} alt=""/>
                        </div>
                        <div className="right">
                            <h2 className="name">
                                {userData.name ? userData.name : "FireDAO"}
                                <div className="id">
                                    PID : <span>{state.pid}</span>
                                </div>
                            </h2>
                            <div className="bio-box flex-box">

                                <div className="bio">
                                    <strong>BIO:</strong>
                                    {userData.BIO ? userData.BIO : "Let's build the Bit Civilization together!"}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="change-userInfo">
                        {isAdmin &&
                        <img src={adminIcon} style={{marginRight: '30px'}} onClick={() => goPage("/passportAdmin")}
                             alt=""/>
                        }
                        <img src={editIcon} onClick={() => goPage("/ChangeUserInfo")} alt=""/>
                    </div>

                    <div className="recommender">
                        <div className="left">
                            <div className="name">
                                My Recommender
                            </div>

                            <div className="recommender-info">
                                <div className="pid">
                                    PID:
                                    <span>{myClassPid ? myClassPid : "-"}</span>
                                </div>
                                <div className="address">
                                    {
                                        myClassAddress ? myClassAddress.substr(0, 5) + "..." + myClassAddress.substr(myClassAddress.length - 3, myClassAddress.length) : "0x000...000"
                                    }
                                    <img src={copyIcon} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="reputation">
                            <strong>FID-Reputation</strong>
                            <div className="reputation-data-box">
                                <div className="reputation-data">
                                    0
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="link-box">
                        <div className="flex-box">
                            <div className="telegram link-item">
                                <a href={"https://t.me/" + userData.telegram}>
                                    <svg t="1670917511236" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" p-id="3133" width="30" height="30">
                                        <path
                                            d="M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z"
                                            fill="#fff" p-id="3134"></path>
                                    </svg>
                                    <span className="name">
                                Telegram:
                            </span>
                                    <span className="value">
                                {
                                    userData.telegram
                                }
                            </span>
                                </a>
                            </div>
                            <div className="twitter link-item">
                                <a href={"https://twitter.com/" + userData.Twitter} target="_blank">
                                    <svg t="1671431189519" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" p-id="5610" width="32" height="32">
                                        <path
                                            d="M1024 512c0-282.763636-229.236364-512-512-512C229.236364 0 0 229.236364 0 512s229.236364 512 512 512C794.763636 1024 1024 794.763636 1024 512zM236.311273 693.946182c8.843636 1.117091 17.873455 1.722182 26.996364 1.722182 53.015273 0.093091 101.794909-19.037091 140.474182-51.153455-49.524364-1.163636-91.275636-36.165818-105.658182-84.200727 6.888727 1.442909 14.010182 2.280727 21.271273 2.327273 10.333091 0.046545 20.293818-1.349818 29.789091-4.049455-51.758545-11.450182-90.763636-60.555636-90.763636-119.063273 0-0.512 0-1.024 0-1.536 15.266909 9.216 32.674909 14.801455 51.246545 15.639273C279.365818 431.709091 259.397818 394.472727 259.397818 352.581818c0-22.155636 5.585455-42.821818 15.313455-60.509091 55.808 73.774545 139.170909 122.740364 233.146182 128.837818-1.954909-8.797091-2.932364-17.966545-2.932364-27.322182 0-66.141091 50.641455-118.923636 113.105455-117.899636 32.535273 0.558545 61.952 15.499636 82.571636 38.958545 25.786182-4.933818 49.989818-14.429091 71.819636-27.694545-8.424727 27.601455-26.391273 50.594909-49.757091 64.977455 22.900364-2.56 44.683636-8.610909 64.977455-17.780364-15.173818 23.598545-34.350545 44.218182-56.459636 60.695273 0.232727 5.12 0.325818 10.24 0.325818 15.36 0 157.044364-113.803636 338.152727-321.861818 338.059636C345.832727 748.311273 286.347636 728.296727 236.311273 693.946182z"
                                            p-id="5611" fill="#ffffff"></path>
                                    </svg>
                                    <span className="name">
                                Twitter:
                            </span>
                                    <span className="value">
                                {userData.Twitter}
                            </span>
                                </a>
                            </div>
                        </div>

                        <div className="flex-box">
                            <div className=" link-item">
                                <svg t="1671431164956" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="5153" width="32" height="32">
                                    <path
                                        d="M512.268258 64.430032c-247.183323 0-447.569968 200.384597-447.569968 447.57304 0 247.1823 200.385621 447.56792 447.569968 447.56792s447.569968-200.385621 447.569968-447.56792c0-247.189467-200.386645-447.57304-447.569968-447.57304z m250.63996 279.572912L513.037196 588.684915l-252.244389-244.681971h502.115411z m-519.180508 35.60766l139.605741 133.484953-139.605741 130.956981V379.610604z m17.561682 300.386452L409.779385 534.941175l102.685459 98.191626 101.170109-98.191626 150.007391 145.055881H261.289392z m519.519413-35.944518L637.395236 512.731054l143.413569-135.081191v266.402675z"
                                        fill="#ffffff" p-id="5154"></path>
                                </svg>
                                <span className="name">
                            Email:
                        </span>
                                <span className="value">
                            {userData.Email}
                        </span>
                            </div>
                            <div className=" link-item">
                                <a href={"http://" + userData.Website} target="_blank">
                                    <svg t="1671431452983" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" p-id="18971" width="32" height="32">
                                        <path
                                            d="M426.73 626.17c2.96-1.11 5.93-2.23 8.9-3.34 20.77-7.79 42.91-12.49 66.05-13.48v-87.08h-94.13c1.11 38.59 8.04 74.21 19.18 103.9zM426.73 397.83c-11.13 29.68-18.06 65.05-19.18 103.65h94.13v-86.71c-23.14-0.86-45.28-5.69-66.31-13.48-2.72-1.11-5.68-2.23-8.64-3.46zM439.84 369.13a346.61 346.61 0 0 0-4.95 9.52c2.47 1.11 5.19 2.1 7.79 3.22 18.43 6.68 38.23 11.01 59.01 11.99v-73.48c-7.18 0.25-14.35 1.48-21.28 2.36-15.1 9.41-29.07 25.61-40.57 46.39zM434.88 645.46c1.61 3.22 3.22 6.31 4.95 9.52 11.5 20.78 25.47 36.74 40.57 46.38 6.93 1.11 14.1 1.86 21.28 1.99v-73.23c-20.66 1.11-40.58 5.21-59.01 12.37-2.59 0.75-5.32 1.74-7.79 2.97zM415.96 654.49c-6.18 3.47-12.25 7.3-18.19 11.75 12.01 8.9 24.99 16.2 38.97 22.27-5.45-7.05-10.53-14.97-15.22-23.51-1.98-3.33-3.71-6.93-5.56-10.51zM407.79 388.68c-9.27-4.95-18.18-10.39-26.59-16.82-1.48 1.48-3.34 2.96-4.7 4.57-32.41 32.41-53.44 76.33-55.91 125.05h66.04c1.25-41.68 8.8-80.28 21.16-112.8zM608.05 369.5c6.43-3.33 12.49-7.3 18.3-11.5-11.87-8.9-24.98-16.58-38.83-22.51 5.19 7.17 10.26 14.84 15.09 23.5 1.99 3.47 3.71 6.93 5.44 10.51zM421.52 358.99c4.7-8.65 9.78-16.33 15.22-23.5-13.98 5.93-26.97 13.6-38.97 22.51 5.94 4.21 12.01 8.17 18.19 11.5 1.85-3.58 3.58-7.04 5.56-10.51zM386.64 522.27H320.6c2.47 49.11 23.5 93.02 55.91 125.42l4.7 4.57c8.41-6.18 17.31-11.87 26.59-17.19-12.37-32.16-19.92-70.99-21.16-112.8zM581.34 642.49c-18.32-7.17-38.1-11.26-58.88-12.37v73.23c7.18-0.13 14.35-0.87 21.28-1.99 15.21-9.64 29.2-25.6 40.57-46.38 1.74-3.22 3.46-6.31 4.95-9.52-2.49-1.23-5.21-2.22-7.92-2.97zM642.94 371.86c-8.41 6.43-17.31 11.87-26.47 16.82 12.12 32.53 19.91 71.12 21.03 112.8h66.18c-2.72-48.73-23.62-92.64-56.03-125.05-1.5-1.61-3.11-3.09-4.71-4.57z"
                                            fill="#ffffff" p-id="18972"></path>
                                        <path
                                            d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z m160.37 608.31c-41.06 41.18-97.72 66.42-160.3 66.42-62.6 0-119.24-25.24-160.3-66.42-41.08-41.08-66.43-97.72-66.43-160.31 0-62.46 25.36-119.11 66.43-160.3 41.06-41.06 97.71-66.42 160.3-66.42 62.58 0 119.24 25.36 160.3 66.42 40.94 41.19 66.29 97.85 66.29 160.3 0.01 62.59-25.35 119.23-66.29 160.31z"
                                            fill="#ffffff" p-id="18973"></path>
                                        <path
                                            d="M589.26 378.66c-1.49-3.22-3.22-6.31-4.95-9.52-11.37-20.78-25.36-36.98-40.57-46.38-6.93-1.11-14.1-2.1-21.28-2.36v73.48c20.79-0.99 40.57-5.32 58.88-11.99 2.71-1.13 5.43-2.12 7.92-3.23zM616.21 635.07c9.41 5.32 18.32 11.01 26.73 17.19l4.7-4.57c32.41-32.4 53.31-76.31 56.03-125.42h-66.18c-1.12 41.81-8.91 80.64-21.28 112.8zM597.41 397.83c-2.96 1.23-5.81 2.34-8.65 3.46-20.91 7.79-43.05 12.62-66.31 13.48v86.71h94.26c-1.23-38.59-8.16-73.97-19.3-103.65zM602.61 665c-4.83 8.54-9.64 16.45-15.09 23.51 13.86-6.07 26.97-13.36 38.83-22.27-5.81-4.46-11.87-8.28-18.3-11.75-1.73 3.58-3.45 7.18-5.44 10.51zM597.41 626.17c11.13-29.69 18.06-65.31 19.3-103.9h-94.26v87.08c23.25 0.99 45.4 5.69 66.31 13.48 2.84 1.11 5.69 2.22 8.65 3.34z"
                                            fill="#ffffff" p-id="18974"></path>
                                    </svg>
                                    <span className="name">
                                    Website:
                                </span>
                                    <span className="value">
                                    {userData.Website}
                                </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="panel-box web3id-box">
                <div className="panel-container">
                    <div className="panel-title">
                        My Web3 ID
                    </div>
                    <div className="flex-box nft-list">
                        <div className="nft-info-box">
                            <div className="nft-box">
                                <img className="img" src={passport} alt=""/>
                                <div className="name">
                                    Fire Passport # {state.pid}
                                </div>

                            </div>
                            <div className="notr">
                                ERC721 Non-transferable
                            </div>
                            <div className="id">
                                PID : <span>{state.pid}</span>
                            </div>
                        </div>
                        <div className="nft-info-box">
                            <div className="nft-box">
                                <img src={FireSoul} alt=""/>
                                <div className="name">
                                    Fire Soul #{state.fid}
                                </div>

                            </div>
                            <div className="notr">
                                ERC721 Non-transferable
                            </div>
                            <div className="id">
                                FID : {state.fid}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FireSeedList/>
            <FIDScore/>
            {/*<div className="panel-box">*/}
            {/*    <div className="panel-container">*/}
            {/*        <div className="panel-title">*/}
            {/*            My SBB*/}
            {/*        </div>*/}

            {/*        <div className="myFireSeed">*/}
            {/*            <div className="fire-list-box">*/}
            {/*                <div className="list-header flex-box">*/}
            {/*                    <div className="col">*/}
            {/*                        SBT*/}
            {/*                    </div>*/}
            {/*                    <div className="col">*/}
            {/*                        Amount(s)*/}
            {/*                        <img src={listIcon} alt="" className="list-icon"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="col">*/}
            {/*                        Weight*/}
            {/*                    </div>*/}
            {/*                    <div className="col">*/}
            {/*                        Score*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                {*/}
            {/*                    SBTARR.map((item, index) => (*/}
            {/*                        index > 10 * (curSBTPage - 1) && index < 10 * curSBTPage &&*/}
            {/*                        <div className="list-item ">*/}
            {/*                            <div className="col id">*/}
            {/*                                SBT-{index}*/}
            {/*                            </div>*/}
            {/*                            <div className="col">*/}
            {/*                                88*/}
            {/*                            </div>*/}


            {/*                            <div className="col">*/}
            {/*                                100*/}
            {/*                            </div>*/}
            {/*                            <div className="col">*/}
            {/*                                100*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    ))*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*            <div className="more-btn">*/}
            {/*                MORE*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="panel-box">*/}
            {/*    <div className="panel-container">*/}
            {/*        <div className="panel-title">*/}
            {/*            My SBT*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="panel-box">*/}
            {/*    <div className="panel-container">*/}
            {/*        <div className="panel-title">*/}
            {/*            My Wallet*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="panel-box">*/}
            {/*    <div className="panel-container">*/}
            {/*        <div className="panel-title">*/}
            {/*            My FDT*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </MyPassportStyle>
    )
}
export default MyPassport
