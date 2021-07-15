import React, { Component } from 'react';
import GoogleBar from '../components/GoogleBar';
import Results from '../components/Results';
import API from '../utils/API';


//send searchTerm, input function and api function to GoogleBar component
//send map of book results to Results component
export default function SearchBooks() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searched, setSearched] = useState(false);

    handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    }


    handleBookSearch = (event) => {
        event.preventDefault();
        API.searchBooks(searchTerm)
            .then((res) => {
                setBooks(res.data);
                setSearched(true);
            })
            // .then(() => console.log(this.state.books))
            .catch(err => console.log(err));
    };

    handleSaveBook = (id) => {
        const book = this.state.books.items.find((book) => book.id === id);
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
    

    render() {
        let list;
        if(this.state.searched) {
            list = this.state.books.items.map(
                (book) => (
                    <div>
                        {/* <h5>Results</h5> */}
                        <Results 
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors.join(', ')}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            link={book.volumeInfo.infoLink}
                            Button={() => (
                                <button 
                                    onClick={() => this.handleSaveBook(book.id)}>
                                    Save
                                </button>
                            )}
                        /> 
                    </div>
                )
            )
        } else {
            list = <div className='searchContainer'>
                        <h5>Search A Book!</h5>
                    </div>
        }

        return (
            <div>
                <GoogleBar handleSearch={this.handleSearch} handleBookSearch={this.handleBookSearch} searchTerm={this.state.searchTerm}/>
                <div className='searchContainer'>
                    <h5>Results</h5>
                    {list}
                </div>
            </div>
        )
    }
      
};