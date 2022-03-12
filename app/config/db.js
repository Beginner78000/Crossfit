/**
 * Comme pour Client les informations de connexion
 * sont lu soit directement à partir de l'env soit donnée en paramêtre
 */
const debug = require('debug')('SQL:log');
const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
    
    originalClient: pool,

    async query(...params) {
        debug(...params);

        return this.originalClient.query(...params);
    },
};
