import React from 'react';
import './style.css';

const GoogleBar = ({handleSearch, handleBookSearch}) => {

    return (
        <div className='searchBar'>
            <h5 className='bookSearch'>Book Search</h5>
            <h6 className='book'>Book</h6>
            {/* runs function on input */}
            <input type='text' className='' placeholder='Search For a Book' onInput={handleSearch}/> 
            {/* runs function when button is searched */}
            <button name='search' className='search' onClick={handleBookSearch}>
                Search
            </button>
        </div>
    )
}

export default GoogleBar;