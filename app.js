var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

var routes = require('./routes/index');
var mongoose = require('mongoose');
mongoose.connect('mongodb://user123:user123@ds149365.mlab.com:49365/mydatabase');

var app = express();
var index = require('./routes/index');

// public route
app.use('/api', index);

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use('/', routes);
app.use(express.static('./public'));

// development error handler
// will print stacktrace


// production error handler


module.exports = app;
