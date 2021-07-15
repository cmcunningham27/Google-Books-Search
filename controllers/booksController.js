const db = require('../models');

module.exports = {
    //adds book to database
    create: function(req, res) {
        db.Book 
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //collects all saved books from database
    findAll: function(req, res) {
        // console.log('saved again', req);
        db.Book
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    //removes a book by its id from database
    remove: function(req, res) {
        db.Book
            .findOne({bookId: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }
};