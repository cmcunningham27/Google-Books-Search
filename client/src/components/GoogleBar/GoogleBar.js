import React from 'react';

const GoogleBar = ({handleSearch, handleBookSearch}) => {

    return (
        <div>
            <h6>Book Search</h6>
            <p>Book</p>
            <input value='searchTerm' type='text' className='' placeholder='Search For a Book' onInput={handleSearch}/> 
            <button name='search' className='search' onClick={handleBookSearch}>
                Search
            </button>
        </div>
    )
}

export default GoogleBar;