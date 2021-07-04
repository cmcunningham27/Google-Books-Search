const db = require('../models');

module.exports = {
    searchBooks: function(req, res) {
        axios.get('https://www.googleapis.com/books/v1/volumes/?happy')
            
    }
}