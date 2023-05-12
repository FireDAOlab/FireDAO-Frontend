import develop from "../env";
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
export default async function judgeStatus(state){
    if (!state.api) {
        openNotification("Please connect")
        return
    }
    if(!state.account){
        return
    }
    // let chainId = await window.ethereum.request({method: "eth_chainId"})
    // if (develop.chainId != parseInt( chainId).toString(10)) {
    //     openNotification("The testnet is not available now, please connect to" + develop.Name)
    //     return
    // }
    return true
}
