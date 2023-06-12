import {fetchQueryBase} from "./index";

export function getFLMPoolData() {
    return fetchQueryBase("patton-sr/lplockmining", {
        text: `{
              adminBackTokenRecords(first: 5) {
                id
                pid
                username
                fid
                user
                token
                amount
                time
                
              }
              adminTransferRecord(first:5) {
                id
                pid
                username
                fid
                user
                amount
                rewardCycle
                time
                
              }
              depositRecord(first:5) {
               id
               pid
               name
               fid
               user
               lpAmount
                period
                weightCoefficient
                time
              }
                  userClaimFlm(first:5){
                    id
                    pid
                    name
                    fid
                    user
                    flmAmount
                    time
                  }
                  extractLpRecord(first:5){
                    id
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
