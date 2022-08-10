import React from "react";
import { useDispatch } from "react-redux";
import { toggleToDo } from "../actions/actions";

const TaskRow = (props) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleToDo(props.taskId, props.taskDueDate, props.taskTitle, props.resourceId));
    }

    return(
        <div className='taskRow' onClick={handleToggle} id={'taskRow_'+props.taskId}>
            {props.taskDueDate}: {props.taskTitle} 
        </div>
    )
}

export default TaskRow;