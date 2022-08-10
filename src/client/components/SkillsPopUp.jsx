import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import '../../styles/SkillsPopUp.scss';
import { toggleSkills, addSkills, deleteSkills } from "../actions/actions";

const SkillsPopUp = (props) => {
    const dispatch = useDispatch();

    const statusRef = useRef(null);
    const notesRef = useRef(null);
    const titleRef = useRef(null);

    const handleClick = () => {
        dispatch(toggleSkills());
    };

    const handleSave = () => {
        const url = props.id === undefined ? `/api/skills/${props.username}` : `/api/skills/${props.username}/${props.id}`;
        let idFetch = props.id === undefined ? undefined : props.id;
        const method = props.id === undefined ? 'POST' : 'PATCH';


        const statusFetch = statusRef.current.value === 'strong' ? 'green' :
            statusRef.current.value === 'average' ? 'yellow' : 'red';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify({
                skillName: titleRef.current.value,
                skillStatus: statusFetch,
                skillNotes: notesRef.current.value
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res === 'Unsuccessful'){
                window.alert('Please try again');
            } else {
                if(!idFetch) idFetch = res.skillId
                dispatch(addSkills({skillId: idFetch, skillName: titleRef.current.value, 
                    skillStatus: statusFetch, skillNotes: notesRef.current.value}))
                dispatch(toggleSkills({}));
            }  
        })
        .catch(err => console.log(err))
    }

    const handleDelete = () => {
        fetch(`/api/skills/${props.username}/${props.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            if(res === 'Unsuccessful'){
                window.alert('Please try again');
            } else {
                dispatch(deleteSkills(props.id));
                dispatch(toggleSkills({}));
            }  
        })
        .catch(err => console.log(err))
    }

    const status = props.status === 'red' ? 'weak' :
        props.status === 'yellow' ? 'average' : 'strong';

  return(
    <div className="modal">
        <div className="modal_content">
            <span className="close" onClick={handleClick}>&times;    </span>
            <div>
                <input className="popup-title" defaultValue={props.name} ref={titleRef}/>
            </div>
            
            <div>
                <textarea className='skills-popup-notes' defaultValue={props.notes} ref={notesRef}/>
            </div>
            <label htmlFor="status">Knowledge Status: </label>
            <select className='select-status' name='status' id='status' defaultValue={status} ref={statusRef}>
                <option value='strong'>Strong</option>
                <option value='average'>Average</option>
                <option value='weak'>Weak</option>
            </select>
            <div className='skills-popup-buttons-container'>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
  )
};

export default SkillsPopUp;