const express = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/movementCreatSchema');
const updateSchema = require('../../validation/schemas/movementUpdateSchema');

const { movementController: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');
const { cache, flush } = require('../../helpers/cache');

const router = express.Router();

router
    .route('/')
    /**
     * GET /api/movements
     * @summary Get all movements
     * @tags Movement
     * @return {[Movement]} 200 - success response - application/json
     */
    .get(cache, controllerHandler(controller.getAll))
    /**
     * POST /api/movements
     * @summary Create a movement
     * @tags Movement
     * @param {InputMovement} request.body.required - movement info
     * @return {Movement} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     */
    .post(validate('body', createSchema), flush, controllerHandler(controller.create));

router
    .route('/:id(\\d+)')
    /**
     * GET /api/movements/{id}
     * @summary Get one movement
     * @tags Movement
     * @param {number} id.path.required - movement identifier
     * @return {Movement} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Movement not found - application/json
     */
    .get(cache, controllerHandler(controller.getOne))
    /**
     * PATCH /api/movements/{id}
     * @summary Update one movement
     * @tags Movement
     * @param {number} id.path.required - movement identifier
     * @param {InputMovement} request.body.required - movement info
     * @return {Movement} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Movement not found - application/json
     */
    .patch(validate('body', updateSchema), flush, controllerHandler(controller.update))
    /**
     * DELETE /api/movements/{id}
     * @summary Delete one movement
     * @tags Movement
     * @param {number} id.path.required - movement identifier
     * @return {Movement} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Movement not found - application/json
     */
    .delete(flush, controllerHandler(controller.delete));

module.exports = router;
