'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: "It's Showtime!",
        },
        partials: {
            header: "partials/header",
            body: "partials/home",
        }
    })
});


module.exports = router;