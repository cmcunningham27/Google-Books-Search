import React, { useState } from 'react';
import GoogleBar from '../components/GoogleBar/GoogleBar';
import Results from '../components/Results/Results';
import API from '../utils/API';

const Search = () => {
    const [books, setBooks] = useState([]);

    searchBooks = () => {
        API.searchBooks()
    }

    
    return (
        <div>
            <GoogleBar />
            <Results />
        </div>
    )  
}

export default Search;