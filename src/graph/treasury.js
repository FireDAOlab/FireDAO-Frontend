import {fetchQueryBase} from "./index";

export function getRecords() {
    return fetchQueryBase("henry-maker-commits/ad", {
        text: `{
        incomeRecords(first:1000,orderBy: blockTimestamp,orderDirection: desc) {
            id
            num
            user
            amount
            blockTimestamp
          }
        }`
    }, "")
}
