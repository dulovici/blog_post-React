import React from 'react';
import { useViewport } from '../../Hooks/useViewport.js';
import './header.scss';
import hamburger from '../../img/hamburger.png';

export default function Header(props) {
    const { setSearch } = props;

    const { width } = useViewport()
    const brakepoint = 830;


    return (
        <div className='header'>
            <h3>My Blog</h3>
            <div className='search-wr'>
                <input
                    type='text'
                    placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)}
                />
                {
                    width > brakepoint
                        ? <ul>
                            <li>Link1</li>
                            <li>Link2</li>
                            <li>Link3</li>
                            <li>My Profile</li>
                            <li>Log In</li>
                        </ul>
                        : <img className='hamburger' src={hamburger} alt='hamburger' />
                }
            </div>
        </div>
    )
}
