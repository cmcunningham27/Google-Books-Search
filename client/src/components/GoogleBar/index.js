import React from 'react';
import './style.css';

const GoogleBar = ({handleSearch, handleBookSearch, searchTerm}) => {

    return (
        <div className='searchBar'>
            <h5 className='bookSearch'>Book Search</h5>
            <h6 className='book'>Book</h6>
            <input type='text' className='' placeholder='Search For a Book' onInput={handleSearch}/> 
            <button name='search' className='search' onClick={handleBookSearch}>
                Search
            </button>
        </div>
    )
}

export default GoogleBar;