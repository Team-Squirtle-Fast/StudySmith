import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import '../../styles/LogSection.scss';
import { addDailyLog } from '../actions/actions';

const LogSection = (props) => {
    const dispatch = useDispatch();

    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    const handleSave = () => {
        const url = props.dailyLog.logId === undefined ? `/api/log/${props.username}` : `/api/log/${props.username}/${props.dailyLog.logId}`;
        let idFetch = props.dailyLog.logId === undefined ? undefined : props.dailyLog.logId;
        const method = props.dailyLog.logId === undefined ? 'POST' : 'PATCH';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify({
                log_title: titleRef.current.value,
                log_body: bodyRef.current.value,
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res === 'unsucessful'){
                window.alert('Please try again');
            } else {
                if(!idFetch) idFetch = res.skillId
                dispatch(addDailyLog({logId: idFetch, logtitle: titleRef.current.value, 
                    logBody: bodyRef.current.value}))
            }  
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='log-section'>
            <h2 className='homeHeader'>
                Today's Log...
            </h2>
            <div className='daily-log-container'>
                <div>
                    <input className='daily-log-title' defaultValue={props.dailyLog.logTitle} ref={titleRef}/>
                </div>
                <div>
                    <textarea className='daily-log-body' defaultValue={props.dailyLog.logBody} ref={bodyRef}></textarea>
                </div>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}

export default LogSection;