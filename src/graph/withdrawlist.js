import {fetchQueryBase} from "./index";

export function getFLMlistc() {
    return fetchQueryBase("patton-sr/firedaoflameexchange", {
        text: `{
            claims(first: 5) {
                id
                _user
                _amount
                blockNumber
                }
                
        }`
    }, "")
}

export function getFLMCountc(amount) {
    return fetchQueryBase("patton-sr/firedaoflameexchange",{

        text: `{
            claims (first:5) {
                    
                }
        }`
    }, "")
}

export function getSearchDatac(searchData) {
    return fetchQueryBase("patton-sr/firedaoflameexchange", {
            text: `{
                claims(first:5) {
                    id
                    _user
                    _amount
                    blockNumber
                }
            }`
    }, "")
}
