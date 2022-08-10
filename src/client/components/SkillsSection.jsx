import React from "react";
import { useDispatch, useSelector } from "react-redux";

import '../../styles/Home.scss';
import Skill from './Skill.jsx';
import { toggleSkills } from "../actions/actions";
import { SkillsPopUp } from './SkillsPopUp.jsx';

const SkillsSection = (props) => {    
    const skillArray = [];
    const skillsList = useSelector((state) => state.user.skills);
    const dispatch = useDispatch();

    const handleAddSkill = () => {
        dispatch(toggleSkills(props.skillId, props.skillName, props.skillStatus, props.skillNotes));
    }

    Object.keys(skillsList).forEach(key => {
        const {skillName, skillStatus, skillNotes} = skillsList[key];

        skillArray.push(<Skill skillId={key} 
            skillName={skillName} 
            skillStatus={skillStatus} key={key} skillNotes={skillNotes} />)
    })

    return (
        <div>
            <h2 className='homeHeader'>
                Skills
            </h2>
            <button onClick={handleAddSkill}>Add New Skills</button>
            <div>
                {skillArray}
            </div>
        </div>
    )
}

export default SkillsSection;