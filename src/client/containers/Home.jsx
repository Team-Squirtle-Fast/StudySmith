import React from "react";
import { useSelector } from 'react-redux';

import SkillsSection from '../components/SkillsSection.jsx';
import ToDoSection from '../components/ToDoSection.jsx';
import LogSection from '../components/LogSection.jsx';
import SkillsPopUp from "../components/SkillsPopUp.jsx";
import ToDoPopUp from "../components/ToDoPopUp.jsx";

const Home = (props) => {
    const {skillsPopUpToggle, username, 
        skillsPopUpId, skillsPopUpName, 
        skillsPopUpStatus, skillsPopUpNotes,
        tasks, toDoPopUpToggle,
        toDoPopUpTaskId, toDoPopUpTaskDueDate,
        toDoPopUpTaskTitle, toDoPopUpResourceId, dailyLog} = useSelector((state) => state.user);

        console.log(toDoPopUpTaskTitle)

    return(
        <div className='homeContainer'>
            <ToDoSection tasks={tasks}/>
            {toDoPopUpToggle ? <ToDoPopUp taskId={toDoPopUpTaskId} taskDueDate={toDoPopUpTaskDueDate} taskTitle={toDoPopUpTaskTitle}
            resourceId={toDoPopUpResourceId}/> : null}
            <SkillsSection/>
            {skillsPopUpToggle ? <SkillsPopUp username={username} id={skillsPopUpId} name={skillsPopUpName} status={skillsPopUpStatus} notes={skillsPopUpNotes} /> : null}
            <LogSection username={username} dailyLog={dailyLog}/>
        </div>
    )
}

export default Home;