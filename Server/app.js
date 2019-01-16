const express = require('express');
const morgan = require('morgan');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

mongoose.Promise = global.Promise;
const ENV = require('./ENV');
mongoose.connect(ENV.CONNECTION_STRING,  { useNewUrlParser: true });


// MiddleWare

app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Start The Server

const port = process.env.PORT || '5000';
app.listen(port);
console.log('Server Listning at ' + port);