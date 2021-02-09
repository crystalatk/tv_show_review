'use strict';

const express = require('express'),
    router = express.Router(),
    profileModel = require('../models/profileModel');

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



module.exports = router;