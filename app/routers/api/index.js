const express = require('express');

const categoryRouter = require('./category');
const wodRouter = require('./wod');
const { apiController } = require('../../controllers/api');

const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

router.use((_, res, next) => {
    res.type('json');
    next();
});

// Route par défaut de l'API, ici on la configure pour toutes les méthodes
// afin de donner l'information en cas d'oubli de spéfication de la route par l'utilisateur
router.all('/', apiController.home);

// On préfixe les routers de l'API
router.use('/categories', categoryRouter);
router.use('/wod', wodRouter);

router.use(() => {
    throw new ApiError('API Route not found', { statusCode: 404 });
});

module.exports = router;
