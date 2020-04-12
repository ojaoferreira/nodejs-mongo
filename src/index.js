module.exports = (app) => {
    app.use('/', require('./routes/main'));
    app.use('/register', require('./routes/register'));
}
