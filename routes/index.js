const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

//adds /api before all children routes in api routes
router.use('/api', apiRoutes);

module.exports = router;