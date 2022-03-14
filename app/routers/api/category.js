const express = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/categoryCreateSchema');
const updateSchema = require('../../validation/schemas/categoryUpdateSchema');

const { categoryController: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');
const { cache, flush } = require('../../helpers/cache');

const router = express.Router();

router.route('/')
    /**
     * GET /api/categories
     * @summary Get all categories
     * @tags Category
     * @return {[Category]} 200 - success response - application/json
     */
    .get(cache, controllerHandler(controller.getAll))
    /**
     * POST /api/categories
     * @summary Create a category
     * @tags Category
     * @param {InputCategory} request.body.required - category info
     * @return {Category} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Category not found - application/json
     */
    .post(validate('body', createSchema), flush, controllerHandler(controller.create));

router.route('/:id(\\d+)')

    /**
     * GET /api/categories/{id}
     * @summary Get one category
     * @tags Category
     * @param {number} id.path.required - category identifier
     * @return {Category} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Category not found - application/json
     */
    .get(cache, controllerHandler(controller.getOne))
    /**
     * PATCH /api/categories/{id}
     * @summary Update one category
     * @tags Category
     * @param {number} id.path.required - category identifier
     * @param {InputCategory} request.body.required - category info
     * @return {Category} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Category not found - application/json
     */
    .patch(validate('body', updateSchema), flush, controllerHandler(controller.update))
    /**
     * DELETE /api/categories/{id}
     * @summary Delete one category
     * @tags Category
     * @param {number} id.path.required - category identifier
     * @return {Category} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Category not found - application/json
     */
    .delete(flush, controllerHandler(controller.delete));

module.exports = router;
