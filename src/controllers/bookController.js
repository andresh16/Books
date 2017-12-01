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

exports.findByTitleOrAuthor = function (req, res) {
    let obj = req.body;
    Books.find({ $or: [{ 'title': { $regex: "^.*" + obj.title + ".*$" } }, { 'author': { $regex: "^.*" + obj.author + ".*$" } }] }, function (err, books) {
        if (err)
            res.status(400).send(err);
        res.status(200).json(books);
    });
};

exports.createBook = function (req, res) {
    let newBook = new Books(req.body);
    newBook.save(function (err, task) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(201).json(task);
    });
};

exports.getBook = function (req, res) {
    Books.findById(req.params.idBook, function (err, book) {
        if (err)
            res.status(400).send(err);
        res.status(200).json(book);
    });
};

exports.updateBook = function (req, res) {
    Books.findOneAndUpdate({ _id: req.params.idBook }, req.body, { new: true }, function (err, book) {
        if (err)
            res.status(400).send(err);
        res.status(201).json(book);
    });
};

exports.deleteBook = function (req, res) {
    Books.remove({
        _id: req.params.idBook
    }, function (err, task) {
        if (err)
            res.status(400).send(err);
        res.status(201).json({ result: true });
    });
};