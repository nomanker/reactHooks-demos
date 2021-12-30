import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import {Example01} from "./Example01";
import { Example02 } from "./Example02";
export function App(){

    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/example01">样例1_useState</Link></li>
                    <li><Link to="/example02">样例2_useEffect</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/example01" element={<Example01/>}/>
                <Route path="/example02" element={<Example02/>}/>
            </Routes>
        </Router>
    )
}

