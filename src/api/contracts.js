import React, {useContext, useEffect, useReducer} from "react";
import reducer from "./reducer"
import initState from "./initState"
import getWeb3 from "./getWeb3";
import {notification} from "antd";
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
const connect = async (state, dispatch) => {

    const {apiState} = state;
    if (apiState) {
        console.log(apiState)
        return
    }

    dispatch({type: 'CONNECT_INIT'});

    await window.ethereum
        .request({method: 'eth_requestAccounts'})
    await getWeb3().then(result => {
        dispatch({type: "CONNECT", payload: result.web3})

        window.ethereum.on('accountsChanged', (accounts) => {
            dispatch({type: "SET_ACCOUNT", payload: accounts[0]})
            result.web3.eth.getAccounts().then(async res=>{
                let balance =await result.web3.eth.getBalance(res[0])
                dispatch({type:"SET_ETHBALANCE",payload:balance/10**18})
            })
        });
        window.ethereum.on('chainChanged', () => {
            result.web3.eth.getAccounts().then(async res=>{
                let balance =await result.web3.eth.getBalance(res[0])
                dispatch({type:"SET_ETHBALANCE",payload:balance/10**18})
            })

        });

        result.web3.eth.net.getId().then(async netWarkId => {
            dispatch({type: "SET_NETWORKID", payload: netWarkId})
        })
        result.web3.eth.getAccounts().then(async res=>{
            let balance =await result.web3.eth.getBalance(res[0])
            dispatch({type:"SET_ETHBALANCE",payload:balance/10**18})
        })

        result.web3.eth.getCoinbase().then(account => {
            if(account){
                dispatch({type: "SET_ACCOUNT", payload: account})
                if(account){
                    dispatch({type: "CONNECT_SUCCESS"})
                }
            }else{
                openNotification("connect failed")
            }

        })

    })

}

const ConnectContext = React.createContext();

const ConnectProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const {api,} = state

    // if (api == null) {
    //     connect(state, dispatch)
    // }

    return <ConnectContext.Provider value={{state, dispatch}}>
        {props.children}
    </ConnectContext.Provider>
}
const useConnect = () => ({...useContext(ConnectContext)});
export {ConnectProvider, useConnect,connect}
