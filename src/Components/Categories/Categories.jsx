import React from 'react';
import './categories.scss';

export default function Categories(props) {
    const { setMessage } = props;

    const linkMessage = () => {
        setMessage('Sorry this feature is not available at the moment.');
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <div className='categories-wr'>
            <p>Blog Categories</p>
            <ul>
                <li onClick={linkMessage}><p>Category 1</p></li>
                <li onClick={linkMessage}><p>Category 2</p></li>
                <li onClick={linkMessage}><p>Category 3</p></li>
            </ul>
        </div>
    )
}


