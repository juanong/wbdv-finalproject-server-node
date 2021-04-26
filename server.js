// Express to connect our client to our mongo database
const express = require('express')
const app = express()
// Body parser to read embedded information from http requests
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const methodOverride = require('method-override')

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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true')
    next();
});

require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
// Connect the server to our mongodb running on port 27017
const mongoose = require('mongoose');
mongoose.connect(
    mongoURI,
    {useNewUrlParser: true, useUnifiedTopology: true});

let gfs;

mongoose.connection.once('open', () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('uploads');

})

// create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({storage});

const demoController = require('./controllers/demo-controller')
demoController(app)

const userController = require('./controllers/users-controller')
userController(app)

const reviewsController = require('./controllers/reviews-controller')
reviewsController(app)

const recipeController = require('./controllers/recipe-controller')
recipeController(app)

const imageController = require('./controllers/image-controller')
imageController(app, upload)

// API are added here, because gfs varaible cannot be passed down
app.get('/api/internal/file/:filename', (req, res) => {
    const filename = req.params.filename

    gfs.files.findOne({filename: filename}, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(400);
        }

        return res.json(file);
    });
});

app.get('/api/internal/images/:filename', (req, res) => {
    const filename = req.params.filename

    gfs.files.findOne({filename: filename}, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(400);
        }

        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
    });
});

// IMPORTANT: our mongo server is running on port 4000
app.listen(process.env.PORT || 4000)