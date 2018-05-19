const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const routes = require('./routes/index');

const app = express();

app.use(compression({ threshold: 0 }));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = app;
