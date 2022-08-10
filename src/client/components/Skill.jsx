import React from "react";
import { useDispatch } from "react-redux";

import { toggleSkills } from "../actions/actions";

const Skill = (props) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleSkills(props.skillId, props.skillName, props.skillStatus, props.skillNotes));
    }

    const color = props.skillStatus === 'red' ? '#696773' :
    props.skillStatus === 'yellow' ? '#FED766' : '#95F696';

    return(
        <button id={props.skillId} style={{'backgroundColor': color, 'marginRight': '5px'}} onClick={handleToggle}>
            {props.skillName}
        </button>
    )
}

export default Skill;