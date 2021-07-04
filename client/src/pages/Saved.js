import React, { Component } from 'react'
import API from '../utils/API';
import Saved from '../components/Saved';

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        API.getSavedBooks()
            .then((res) => {
                this.setState({
                    books: res.data.map((e, i) => ({
                        key: i,
                        title: e.title,
                        authors: e.authors.join(', '),
                        description: e.description,
                        image: e.image,
                        link: e.info
                    }))
                })
            })
    };

    handleDeleteBook(id) {
        const book = this.state.books.items.find((book) => book.id === id);
        API.deleteBook(book)
            .then(res => this.componentDidMount)
            .catch(err => console.log(err));
    };

    render() {
        let savedList;
        if(this.state.books.length) {
            savedList = this.state.books.map(
                (book) => {
                    <div>
                        <h5>Results</h5>
                        <Results 
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors.join(', ')}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            link={book.volumeInfo.infoLink}
                            Button={() => (
                                <button 
                                    onClick={() => this.handleDeleteBook(book.id)}>
                                    Delete
                                </button>
                            )}
                        /> 
                    </div>
                }
            )
        } else {
            savedList = <h5>Search a for a book you enjoy and click save to begin adding books to this page</h5>
        };
                    
        return (
            <div>
                {savedList}
            </div>
        )
    }  
}

export default Saved;
