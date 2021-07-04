import React, { Component } from 'react';
import GoogleBar from '../components/GoogleBar/GoogleBar';
import Results from '../components/Results/Results';
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
                // setBooks(
                //     res.data.map((e, i) => ({
                //         key: i,
                //     }))
                // )
            })
    }

    render() {
        return (
            <div>
                <GoogleBar handleSearch={this.handleSearch} handleBookSearch={this.handleBookSearch}/>
                <Results />
            </div>
        )
    }
      
}

export default SearchBooks;