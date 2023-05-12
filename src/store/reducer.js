const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PID":
            return {...state, pid: action.payload};
    }
}
export default reducer
