import {fetchQueryBase} from "./index";

export function getDonateRecord() {
    return fetchQueryBase("patton-sr/og2", {
        text: `{
              allRecords(first:1000){
              no
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

export function getBlackUsers() {
    return fetchQueryBase("patton-sr/og2", {
        text: ` {
            blackUsers(first:1000){
                operator
                user
            }
            }`
    }, "")
}

export function getSecondDonateRecord(addr) {
    return fetchQueryBase("patton-sr/og2", {
        text: ` {
          allRecords(where: {addrTow: "${addr}"}, first: 1000) {
                id
                no
                addr
                ethAmount
                usdtAmount
                fdtAmount
                time
          }
        }`
    }, "")
}

export function getThreeDonateRecord(addr) {
    return fetchQueryBase("patton-sr/og2", {
        text: `{
          allRecords(where:{addrThree: "${addr}"}, first: 1000) {
            id
            no
            addr
            ethAmount
            usdtAmount
            fdtAmount
            time
          }
        }`
    }, "")
}

export function getSeedDonateRecord() {
    return fetchQueryBase("patton-sr/og2", {
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
    return fetchQueryBase("patton-sr/og2", {
        text: `{
            allRegisters(first:1000,where: {recommenders_contains: "${address}"}) {
                Contract_id
                recommenders
                _user
            }
        }`
    }, "")
}

export function getRecommender(address) {
    return fetchQueryBase("patton-sr/og2", {
        text: `{
            allRegisters(first:10,where: {_user_contains: "${address}"}) {
                Contract_id
                recommenders
                _user
            }
        }`
    }, "")
}
export function getAddressFromId(id) {
    return fetchQueryBase("patton-sr/og2", {
        text: `{
            allRegisters(first:10,where: {Contract_id: "${id}"}) {
                Contract_id
                recommenders
                _user
            }
        }`
    }, "")
}