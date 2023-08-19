import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Pagination, Form, InputNumber, Space, Table, Tag, notification } from 'antd';
import { useConnect } from '../../../../api/contracts';
import addressMap from "../../../../api/addressMap";
import { getContractByName, getContractByContract } from '../../../../api/connectContract';
import { dealMethod, viewMethod } from "../../../../utils/contractUtil"
import { uploadJson, uploadFile } from "../../../../utils/ipfsApi"
import { getFLMlist, getSearchData, getFLMCount } from "../../../../graph/addWhitelist"
import { getFLMlistc, getSearchDatac, getFLMCountc } from "../../../../graph/withdrawlist"
import CreateNotice from "../../component/CreateNotice";
import develop from "../../../../env"
import formatAddress from "../../../../utils/publicJs"
import judgeStatus from "../../../../utils/judgeStatus";
import { useNavigate } from "react-router-dom";
import FLMAirdropLv1Style from './FLMAirdropLv1Style';
import FormItem from 'antd/es/form/FormItem';
import { dealTime } from "../../../../utils/timeUtil";
import { LeftSquareFilled } from '@ant-design/icons';
import wxz from '../../../../imgs/wxz.png'
import xz from '../../../../imgs/xz.png'


const columns = [
    {
        title: 'No.',
        dataIndex: 'no',
        render: (index, text, record) => { parseInt(index + 1) },
        key: 'no',
    },
    {
        title: 'PID',
        dataIndex: 'pid',
        render: (text, record) => <span>0</span>,
        key: 'pid',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        render: (value, row, record) =>
            <span>{ }</span>
    },

    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text, record) => <span>{formatAddress(record[0])}</span>,
    },
];

