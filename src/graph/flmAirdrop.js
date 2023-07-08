import {fetchQuery} from "./index";

export function getPasslist() {
    return fetchQuery("patton-sr/airdropflm",{
        text: `{
  claimRecords(first: 5) {
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
