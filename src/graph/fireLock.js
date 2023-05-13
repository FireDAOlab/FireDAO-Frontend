import {fetchQueryBase} from "./index";

export function getFireLockList() {
    return fetchQueryBase("henry-maker-commits/s", {
        text: `{
              allLockItems(first: 1000,orderBy: lockTime,orderDirection: desc) {
                id
                lockAddr
                admin
                title
                lockAmount
                lockTime
                cliffPeriod
                unlockCycle
                unlockRound
                ddl
              }
        }`
    }, "")
}
export function getSearchData(searchData) {
    return fetchQueryBase("henry-maker-commits/s", {
        text: `{
         allLockItems(first: 1000,orderBy: lockTime,orderDirection: desc ,where:{title:"${searchData}"}) {
                id
                lockAddr
                admin
                title
                lockAmount
                lockTime
                cliffPeriod
                unlockCycle
                unlockRound
                ddl
              }
        }`
    }, "")
}
