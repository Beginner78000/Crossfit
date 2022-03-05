const express = require('express');

const apiRouter = require('./api');
const websiteRouter = require('./website');
const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

// On préfixe les routers
router.use('/api', apiRouter);
router.use('/', websiteRouter);

router.use((err, _, response, next) => {
    errorHandler(err, response, next);
});

module.exports = router;