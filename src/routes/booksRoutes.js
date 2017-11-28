'use strict';

module.exports = function (app) {
    var bookController = require('../controllers/bookController');

    // user Routes
    app.route('/book/create')
        .post(bookController.createBook);

    app.route('/books').get(bookController.listAllBooks);
};
