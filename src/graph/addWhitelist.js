import {fetchQueryBase} from "./index";

export function getFLMlist() {
    return fetchQueryBase("patton-sr/firedaoflameexchange", {
        text: `{
                addWhiteLists(first: 5) {
                    id
                    _operator
                    _user
                    _amount
                }
                
        }`
    }, "")
}

export function getFLMCount(amount) {
    return fetchQueryBase("patton-sr/firedaoflameexchange",{

        text: `{
            addWhiteLists (first:5 ) {
                id
                _user
                }
        }`
    }, "")
}

export function getSearchData(searchData) {
    return fetchQueryBase("patton-sr/firedaoflameexchange", {
            text: `{
                addWhiteLists(first:5) {
                    id
                    _operator
                    _user
                    _amount 
                }
            }`
    }, "")
}
