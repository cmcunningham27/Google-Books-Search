import axios from 'axios';

export default {
    searchBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${ query }`)
    },

    saveBook: function(data) {
        return axios.post('/api/books', data);
    },

    getSavedBooks: function() {
        return axios.get('/api/books/saved');
    }
};