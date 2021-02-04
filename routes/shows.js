'use strict';

const express = require('express'),
    router = express.Router();


router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: "TV Shows List!",
        },
        partials: {
            header: "partials/header",
            body: "partials/show_list",
        }
    });
});
module.exports = router;