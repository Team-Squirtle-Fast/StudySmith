import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import InputLabel from './InputLabel.jsx';
import Logo from "../../../public/StudySmith.png";
import '../../styles/LogIn.scss';

const LogIn = (props) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = () => {
        fetch('/api/login', {
            // method: 'GET',
            // headers: {
            //     'Content-Type': 'application/JSON',
            // },
            // body: JSON.stringify({
            //     username: usernameRef.current.value,
            //     password: passwordRef.current.value,
            // })
        })
        .then((res) => res.json())
        .then((res) => {
            if (res === 'unsuccessful') {
                window.alert('Incorrect credentials provided')
            }
            else {

                // direct user to homepage upon successful login and
                // replace the login page off the callstack so users can't just go back to login page with pressing the back button
                navigate('../', {replace: true});
            }
        })
    }

    return(
        <div className='loginPage'>
            <div className='inputContainer'>
                <h1>Welcome</h1>
                <InputLabel id='username' label='Username: '/>
                <InputLabel id='password' label='Password: ' inputType='password'/>
                <Link to='/signup' className='create-account'>Create an Account</Link>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            <div className='logoContainer'>
                <img src={ Logo } alt='logo'/>
            </div>
        </div>
    )
};

export default LogIn;