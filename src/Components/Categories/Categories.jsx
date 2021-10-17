import React from 'react';
import './categories.scss';

export default function Categories() {
    return (
        <div className='categories-wr'>
            <p>Blog Categories</p>
            <ul>
                <li><a href="/">Category 1</a></li>
                <li><a href="/">Category 2</a></li>
                <li><a href="/">Category 3</a></li>
            </ul>
        </div>
    )
}


