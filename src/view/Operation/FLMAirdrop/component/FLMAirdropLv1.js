import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Pagination, Form, InputNumber, Space, Table, Tag, notification } from 'antd';
import { useConnect } from '../../../../api/contracts';
import addressMap from "../../../../api/addressMap";
import { getContractByName, getContractByContract } from '../../../../api/connectContract';
import { dealMethod, viewMethod } from "../../../../utils/contractUtil"
import { uploadJson, uploadFile } from "../../../../utils/ipfsApi"
import { useNavigate } from "react-router-dom";

import FLMAirdropLv1Style from './FLMAirdropLv1Style';
import FormItem from 'antd/es/form/FormItem';
import { LeftSquareFilled } from '@ant-design/icons';



const columns = [
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text) => <a>{text}</a>,
    },
    // {
    //     title: 'Username',
    //     dataIndex: 'username',
    //     key: 'username',
    // },
    // {
    //     title: 'FID',
    //     dataIndex: 'fid',
    //     key: 'fid',
    // },
    // {
    //     title: 'PID',
    //     key: 'pid',
    //     key: 'pid',

    // },

];
const data = [

];


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 25,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    // types: {
    //     email: '${label} is not a valid email!',
    //     number: '${label} is not a valid number!',
    // },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};


const FLMAirdropLv1 = (props) => {

    const [activeNav, setNav] = useState(1)
    const [form] = Form.useForm();
    let { state, dispatch } = useConnect();
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(10)
    const [searchData, setSearchData] = useState("")
    const [current, setCurrent] = useState([])
    const [exchan, setExchan] = useState([])
    const [total, setTotal] = useState(0)
    const [morename, setmorename] = useState([])
    const [moresymbol, setmoresymbol] = useState([])
    const [moredecimal, setmoredecimal] = useState([])
    const [moretotal, setmoretotal] = useState([])
    const [morebalance, setmorebalance] = useState([])
    const [descri, setDescri] = useState([])
    const [getin, setGetin] = useState([])
    const [getuser, setGetuser] = useState([])
    const [gettoken, setGettoken] = useState([])
    const [getmac, setGetmac] = useState(0)
    const [lvaddress,setLvaddress]=useState([])
    const [deletelv,setDeletelv]=useState([])
    const [geta, setGeta] = useState([])
    const [MYPIDARR, setMYPIDARR] = useState([])
    const [searchArr, setSearchArr] = useState(false)

    const history = useNavigate();
    const openNotification = (message) => {
        notification.error({
            message: message,
            description:
                "",
            onClick: () => {
                console.log('');
            },
        });
    };
    const goPage = (url) => {
        history(url);
    }
    const handleDealMethod = async (name, params) => {
        let contractTemp = await getContractByName("FLMExchange", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return dealMethod(contractTemp, state.account, name, params)
    }

    const handleViewMethod = async (name, params) => {
        let contractTemp = await getContractByName("FLMExchange", state.api,)
        if (!contractTemp) {
            openNotification("Please connect")
        }
        return await viewMethod(contractTemp, state.account, name, params)
    }
    const owner = async () => {
        const res = await handleViewMethod("owner", [])
        setCurrent(res)
    }


    const getsj = async () => {
        const contractTemp = await getContractByContract("erc20", addressMap["FLM"].address, state.api,)
        const name = await viewMethod(contractTemp, state.account, "name", [])
        console.log(name);
        const symbol = await viewMethod(contractTemp, state.account, "symbol", [])
        const decimal = await viewMethod(contractTemp, state.account, "decimals", [])
        const totalSupply = await viewMethod(contractTemp, state.account, "totalSupply", [])
        let balance = await viewMethod(contractTemp, state.account, "balanceOf", [gettoken])
        balance = balance / (10 ** parseInt(decimal))
        balance = parseInt(balance * 100) / 100
        console.log(balance);
        // setmoreadd(name,symbol,decimal,totalSupply)
        setmorename(name)
        setmoresymbol(symbol)
        setmoredecimal(decimal)
        setmoretotal(totalSupply)
        setmorebalance(balance)
        return {
            name,
            symbol,
            decimal,
            totalSupply:totalSupply / (10 ** parseInt(decimal)),
            balance,
        }
    }
    const transferOwnership = async (e) => {
        const res = await handleDealMethod("transferOwnership", [descri])
    }
    const getmax=()=>{
        form.setFieldsValue({"flmlvw":getmac})
      }
    let handleChange = async () => {

    };

    const withdraw = async (e) => {
        const res = await handleDealMethod("withdraw", [gettoken, getuser, state.api.utils.toWei(form.getFieldValue().flmlvw.toString())])
        // console.log(res);
    }
    const managerList= async()=>{
        const res=await handleViewMethod("managerList",[])
       console.log(res);
    }
    const setManager = async () => {
        const res = await handleDealMethod("setManager", [lvaddress])
        setLvaddress(res)
    }
    const removeManager= async()=>{
        const res= await handleDealMethod("removeManager",[deletelv])
        setDeletelv(res)
    }
    // const getflm=async ()=>{
    //     const contractTemp = await getContractByContract("erc20", addressMap["FLM"].address, state.api,)
    //     let balanceOf = await viewMethod(contractTemp, state.account, "balanceOf", [])
    //     console.log(balanceOf);
    // }

    useEffect(() => {
        if (!state.account) {

            return
        }
        owner()
        getsj()
        managerList()
    }, [state.account])



    const Row = (item, index) => {
        return <div className="hh" key={index} >
            <div className="xuhao">
                {/* {item.pid} */}
                {(index + 1)}
            </div>

            <div className="address">
                {/* <a href={develop .ethScan + "address/" + item.account} target="_blank">
                    {item.account.substr(0, 6) + "..." + item.account.substr(item.account.length - 3, item.account.length)}
                </a> */}
                
                <p>0x21641….B60d</p>
            </div>
            <div className="zchang">
                {/* {item.username} */}
                3000
            </div>
            <div className="zchang">
                {/* {item.username} */}
                January 01, 2023 13:44
            </div>

            {/* <div className="col">
                <Button type="primary" onClick={() => {
                    history("/Passport", {state: item.account})
                }}>
                    View
                </Button>
            </div> */}
        </div>
    }


    const handleSearchChange = async (e) => {
        // setSearchData(e.target.value);
    }
    const onChangePage = async (page) => {
        // getData(page)
        // await setCurPage(page)
    }
    const handleShowSizeChange = async (page, count) => {
        // setPageCount(count)
    }
    const handleSearch = async () => {
        // let data = await getSearchData(searchData,state.api)
        // setSearchArr(data.data.registers)
    }



    <Table columns={columns} dataSource={data} />
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        // setModalText('Address');

        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
<Table columns1={columns} dataSource1={data} />
    const [open1, setOpen1] = useState(false);
    const [confirmLoading1, setConfirmLoading1] = useState(false);
    const [modalText1, setModalText1] = useState('Content of the modal');
const showModal1 = () => {
        setOpen1(true);
    };
    const handleOk1 = () => {
        // setModalText('Address');

        setConfirmLoading1(true);
        setTimeout(() => {
            setOpen1(false);
            setConfirmLoading1(false);
        }, 2000);
    };
    const handleCancel1 = () => {
        setOpen1(false);
    };




    return (
        <FLMAirdropLv1Style>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        <div className='title'>
                            <p>Owner</p>
                        </div>
                    </div>
                    <Form form={form} className='ownerwz' >
                        <Form.Item label="Current" className='ownerleft' name="current">
                            <div className='current'>
                                <p>{[current]}</p>
                            </div>
                        </Form.Item>
                        <Form.Item label="Predefined" className='ownerright' name="predefined">
                            <Input name="descri" value={descri} onChange={e => setDescri(e.target.value)} className='rightwz' placeholder="Address" allowClear />
                        </Form.Item>
                    </Form>
                    <div className='ank' >
                        <Button className='submi' type='primary'
                            onClick={() => {
                                transferOwnership()
                            }} >
                            <p >Submit</p>
                        </Button>
                    </div>

                </div>
                <div className='paner-container2'>
                    <Form form={form} className='tokenwz'>
                        <Form.Item label="Token Address" >
                            <Input className='enter' name="gettoken" value={gettoken} onChange={e => setGettoken(e.target.value)} onBlur={(e) => { getsj() }} placeholder="Enter Token Address" />
                        </Form.Item>
                        <div className='chaxun'>
                            <div className='jixuc'>
                                <div className='zjk'> <p className=''>Name</p> <div className='kk' > {morename} </div></div>
                                <div className='zjk'> <p className=''>Symbol</p> <div className='kk'  > {moresymbol} </div></div>
                                <div className='zjk'> <p className=''>Decimals</p> <div className='kk' >{moredecimal} </div></div>
                                <div className='zjk'> <p className=''>Supply</p> <div className='kk' > {moretotal} </div></div>
                            </div>
                        </div>

                    </Form>
                    <div className='FLMup'>
                        <div className='flmleft'>
                            <p className='pool-wz'>FLM Exchange Pool</p>
                            <div>
                                <span className='pool-zhi'>{morebalance}</span>
                            </div>
                            <p className='pool-wz1'>Total Currency Price</p>
                            <div>
                                <span className='pool-zhi'>$</span>
                            </div>

                        </div>
                        <div className='flmright'>
                            <Form form={form} >
                                {/* <p className='pool-wz'></p> */}
                                <div className='maxzhi'>
                                    <Form.Item label="Amount(s)" name="flmlvw" className='firstk'>
                                        <Input className='maxleft' name="getin" value={getin} onChange={e => setGetin(e.target.value)} />
                                    </Form.Item>
                                    <Button className='maxright' type='primary' onClick={()=>getmax()}>
                                        <span className='maxwz'>MAX</span>
                                    </Button>
                                </div>
                                <Form.Item label="User address" className='useradd'>
                                    {/* <p className='pool-wz'>User address</p> */}
                                    <Input className='shuru' name="getuser" value={getuser} onChange={e => setGetuser(e.target.value)} />
                                </Form.Item>
                            </Form>
                            <Button type='submit' className='withdraw' onClick={() => withdraw()}>
                                <p className='withwz'>Withdraw</p>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='panel-container3'>
                    <div className='panel'>
                        <p className='panelwz'>Deposit Records</p>
                    </div>
                    <div className='records'>
                        <div className='lb'>
                            <div className='xuhao'>No.</div>
                            <div className='address'>Address</div>
                            <div className='zchang'>Amount(s)</div>
                            <div className='zchang'>Time(UTC)</div>
                        </div>
                        {
                            // !searchData && activeNav == 1 && state.PidArr.map((item, index) => (
                            //     Row(item, index)
                            // ))
                        }
                        {
                            // activeNav == 2 && MYPIDARR.map((item, index) => (
                            //     index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                            //     Row(item, index)
                            // ))
                        }
                        {
                            // searchArr.length > 0 && searchArr.map((item, index) => (
                            //     Row(item, index)
                            // ))
                        }

                    </div>
                    <div className="pagination">
                        {
                            activeNav == 1 && <Pagination current={curPage} showSizeChanger onShowSizeChange={handleShowSizeChange}
                                onChange={onChangePage} total={total}
                                defaultPageSize={pageCount} />
                        }
                    </div>

                </div>
                <div className='panel-container4'>
                    <div className='panel'>
                        <p className='panelwz'>Withdraw Records</p>
                    </div>
                    <div className='records'>
                        <div className='lb'>
                            <div className='xuhao'>No.</div>
                            <div className='taddress'>Token Address</div>
                            <div className='address'>Address</div>
                            <div className='zchang'>Amount(s)</div>
                            <div className='zchang'>Time(UTC)</div>
                        </div>
                        {
                            // !searchData && activeNav == 1 && state.PidArr.map((item, index) => (
                            //     Row(item, index)
                            // ))
                        }
                        {
                            // activeNav == 2 && MYPIDARR.map((item, index) => (
                            //     index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                            //     Row(item, index)
                            // ))
                        }
                        {
                            // searchArr.length > 0 && searchArr.map((item, index) => (
                            //     Row(item, index)
                            // ))
                        }

                    </div>
                    <div className="pagination">
                        {
                            activeNav == 1 && <Pagination current={curPage} showSizeChanger onShowSizeChange={handleShowSizeChange}
                                onChange={onChangePage} total={total}
                                defaultPageSize={pageCount} />
                        }
                    </div>
                </div>
                <div className='panel-container5'>
                    <div className='panel'>
                        <p className='panelwz'>Set Lv2 Admin</p>
                        <div className='allrewz'>
                            <Button className='allwz' onClick={()=>{showModal()}}>
                                <p>Add</p>
                            </Button >
                            <Modal
                                style={{
                                    marginTop:'120px',
                                    
                                }}
                                title="Add Lv2 Admin"
                                open={open}
                                onOk={handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={handleCancel}
                                width={420}
                                footer={null}
                                
                            >
                                <Form form={form}
                                    {...layout}
                                    name="nest-messages"
                                    onFinish={onFinish}
                                    style={{
                                        maxWidth: 600,
                                        height:'170px',
                                        background:'rgb(31,31,31)',
                                    }}
                                    validateMessages={validateMessages}
                                >
                                    <Form.Item 
                                        name='Address'
                                        label="Address"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                    >
                                        <Input name="lvaddress" style={{padding:'10px'}} value={lvaddress} onChange={e => setLvaddress(e.target.value)}  />
                                            
                                    </Form.Item>
                                    {/* <Form.Item
                                        name='Username'
                                        label="Username"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                    >
                                         <Input name="lvusername"/>
                                    </Form.Item> */}
                                    {/* <Form.Item
                                        name='FID'
                                        label="FID"
                                    // rules={[
                                    //     {
                                    //         type: 'email',
                                    //     },
                                    // ]}
                                    >
                                        <Input name="lvfid"/>
                                    </Form.Item> */}
                                     {/* <Form.Item
                                        name='PID'
                                        label="PID" 
                                    // rules={[
                                    //     {
                                    //         type: 'email',
                                    //     },
                                    // ]}
                                    >
                                       <Input name="lvpid"/>
                                    </Form.Item> */}


                                    <Form.Item style={{marginTop: '25px',width:'100%'}}>
                                        <Button type="primary"  htmlType="submit" style={{width:'100%',height:'45px'}}
                                      
                                        onClick={()=>{setManager()}}>
                                        Add
                                        </Button>

                                    </Form.Item>
                                </Form>
                            </Modal>
                            <Button className='rewz' onClick={()=>{showModal1()}}>
                                <p>Mass Delete</p>
                            </Button>
                            <Modal
                                style={{
                                    marginTop:'120px',
                                    
                                }}
                                title="Delete Lv2 Admin"
                                open={open1}
                                onOk={handleOk1}
                                confirmLoading1={confirmLoading1}
                                onCancel={handleCancel1}
                                width={420}
                                footer={null}
                                
                            >
                                <Form form={form}
                                    {...layout}
                                    name="nest-messages"
                                    onFinish={onFinish}
                                    style={{
                                        maxWidth: 600,
                                        height:'170px',
                                        background:'rgb(31,31,31)',
                                    }}
                                    validateMessages={validateMessages}
                                >
                                    <Form.Item 
                                        name='Address'
                                        label="Address"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                    >
                                        <Input name="deletelv" style={{padding:'10px'}}  value={deletelv} onChange={e => setDeletelv(e.target.value)}  />
                                            
                                    </Form.Item>
                                    {/* <Form.Item
                                        name='Username'
                                        label="Username"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                    >
                                         <Input name="lvusername"/>
                                    </Form.Item> */}
                                    {/* <Form.Item
                                        name='FID'
                                        label="FID"
                                    // rules={[
                                    //     {
                                    //         type: 'email',
                                    //     },
                                    // ]}
                                    >
                                        <Input name="lvfid"/>
                                    </Form.Item> */}
                                     {/* <Form.Item
                                        name='PID'
                                        label="PID" 
                                    // rules={[
                                    //     {
                                    //         type: 'email',
                                    //     },
                                    // ]}
                                    >
                                       <Input name="lvpid"/>
                                    </Form.Item> */}


                                    <Form.Item style={{marginTop: '25px',width:'100%'}}>
                                        <Button type="primary"  htmlType="submit" style={{width:'100%',height:'45px' }} onClick={()=>{removeManager()}}>
                                          Delete
                                        </Button>

                                    </Form.Item>
                                </Form>
                            </Modal>
                        </div>
                    </div>
                    <div className='records'>
                        <div className='lb'>
                            <div className='xuhao'>No.</div>
                            <div className='pd'>PID</div>
                            <div className='zchang'>Username</div>
                            <div className='zchang'>Amount(s)</div>
                            <div className='address'>Address</div>
                            <div className='delete' >Delete</div>
                        </div>
                        {
                            // !searchData && activeNav == 1 && state.PidArr.map((item, index) => (
                            //     Row(item, index)
                            // ))
                        }
                        {
                            // activeNav == 2 && MYPIDARR.map((item, index) => (
                            //     index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                            //     Row(item, index)
                            // ))
                        }
                        {
                            // searchArr.length > 0 && searchArr.map((item, index) => (
                            //     Row(item, index)
                            // ))
                        }

                    </div>
                    <div className="pagination">
                        {
                            activeNav == 1 && <Pagination current={curPage} showSizeChanger onShowSizeChange={handleShowSizeChange}
                                onChange={onChangePage} total={total}
                                defaultPageSize={pageCount} />
                        }
                    </div>
                </div>
            </div>
        </FLMAirdropLv1Style >
    )


}
export default FLMAirdropLv1 
