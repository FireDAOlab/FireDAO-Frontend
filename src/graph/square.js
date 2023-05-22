import {fetchQuery, fetchQueryBase} from "./index";

export function getFDTOgExchange(amount, skip) {
    return fetchQueryBase("henry-maker-commits/ssd", {
        text: `{
                 allClaimRecords(first: 5) {
    id
    pid
    name
    user
    amount
    time
  }
  allExchangeRecords(first: 5) {
    id
    pid
    name
    user
    amount
    lockedAmount
    time
  }
                }`
    }, "")
}


export function getFLMExchange(amount, skip) {
    return fetchQueryBase("patton-sr/ffda", {
        text: `{
                 allClaimRecords(first:1000) {
                    id
                    pid
                    name
                    user
                    amount
                    time
                  }
                  allExchangeRecords(first: 1000) {
                      id
                      pid
                      name
                      user
                      lockedAmount
                      time
                    }
                }`
    }, "")
}
