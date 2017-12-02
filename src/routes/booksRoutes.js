'use strict';

module.exports = function (app) {
    var bookController = require('../controllers/bookController');

    // Books Routes
    app.route('/book/create').post(bookController.createBook);
    //Obtiene todos los libros
    app.route('/books').get(bookController.listAllBooks);
    //Obtiene la información de un libro
    app.route('/book/:idBook')
        .get(bookController.getBook)
        .put(bookController.updateBook)
        .delete(bookController.deleteBook);
    //Busca libros por titulo o autor
    app.route('/books/keyWordTitleAuthor/:keyword').get(bookController.findByTitleOrAuthor);
};
