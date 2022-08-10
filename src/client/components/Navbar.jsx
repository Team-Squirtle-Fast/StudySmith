import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {logOut} from '../actions/actions';

import '../../styles/Navbar.scss';

const Navbar = (props) => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/calendar'>Calendar</Link>
            <Link to='/log'>Daily Log</Link>
            <Link to='/resources'>Resources</Link>
            <Link to='/settings'>Settings</Link>
            <button className='log-out' onClick={handleLogOut}>Log Out</button>
        </nav>
    )
}

export default Navbar;