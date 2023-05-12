/* eslint-disable */
import jsonp from "jsonp";
import $ from 'jquery'
import {message} from "antd";
import develop from "../env"

$.ajaxSettings.timeout = '4000';


export async function getIpfs(strHash) {
    try {
        if (strHash && strHash.length > 20 && typeof strHash == "string") {
            let result = await $.get(develop.PinataGateWay + `/${strHash}?` + develop.PinataToken, {}).catch(e => {
                console.log(e)
                // message.error("get ipfs info err")
            })

            return result
        } else {
            return {}
        }
    } catch (e) {
        console.log(e)
    }

}

export async function uploadFile(file) {
    console.log(file)
    let data = new FormData();
    data.append('avator', file);
    const metadata = JSON.stringify({
        name: file.name,
    });
    data.append('pinataMetadata', metadata);
    const options = JSON.stringify({
        cidVersion: 0,
    })
    data.append('pinataOptions', options);
    var posdData = {
        processData: false,
        contentType: false,
        type: 'post',
        url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
        maxBodyLength: "Infinity",
        headers: {
            // "Authorization": config.JWT
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            Authorization: process.env.REACT_APP_PinataAPIJWT
        },
        data:data
    };
    console.log(posdData)
    let result
    try {
        result = await $.ajax(posdData)
    } catch (e) {
        console.log(e)
    }
    console.log(result)
    return result
}

export async function uploadJson(jsonData) {
    console.log(process.env.REACT_APP_PinataAPIKey)
    let result = await $.ajax({
        type: "post",
        url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        headers: {
            // "Authorization": config.JWT
            "pinata_api_key": process.env.REACT_APP_PinataAPIKey,
            "pinata_secret_api_key": process.env.REACT_APP_PinataAPISecret
        },

        data: jsonData
    })
    return result
}

export async function getFromPinata(strHash) {
    if (strHash && strHash.length > 5 && typeof strHash == "string") {
        let result = await jsonp(`https://gateway.pinata.cloud/ipfs/${strHash}`, {})
        return result
    } else {
        return false
    }
}
