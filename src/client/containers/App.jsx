import React from 'react';
import '../../styles/App.scss';
import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar.jsx';
import LogIn from '../components/LogIn.jsx';
import { useSelector } from 'react-redux';

const App = (props) => {
    const loggedIn = useSelector((state) => state.user.loggedIn);

    if(loggedIn){
    // if(true){
        return(
            <div className='app'>
                <Navbar/>
                <Outlet/>
            </div>
        )
    } else {
        return(<LogIn/>)
    }
}

export default App;