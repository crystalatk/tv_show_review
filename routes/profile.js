'use strict';

const express = require('express'),
    router = express.Router(),
    profileModel = require('../models/profileModel'),
    showsModel = require('../models/showModel');

router.get('/', async (req, res) => {
    const user_id = req.session.user_id;
    const userData = await profileModel.getAllProfile(user_id);
    const userReviews = await profileModel.getAllReviews(user_id);
    res.render('template', {
        locals: {
            title: 'My Profile',
            is_logged_in: req.session.is_logged_in,
            userData,
            userReviews,
        },
        partials: {
            header: "partials/header",
            body: "partials/profile",
        }
    });
});

router.get('/edit_review:id', async (req, res) => {
    const { id } = req.params;
    const review = await profileModel.getReviewById(id);
    console.log("DATE:", review.posting_date);
    console.log(review.posting_date.getDay());
    const getRatings = await showsModel.getRatings();
    res.render('template', {
        locals: {
            title: 'Edit Review',
            is_logged_in: req.session.is_logged_in,
            review,
            user_id: req.session.user_id,
            getRatings,
        },
        partials: {
            header: 'partials/header',
            body: "partials/edit_review",
        }
    })

})

router.post('/edit_review:id', async (req, res) => {
    const { id } = req.params;
    const { user_id, tagline, review_body, stars_id } = req.body;
    const editReview = await profileModel.editReview(id, tagline, review_body, stars_id);
    res.redirect('/profile');
})

router.post('/delete:id', async (req, res) => {
    const { id } = req.params;
    const deleteReview = await profileModel.deleteReview(id);
    res.redirect('/profile');
})





module.exports = router;