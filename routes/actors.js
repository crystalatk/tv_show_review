'use strict';

const express = require('express'),
    router = express.Router(),
    actorsModel = require('../models/actorModel');


router.get('/', async (req, res) => {
    const actorsList = await actorsModel.getAllActors();
    res.render('template', {
        locals: {
            title: "TV Show Actors",
            actorsList,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            header: "partials/header",
            body: "partials/actors_list",
        }
    });
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const actor = await actorsModel.getActorInfoByID(id);
    const showList = await actorsModel.getShowsByActorID(id);
    console.log(showList);
    res.render('template', {
        locals: {
            title: "TV Show Actors",
            is_logged_in: req.session.is_logged_in,
            showList,
            actor,
        },
        partials: {
            header: 'partials/header',
            body: 'partials/actor_shows',
        }
    })
})


module.exports = router;