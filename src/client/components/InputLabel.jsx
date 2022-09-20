import React, { forwardRef } from 'react';

import '../../styles/InputLabel.scss';

const InputLabel = forwardRef((props, ref) => {
    const inputType = !props.inputType ? props.inputType : 'text';

    return(
        <div className='input-label-container'>
            <label htmlFor={props.id} className='input-label-label'>{props.label} </label>
            <input id={props.id} type={props.inputType} ref={ref} className='input-label-input'/>
        </div>
    )
})

export default InputLabel;