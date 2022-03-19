const express = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/wodCreateSchema');
const updateSchema = require('../../validation/schemas/wodUpdateSchema');

const { wodController: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');
// const { cache, flush } = require('../../helpers/cache');

const router = express.Router();

router
    .route('/')
    /**
     * GET /api/wod
     * @summary Get all training
     * @tags WOD
     * @return {[WOD]} 200 - success response - application/json
     */
    .get(controllerHandler(controller.getAll))
    /**
     * POST /api/wod
     * @summary Create a training
     * @tags WOD
     * @param {InputWod} request.body.required - Training info
     * @return {WOD} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     */
    .post(validate('body', createSchema), controllerHandler(controller.create));

router
    .route('/:id(\\d+)')
    /**
     * GET /api/wod/{id}
     * @summary Get one training
     * @tags WOD
     * @param {number} id.path.required - wod identifier
     * @return {WOD} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - WOD not found - application/json
     */
    .get(controllerHandler(controller.getOne))
    /**
     * PATCH /api/wod/{id}
     * @summary Update one training
     * @tags WOD
     * @param {number} id.path.required - wod identifier
     * @param {InputWod} request.body.required - Training info
     * @return {WOD} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - WOD not found - application/json
     */
    .patch(validate('body', updateSchema), controllerHandler(controller.update))
    /**
     * DELETE /api/wod/{id}
     * @summary Delete one training
     * @tags WOD
     * @param {number} id.path.required - wod identifier
     * @return {WOD} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - WOD not found - application/json
     */
    .delete(controllerHandler(controller.delete));

module.exports = router;
