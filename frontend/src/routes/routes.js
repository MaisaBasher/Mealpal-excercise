import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import App from "../pages/App.js";
import React  from 'react';

const RoutesAll = ()=>{
    return (
        <Router>
            <Routes>
                <Route path = "/" element={<App/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesAll;