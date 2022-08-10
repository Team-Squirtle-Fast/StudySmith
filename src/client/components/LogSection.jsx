import React from 'react';

import '../../styles/LogSection.scss';

const LogSection = (props) => {
    return (
        <div className='log-section'>
            <h2 className='homeHeader'>
                Today's Log...
            </h2>
            <div className='daily-log-container'>
                <div>
                    <input className='daily-log-title' defaultValue={props.dailyLog.logTitle}/>
                </div>
                <div>
                    <textarea className='daily-log-body' defaultValue={props.dailyLog.logBody}></textarea>
                </div>
            </div>
            <button>Save</button>
        </div>
    )
}

export default LogSection;