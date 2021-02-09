'use strict';

const db = require('./conn');

class PROFILEModel {
    constructor(id, first_name, last_name, email, tagline) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.tagline = tagline;
    }

    static async getAllProfile(user_id) {
        const query = `SELECT * FROM users WHERE id = '${user_id}';`;
        const response = await db.one(query);
        console.log(response);
        return response;
    }

    static async getAllReviews(user_id) {
        const query = `SELECT reviews.id, reviews.tagline, reviews.posting_date, reviews.review_body, ratings.name as rating_name, ratings.stars as stars FROM reviews 
        INNER JOIN ratings
        ON reviews.stars_id = ratings.id
        where user_id = '${user_id}'
        ORDER BY reviews.posting_date DESC;`;
        const response = await db.any(query);
        return response;
    }
};

module.exports = PROFILEModel;