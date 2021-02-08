'use strict';

const express = require('express'),
    router = express.Router(),
    showsModel = require('../models/showModel');

router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Sign-up',
        },
        partials: {
            header: "partials/header",
            body: "partials/signup",
        }
    });
});

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Sign-up',
        },
        partials: {
            header: "partials/header",
            body: "partials/login",
        }
    });
});

router.post('/signup', (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    res.redirect(`../`);
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.redirect(`../`);
});

module.exports = router;