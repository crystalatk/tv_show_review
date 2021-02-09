'use strict';

const session = require('express-session');

const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcryptjs'),
    usersModel = require('../models/userModel');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Users',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            header: "partials/header",
            body: "partials/users_list",
        }
    });
});

router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Sign-up',
            is_logged_in: req.session.is_logged_in,
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
            title: 'Login',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            header: "partials/header",
            body: "partials/login",
        }
    });
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

router.post('/signup', async (req, res) => {
    const { first_name, last_name, email, password, tagline } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const response = await usersModel.addUser(
        first_name, 
        last_name, 
        email, 
        hash,
        tagline
    );
    console.log('RESPONSE IN THE REGISTRATION ROUTE: ', response);
    if (response.id) {
        res.redirect(`/users/login`);
    } else {
        res.send("ERROR: Please try submitting again:)").status(500);
    }
    
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = new usersModel(null, null, null, email, password, null);
    const response = await user.login();
    if (!!response.isValid) {           //This tells the session that we are logged in!
        req.session.is_logged_in = response.isValid;
        req.session.user_id = response.user_id;
        req.session.first_name = response.first_name;
        req.session.last_name = response.last_name;
        res.redirect('/');
    } else {
        console.log(response);
        res.sendStatus(403);
    }
});

module.exports = router;