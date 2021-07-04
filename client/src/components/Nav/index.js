import React from 'react'
import {Link} from 'react-router-dom';

export default function Index() {
    return (
        <div>
            <h6>Google Books</h6>
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
