const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

// always require and config near the to
require('dotenv').config()

//connect to database
require('./config/database');

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



// Define other routes HERE, before the default
app.use('/api/users',require('./routes/api/users'))

// This needs to be the last route:
// All unrecognised requests get served the home page
// (i.e. the React application):

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001; 

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});