import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './bootstrap';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Dashboard from './src/pages/Dashboard';
import Default from './src/pages/Default';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Default />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
