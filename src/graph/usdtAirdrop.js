import {fetchQuery, fetchQueryBase} from "./index";

export function getWhitelist() {
    return fetchQueryBase("patton-sr/airdropusdtarb", {
        text: `{
  claimRecords(first: 1000) {
  id
    Contract_id

    user
    amount
    blockTimestamp
    info
    batch
  }

}`
    }, "")
}

export function getClaimRecords() {
    return fetchQueryBase("patton-sr/airdropusdtarb", {
        text: `{
       claimeds(first: 1000,orderBy: blockTimestamp,orderDirection: desc) {
        id
        pid
        username
        user
        amount
        blockTimestamp
      }
      }`
    }, "")
}

export function getDepositRecords() {
    return fetchQueryBase("patton-sr/airdropusdtarb", {
        text: `{
depositRecords(first: 1000) {
    id
    pid
    username
    user
    amount
    blockTimestamp
}
      }`
    }, "")
}


export function getDeleteData() {
    return fetchQueryBase("patton-sr/airdropusdtarb", {
        text: `{
decUserAmounts(first:1000){
  batch
  Contract_id
  user
  operater
  amount
  info
}

}`
    }, "")
}
export function getsSetAmountData() {
    return fetchQueryBase("patton-sr/airdropusdtarb", {
        text: `{
fixEvents(first:1000){
    Contract_id
    title
    operater
    user
    amount
}

}`
    }, "")
}
