'use strict';

const express = require('express'),
    router = express.Router(),
    showsModel = require('../models/showModel');


router.get('/', async (req, res) => {
    const actorsList = await showsModel.getAllActors();
    res.render('template', {
        locals: {
            title: "TV Show Actors",
            actorsList,
        },
        partials: {
            header: "partials/header",
            body: "partials/actors_list",
        }
    });
});


module.exports = router;