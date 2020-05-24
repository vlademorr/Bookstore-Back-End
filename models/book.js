const mongoose = require('mongoose');

const { Schema } = mongoose;
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    } ,
    price: {
        type: Number,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("books", bookSchema);