let data = [{}];
const selectedRowKeys = [];

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
    const [FlmArr, setFlmArr] = useState([])
    const [FlmAirdro, setFlmAirdro] = useState([])

    const [FlmArrc, setFlmArrc] = useState([])
    const [FlmAirdroc, setFlmAirdroc] = useState([])

    const [FlmArra, setFlmArra] = useState([])
    const [FlmAirdroa, setFlmAirdroa] = useState([])

    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(10)

    const [curPagec, setCurPagec] = useState(1)
    const [pageCountc, setPageCountc] = useState(10)

    const [curPagea, setCurPagea] = useState(1)
    const [pageCounta, setPageCounta] = useState(10)

    const [searchData, setSearchData] = useState("")
    const [searchDatac, setSearchDatac] = useState("")
    const [searchDataa, setSearchDataa] = useState("")

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
    const [lvaddress, setLvaddress] = useState([])
    const [delData, setDelData] = useState([])
    const [deletelv, setDeletelv] = useState([])
    const [geta, setGeta] = useState([])
    const [searchArr, setSearchArr] = useState(false)
    const [searchArrc, setSearchArrc] = useState(false)
    const [searchArra, setSearchArra] = useState(false)

    const [isShowCreate, setShowCreate] = useState(false)
    const [isShowNotice, setShowNotice] = useState(false)
    const [isShowNoticec, setShowNoticec] = useState(false)
    const [isShowNoticea, setShowNoticea] = useState(false)
    const [isShowChange, setShowChange] = useState(false)
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
            totalSupply: totalSupply / (10 ** parseInt(decimal)),
            balance
        }
    }
    const transferOwnership = async (e) => {
        const res = await handleDealMethod("transferOwnership", [descri])
    }
    const getmax = () => {
        setGetin(morebalance)
    }
    let handleChange = async () => {

    };

    const withdraw = async (e) => {
        const res = await handleDealMethod("withdraw", [gettoken, getuser, getin])
        console.log(res);
    }

    const setManager = async () => {
        const res = await handleDealMethod("setManager", [lvaddress])
        setLvaddress(res)
    }
    const removeManager = async (e) => {
        const res = await handleDealMethod("removeManager", [deletelv])
        setDeletelv(res)
    }
    const Nowdate = () => {
        const sj = new Date()
        // console.log(date);
        const nyr = sj.getFullYear() + '-' + (sj.getMonth() + 1) + '-' + sj.getDate() + ' ' + sj.getHours() + ':' + sj.getMinutes() + ':' + sj.getSeconds()
        // this.time=nyr
        // this.ruleForm.pub_date=nyr
        // console.log(nyr);
    }
    const chooseItem = (item, index) => {

        let tempArra = [...FlmArra]
        console.log(tempArra);
        const tempItem = [tempArra].map((item,index)=>(
                item

            ))
        tempItem.ischoosed = !tempItem.ischoosed
        tempArra.splice(index, 1, tempItem)
        setFlmArra(tempArra)
    }
    const rain = (item, index) => {
        let tempArra = []
        console.log(FlmArra);
        for (let i = 0; i < FlmArra.length; i++) {
            if (FlmArra[i].ischoosed == true) {
                tempArra.push(FlmArra[i])
            }

        }
        setDelData(tempArra)


    }
    useEffect(() => {
        if (!state.account) {

            return
        }
        owner()
        getsj()
        console.log(11111);
        // managerList()
    }, [state.account])



    const Row = (item, index) => {
        return <div className="hh list-item" key={index} >
            <div className="xuhao col">
                {index+1}
            </div>

            <div className="address col">
                {
                    item._user.map((i, index) =>
                    (
                        i ? i.substr(0, 7) + "..." + i.substr(i.length - 4, i.length) : ""
                    ))
                }
            </div>
            <div className="zchang col">
                {item._amount}

            </div>
            <div className="zchang col">
                January 01, 2023 13:44
            </div>
        </div>
    }
 const getData = async (page) => {

    }


    const handleSearchChange = async (e) => {
        setSearchData(e.target.value);
    }
    const onChangePage = async (page) => {
        getData(page)
        await setCurPage(page)
    }
    const handleShowSizeChange = async (page, count) => {
        setPageCount(count)
    }

    const handleSearch = async () => {
        let data = await getSearchData(searchData)
        if (data.data && data.data.addWhiteLists && data.data.addWhiteLists.length > 0) {
            setSearchArr(data.data.addWhiteLists)
        } else {
            setSearchArr([])
        }
    }

    const getList = async () => {
        let data = await getFLMlist()
        let arr = data.data.addWhiteLists
        let myArr = []
        setFlmArr(arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].admin == state.account) {
                myArr.push(arr[i])
            }
        }
        setFlmAirdro(myArr)
    }


   
    const createList = async () => {
        setShowNotice(true)
    }
    useEffect(async () => {
        getList()
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        handleSearch()
        getData()
        Nowdate()
    }, [state.account]);

    const Row1 = (item, index) => {
        return <div className="hh list-item" key={index} >
            <div className="xuhao col">
                {index+1}
            </div>
            {/* <div className="tokeaddress col">

            </div> */}
            <div className="address col">
                {item._user ? item._user.substr(0, 7) + "..." + item._user.substr(item._user.length - 4, item._user.length) : ""}
            </div>
            <div className="zchang col">
                {item._amount}

            </div>
            <div className="time col">
                January 01, 2023 13:44
            </div>
        </div>
    }

    const handleSearchChangec = async (e) => {
        setSearchDatac(e.target.value);
    }
    const onChangePagec = async (page) => {
        getDatac(page)
        await setCurPagec(page)
    }
    const handleShowSizeChangec = async (page, count) => {
        setPageCountc(count)
    }
    const handleSearchc = async () => {
        let data = await getSearchDatac(searchDatac)

        if (data.data && data.data.claims && data.data.claims.length > 0) {
            setSearchArrc(data.data.claims)
        } else {
            setSearchArrc([])
        }
    }
    const getListc = async () => {
        let data = await getFLMlistc()
        let arr = data.data.claims
        let myArrc = []
        setFlmArrc(arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].admin == state.account) {
                myArrc.push(arr[i])
            }
        }
        setFlmAirdroc(myArrc)
    }
    const getDatac = async (page) => {

    }

    const createListc = async () => {
        setShowNoticec(true)
    }
    useEffect(async () => {
        getListc()
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        // getDatac()
        handleSearchc()
    }, [state.account]);


    const Row2 = (item, index) => {
        return <div className="hh list-item" key={index} >
            <div className="xuhao col">
                {index+1}
            </div>
            {/* <div className="pid col">

            </div>
            <div className='username col'>

            </div> */}
            {/* <div className="zchang col">
               {item._amount}
            </div> */}
            <div className="address col">
                {item ? item.substr(0, 7) + "..." + item.substr(item.length - 4, item.length) : ""}
            </div>

            <Button className="sc col" onClick={() => { 
                chooseItem(item, index) 
                }}>

                <img className='sc1' src={item.ischoosed ? xz : wxz} />
            </Button>
        </div>
    }
    const handleSearchChangea = async (e) => {
        setSearchDataa(e.target.value);
    }
    const onChangePagea = async (page) => {
        getDataa(page)
        await setCurPagea(page)
    }

    const handleShowSizeChangea = async (page, count) => {
        setPageCounta(count)
    }
    const handleSearcha = async () => {
        let data = await handleViewMethod("managerList", [])
        // console.log(data);
        if (data.length > 0) {
            setSearchArra(data)
        } else {
            setSearchArra([])
        }
    }

    const getLista = async () => {
        let data = await handleViewMethod("managerList", [])
        let arr = data
        console.log(arr);
        let myArr = [FlmArra]
        setFlmArra(arr)
        console.log(FlmArra);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].admin == state.account) {
                myArr.push(arr[i])
            }
        }
        setFlmAirdroa(myArr)
    }

    const createLista = async () => {
        setShowNoticea(true)
    }
    const getDataa = async (page) => {

    }
    useEffect(async () => {
        getLista()
        let judgeRes = await judgeStatus(state)
        if (!judgeRes) {
            return
        }
        handleSearcha()
        getDataa()
    }, [state.account]);
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
                                        <div className="max-btn" onClick={() => { getmax() }}>
                                            MAX
                                        </div>
                                    </Form.Item>
                                </div>
                                <Form.Item label="User address" className='useradd'>
                                    {/* <p className='pool-wz'>User address</p> */}
                                    <Input className='shuru' name="getuser" value={getuser} onChange={e => setGetuser(e.target.value)} />
                                </Form.Item>
                            </Form>
                            <Button type='primary' className='withdraw' onClick={() => withdraw()}>
                                <p className='withwz'>Withdraw</p>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='panel-container3'>
                    <div className='panel'>
                        <p className='panelwz'>Deposit Records</p>
                    </div>
                    <div className='records fire-list-box'>
                        <div className='lb list-header'>
                            <div className='xuhao col'>No.</div>
                            <div className='address col'>Address</div>
                            <div className='zchang col'>Amount(s)</div>
                            <div className='time col'>Time(UTC)</div>
                        </div>
                        {
                            !searchData && activeNav == 1 && FlmArr.map((item, index) => (
                                index >= pageCount * (curPage - 1) && index < pageCount * curPage &&
                                Row(item, index)
                            ))
                        }

                        {
                            searchData.length > 0 && searchData.map((item, index) => (
                                Row(item, index)
                            ))
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
                    <div className='records fire-list-box'>
                        <div className='lb list-header'>
                            <div className='xuhao col'>No.</div>
                            {/* <div className='tokeaddress col'>Token Address</div> */}
                            <div className='address col'>Address</div>
                            <div className='zchang col'>Amount(s)</div>
                            <div className='time col'>Time(UTC)</div>
                        </div>
                        {
                            !searchDatac && activeNav == 1 && FlmArrc.map((item, index) => (
                                index >= pageCountc * (curPagec - 1) && index < pageCountc * curPagec &&
                                Row1(item, index)
                            ))
                        }

                        {
                            searchDatac.length > 0 && searchDatac.map((item, index) => (
                                Row1(item, index)
                            ))
                        }

                    </div>
                    <div className="pagination">
                        {
                            activeNav == 1 && <Pagination current={curPagec} showSizeChanger onShowSizeChange={handleShowSizeChangec}
                                onChange={onChangePagec} total={total}
                                defaultPageSize={pageCountc} />
                        }
                    </div>
                </div>
                <div className='panel-container5'>
                    <div className='panel'>
                        <p className='panelwz'>Set Lv2 Admin</p>
                        <div className='allrewz'>
                            <Button className='allwz' onClick={() => { showModal(); }}>
                                <p>Add</p>
                            </Button >
                            <Modal
                                style={{
                                    marginTop: '120px',
                                    textAlign: 'center',
                                    width:'500px'
                                }}
                                title={
                                    <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                        Add Lv2 Admin
                                    </h3>}
                                open={open}
                                onOk={handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={handleCancel}
                                width={480}
                                footer={null}

                            >
                                <Form form={form}
                                    {...layout}
                                    name="nest-messages"
                                    onFinish={onFinish}
                                    style={{
                                        maxWidth: 600,
                                        height: '170px',
                                        background: 'rgb(31,31,31)',

                                    }}
                                    validateMessages={validateMessages}
                                >
                                    <p style={{ textAlign: 'left', fontSize: '14px' }}>Address</p>
                                    <Form.Item
                                        name='address'
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                    >
                                        <Input name="lvaddress" style={{ padding: '10px' }} value={lvaddress} onChange={e => setLvaddress(e.target.value)} />
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


                                    <Form.Item style={{ marginTop: '25px', width: '100%' }}>
                                        <Button type="primary" htmlType="submit" style={{ fontSize: '16px', width: '100%', height: '45px', fontWeight: 'bold' }}

                                            onClick={() => { setManager() }}>
                                            Add
                                        </Button>

                                    </Form.Item>
                                </Form>
                            </Modal>
                            <Button className='rewz' onClick={() => { showModal1() }}>
                                <p>Delete</p>
                            </Button>
                            {/* <Modal
                                style={{
                                    marginTop: '80px',
                                    marginBottom: '50px',
                                    textAlign: 'center',
                                }}
                                title={
                                    <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                        Delete Lv2 Admin
                                    </h3>}
                                open={open1}
                                onOk={handleOk1}
                                confirmLoading1={confirmLoading1}
                                onCancel={handleCancel1}
                                width={480}
                                footer={null}
                            >
                                <div >
                                    <Table pagination={false}
                                        rowKey={record => record.id}
                                        columns={columns}
                                        dataSource={delData}

                                    // rowSelection="{selectedRowKeys: selectedRowKeys,onChange: onSelectChange}"
                                    />
                                    
                                    <Button type="primary" htmlType="submit" style={{ fontSize: '16px', width: '100%', height: '45px', fontWeight: 'bold' }} onClick={() => { removeManager()  }}>
                                        Submit
                                    </Button>
                                </div>
                            </Modal> */}
                            <Modal
                                style={{
                                    marginTop: '120px',
                                    textAlign: 'center',
                                    width:'500px'
                                }}
                                title={
                                    <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                        Delete Lv2 Admin
                                    </h3>}
                                open={open1}
                                onOk={handleOk1}
                                confirmLoading1={confirmLoading1}
                                onCancel={handleCancel1}
                                width={480}
                                footer={null}

                            >
                                <Form form={form}
                                    {...layout}
                                    name="nest-messages"
                                    onFinish={onFinish}
                                    style={{
                                        maxWidth: 600,
                                        height: '170px',
                                        background: 'rgb(31,31,31)',
                                    }}
                                    validateMessages={validateMessages}
                                >
                                    <p style={{ fontSize: '14px', textAlign: 'left' }}>Address</p>
                                    <Form.Item
                                        name='address'

                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //     },
                                    // ]}
                                    >
                                        <Input name="deletelv" style={{ padding: '10px' }} value={deletelv} onChange={e => setDeletelv(e.target.value)} />

                                    </Form.Item>

                                    <Form.Item style={{ marginTop: '25px', width: '100%' }}>
                                        <Button type="primary" htmlType="submit" style={{ fontSize: '16px', width: '100%', height: '45px', fontWeight: 'bold' }} onClick={() => { removeManager() }}>
                                            Delete
                                        </Button>

                                    </Form.Item>
                                </Form>
                            </Modal>
                        </div>
                    </div>
                    <div className='records fire-list-box'>
                        <div className='lb list-header'>
                            <div className='xuhao col'>No.</div>
                            {/* <div className='pd col'>PID</div>
                            <div className='username col'>Username</div> */}
                            {/* <div className='zchang col'>Amount(s)</div> */}
                            <div className='address col'>Address</div>
                            {/* <div className='sc col' >Delete</div> */}
                        </div>
                        {
                            !searchDataa && activeNav == 1 && FlmArra.map((item, index) => (
                                index >= pageCounta * (curPagea - 1) && index < pageCounta * curPagea &&
                                Row2(item, index)
                            ))
                        }

                        {
                            searchDataa.length > 0 && searchDataa.map((item, index) => (
                                Row2(item, index)
                            ))
                        }

                    </div>
                    <div className="pagination">
                        {
                            activeNav == 1 && <Pagination current={curPagea} showSizeChanger onShowSizeChange={handleShowSizeChangea}
                                onChange={onChangePagea} total={total}
                                defaultPageSize={pageCounta} />
                        }
                    </div>
                </div>
            </div>
        </FLMAirdropLv1Style >
    )


}
export default FLMAirdropLv1 