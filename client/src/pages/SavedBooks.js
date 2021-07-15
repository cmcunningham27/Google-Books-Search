import React, { useState } from 'react'
import API from '../utils/API';
import Saved from '../components/Saved';

export default function SavedBooks() {
    const [books, setBooks] = useState([]);

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

    const handleDeleteBook = (id) => {
        console.log('deleted book', id);
        // const book = this.state.books.items.find((book) => book.id === id);
        API.deleteBook(id)
            .then(() => componentDidMount())
            .catch(err => console.log(err));
    };

    
    console.log(books);
    let savedList;
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
                        Button={() => (
                            <button 
                                onClick={() => handleDeleteBook(book.bookId)}>
                                Delete
                            </button>
                        )}
                    /> 
            )
        )
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