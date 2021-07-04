const db = require('../models');

module.exports = {
    create: function(req, res) {
        // res.send('Hello');
        db.Book 
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findAll: function(req, res) {
        db.Book
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },

    remove: function(req, res) {
        db.Book
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }
}