import React, { Component } from 'react'
import API from '../utils/API';

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        API.getSavedBooks()
            .then((res) => {
                this.setState({
                    books: res.data.results.map((e, i) => ({
                        key: i,
                        title: e.volumeInfo.title,
                        authors: e.columeInfo.authors.join(', '),
                        description: e.volumeInfo.description,
                        image: e.volumeInfo.imageLinks.thumbnail,
                        link: e.volumeInfo.infoLink
                    }))
                })
            })
    };

    render() {
        return (
            <div>
                <h1>This is Saved</h1>
            </div>
        )
    }  
}

export default Saved;
