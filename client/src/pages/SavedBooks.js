import React, { useState, useEffect } from 'react'
import API from '../utils/API';
import SavedCard from '../components/SavedCard';

export default function SavedBooks() {
    //sets default state
    const [books, setBooks] = useState([]);
    const [remove, setRemove] = useState();

    //when component mounts it makes a call to the API to retrieve all saved books and create an array with each book's details in book's State
    useEffect(() => {
        API.getSavedBooks()
            .then((res) => {
                setBooks(
                    res.data.map((e, i) => ({
                        key: i,
                        bookId: e.bookId,
                        title: e.title,
                        authors: e.authors.join(', '),
                        description: e.description,
                        image: e.image,
                        link: e.link
                    }))
                )
            })
            .catch(err => console.log(err));
    }, [remove]);

    //sends specific book's id to API call and removes it from the database of saved books, calls componentDidMount to re-render page with updates
    const handleDeleteBook = (id) => {
        API.deleteBook(id)
            .then((res) => setRemove(res))
            .catch(err => console.log(err));
    };

    //declare variable
    let savedList;

    //if there are books in the array, send each book's details to the Saved component, one-at-a-time
    if(books.length) {
        savedList = books.map(
            (book) => (
                    <SavedCard 
                        key={book.key}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        //send button as a prop with book's id
                        Button={() => (
                            <button 
                                onClick={() => handleDeleteBook(book.bookId)}>
                                Delete
                            </button>
                        )}
                    /> 
            )
        )
    //otherwise leave a message for the user
    } else {
        savedList = <h5>Search for a book you enjoy and click save to begin adding books to this page</h5>
    };
                
    return (
        <div className='savedBooks'>
            <h5 className='savedBooksTitle'>Saved Books</h5>
            {savedList}
        </div>
    )  
};