import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/calendar'>Calendar</Link>
            <Link to='/dailylog'>Daily Log</Link>
            <Link to='/resources'>Resources</Link>
            <Link to='/settings'>Settings</Link>
        </nav>
    )
}

export default Navbar;