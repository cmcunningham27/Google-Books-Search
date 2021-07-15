import React, { useState, componentDidMount } from 'react'
import API from '../utils/API';
import Saved from '../components/Saved';

export default function SavedBooks() {
    //sets default state
    const [books, setBooks] = useState([]);

    //when component mounts its makes a call to the API to retrieve all saved books and create an array with each book's details in book's State
    componentDidMount = () => {
        API.getSavedBooks()
            .then((res) => {
                setBooks({
                    books: res.data.map((e, i) => ({
                        key: i,
                        bookId: e.bookId,
                        title: e.title,
                        authors: e.authors.join(', '),
                        description: e.description,
                        image: e.image,
                        link: e.link
                    }))
                })
            })
            .catch(err => console.log(err));
    };

    //sends specific book's id to API call and removes it from the database of saved books, calls componentDidMount to re-render page with updates
    const handleDeleteBook = (id) => {
        console.log('deleted book', id);
        // const book = this.state.books.items.find((book) => book.id === id);
        API.deleteBook(id)
            .then(() => componentDidMount())
            .catch(err => console.log(err));
    };

    //declare variable
    let savedList;

    //if there are books in the array, send each book's details to the Saved component, one-at-a-time
    if(books.length) {
        savedList = books.map(
            (book) => (
                    <Saved 
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
            <h5>Saved Books</h5>
            {savedList}
        </div>
    )  
};