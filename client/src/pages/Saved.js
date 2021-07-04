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
                console.log(res.data);
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

    render() {
        return (
            <div>
                <Saved />
            </div>
        )
    }  
}

export default Saved;
