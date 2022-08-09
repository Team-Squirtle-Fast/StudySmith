import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import InputLabel from './InputLabel.jsx';
import Logo from "../../../public/StudySmith.png";
import '../../styles/LogIn.scss';

const LogIn = (props) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    return(
        <div className='loginPage'>
            <div className='inputContainer'>
                <h1>Welcome</h1>
                <InputLabel id='username' label='Username: '/>
                <InputLabel id='password' label='Password: ' inputType='password'/>
                <Link to='/signup' className='create-account'>Create an Account</Link>
                <div>
                    <button>Submit</button>
                </div>
            </div>
            <div className='logoContainer'>
                <img src={ Logo } alt='logo'/>
            </div>
        </div>
    )
};

export default LogIn;