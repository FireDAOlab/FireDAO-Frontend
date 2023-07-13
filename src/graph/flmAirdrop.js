import {fetchQuery, fetchQueryBase} from "./index";

export function getWhitelist() {
    return fetchQueryBase("patton-sr/airdropflm", {
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
