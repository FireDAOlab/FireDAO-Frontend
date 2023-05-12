const reducer = (state, action) => {
    switch (action.type) {
        case "CONNECT_INIT":
            return {...state, apiState: "CONNECT_INIT"};
        case "CONNECT":
            return {...state, api: action.payload, apiState: "CONNECTING"}
        case "CONNECT_SUCCESS":
            return {...state, apiState: "READY"}
        case 'CONNECT_ERROR':
            return {...state, apiState: 'ERROR', apiError: action.payload};
        case 'SET_ACCOUNT':
            return {...state, account: action.payload};
        case "SET_NETWORKID":
            return {...state, networkId: action.payload};
        case "SET_ETHBALANCE":
            return {...state, ethBalance: action.payload};
        case "SET_IsShowNav":
            return {...state, isShowNav: action.payload};
        case "SET_PID":
            return {...state, pid: action.payload};
        case "SET_FID":
            return {...state, fid: action.payload};
        case "SET_FIREDSEEDLIST":
            return {...state, fireSeedList: action.payload};
        case "SET_MyRecommender":
            return {...state, myRecommender: action.payload};
        case "SET_USERINFO":
            return {...state, userInfo: action.payload};
        case "SET_PidArr":
            return {...state, PidArr: action.payload};
    }
}
export default reducer
