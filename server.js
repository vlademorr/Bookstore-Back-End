const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD');
    next();
});
routes(app);
mongoose.connect('mongodb://localhost:27017', {dbName: 'bookstore'})
.then(() => {
        app.listen(4000, () => {
            console.log('server started')
        });
    })
    .catch((err) => {
        return console.log(err);
    });