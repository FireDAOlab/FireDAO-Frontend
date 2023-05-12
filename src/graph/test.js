/* eslint-disable */

import $ from 'jquery'
import {message} from "antd";

function upload() {

}
const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
}


const fetchQuery = (params, variables) => {
    //juicebox
    //https://gateway.thegraph.com/api/5da5a88f070ac0b7892dc2aad44df198/deployments/id/QmcKc84SeJy1BJVH74YGJpfnjgbZtdG6MuifH9BfSf9fKP

    // https://gateway.testnet.thegraph.com/api/[api-key]/subgraphs/id/FFVH8p93DLnnYogLy4nhwTUSo7C976ZaGi1JUhvGVotQ
    const subgraphUrl ="https://gateway.testnet.thegraph.com/api/984432ec09aa0b4dbc3c7af43097dc7c/subgraphs/id/5g2dCXES2jgyuSMkDz27QDpRwg5e5phA2iKvgr7buGm7"

    const body = JSON.stringify({
        query: params.text, // GraphQL text from input
    })
    const response = fetch(subgraphUrl, {
        method: 'POST',
        headers,
        body,
    }).then((res) => res.json())
    return response
}
export async function getGraph(strHash) {
    console.log("getGraph")
    let result = await $.post(`https://gateway.testnet.thegraph.com/api/094c39f6e9d4821096dbbdda83de603c/subgraphs/id/FFVH8p93DLnnYogLy4nhwTUSo7C976ZaGi1JUhvGVotQ`, {}).catch(e => {
        message.error("get ipfs info err")
    })
    console.log(result)
    return result
}
export {
    fetchQuery
}

