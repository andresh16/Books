'use strict';

module.exports = function (app) {
    var bookController = require('../controllers/bookController');

    // Books Routes
    app.route('/book/create')
        .post(bookController.createBook);

    app.route('/books').get(bookController.listAllBooks);
};
