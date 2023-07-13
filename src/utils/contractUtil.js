import {message, notification} from "antd";
import {dealError} from "./dealResult";
const gasPrice = 20e7
export async function dealMethod(contract,account,methodName,params){
    const hide3 = message.loading('wait sign', 0);
    try{
        await contract.methods[methodName](...params).estimateGas({
            from: account,
        }).then(async gas => {
            await contract.methods[methodName](...params).send({
                from: account,
                gas: parseInt(gas * 1.2),
                // gasPrice,
            }).then(async res => {
                setTimeout(hide3, 1000);
                notification.success({
                    message: "Success",
                    description:
                        "",
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            }).catch(e => {
                setTimeout(hide3, 1000);
                dealError(e)

            })
        }).catch(e => {
            console.log(e)
            setTimeout(hide3, 1000);
            dealError(e)

        })
    }catch (e){
        setTimeout(hide3, 1000);
        dealError(e)
    }
}
export async function  dealPayMethod(contract,account,methodName,params,value){
    const hide3 = message.loading('wait sign', 0);
    try{
        await contract.methods[methodName](...params).estimateGas({
            from: account,
            value
        }).then(async gas => {
            await contract.methods[methodName](...params).send({
                from: account,
                gas: parseInt(gas * 1.2),
                // gasPrice,
                value
            }).then(async res => {
                setTimeout(hide3, 1000);
                notification.success({
                    message: "Success",
                    description:
                        "",
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            }).catch(e => {
                console.log(e)
                dealError(e)
                setTimeout(hide3, 1000);
                throw {
                    code:1
                }
            })
        }).catch(e => {
            console.log(e)
            dealError(e)
            setTimeout(hide3, 1000);
        })
    }catch (e){
        console.log(e)
        setTimeout(hide3, 1000);
        dealError(e)


    }
}
export async function  viewMethod(contract,account,methodName,params){
    try{
         const res =   await contract.methods[methodName](...params).call({
            from: account,
        }).catch(e => {
             throw {code:1,err:e}
         })
        return res
    }catch (e){
        throw {code:1,err:e}
    }
}
