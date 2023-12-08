import EmpData from "./EmpData";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import EmpForm from "./EmpForm";

function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<EmpData/>}/>
                    <Route path="/empform" element={<EmpForm/>}/>
                     
                </Routes>
            </Router>

        </div>
    )
}
export default App; 