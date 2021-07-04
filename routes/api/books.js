const router = require('express').Router();
const booksController = require('../../controllers/booksController');

router.route('/')
    .post(booksController.create)
    // .post((req, res) => {
    //     res.send('Hello');
    // })
    
router.route('/saved')
    .get(booksController.findAll)

router.route('/:id')
    .delete(booksController.remove)
    

module.exports = router;