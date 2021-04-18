// Express to connect our client to our mongo database
const express = require('express')
const app = express()
// Body parser to read embedded information from http requests
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Express-session to maintain user session. All our req's in our controller functions will have a session now
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))

// Configure CORS - everything has access to this server
app.use(function (req, res, next) {
    // IMPORTANT: change the second param to be specific sources we allow to access the website (can't do * with username/password info)
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true')
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

const recipeController = require('./controllers/recipe-controller')
recipeController(app)

// IMPORTANT: our mongo server is running on port 4000
app.listen(4000)