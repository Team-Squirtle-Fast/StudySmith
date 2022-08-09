import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import InputLabel from './InputLabel.jsx'

const LogIn = (props) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    return(
        <div>
            <h1>Welcome</h1>
            <InputLabel id='username' label='Username: '/>
            <InputLabel id='password' label='Password: '/>
            <Link to='/signup'>Create an Account</Link>
            <div>
                <button>Submit</button>
            </div>
        </div>
    )
};

export default LogIn;