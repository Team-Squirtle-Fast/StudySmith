import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import InputLabel from './InputLabel.jsx';
import '../../styles/Signup.scss';

const Signup = (props) => {
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmpasswordRef = useRef(null);
    const emailRef = useRef(null);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if(passwordRef.current.value !== confirmpasswordRef.current.value){
            window.alert('Please ensure the passwords match!')
        } else if (!passwordRef.current.value || !confirmpasswordRef.current.value || !usernameRef.current.value 
            || !firstnameRef.current.value || !lastnameRef.current.value || !emailRef.current.value) {
            window.alert('Please ensure all fields are populated.')
        } else {
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON',
                },
                body: JSON.stringify({
                    username: usernameRef.current.value,
                    password: passwordRef.current.value,
                    firstname: firstnameRef.current.value,
                    lastname: lastnameRef.current.value,
                    email: emailRef.current.value,
                })
            })
            .then((res) => res.json())
            .then((res) => {
                if(res === 'Unsuccessful: email'){
                    window.alert('Please provide a different email address')
                } else if (res === 'Unsuccessful: username'){
                    window.alert('Username already taken - please provide a different username')
                } else {
                    // Was a success update login state, and update state with provided values
                    navigate('../', {replace: true});
                }
            })
            .catch((err) => console.log(err))
        }
    }

    return(
    <div className='signUpContainer'>
        <h1>Create an Account</h1>
        <InputLabel id='firstname' label= 'First Name: ' ref={firstnameRef}/>
        <InputLabel id='lastname' label='Last Name: ' ref={lastnameRef}/>
        <InputLabel id='email' label='Email: ' ref={emailRef}/>
        <InputLabel id='username' label='Username: ' ref={usernameRef}/>
        <InputLabel id='password' label='Password: ' inputType='password' ref={passwordRef}/>
        <InputLabel id='confirmpassword' label='Confirm Password: ' inputType='password' ref={confirmpasswordRef}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
    )

};

export default Signup;