import React from 'react'
import {Link} from 'react-router-dom';
import './style.css';

//uses react-router-dom Link component to link user to each page based on the word in the nav bar
export default function Nav() {
    return (
        <div className='nav-bar'>
            <h5>Google Books</h5>
            <Link to={'/'}>
                <strong>
                    Search
                </strong>
            </Link>
            <Link to={'/saved'}>
                <strong>
                    Saved
                </strong>
            </Link>
        </div>
    )
};