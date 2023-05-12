
import {notification } from 'antd';
import addressMap from "./addressMap";
const CONTRACTS =addressMap

function getContractByName(name, web3) {
    if(!web3){
        notification.error({
            message: "Please connect",
            description:
                "",
        });
    }
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByContract(name, address, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export  {
    CONTRACTS,
    getContractByName,
    getContractByContract,
    getContractAddress
};

