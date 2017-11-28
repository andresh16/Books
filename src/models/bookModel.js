'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const mandatory = "Debe ingresar un valor";

const booksSchema = new Schema({
    title: {
        type: String,
        required: [true, mandatory]
    },
    synopsis: {
        type: String,
        required: [true, mandatory]
    },
    pages: {
        type: Number,
        required: [true, mandatory]
    },
    editorial: {
        type: String
    },
    author: {
        type: String,
        required: [true, mandatory]
    },
    language: {
        type: String,
        required: [true, mandatory]
    },
    gender: {
        type: String,
        required: [true, mandatory]
    }
});


module.exports = mongoose.model('Books', booksSchema);