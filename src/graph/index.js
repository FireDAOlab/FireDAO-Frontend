/* eslint-disable */

import $ from 'jquery'
import {message} from "antd";
import develop from "../env"
function upload() {

}
const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
}

const fetchQueryBase = (path,params, variables) => {
    //juicebox
    //https://gateway.thegraph.com/api/5da5a88f070ac0b7892dc2aad44df198/deployments/id/QmcKc84SeJy1BJVH74YGJpfnjgbZtdG6MuifH9BfSf9fKP

    // https://gateway.testnet.thegraph.com/api/[api-key]/subgraphs/id/FFVH8p93DLnnYogLy4nhwTUSo7C976ZaGi1JUhvGVotQ
    const subgraphUrl = develop.graphUrlBase
    const body = JSON.stringify({
        query: params.text, // GraphQL text from input
    })
    const response = fetch(subgraphUrl+path, {
        method: 'POST',
        headers,
        body,
    }).then((res) => res.json())
    return response
}
const fetchQuery = (path,params, variables) => {
    //juicebox
    //https://gateway.thegraph.com/api/5da5a88f070ac0b7892dc2aad44df198/deployments/id/QmcKc84SeJy1BJVH74YGJpfnjgbZtdG6MuifH9BfSf9fKP

    // https://gateway.testnet.thegraph.com/api/[api-key]/subgraphs/id/FFVH8p93DLnnYogLy4nhwTUSo7C976ZaGi1JUhvGVotQ
    const subgraphUrl = develop.graphUrl
    const body = JSON.stringify({
        query: params.text, // GraphQL text from input
    })
    const response = fetch(subgraphUrl+path, {
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
    fetchQuery,
    fetchQueryBase
}

