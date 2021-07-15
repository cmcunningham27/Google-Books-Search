const router = require('express').Router();
const bookRoutes = require('./books');

//adds /books before each request in books api routes
router.use('/books', bookRoutes);

module.exports = router;