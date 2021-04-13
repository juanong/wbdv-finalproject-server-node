const express = require('express')
const app = express()

// Configure CORS - everything has access to this server
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


// Connect the server to our mongodb running on port 27017
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/spoonful-db',
    {useNewUrlParser: true, useUnifiedTopology: true});

const demoController = require('./controllers/demo-controller')
demoController(app)

const userController = require('./controllers/users-controller')
userController(app)

const reviewsController = require('./controllers/reviews-controller')
reviewsController(app)

// IMPORTANT: our mongo server is running on port 4000
app.listen(4000)