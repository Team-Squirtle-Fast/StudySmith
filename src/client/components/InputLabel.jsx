import React, { forwardRef } from 'react';

const InputLabel = forwardRef((props, ref) => {
    const inputType = !props.inputType ? props.inputType : 'text';

    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.inputType} ref={ref}/>
        </div>
    )
})

export default InputLabel;