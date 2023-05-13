import Register from "../view/daoHome"
import { Route, Routes, HashRouter} from "react-router-dom";
function RouterLink(){
    return(
        <HashRouter>
            <Routes>
                <Route exact path="/" element={Register}/>
                <Route exact path="/page" component={<Register/>}/>
            </Routes>
        </HashRouter>
    )
}
export default RouterLink;
