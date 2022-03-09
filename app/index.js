const path = require('path');
const express = require('express');
const cors = require('cors');

const router = require('./routers');

const app = express();
require('./helpers/apiDocs')(app);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// On active le middleware pour parser le payload JSON
app.use(express.json());
// On active le middleware pour parser le payload urlencoded
app.use(express.urlencoded({ extended: true }));

// On lève la restriction CORS pour nos amis React
const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));

app.use(router);

module.exports = app;
