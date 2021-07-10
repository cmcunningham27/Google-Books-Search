import React from 'react';
import './style.css';

const GoogleBar = ({handleSearch, handleBookSearch, searchTerm}) => {

    return (
        <div className='searchBar'>
            <h5>Book Search</h5>
            <h6>Book</h6>
            <input type='text' className='' placeholder='Search For a Book' onInput={handleSearch}/> 
            <button name='search' className='search' onClick={handleBookSearch}>
                Search
            </button>
        </div>
    )
}

export default GoogleBar;