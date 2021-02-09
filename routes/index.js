'use strict';

const session = require('express-session');

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: "It's Showtime!",
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            header: "partials/header",
            body: "partials/home",
        }
    })
});


module.exports = router;