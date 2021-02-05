'use strict';

const express = require('express'),
    router = express.Router(),
    showsModel = require('../models/showModel');


router.get('/', async (req, res) => {
    const catList = await showsModel.getCategories();
    res.render('template', {
        locals: {
            title: "TV Show Categories",
            catList,
        },
        partials: {
            header: "partials/header",
            body: "partials/categories_list",
        }
    });
});

router.get('/:cat_id', async (req, res) => {
    const { cat_id } = req.params;
    const showsByCat = await showsModel.getShowsByCatID(cat_id);
    res.render('template', {
        locals: {
            title: showsByCat[0].name,
            showsByCat,
        },
        partials: {
            header: "partials/header",
            body: "partials/category_shows",
        }
    })
});

module.exports = router;