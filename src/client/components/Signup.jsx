import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import InputLabel from './InputLabel.jsx';
import '../../styles/Signup.scss';
import { signUp } from "../actions/actions.js";

const Signup = (props) => {
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmpasswordRef = useRef(null);
    const emailRef = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if(passwordRef.current.value !== confirmpasswordRef.current.value){
            window.alert('Please ensure the passwords match!')
        } else if (!passwordRef.current.value || !confirmpasswordRef.current.value || !usernameRef.current.value 
            || !firstnameRef.current.value || !lastnameRef.current.value || !emailRef.current.value) {
            window.alert('Please ensure all fields are populated.')
        } else {
            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON',
                },
                body: JSON.stringify({
                    username: usernameRef.current.value,
                    password: passwordRef.current.value,
                    firstName: firstnameRef.current.value,
                    lastName: lastnameRef.current.value,
                    email: emailRef.current.value,
                })
            })
            .then((res) => res.json())
            .then((res) => {
                if(res === 'sucessful'){
                    // create a separate dispatch for signup
                    dispatch(signUp(usernameRef.current.value, firstnameRef.current.value, lastnameRef.current.value, emailRef.current.value));
                    navigate('../', {replace: true});
                } else {
                    window.alert('Username or email registered to another account')
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