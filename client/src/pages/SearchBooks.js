import React, { Component } from 'react';
import GoogleBar from '../components/GoogleBar';
import Results from '../components/Results';
import API from '../utils/API';


//send searchTerm, input function and api function to GoogleBar component
//send map of book results to Results component
class SearchBooks extends Component {
    state = {
        books: [],
        searchTerm: '',
        searched: false
    }

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value.toLowerCase() });
    }


    handleBookSearch = (event) => {
        event.preventDefault();
        API.searchBooks(this.state.searchTerm)
            .then((res) => {
                console.log(res);
                this.setState({
                        books: res.data
                })
            })
            .then(() => this.setState({searched: true}))
            .catch(err => console.log(err));
    };
    

    render() {
        return (
            <div>
                <GoogleBar handleSearch={this.handleSearch} handleBookSearch={this.handleBookSearch} searchTerm={this.state.searchTerm}/>
                <div>
                {this.state.searched ? (
                    <ul>
                        {this.state.books.map(
                            (book) => (
                                <Results 
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors.join(', ')}
                                    description={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.infoLink}
                                /> 
                            )
                        )}
                    </ul>
                ) : (
                    <h5>
                        Search A Book!
                    </h5>
                )}
                </div>
            </div>
        )
    }
      
}

export default SearchBooks;