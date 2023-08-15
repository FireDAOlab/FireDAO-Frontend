import {fetchQueryBase} from "./index";

export function getDonateRecord() {
    return fetchQueryBase("patton-sr/testog", {
        text: `{
  allRecords(first:1000){
  no
  pid
  addr
  ethAmount
  usdtAmount
  fdtAmount
  flmAmount
  time
}
}`
    }, "")
}

export function getSecondDonateRecord(addr) {
    return fetchQueryBase("patton-sr/testog", {
        text: ` {
  allRecords(where: {addrTow: "${addr}"}, first: 10) {
        id
        no
        pid
        name
        addr
        ethAmount
        usdtAmount
        rate
        fdtAmount
        time
  }
}`
    }, "")
}

export function getThreeDonateRecord(addr) {
    return fetchQueryBase("patton-sr/testog", {
        text: `{
  allRecords(where:{addrThree: "${addr}"}, first: 10) {
    id
    no
    pid
    name
    addr
    ethAmount
    usdtAmount
    rate
    fdtAmount
    time
  }
}`
    }, "")
}

export function getSeedDonateRecord() {
    return fetchQueryBase("patton-sr/testog", {
        text: `{
  claims(first: 1000) {
    id
    _user
    _amount
  }
  donations(first: 1000) {
    id
    _user
    _spend
    _amounts
    _prices
  }
}`
    }, "")
}

export function getAllRegisters(address) {
    return fetchQueryBase("patton-sr/testog", {
        text: `{
allRegisters(first:1000,where: {recommenders_contains: "${address}"}) {
    Contract_id
    recommenders
    _user
}
}`
    }, "")
}
