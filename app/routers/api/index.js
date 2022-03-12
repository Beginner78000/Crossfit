const express = require('express');

const categoryRouter = require('./category');
const movementRouter = require('./movement');
const wodRouter = require('./wod');
const { apiController } = require('../../controllers/api');

const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

router.use((_, res, next) => {
    res.type('json');
    next();
});

router.all('/', apiController.home);

// On préfixe les routers de l'API
router.use('/categories', categoryRouter);
router.use('/movement', movementRouter);
router.use('/wod', wodRouter);

router.use(() => {
    throw new ApiError('API Route not found', { statusCode: 404 });
});

module.exports = router;
