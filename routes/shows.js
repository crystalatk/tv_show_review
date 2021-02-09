'use strict';

const express = require('express'),
    router = express.Router(),
    showsModel = require('../models/showModel');


router.get('/', async (req, res) => {
    const showsData = await showsModel.getAll();
    res.render('template', {
        locals: {
            title: "TV Shows List!",
            is_logged_in: req.session.is_logged_in,
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
    try {
        res.render('template', {
            locals: {
                title: thisShow.title,
                thisShow,
                thisShowReviews,
                getRatings,
                is_logged_in: req.session.is_logged_in,
                user_id: req.session.user_id,
            },
            partials: {
                header: "partials/header",
                body: "partials/show_details",
            }
        });
    } catch(err) {
        console.log(err);
    }
    
});

router.post('/:show_id', async (req, res) => {
    console.log(req.body);
    const { show_id } = req.params;
    const { review_body, tagline, user_id, stars_id } = req.body;
    const newReview = await showsModel.addNewReview(tagline, review_body, show_id, user_id, stars_id);
    res.redirect(`/shows/${show_id}`);
});

module.exports = router;