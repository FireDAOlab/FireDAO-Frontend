import {fetchQuery, fetchQueryBase} from "./index";

export function getWhitelist() {
    return fetchQueryBase("patton-sr/airdropflmmumbai2", {
        text: `{
  claimRecords(first: 1000) {
  id
    Contract_id
    pid
    username
    fid
    user
    amount
    blockTimestamp
  }

}`
    }, "")
}
export function getClaimRecords() {
    return fetchQueryBase("patton-sr/airdropflmmumbai2", {
        text: `{
       claimeds(first: 1000,orderBy: blockTimestamp,orderDirection: desc) {
        id
        pid
        username
        fid
        user
        amount
        blockTimestamp
      }
      }`
    }, "")
}