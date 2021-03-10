"use strict";

require("dotenv").config();

const host = process.env.DB_HOST,
  database = process.env.DB_DATABASE,
  user = process.env.DB_USER,
  password = process.env.DB_PASSWORD;

// running pg-promise immediately with (). Do NOT pass the log when you go to production!
const pgp = require("pg-promise")({
  query: function (event) {
    console.log("QUERY:", event.query);
  },
});

const options = {
  host,
  database,
  user,
  password,
};

const db = pgp(options);

module.exports = db;
