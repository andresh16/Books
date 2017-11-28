'use strict';

let mongoose = require('mongoose');
const Books = mongoose.model('Books');

exports.listAllBooks = function (req, res) {
    Books.find({}, function (err, books) {
        if (err)
            res.status(400).send(err);
        res.status(200).json(books);
    });
};


exports.createBook = function (req, res) {
    console.log(req.body);
    let newBook = new Books(req.body);
    newBook.save(function (err, task) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(201).json(task);
    });
};
