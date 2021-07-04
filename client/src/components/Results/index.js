import React from 'react';
import BookCard from '../BookCard';

const Results = (props) => {
    return (
        <div>
            <BookCard {...props}/>
        </div>
    )
}

export default Results;