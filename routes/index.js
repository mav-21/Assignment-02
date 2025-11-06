var express = require('express'); // imports Express framework
var router = express.Router(); // creates a new router instance to handle routes

// GET /  → Home
router.get('/', function(req, res) { // defines route for homepage
  res.render('home', { title: 'Home' }); // renders 'home' view with title variable
});

// GET /about → About
router.get('/about', function(req, res) { // defines route for About page
  res.render('about', { title: 'About Me' }); // renders 'about' view with page title
});

// GET /projects → Projects
router.get('/projects', function(req, res) { // defines route for Projects page
  const projects = [ // array of project objects to pass to view
    { name: 'Gym Tracker App', tech: ['Node','Express','MongoDB'], link: '#', desc: 'Tracks workouts and progress.' }, // project 1
    { name: 'E-Commerce Mock', tech: ['HTML','CSS','JS'], link: '#', desc: 'Frontend mock store with cart.' }, // project 2
    { name: 'Keylogger', tech: ['Python'], link: '#', desc: 'Records users inputs on a computer and stores it' } // project 3
  ];
  res.render('projects', { title: 'Projects', projects }); // renders 'projects' view w both title and data
});

// GET /contact → Contact
router.get('/contact', function(req, res) { // defines route for Contact page
  res.render('contact', { title: 'Contact Me' }); // renders 'contact' view with title
});

module.exports = router; // exports router so it can be used in app.js
