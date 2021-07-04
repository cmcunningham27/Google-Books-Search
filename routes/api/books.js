const router = require('express').Router();
const booksController = require('../../controllers/booksController');

router.route('/')
    // .get(booksController.findAll)
    .post(booksController.create)
    // .post((req, res) => {
    //     res.send('Hello');
    // })

router.route('/:id')
    // .get(booksController.findById)
    

module.exports = router;