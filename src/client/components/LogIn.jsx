import React, { useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import InputLabel from './InputLabel.jsx';
import Logo from "../../../public/StudySmith.png";
import '../../styles/LogIn.scss';
import { getLogin } from "../actions/actions.js";

const LogIn = (props) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            })
        })
        .then((res) => {
            return res.json()})
        .then((res) => {
            if (res === 'unsuccessful') {
                window.alert('Incorrect credentials provided')
            }
            else {
                // once backend is figured out, need to have the request with a payload of all the things that are going to load
                // in the home page
                // res = {user: {}, tasks: [], skills: [], dailLog: {}}
                const { user, tasks, skills, dailyLog } = res;
                console.log(res)

                const tasksUpdated = {};

                tasks.forEach(el => {
                    const { task_id, task_title, due_date, resource_id, user_id } = el;

                    tasksUpdated[task_id] = {taskTitle: task_title, dueDate: due_date, resourceId: resource_id, userId: user_id};
                })

                const skillsUpdated = {};

                skills.forEach(el => {
                    const {skill_id, skill_name, skill_status, skill_notes, user_id} = el;

                    skillsUpdated[skill_id] = {skillName: skill_name, skillStatus: skill_status, skillNotes: skill_notes, userId: user_id};
                })

                // dispatch basically calls your store which returns an object ??

                // plug in firstName, lastName, email from the response body that gets retrieved from database below
                dispatch(getLogin(usernameRef.current.value, user.firstName, user.lastName, user.email, tasksUpdated, skillsUpdated, dailyLog))

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
                <InputLabel id='username' label='Username: ' ref={usernameRef}/>
                <InputLabel id='password' label='Password: ' inputType='password' ref={passwordRef}/>
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