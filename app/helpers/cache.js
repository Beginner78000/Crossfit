const debug = require('debug')('CacheModule');
const { createClient } = require('redis');
const db = createClient();


const TTL = 60 * 5;
const PREFIX = 'crossfit:';

const keys = [];

const cache = {
    async connect() {
        await db.connect();
    },

    async cache(req, res, next) {
        const key = `${PREFIX}${req.url};`
        
        if (keys.includes(key)) {
            debug('Data via Redis');
            
            const cachedString = await db.get(key);
            
            const cachedValue = JSON.parse(cachedString);
            
            res.json(cachedValue);

        } else {
            const originalJson = res.json.bind(res);

            res.json = async (data) => {
                debug('Response json customifiée');
                const jsonData = JSON.stringify(data);
                await db.setEx(key, TTL, jsonData);
                keys.push(key)
                originalJson(data);
            };

            next();
        }
    },

    async flush(req, res, next) {
        
        debug('On efface tout');
        const promises = [];
        keys.forEach((key) => promises.push(db.del(key)));
        await Promise.all(promises);

        keys.length = 0;

        next();
    },

};

module.exports = cache;
