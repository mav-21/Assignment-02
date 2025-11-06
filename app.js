var createError = require('http-errors'); // module to create HTTP error objects (e.g. 404, 500)
var express = require('express'); // imports Express framework
var path = require('path'); // built-in module to handle file paths
var cookieParser = require('cookie-parser'); // for parsing cookies
var logger = require('morgan'); // logging HTTP requests in console

var indexRouter = require('./routes/index'); // imports main route definitions
var expressLayouts = require('express-ejs-layouts'); // middleware for ejs layout templates
var app = express(); // initializes an Express application
var usersRouter = require('./routes/users'); // imports user route definitions

// views engine setup
app.set('views', path.join(__dirname, 'views')); // sets directory for ejs view template
app.set('view engine', 'ejs'); // tells Express to use ejs as templating engine

app.use(expressLayouts); // enables ejs layout support
app.set('layout', 'layout'); // sets default layout file (layout.ejs)
app.use(logger('dev')); // logs requests w concise output (useful for development)
app.use(express.json()); // parses incoming JSON payloads
app.use(express.urlencoded({ extended: false })); // parses URL-encoded form data
app.use(cookieParser()); // parses cookies from client requests
app.use(express.static(path.join(__dirname, 'public'))); // serves static files (e.g. CSS, JS, images) from /public folder

app.use('/', indexRouter); // routes all ('/') root requests to indexRouter
app.use('/users', usersRouter); // routes '/users' requests to usersRouter

// catch 404 error and forward to error handler
app.use(function(req, res, next) { // middleware for handling requests w no matching route
  next(createError(404)); // creates and forwards a 404 error to the next handler
});

// error handler
app.use(function(err, req, res, next) { // final error-handling middleware
  // set locals, only providing error in development
  res.locals.message = err.message; // passes error message to the view
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // only shows full error stack in dev mode

  // render the error page
  res.status(err.status || 500); // sets response status, default 500 if not defined
  res.render('error', { title: 'Error' }); // renders the error.ejs page w title
});

module.exports = app; // exports the Express app instance so it can be run by /bin/www
