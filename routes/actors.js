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

// router.get('/:actor_id', async (req, res) => {
//     const { actor_id } = req.params;
//     const showsByActor = await showsModel.getShowsByActorID(actor_id);
//     res.render('template', {
//         locals: {
//             title: showsByActor[0].name,
//             showsByActor,
//         },
//         partials: {
//             header: "partials/header",
//             body: "partials/actor_shows",
//         }
//     })
// });

module.exports = router;