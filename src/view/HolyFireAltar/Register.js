import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useConnect} from "../../api/contracts";
import {getContractByContract, getContractByName} from "../../api/connectContract"
import {Button, Form, message, Input, Tooltip, notification, Select} from 'antd';
import {uploadJson, uploadFile} from "../../utils/ipfsApi"
import firepassport from "../../imgs/passport@2x.webp"
import {useNavigate} from 'react-router-dom'
import addressMap from "../../api/addressMap";
import develop from "../../env"
import {
    TwitterOutlined,
    SendOutlined,
    UserOutlined,
    LoadingOutlined
} from '@ant-design/icons';
import {dealMethod, viewMethod,dealPayMethod} from "../../utils/contractUtil";
import ConnectWallet from "../../component/ConnectWallet/ConnectWallet";
const Register = (props) => {
    const [form] = Form.useForm();
    const DaoHome = styled.div`

      .content-box {
        display: flex;
        padding: 2em 0;

        .left {
          width: 50%;
          padding-right: 5%;

          .img-box {
            border-radius: 5%;
            box-shadow: 0px 0 10px 1px #d84a1b;
            padding: 2px;

            img {
              border-radius: 20px;
              width: 100%;
              margin: 0 auto;
            }
          }

          .nft-detail {
            font-size: 14px;
            margin-top: 2em;

            .title {
              font-size: 20px;
            }

            .content-item {
              display: flex;
              justify-content: space-between;
              margin: 1em 0;
              text-align: right;

              .name {
                color: #999;
                white-space: nowrap;
              }

              .value {
                max-width: 64%;
              }

              .address {
                a {
                  color: #FF9260;
                }
              }
            }
          }

        }

        .right {
          width: 50%;
          display: flex;
         
          .mint-tip {
            text-align: center;
            padding: 5em 0 1em;
            margin-top: -20px;
            color: #856465;
            display: flex;
            justify-content: center;
            span {
              color: #fff;
            }
            .choosePayType{
              margin-top: -4px;
              .ant-form-item-label{
                display: none;
              }
              .ant-form-item-control-input {
                background: none!important;
                min-height: 20px!important;
                .ant-select-selector{
                  border: none;
                }
              }
            }
          }
        }
      }

      .username {
        padding: 0 20px;
      }

      .button-box {
        text-align: center;

        .subBtn {
          padding: 0 4em;
          border-radius: 10px;
          margin: 0 auto;
          &.grey-status{
            
          }
        }
      }
      /* mobile style */
      @media screen and (max-width: 1000px) {
        .panel-container{
          width: 94%;
          padding: 2em 2.5em;
        }
        .content-box {
          display: block;
          .left,.right{
            width: 100%;
            .mint-tip{
              justify-content: space-between;
            }
            .ant-btn{
              width: 100%;
            }
          }
        }
      }
    `
    const [messageApi] = message.useMessage();
    let {state, dispatch} = useConnect();
    const [isExist, setIsExist] = useState(false)
    const [solName, setSolname] = useState(undefined)
    const [fee, setFee] = useState(0.008)
    const [wethBalance, setWethBalance] = useState(0)
    const [status, setStatus] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate();
    const goPage = (url) => {
        history(url);
    }
    const openMessageError = (content) => {
        message.warn(content, 5)
    };
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openMessageError("Please connect")
        }
        await dealMethod(contractTemp, state.account, name, params)
    }
    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openMessageError("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const handleCoinViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("WETH",  state.api,)
        return viewMethod(contractTemp, state.account, name, params)
    }
    const handleDealPayMethod = async (name, params, fee) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openMessageError("Please connect")
        }
        await dealPayMethod(contractTemp, state.account, name, params, state.api.utils.toWei(fee.toString()))
    }
    let usernameExists = async (value) => {
        let contractTemp = await getContractByName("user", state.api,)
        if (!contractTemp) {
            openMessageError("Please connect")
        }
        return contractTemp.methods.usernameExists(value).call({
            from: state.account,
        })
    }
    const feeOn = async () => {
        return await handleViewMethod("feeOn",[])
    }

    const getFee = async () => {
        return await  handleViewMethod("fee",[])
    }
    const checkUserName = async (value, fn) => {
        if(!value){
            return
        }
        let name = value ? value.toString().toLowerCase() : ""
        setSolname(value.toString().toLowerCase())
        const isExist = await usernameExists(name)

        if (!(/^[A-Za-z]+$/.test(value.substr(0, 1)))) {
            openMessageError("The first character of the user name must be a letter")
            return
        }
        if (isExist) {
            openMessageError("userName is exist")
            fn("userName is exist")
        } else {
            fn()
        }
        setIsExist(isExist)
        return isExist
    }

    const handlePost = async () => {
      try{
          setIsLoading(true)
          let {userName, BIO, Email, Twitter, telegram, Website, paytype} = {...(form.getFieldsValue())}
          if (!paytype) {
              paytype = 1
          }
          let errList = form.getFieldsError()
          let isPass = true
          for (let i = 0; i < errList.length; i++) {
              if (errList[i].errors.length > 0) {
                  errList[i].errors.forEach(err => {
                      openMessageError(err)
                  })
                  isPass = false
              }
          }
          let exist = await checkUserName(userName, () => {
          })

          if (!isPass || (!userName || userName.length < 4) ||exist) {
              openMessageError("Check the form content")
              setIsLoading(false)
              return
          }


          if (!(/^[A-Za-z]+$/.test(userName.substr(0, 1)))) {
              openMessageError("The first character of the user name must be a letter")
              setIsLoading(false)
              return
          }
          if (!Email) {
              openMessageError("Please input Email")
              setIsLoading(false)
              return
          }
          if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(Email)){
              openMessageError("Please input right Email")
              setIsLoading(false)
              return
          }

          const hide1 = message.loading('Upload User Info', 0);
          let jsonUrl = await uploadJson({
              name: userName,
              BIO,
              Email,
              Twitter,
              telegram,
              Website
          })

          setTimeout(hide1, 1000);

          if (paytype == 1) {
              const isOpenFeeOn = await feeOn()
              let feeValue = 0

              if (isOpenFeeOn) {
                  feeValue = await getFee()
                  await handleDealPayMethod("register",
                      [userName, Email, jsonUrl.IpfsHash],
                      feeValue / 10 ** 18)
                  goPage('/MyPassport')
                  setIsLoading(false)
                  return
              }
          }
          await handleDealMethod("register", [userName, Email, jsonUrl.IpfsHash])
          goPage('/MyPassport')
          setIsLoading(false)
      }catch (e){
          setIsLoading(false)
      }
    };

    const getData = async () => {
        const isOpenFeeOn = await feeOn()
        if (isOpenFeeOn) {
            let feeValue = await getFee() / 10 ** 18
            setFee(feeValue)
        }
    }
    const getWeth= async ()=>{
        let balance =  await handleCoinViewMethod("balanceOf",[state.account])
        setWethBalance(balance/10**18)
    }
    useEffect(() => {
        if(status==3){
            getData()
            getWeth()
        }

    }, [state.account,status]);
    //check can submit
    useEffect(() => {
        if(state.account&&state.apiState == "READY"){
            if( state.networkId == develop.chainId){
                if(state.ethBalance > 0.008)    {
                    setStatus(3)
                }else{
                    setStatus(2)
                }
            }else{
                setStatus(1)
            }
        }else{
            setStatus(0)
        }
    }, [state.account,state.networkId,state.apiState,state.ethBalance]);
    const checkMintInfo = async ()=>{
        if(state.networkId !== develop.chainId){
            openMessageError("The testnet is not available now, please connect to" + develop.Name)
            return
        }
        if(state.apiState !== "READY"){
            openMessageError("Please connect")
            return
        }
    }
    const Table = () => {

        const {TextArea} = Input;
        return (
            <Form form={form} name="control-hooks">
                <Form.Item
                    name="userName"
                    label="Forum Username"
                    validateTrigger="onBlur"
                    validateFirst={true}
                    rules={[
                        {required: true, message: 'Please input your username!'},
                        {min: 4, message: "name length need > 4"},
                        {max: 20, message: "name length need < 20"},
                        {
                            pattern: new RegExp('^[0-9a-zA-Z_]{1,}$', 'g'),
                            message: 'The value can contain only digits, letters, and underscores'
                        },
                        {
                            validator: (rule, value, fn) => {
                                checkUserName(value, fn)
                            }
                        },
                    ]}

                >
                    <Input
                        prefix={<UserOutlined/>}
                        allowClear
                    />
                </Form.Item>
                <Form.Item
                    label="FireDAO Username">
                    <div className="username">
                        {solName}
                    </div>
                </Form.Item>

                <Form.Item
                    name="Email"
                    label=" Email"
                    rules={[{required: true, message: 'Please input your Email!'},
                        {max: 50, message: "Email length need < 50"},

                        {
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                            message: "Email error"
                        }
                    ]}
                >
                    <Input allowClear/>
                </Form.Item>
                <Form.Item
                    name="BIO"
                    label="Bio"
                    initialValue={"Let's build the Bit Civilization together!"}
                    rules={[
                        {max: 200, message: "BIO length need < 200"},]}
                >
                    <TextArea allowClear defaultValue={"Let's build the Bit Civilization together!"}/>
                </Form.Item>
                <Form.Item
                    name="Twitter"
                    label="Twitter"
                    initialValue={"FireDAOlab"}
                    rules={[
                        {max: 50, message: "Twitter length need < 50"},]}
                >
                    <Input
                        prefix={<TwitterOutlined/>}
                        defaultValue={"FireDAOlab"}
                        allowClear
                    />
                </Form.Item>
                <Form.Item
                    name="telegram"
                    label="Telegram"
                    initialValue={"FireDAOEN"}
                    rules={[
                        {max: 50, message: "Telegram length need < 50"},]}
                >
                    <Input
                        prefix={<SendOutlined/>}
                        defaultValue={"FireDAOEN"}
                        allowClear
                    />
                </Form.Item>
                <Form.Item
                    name="Website"
                    label="Website"
                    initialValue={"www.FireDAO.co"}
                    rules={[
                        {max: 50, message: "Website length need < 50"},]}
                >
                    <Input defaultValue={"www.FireDAO.co"} allowClear/>
                </Form.Item>

                <div className="mint-tip">
                    <div>Minting Fee: <span>{fee}</span></div>
                    <Form.Item
                        className="choosePayType"
                        name="paytype"
                        initialValue="1"
                        rules={[
                            {max: 50, message: "Telegram length need < 50"},]}
                    >
                        <Select
                            style={{ width: 100,height:30 }}
                            defaultValue="ETH"
                            // onChange={handleSearchChange}
                            options={[
                                {
                                    value: '1',
                                    label: 'ETH',
                                },
                                {
                                    value: '2',
                                    label: 'WETH',
                                },

                            ]}
                        />
                    </Form.Item>
                </div>
                <Form.Item className="button-box">
                    {!isLoading&&status==3&&<Button className="subBtn" htmlType="submit" type="primary"
                                    onClick={() => handlePost()}>Mint</Button>
                    }
                    {!isLoading&&status==2&&<Button className="subBtn" >Insufficient ETH(WETH) balance</Button>
                    }
                    {!isLoading&&status==0&&<ConnectWallet/>}
                    {!isLoading&&status==1&&<Button className="subBtn"
                                        onClick={() => checkMintInfo()}>Mint</Button>}

                    {isLoading&&<Button className="subBtn" >Minting<LoadingOutlined /></Button>
                    }
                </Form.Item>

            </Form>
        )
    }
    return (
        <DaoHome className='daoHome daoContentBg'>
            <div className=" panel-box">
                <div className="panel-container">
                    <h2 className="panel-title">
                        Create Passport
                    </h2>
                    <div className="content-box ">
                        <div className="left">
                            <div className="img-box">
                                <img src={firepassport} alt=""/>
                            </div>
                            <div className="nft-detail">
                                <div className="title">
                                    Details
                                </div>
                                <div className="content-item">
                                    <div className="name">
                                        Contract Address
                                    </div>
                                    <div className="value address">
                                        <a target="_blank"
                                           href={ develop.ethScan+"address/" + addressMap.user.address}>{addressMap.user.address.substr(0, 6) + "..." + addressMap.user.address.substr(addressMap.user.address.length - 3, addressMap.user.address.length)}</a>
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="name">
                                        Token Standard
                                    </div>
                                    <div className="value">
                                        ERC721
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="name">
                                        Chain
                                    </div>
                                    <div className="value">
                                        {develop.Name}
                                    </div>
                                </div>
                                <div className="content-item">
                                    <div className="name">
                                        NFT Features
                                    </div>
                                    <div className="value">
                                        Each wallet can only mint one passport,
                                        and it cannot be transferred, soul binding.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            {Table()}
                        </div>
                    </div>
                </div>
            </div>
        </DaoHome>
    )
}

export default Register
