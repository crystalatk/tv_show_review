'use strict';

const express = require('express'),
    router = express.Router(),
    showsModel = require('../models/showModel');


router.get('/', async (req, res) => {
    const showsData = await showsModel.getAll();
    res.render('template', {
        locals: {
            title: "TV Shows List!",
            showsData,
        },
        partials: {
            header: "partials/header",
            body: "partials/show_list",
        }
    });
});

router.get('/:show_id', async (req, res) => {
    const { show_id } = req.params;
    const thisShow = await showsModel.getThisShow(show_id);
    const thisShowReviews = await showsModel.getShowReviews(show_id);
    const getRatings = await showsModel.getRatings();
    res.render('template', {
        locals: {
            title: thisShow.title,
            thisShow,
            thisShowReviews,
            getRatings,
        },
        partials: {
            header: "partials/header",
            body: "partials/show_details",
        }
    })
});

router.post('/:show_id', async (req, res) => {
    console.log(req.params);
    const { show_id } = req.params;
    const { review_body } = req.body;
    const { tagline } = req.body;
    const { stars_id } = req.body;
    const newReview = await showsModel.addNewReview(tagline, review_body, show_id, stars_id);
    res.redirect(`/shows/${show_id}`);
});

module.exports = router;