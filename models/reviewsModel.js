'use strict';

const db = require('./conn');

class REVIEWSModel {
    constructor(id, tagline, posting_date, review_body, show_id, user_id, stars_id, ratings) {
        this.id = id;
        this.tagline = tagline;
        this.posting_date = posting_date;
        this.review_body = review_body;
        this.show_id = show_id;
        this.user_id = user_id;
        this.stars_id = stars_id;
        this.ratings = ratings;
    }

    
}