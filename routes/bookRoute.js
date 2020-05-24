const express = require('express');
const bookModel = require('../models/book');
const router = express.Router();

module.exports = () => {
    router.get('/books', (req, res) => {
        bookModel.find().exec()
            .then((books) => {
                res.status(200).json(books);
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    });
    router.post('/books', (req, res) => {
        bookModel.create(req.body)
        .then((newBook) => {
            res.status(200).json(newBook);
        })
        .catch((err) => {
            res.status(500).json(err)
        });
    });
    router.put('/books/:id', (req, res) => {
        const updatedBook = req.body;
        updatedBook._id = req.params.id;
        bookModel.findByIdAndUpdate(req.params.id, { $set:req.body })
            .then(() => {
                res.status(200).json(updatedBook);
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    });
    router.delete('/books/:id', (req, res) => {
        bookModel.findByIdAndDelete(req.params.id)
            .then(() => {
                res.sendStatus(200);
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    });
    return router
};