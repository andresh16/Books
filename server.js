let express = require('express'),
    app = express(),
    port = 3000,
    mongoose = require('mongoose'),
    Book = require('./src/models/bookModel'),
    bodyParser = require('body-parser'),
    cors = require('cors');
morgan = require('morgan');

const config = require('./config'); // get our config file

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));
// Services without authentication
let booksRoutes = require('./src/routes/booksRoutes');
booksRoutes(app);
app.use(cors());

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' no encontrada...' })
});

app.listen(port);