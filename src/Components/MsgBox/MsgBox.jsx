import React from 'react';
import './msgBox.scss';

export default function MsgBox(props) {
    const { message } = props;

    return (
        <div className='msg-box show'>
            <p>{message}</p>
        </div>
    )
}
