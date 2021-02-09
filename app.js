'use strict';

const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express'),
    session = require('express-session'), //the middleware for tracking the session
    app = express();

const es6Renderer = require('express-es6-template-engine');
const { response } = require('express');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    secret: 'get rad!',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false,
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index'),
    showsController = require('./routes/shows'),
    categoriesController = require('./routes/categories'),
    actorsController = require('./routes/actors'),
    usersController = require('./routes/users'),
    profileController = require('./routes/profile');

app.use('/', rootController);
app.use('/shows', showsController);
app.use('/categories', categoriesController);
app.use('/actors', actorsController);
app.use('/users', usersController);
app.use('/profile', profileController);