const bookRoute = require('./bookRoute');
const routes = (app) => {
    app.use('/', bookRoute())
};

module.exports = routes;