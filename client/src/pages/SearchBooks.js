import React, { useState } from 'react';
import GoogleBar from '../components/GoogleBar';
import Results from '../components/Results';
import API from '../utils/API';

export default function SearchBooks() {
    //default state 
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searched, setSearched] = useState(false);

    //turns users search to lowerCase and sets it's state
    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    }

    //sends the searched term to the Google Books API and returns a list of books that match criteria
    const handleBookSearch = (event) => {
        event.preventDefault();
        API.searchBooks(searchTerm)
            .then((res) => {
                setBooks(res.data);
                setSearched(true);
            })
            .catch(err => console.log(err));
    };

    //takes book's id and gathers its details to send to the database to save
    const handleSaveBook = (id) => {
        const book = books.items.find((book) => book.id === id);
        console.log(book.id);
        API.saveBook({
            bookId: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    
    //declares list
    let list;

    //if user searches for a book title, this will map through all the book results and send their information to the Results component
    if(searched) {
        list = books.items.map(
            (book) => (
                <div>
                    <Results 
                        key={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors.join(', ')}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        link={book.volumeInfo.infoLink}
                        //sends a Button as a prop with book.id
                        Button={() => (
                            <button 
                                onClick={() => handleSaveBook(book.id)}>
                                Save
                            </button>
                        )}
                    /> 
                </div>
            )
        )
        //otherwise lets user know that they can search for a book
    } else {
        list = <div className='searchContainer'>
                    <h5>Search A Book!</h5>
                </div>
    }

    return (
        <div>
            <GoogleBar handleSearch={handleSearch} handleBookSearch={handleBookSearch} searchTerm={searchTerm}/>
            <div className='searchContainer'>
                <h5>Results</h5>
                {list}
            </div>
        </div>
    ) 
};