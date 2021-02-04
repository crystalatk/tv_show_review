'use strict';

const host = 'localhost',
    database = 'class_survey',
    user = 'postgres';


// running pg-promise immediately with (). Do NOT pass the log when you go to production!
const pgp = require('pg-promise') ({
    query: function (event) {
        console.log('QUERY:', event.query);
    }
});

const options = {
    host,
    database,
    user
};

const db = pgp(options);

module.exports = db;