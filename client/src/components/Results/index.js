import React from 'react';
import BookCard from '../BookCard';
import './style.css';

const Results = (props) => {
    return (
        <div classname='results'>
            <BookCard {...props}/>
        </div>
    )
}

export default Results;