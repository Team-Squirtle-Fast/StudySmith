import React from 'react';
import '../../styles/App.scss';
import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar.jsx';
import LogIn from '../components/LogIn.jsx';

const App = (props) => {
    const loggedIn = false; // update with state
    if(loggedIn){
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