import React, {useEffect, useRef, useState} from 'react';
import {useConnect} from "../../../api/contracts";
import BigNumber from "bignumber.js"
import AddNomalWhiteList from "./AddNomalWhiteList";
import AddThreeWhiteList from "./AddThreeWhiteList";
import {
    Card,
    Button,
    Modal,
    message,
    AutoComplete,
    Form,
    List,
    Input,
    notification,
    InputNumber,
    Switch,
    Pagination
} from 'antd';
import {getContractByName, getContractByContract} from "../../../api/connectContract";
import {dealMethod, dealPayMethod, viewMethod} from "../../../utils/contractUtil"
import ethIcon from "../../../imgs/eth_icon.webp";
import downIcon from "../../../imgs/down_icon.webp";
import listIcon from "../../../imgs/list-icon.webp";
import develop from "../../../env";
import {useNavigate} from "react-router-dom";
import judgeStatus from "../../../utils/judgeStatus";
import {getDonateRecord} from "../../../graph/donate";
import OGPoolStyle from "./OGPoolStyle";
import AddNormalWhiteListStyle from "./AddNormalWhiteListStyle";
const OGPoolkk = (props) => {
    let {state, dispatch} = useConnect();
    const [isDelMolOpen, setDelOpen] = useState(false)
    const [curWhiteUser, setCurWhiteUser] = useState(false)
    const [addressValue, setAddressValue] = useState("")

    const [activeNav, setActiveNav] = useState(1)
    const [MYPIDARR, setMYPIDARR] = useState([])
    const [total, setTotal] = useState(0)
    const [total2, setTotal2] = useState(0)
    const [recordNav, setRecordNav] = useState(1)
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(20)
    const [pageCount2, setPageCount2] = useState(20)
    const [curPage2, setCurPage2] = useState(1)
    const [FDTBalance, setFDTBalance] = useState(0)
    const [totalDonate, setTotalDonate] = useState(0)
    const [exchangeAmount, setExchangeAmount] = useState(0)
    const [inputValue, setInputValue] = useState(0)
    const [isSAdmin, setIsSecondAdmin] = useState(false)
    const [isTAdmin, setIsThreeAdmin] = useState(false)
    const [ethBalance, setEthBalance] = useState(0)
    const [fdtBalance, setFdtBalance] = useState(0)
    const [allRecords, setAllRecords] = useState([])
    const [refRecords, setREFRecords] = useState([])
    const [myRecords, seMyRecords] = useState([])
    const [whiteList, setAllWhiteList] = useState([])
    const [isInWhiteList, setIsInWhiteList] = useState(false)
    const [adminWhiteList, setAdminWhiteList] = useState([])
    const [salePrice, setSalePriceV] = useState(0.01)
    const [addWhiteArr, setAddWArr] = useState([{}])
    const history = useNavigate();
    const [form] = Form.useForm();
    const [form2] = Form.useForm();


    const handleUserViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealMethod(contractTemp, state.account, name, params)
    }


    const handlePayDealMethod = async (name, params, value) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        await dealPayMethod(contractTemp, state.account, name, params, value)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("PrivateExchangePoolOG", state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const getUserInfo = async () => {
        if (!state.pid) {
            const userInfo = await handleUserViewMethod("userInfo", [state.account])
            dispatch({type: "SET_PID", payload: userInfo.PID})
        }
    }
    const handleDealCoinMethod = async (name, coinName, params) => {
        let contractTemp = await getContractByName(coinName, coinName, state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return dealMethod(contractTemp, state.account, name, params)
    }
    const handleCoinViewMethod = async (name, coinName, params) => {
        let contractTemp = await getContractByName(coinName, state.api,)
        if (!contractTemp) {
            message.warn("Please connect", 5)
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }

    const Row = (item, index) => {
        return <div className="list-item " key={index}>
            <div className="col id">
                {item.no}
            </div>
            <div className="col">
                {item.pid}
            </div>
            <div className="col">
                {item.name}
            </div>

            <div className="col address">
                {item.addr && (
                    <a href={develop.ethScan + "address/" + item.addr} target="_blank">
                        {item.addr.substr(0, 6) + "..." + item.addr.substr(item.addr.length - 3, item.addr.length)}
                    </a>
                )}
            </div>
            <div className="col ">
                {item.ethAmount / 10 ** 18}
            </div>
            <div className="col ">
                {BigNumber(item.fdtAmount / 10 ** 18).toFixed(2)}
            </div>

            <div className="col">
                {item.rate}%
            </div>
            <div className="col">
                {BigNumber(item.usdtAmount / 10 ** 18).toFixed(2)}
            </div>
            <div className="col">
                {item.time}
            </div>

        </div>
    }
    const Row2 = (item, index) => {
        return <div className="list-item row2-list-item" key={index}>
            <div className="col no">
                {index + 1}
            </div>
            <div className="col id">
                {item.Pid}
            </div>
            <div className="col">
                {item.name}
            </div>

            <div className="col address">
                {
                    item.user && <a href={develop.ethScan + "address/" + item.user} target="_blank">
                        {item.user.substr(0, 6) + "..." + item.user.substr(item.user.length - 6, item.user.length)}
                    </a>
                }

            </div>


        </div>
    }
    const getBalanceOfFDT = async () => {
        let balance = await handleViewMethod("getBalanceOfFDT", [])
        balance = parseInt(parseInt(balance) / 10 ** 18)
        if (balance > 0) {
            setFDTBalance(balance)
        }
    }

    const getTotalDonate = async () => {
        let res = await handleViewMethod("totalDonate", [])
        setTotalDonate(res / 10 ** 18)
    }
    const getfdtAmount = async (value) => {
        if (value > 0) {
            setInputValue(value)
            /* eslint-disable */
            let res = await handleViewMethod("getfdtAmount", [BigInt(value * 10 ** 18)])
            setExchangeAmount(BigNumber(res / 10 ** 18).toFixed(2))
        }
    }

    const exchangeFdt = async () => {
        if (inputValue > 0) {
            await handlePayDealMethod("donate", [(BigInt(inputValue * 10 ** 18)).toString()], state.api.utils.toWei(inputValue.toString()))
            getData()
        }
    }
    const getShowWhiteList = async () => {
        let length = await handleViewMethod("getWhiteListLength", [])
        let isW = await handleViewMethod("WhiteListUser", [state.account])
        setIsInWhiteList(isW)
        let arr = []
        for (let i = 0; i < length; i++) {
            let res = await handleViewMethod("ShowWhiteList", [i])
            arr.push(res)
        }
        setTotal2(length)
        setAllWhiteList(arr)
    }

    const getIsAdmin = async () => {
        let res1 = await handleViewMethod("IsAdminLevelTwo", [state.account])
        let res2 = await handleViewMethod("IsAdminLevelThree", [state.account])
        setIsSecondAdmin(res1)
        setIsThreeAdmin(res2)
    }
    const getSalePrice = async () => {
        let res = await handleViewMethod("salePrice", [])
        setSalePriceV(res / 1000)
    }
    const CoinBalance = async () => {
        let res = await handleCoinViewMethod("balanceOf", "WETH", [state.account])
        let res2 = await handleCoinViewMethod("balanceOf", "FDT", [state.account])
        setEthBalance(res / 10 ** 18)
        setFdtBalance(res2 / 10 ** 18)
    }


    const getData = async () => {
        try {
            let judgeRes = await judgeStatus(state)
            if (!judgeRes) {
                return
            }
            getIsAdmin()
            getTotalDonate()
            getBalanceOfFDT()
            CoinBalance()
            getShowWhiteList()
            getUserInfo()
            getSalePrice()
            let res = await getDonateRecord()
            if (res.data) {
                let arr = []
                res.data.allRecords.forEach(item => {
                    if (item.time) {
                        item.time = new Date(item.time * 1000).toUTCString()
                    }
                    if (item.addr.toString() == state.account.toLowerCase()) {
                        arr.push(item)
                    }
                })

                if (res.data.allRecords && res.data.allRecords.length > 0) {
                    setAllRecords(res.data.allRecords)
                    setTotal(res.data.allRecords.length)
                    seMyRecords(arr)
                }

            }
        } catch (e) {

        }
        // dispatch({type: "SET_PidArr", payload: tempArr})
    }
    const onChangePage = async (page) => {
        await setCurPage(page)
    }
    const onChangePage2 = async (page) => {
        await setCurPage2(page)
    }

    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }
    const handleShowSizeChange2 = async (page, count) => {
        setPageCount2(count)
    }
    useEffect(() => {
        getData()
    }, [state.account]);
    const coinOptions = [
        {
            label: "0.25ETH",
            value: '0.25',
        },
        {
            label: "0.5ETH",
            value: '0.5',
        },
        {
            label: "0.75ETH",
            value: '0.75',
        },
        {
            label: "1.00ETH",
            value: '1.00',
        },
        {
            label: "1.25ETH",
            value: '1.25',
        },
        {
            label: "1.5ETH",
            value: '1.5',
        },
        {
            label: "1.75ETH",
            value: '1.75',
        },
        {
            label: "2.00ETH",
            value: '2.00',
        },

    ];

    return (
        <OGPoolStyle>

            <div className="og-nav-list">
                <div className={"nav-item " + (activeNav == 1 ? "active" : "")} onClick={() => {
                    setActiveNav(1)
                }}>
                    OG Donate Pool
                </div>
                <div className={"nav-item " + (activeNav == 2 ? "active" : "")} onClick={() => {
                    setActiveNav(2)
                }}>
                    WhiteList
                </div>
                {
                    (isSAdmin) && (
                        <div className={"nav-item " + (activeNav ==4 ? "active" : "")} onClick={() => {
                            setActiveNav(4)
                        }}>
                            Set Admin
                        </div>
                    )
                }
                {
                    (isTAdmin||isSAdmin) && (
                        <div className={"nav-item " + (activeNav == 3 ? "active" : "")} onClick={() => {
                            setActiveNav(3)
                        }}>
                            Set WhiteList
                        </div>
                    )
                }

            </div>
            {activeNav == 1 && (
                <div className="part1">
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="panel-title">
                                OG Donate 1
                            </div>
                            <div className="donate-info">
                                <div className="info-item">
                                    <div className="name">
                                        FDT-OG Donate Pool Amount
                                    </div>
                                    <div className="value">
                                        {FDTBalance}
                                    </div>
                                </div>
                                <div className="flex-box">
                                    <div className="info-item">
                                        <div className="name">
                                            Value
                                        </div>
                                        <div className="value">
                                            {(FDTBalance * salePrice).toFixed(1)}
                                        </div>
                                    </div>
                                    <div className="info-item">
                                        <div className="name">
                                            Total Donate
                                        </div>
                                        <div className="value">
                                            {totalDonate} ETH
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="donate-pid">
                                <div className="panel-title">
                                    Donate
                                </div>
                                <div className="flex-box">
                                    <div className="pid">
                                        PID：{state.pid}
                                    </div>
                                    <div className="value">
                                        {isInWhiteList == false && "Not a whitelist user"}
                                        {isInWhiteList == true && "Whitelist user"}
                                    </div>
                                </div>
                            </div>
                            <Form form={form} name="control-hooks" className="form">
                                <div className="balance-box">
                                    <div className="name">
                                        Balance
                                    </div>
                                    <div className="value">
                                        {state.ethBalance} <span>ETH</span>
                                    </div>
                                </div>
                                <Form.Item
                                    name="amount"
                                    validateTrigger="onBlur"
                                    validateFirst={true}
                                >
                                    <div className="input-box">
                                        <img className="coin-icon" src={ethIcon} alt=""/>
                                        <AutoComplete
                                            allowClear
                                            value={inputValue}
                                            onChange={(e) => {
                                                getfdtAmount(e)
                                            }}
                                            style={{width: 200}}
                                            options={coinOptions}
                                            placeholder=""
                                            filterOption={(inputValue, option) =>
                                                option.value.indexOf(inputValue) !== -1 &&
                                                /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/.test(inputValue)
                                            }
                                        />

                                    </div>
                                </Form.Item>
                                <img className="down-icon" src={downIcon} alt=""/>
                                <Form.Item
                                    name="pid"
                                    validateTrigger="onBlur"
                                    validateFirst={true}

                                >
                                    <div className="input-box">
                                        <div className="exchangeAmount">
                                            {exchangeAmount}
                                        </div>
                                        <div className="coin-name">
                                            FDT-OG
                                        </div>
                                    </div>
                                </Form.Item>
                                <div className="balance-box">
                                    <div className="name">
                                        Balance
                                    </div>
                                    <div className="value">
                                        {fdtBalance} <span>FDT</span>
                                    </div>
                                </div>
                                <Button type="primary" className="donate" onClick={() => {
                                    exchangeFdt()
                                }}>
                                    Donate
                                </Button>
                                <div className="tip">
                                    1FDT-OG = {salePrice} USD ，Donate up to 2ETH
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="panel-box part2">
                        <div className="panel-container">
                            <div className="panel-title">
                                Donate Records
                            </div>
                            <div className="og-nav-list">
                                <div className={"nav-item " + (recordNav == 1 ? "active" : "")} onClick={() => {
                                    setRecordNav(1)
                                }}>
                                    All Records
                                </div>
                                <div className={"nav-item " + (recordNav == 2 ? "active" : "")} onClick={() => {
                                    setRecordNav(2)
                                }}>
                                    My Records
                                </div>
                                {(isTAdmin) && (
                                    <div className={"nav-item " + (recordNav == 3 ? "active" : "")} onClick={() => {
                                        setRecordNav(3)
                                    }}>
                                        My recommendation
                                    </div>
                                )
                                }

                            </div>
                            <div className="fire-list-box">
                                <div className="list-header flex-box">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        PID<img src={listIcon} alt="" className="list-icon"/>
                                    </div>
                                    <div className="col">
                                        Username
                                    </div>
                                    <div className="col">
                                        Address
                                    </div>
                                    <div className="col">
                                        ETH
                                    </div>
                                    <div className="col">
                                        Amount
                                    </div>
                                    <div className="col">
                                        Rate
                                    </div>
                                    <div className="col">
                                        USDT Cost
                                    </div>
                                    <div className="col">
                                        Time(UTC)
                                    </div>
                                </div>

                                {
                                    recordNav == 1 && allRecords.map((item, index) => (
                                        index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                        Row(item, index)
                                    ))
                                }
                                {
                                    recordNav == 2 && myRecords.map((item, index) => (
                                        index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                        Row(item, index)
                                    ))
                                }
                                {
                                    recordNav == 3 && refRecords.map((item, index) => (
                                        Row(item, index)
                                    ))
                                }


                            </div>
                            <div className="pagination">
                                {
                                    recordNav == 1 && <Pagination current={curPage} showSizeChanger
                                                                  onShowSizeChange={handleShowSizeChange}
                                                                  onChange={onChangePage} total={total}
                                                                  defaultPageSize={pageCount}/>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            )}
            {activeNav == 2 && (
                <div className="white-list">
                    <div className="panel-box">
                        <div className="panel-container">
                            <div className="isInW">
                                <span>
                                    My Pid:{state.pid}
                                </span>
                                <span>
                                    Whiterlist:{isInWhiteList ? "Yes" : "False"}
                                </span>
                            </div>
                            <div className="fire-list-box">
                                <div className=" list-header2 flex-box">
                                    <div className="col">
                                        No.
                                    </div>
                                    <div className="col">
                                        PID
                                    </div>
                                    <div className="col">
                                        Username
                                    </div>
                                    <div className="col">
                                        Address
                                    </div>

                                </div>
                                {
                                    whiteList.map((item, index) => (
                                        index >= pageCount2 * (curPage2 - 1) && index < pageCount2 * curPage2 &&
                                        Row2(item, index)
                                    ))
                                }
                                <div className="pagination">
                                    {
                                        <Pagination current={curPage2} showSizeChanger
                                                    onShowSizeChange={handleShowSizeChange2}
                                                    onChange={onChangePage2} total={total2}
                                                    defaultPageSize={pageCount2}/>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeNav == 3 &&(
                <div>
                    <AddThreeWhiteList allRecords={allRecords}></AddThreeWhiteList>

                </div>
            )}
            {activeNav == 4 &&(
                <div>
                    <AddNomalWhiteList allRecords={allRecords}></AddNomalWhiteList>
                </div>
            )}
        </OGPoolStyle>
    )
}
export default OGPoolkk
