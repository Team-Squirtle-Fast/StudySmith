import React from "react";
import { useSelector } from 'react-redux';

import SkillsSection from '../components/SkillsSection.jsx';
import ToDoSection from '../components/ToDoSection.jsx';
import LogSection from '../components/LogSection.jsx';
import SkillsPopUp from "../components/SkillsPopUp.jsx";

const Home = (props) => {
    const skillsPopUpToggle = useSelector((state) => state.user.skillsPopUpToggle);
    const [username, skillsPopUpId, skillsPopUpName, 
        skillsPopUpStatus, skillsPopUpNotes] = useSelector((state) => [state.user.username, state.user.skillsPopUpId, state.user.skillsPopUpName, state.user.skillsPopUpStatus, state.user.skillsPopUpNotes])

    return(
        <div className='homeContainer'>
            <ToDoSection/>
            <SkillsSection/>
            {skillsPopUpToggle ? <SkillsPopUp username={username} id={skillsPopUpId} name={skillsPopUpName} status={skillsPopUpStatus} notes={skillsPopUpNotes} /> : null}
            <LogSection/>
        </div>
    )
}

export default Home;