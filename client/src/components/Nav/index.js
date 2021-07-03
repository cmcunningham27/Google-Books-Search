import React from 'react'

export default function Nav() {
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
