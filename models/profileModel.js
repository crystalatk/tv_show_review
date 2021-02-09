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
        const query = `SELECT reviews.id, reviews.tagline, to_char(reviews.posting_date, 'Mon DD, YYYY') as posting_date, reviews.review_body, ratings.name as rating_name, ratings.stars as stars FROM reviews 
        INNER JOIN ratings
        ON reviews.stars_id = ratings.id
        where user_id = '${user_id}'
        ORDER BY reviews.posting_date DESC;`;
        const response = await db.any(query);
        return response;
    }

    static async getReviewById(id) {
        const query = `SELECT * FROM reviews WHERE id = '${id}';`;
        const response = await db.one(query);
        return response;
    }

    static async editReview(review_id, tagline, review_body, stars_id) {
        const query = `UPDATE reviews SET tagline = '${tagline}', review_body = '${review_body}', stars_id = '${stars_id}' WHERE id = '${review_id}';`;
        try {
            const response = await db.none(query);
            return response;
        } catch (err) {
            return err;
        }
    }

    static async deleteReview(id) {
        const query = `DELETE FROM reviews WHERE id = '${id}';`;
        try {
            const response = await db.none(query);
            return response;
        } catch (err) {
            return err;
        }
    }
};

module.exports = PROFILEModel;