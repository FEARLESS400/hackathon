import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './bootstrap';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Dashboard from './src/pages/Dashboard';
import Default from './src/pages/Default';
import Users from "./src/pages/Users";
import AddPost from "./src/pages/AddPost";



function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Default />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/users' element={<Users />}></Route>
                <Route path='/addpost' element={<AddPost />}></Route>
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
