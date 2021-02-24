'use strict';

const host = 'ziggy.db.elephantsql.com',
    database = 'fgmcicvs',
    user = 'fgmcicvs',
    password = 'uUuCAwmNcCSIg62m-tixcuKltMHlmlSS';


// running pg-promise immediately with (). Do NOT pass the log when you go to production!
const pgp = require('pg-promise') ({
    query: function (event) {
        console.log('QUERY:', event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const db = pgp(options);

module.exports = db;