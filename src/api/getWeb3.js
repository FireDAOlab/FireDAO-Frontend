import Web3 from "web3";
let curProvider = null
const getWeb3= async (provider)=>{
    return new Promise(function (resolve,reject){

        let web3js = window.web3
        if(provider){
            curProvider = provider
        }else if (typeof web3js !== 'undefined') {
            let web3 = new Web3(web3js.currentProvider)
            curProvider = web3js.currentProvider
            resolve({
                web3,
                account: curProvider.accounts && curProvider.accounts.length > 0 ? curProvider.accounts[0] : null
            })
        }else{
            reject(new Error("Unable to Connect"))
        }
    })
}

export default getWeb3
