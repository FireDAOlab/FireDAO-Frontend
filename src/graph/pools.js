import {fetchQueryBase} from "./index";

export function getFLMPoolData() {
    return fetchQueryBase("patton-sr/lplockmining1", {
        text: `{
      adminBackTokenRecords(first: 5) {
        pid
        username
        fid
        user
        token
        amount
        time

      }
      adminTransferRecords(first:5) {
        pid
        username
        fid
        user
        amount
        rewardCycle
        time
      }
      depositRecords(first:5) {
       pid
       name
       fid
       user
       lpAmount
        period
        weightCoefficient
        time
      }
            userClaimFlms(first:5){
              pid
              name
              fid
              user
              flmAmount
              time
            }
            extractLpRecords(first:5){
              pid
              name
              fid
              user
              lpAmount
              time
            }

}`
    }, "")
}
export function getFDTPoolData() {
    return fetchQueryBase("patton-sr/fdtlockmining", {
        text: `
        {
  adminTransferRecords( first:5) {
  \tid
 \t\tpid
  \tusername
  \tfid
  \tuser
  \tamount
  \trewardCycle
    time
\t}
  depositRecords(first:5) {
    id 
    pid
    name
    fid
    user
    fdtAmount
    period
    weightCoefficient
    time
  }
  userClaimFlms(first:5) {
    id
    pid
    name
    fid
    user
    flmAmount
    time
  }
  extractLpRecords(first:5){
    id
    pid
    name
    fid
    user
    fdtAmount
    time
}
}
        
        `
    }, "")
}