import {fetchQuery} from "./index";

export function getFlmairdrop() {
    return fetchQuery("firepassport-nei-bu-kai-fa-ban",{
        text: `{
                  getFLMAirdrop (first: 5) {
                    id
                    username
                    address
                    amount
                    transferTime
                  }
                }`
    }, "")
}

