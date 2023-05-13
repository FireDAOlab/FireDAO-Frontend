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
