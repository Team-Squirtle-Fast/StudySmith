import React from 'react';
import { useNavigate } from 'react-router-dom';

import TaskRow from './TaskRow.jsx';
import '../../styles/ToDoSection.scss'

const ToDoSection = (props) => {
    const tasks = props.tasks;
    const navigate = useNavigate();

    const tasksArray = [];

    Object.keys(tasks).forEach(key => {
        const obj = tasks[key];
        const dueDate = obj.dueDate.split('T')[0]
        tasksArray.push(<TaskRow taskId={key} key={key} taskTitle={obj.taskTitle} taskDueDate={obj.dueDate} resourceId={obj.resourceId}/>)
    })

    const handleSeeMore = () => {
        navigate('/calendar')
    }

    return (
        <div className='to-do-container'>
            <h2 className='homeHeader'>
                Upcoming
            </h2> 
            <button onClick={handleSeeMore}>See More</button>
            {tasksArray}
        </div>
    )
}

export default ToDoSection;