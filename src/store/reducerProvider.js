import React, {useContext, useEffect, useReducer} from "react";
import reducer from "./reducer"
import initState from "./initState"



const ConnectContext = React.createContext();

const ReducerProvider = (props) => {
    const [stateR, dispatchR] = useReducer(reducer, initState);

    return <ConnectContext.Provider value={{stateR, dispatchR}}>
        {props.children}
    </ConnectContext.Provider>
}
const useReduce = () => ({...useContext(ReducerProvider)});
export {ReducerProvider, useReduce}
