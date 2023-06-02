import {fetchQueryBase} from "./index";

export function getDonateRecord() {
    return fetchQueryBase("patton-sr/ff", {
        text: `{
              allRecords(first: 1000) {
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
    return fetchQueryBase("patton-sr/seeddonation", {
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
