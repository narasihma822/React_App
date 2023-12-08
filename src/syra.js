
import "./App.css"

import  Home from"./home.js"
import  About from"./about.js"
import  Contact from"./contact.js"
import  Help from"./help.js"
 
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";


function Syra() {
    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/home"> 
                         HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/about"> 
                        ABOUT
                        </Link>  
                     </li>
                     <li>
                        <Link to="/contact"> 
                        CONTACT
                        </Link>  
                     </li>
                     <li>
                        <Link to="/help"> 
                        HELP
                        </Link>  
                     </li>
                </ul>
                <Routes>
                    <Route path="/home" element={<Home />} />
                     <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/help" element={<Help />} /> 
    </Routes>
            </Router>
        </div>
    )
}
export default Syra;