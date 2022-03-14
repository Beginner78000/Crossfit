const debug = require('debug')('Controller');
const ApiError = require('../../errors/apiErrors');
const { cadex } = require('../../services/cadex');

/**
 * Cadex controller
 */
const controller = {
    /**
     * Gets a full or partial random cadex
     * @param {Request} request
     * @param {Response} response
     * @returns {string} 200 The full or partial random cadex
     */
    getCadex(request, response) {
        debug('Exécution de getCadex avec en queryString', request.query);
        // on commence par générer un cadex complètement aléatoire
        const cadexObject = cadex.generate();
        // on vient écraser les valeurs random par celles fournies par le user
        const copy = { ...cadexObject, ...request.query };
        return response.json(copy.glue());
    },

    /**
     * Adds data to the source and uses it to generate a partial random cadex
     * @param {Request} request
     * @param {Response} response
     * @returns {string} 200 The partial random cadex
     */
    postCadex(request, response) {
        debug('Exécution de postCadex avec en body', request.body);
        // génération d'un cadex aléatoire
        const cadexObject = cadex.generate();
        debug('Cadex généré', cadexObject);
        // ajout des infos de request.body aux data
        // besoin d'une nouvelle méthode dans le service
        cadex.add(request.body);

        // concaténation des objects random et request.body
        const copy = { ...cadexObject, ...request.body };

        // envoi du cadex au front
        return response.json(copy.glue());
    },
    // eslint-disable-next-line no-unused-vars
    async testCadex(request, response, next) {
        throw new ApiError('Erreur fait exprès', 418);
    },
};

module.exports = controller;
