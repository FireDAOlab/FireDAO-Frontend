import React, { useEffect, useState } from 'react';
import { useConnect } from '../../../../api/contracts';
import addressMap from "../../../../api/addressMap";
import { getContractByName, getContractByContract } from '../../../../api/connectContract';
import { dealMethod, viewMethod } from "../../../../utils/contractUtil"
import { useNavigate } from "react-router-dom";
import { Button, Table, Modal, Pagination, Select, Descriptions, message, Form, List, Input, notification, Divider, Radio } from 'antd';
import { getFLMlist, getSearchData, getFLMCount } from "../../../../graph/addWhitelist"
import develop from "../../../../env"
import { formatAddress } from "../../../../utils/publicJs"
import judgeStatus from "../../../../utils/judgeStatus";
import FormItem from 'antd/es/form/FormItem';
import FLMAirdropLv2Style from './FLMAirdropLv2Style';
import sc2 from '../../../../imgs/sc.png'
import wxz from '../../../../imgs/wxz.png'
import xz from '../../../../imgs/xz.png'
import { isStyledComponent } from 'styled-components';

const columns = [
    {
        title: 'No.',
        dataIndex: 'no',
        render: (index, text, record) => {parseInt(index + 1)},
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
            <span>{}</span>
    },

    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text, record) =><span>{formatAddress(record._user[0])}</span>,
    },
];

let data = [{}];
const selectedRowKeys = [];
// const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     getCheckboxProps: (record) => ({
//         // disabled: record.username === 'Disabled User',
//         // Column configuration not to be checked
//         username: record.username,
//     }),
// };
const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
};

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


const FLMAirdropLv2 = (props) => {
    const [activeNav, setNav] = useState(1)
    const [form] = Form.useForm();
    let { state, dispatch } = useConnect();
    const [FlmArr, setFlmArr] = useState([])
    const [FlmAirdro, setFlmAirdro] = useState([])
    const [curPage, setCurPage] = useState(1)
    const [pageCount, setPageCount] = useState(10)
    const [lvaddress, setLvaddress] = useState([])
    const [deletelv, setDeletelv] = useState([])
    const [exchan, setExchan] = useState([])
    const [searchData, setSearchData] = useState("")
    const [total, setTotal] = useState(0)
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [searchArr, setSearchArr] = useState(false)
    const [isShowCreate, setShowCreate] = useState(false)
    const [isShowNotice, setShowNotice] = useState(false)
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

    const addWhiteList = async () => {
        const res = await handleDealMethod("addWhiteList", [[state.account], [0]])
        // console.log(res);
    }

    useEffect(() => {
        if (!state.account) {
            return
        }
        // setTp(sc2)

    }, [state.account])



    const Row = (item, index) => {
        return <div className="hh list-item" key={index} >

            <div className="pd col">
                <p>1234</p>
            </div>
            <div className="zchang col">
                {/* {item.username} */}
                <p>FireSeed</p>
            </div>
            <div className="zchang col">
                {item._amount}
            </div>
            <div className="address col">
                {
                    item._user.map((i, index) => (
                        i ? i.substr(0, 7) + "..." + i.substr(i.length - 4, i.length) : ""
                    ))
                }
            </div>
        </div>
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
        // console.log(data.data)

        if (data.data && data.data.addWhiteLists && data.data.addWhiteLists.length > 0) {
            setSearchArr(data.data.addWhiteLists)
        } else {
            setSearchArr([])
        }
    }

    const getList = async () => {
        let data = await getFLMlist()
        let arr = data.data.addWhiteLists
        console.log(arr)
        let myArr = []
        setFlmArr(arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].admin == state.account) {
                myArr.push(arr[i])
            }
        }
        setFlmAirdro(myArr)
    }

    const getData = async (page) => {
        // let count=parseInt((await getFLMCount()).data.addWhiteLists[0].id)
        // console.log(count);
        // setTotal(count)
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
    // const 

    return (
        <FLMAirdropLv2Style>
            <div className="panel-box">
                <div className="panel-container">
                    <div className="panel-title">
                        <div className='title'>
                            <p>Set Whitelist</p>
                        </div>
                        <div className='allrewz'>
                            <Button className='allwz' onClick={() => { showModal() }}>
                                <p>Add Whitelist</p>
                            </Button >

                            <Modal
                                style={{
                                    marginTop: '120px',
                                    textAlign: 'center'
                                }}
                                title={
                                    <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                        Add Whitelist
                                    </h3>}
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
                                        height: '170px',
                                        background: 'rgb(31,31,31)',

                                    }}
                                    validateMessages={validateMessages}
                                >
                                    <p style={{ textAlign: 'left', fontSize: '14px' }}>Address</p>
                                    <Form.Item
                                        name='Address'
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

                                            onClick={() => { addWhiteList() }}>
                                            Submit
                                        </Button>

                                    </Form.Item>
                                </Form>
                            </Modal>

                            {/* <Button className='rewz' onClick={() => { showModal1(); rain() }}>
                                <p>Delete</p>
                            </Button>

                            <Modal
                                style={{
                                    marginTop: '80px',
                                    marginBottom: '50px',
                                    textAlign: 'center',
                                }}
                                title={
                                    <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                        Delete
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
                                    
                                    <Button type="primary" htmlType="submit" style={{ fontSize: '16px', width: '100%', height: '45px', marginTop: '30px', fontWeight: 'bold' }}

                                        onClick={() => { }}>
                                        Submit
                                    </Button>
                                </div>
                            </Modal> */}

                        </div>
                    </div>


                    <div className='records fire-list-box'>
                        <div className='lb list-header'>
                            <div className='pd col'>PID</div>
                            <div className='zchang col'>Username</div>
                            <div className='zchang col'>Amount(s)</div>
                            <div className='address col'>Address</div>
                            {/* <div className='zchang col'>Delete</div> */}
                        </div>
                        {
                            !searchData && activeNav == 1 && FlmArr.map((item, index) => (
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
            </div>
        </FLMAirdropLv2Style>
    )


}
export default FLMAirdropLv2