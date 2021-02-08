'use strict';

const router = require('../routes/shows');
const db = require('./conn');

class SHOWSModel {
    constructor(id, name, poster, dates_aired, actor1, actor2, actor3, plot, category, where2watch) {
        this.id = id;
        this.name = name;
        this.poster = poster;
        this.dates_aired = dates_aired;
        this.actor1 = actor1;
        this.actor2 = actor2;
        this.actor3 = actor3;
        this.plot = plot;
        this.category = category;
        this.where2watch = where2watch;
    }

    static async getAll() {
        const response = await db.any(`SELECT shows.id, shows.title, 
        shows.poster, shows.dates_aired, 
        a1.id as actor1_id, a1.name as actor1_name, 
        a2.id as actor2_id, a2.name as actor2_name, 
        a3.id as actor3_id, a3.name as actor3_name, 
        shows.plot, 
        categories.id as cat_id, 
        categories.name as cat_name, 
        categories.description as cat_descrip, 
        shows.where2watch
        FROM shows 
          INNER JOIN categories 
          ON shows.category_id = categories.id 
          INNER JOIN actors a1 
          ON shows.actor1_id = a1.id 
          INNER JOIN actors a2 
          ON shows.actor2_id = a2.id 
          INNER JOIN actors a3 
          ON shows.actor3_id = a3.id 
          ORDER BY shows.title;`);
        return response;
    }

    static async getThisShow(show_id) {
        const response = await db.one(
            `SELECT shows.id, shows.title, 
            shows.poster, shows.dates_aired, 
            a1.id as actor1_id, a1.name as actor1_name, 
            a2.id as actor2_id, a2.name as actor2_name, 
            a3.id as actor3_id, a3.name as actor3_name, 
            shows.plot, 
            categories.id as cat_id, 
            categories.name as cat_name, 
            categories.description as cat_descrip, 
            shows.where2watch
            FROM shows 
              INNER JOIN categories 
              ON shows.category_id = categories.id 
              INNER JOIN actors a1 
              ON shows.actor1_id = a1.id 
              INNER JOIN actors a2 
              ON shows.actor2_id = a2.id 
              INNER JOIN actors a3 
              ON shows.actor3_id = a3.id 
              WHERE shows.id = '${show_id}' 
              ORDER BY shows.title;`
        );
        return response;
    }

    static async getShowReviews(show_id) {
        const response = await db.any(
            `SELECT reviews.id, reviews.tagline, reviews.posting_date, reviews.review_body, users.name as user_name, ratings.name as rating, ratings.stars as stars
            FROM reviews 
              INNER JOIN shows
              ON reviews.show_id = shows.id 
              INNER JOIN users 
              ON reviews.user_id = users.id 
              INNER JOIN ratings 
              ON reviews.stars_id = ratings.id 
              WHERE reviews.show_id = '${show_id}' 
              ORDER BY ratings.stars DESC;`
        );
        return response;
    }

    static async addNewReview(tagline, review_body, show_id, stars_id) {
        const response = await db.result(`INSERT INTO reviews (tagline, review_body, show_id, user_id, stars_id) VALUES ($1, $2, $3, $4, $5)`, [tagline, review_body, show_id, 2, stars_id])
        return response;
    }

    static async getRatings() {
        const response = await db.any(`SELECT * FROM ratings;`);
        return response;
    }

    static async getCategories() {
        const response = await db.any(`SELECT * FROM categories;`);
        return response;
    }

    static async getShowsByCatID(cat_id) {
        const response = await db.any(`SELECT shows.id, shows.title, shows.poster, categories.name FROM shows 
        INNER JOIN categories 
        ON shows.category_id = categories.id WHERE categories.id = ${cat_id};`);
        return response;
    }

    static async getAllActors() {
        const response = await db.any(`SELECT actors.id, actors.name FROM actors ORDER BY actors.name;`);
        return response;
    }

};



module.exports = SHOWSModel;