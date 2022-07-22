import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {ListEmployeeComponent} from 'components/ListEmployeeComponent';


function RouterApp() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" exact element={<ListEmployeeComponent />}></Route>
                <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            </Routes>
        </div>
    );
}

export default RouterApp;