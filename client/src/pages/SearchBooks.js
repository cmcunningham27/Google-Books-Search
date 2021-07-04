import React, { Component } from 'react';
import GoogleBar from '../components/GoogleBar';
import Results from '../components/Results';
import API from '../utils/API';


//send searchTerm, input function and api function to GoogleBar component
//send map of book results to Results component
class SearchBooks extends Component {
    state = {
        books: [],
        searchTerm: ''
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
            .then(() => console.log(this.state.books))
            .catch(err => console.log(err));
    };
    

    render() {
        return (
            <div>
                <GoogleBar handleSearch={this.handleSearch} handleBookSearch={this.handleBookSearch} searchTerm={this.state.searchTerm}/>
                <Results />
            </div>
        )
    }
      
}

export default SearchBooks;