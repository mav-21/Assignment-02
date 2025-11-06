var express = require('express'); // imports Express library 
var router = express.Router(); // creates new router instance for route handlers

// GET users listing.
router.get('/', function(req, res, next) { // defines GET route for '/users'
  res.send('respond with a resource'); // sends a simple text response to the client
});

module.exports = router; // exports the router so it can be mounted in app.js
