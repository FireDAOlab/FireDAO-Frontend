import {fetchQuery} from "./index";

export function getPasslist() {
    return fetchQuery("firepassport-nei-bu-kai-fa-ban",{
        text: `{
                  passFireSeeds (first: 5) {
                    id
                    from
                    to
                    tokenId
                    amount
                    transferTime
                  }
        }`
    }, "")
}
