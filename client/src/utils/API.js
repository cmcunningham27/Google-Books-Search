import axios from 'axios';

//makes calls to the Google Books API or the back-end's api routes
export default {
    searchBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${ query }`)
    },

    saveBook: function(data) {
        return axios.post('/api/books', data);
    },

    getSavedBooks: function() {
        console.log('saved');
        return axios.get('/api/books/saved');
    },

    deleteBook: function(id) {
        return axios.delete('/api/books/' + id)
    }
};