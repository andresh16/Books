var express = require('express'),
    app = express(),
    port = 3002,
    mongoose = require('mongoose'),
    Book = require('./src/models/bookModel'),
    bodyParser = require('body-parser'),
    cors = require('cors');
morgan = require('morgan');

const config = require('./config'); // get our config file

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// use morgan to log requests to the console
app.use(morgan('common'));
// Services without authentication
var booksRoutes = require('./src/routes/booksRoutes');
booksRoutes(app);
app.use(cors());

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' no encontrada...' })
});

app.listen(port);