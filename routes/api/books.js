const router = require('express').Router();
const booksController = require('../../controllers/booksController');

//adds a book to the database
router.route('/')
    .post(booksController.create)
  
//gets all saved books from database
router.route('/saved')
    .get(booksController.findAll)

//removes a book from the database based on its id
router.route('/:id')
    .delete(booksController.remove)
    
//exports all routes to be utilized elsewhere
module.exports = router;