const http = require('http');
require('dotenv').config();
const debug = require('debug')('app:server');
const app = require('./app');
// const cache = require('./app/helpers/cache');

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port, () => {
    debug(`Listening on http://localhost:${port}`);
});

// cache.connect().then(() => {
//     server.listen(port, () => {
//         debug(`Listening on http://localhost:${port}`);
//     });
// });
