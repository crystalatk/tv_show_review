'use strict';

const db = require('./conn');

class ACTORSModel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static async getAllActors() {
        const response = await db.any(`SELECT actors.id, actors.name FROM actors ORDER BY actors.name;`);
        return response;
    }

    static async getActorInfoByID(id) {
        const query = `SELECT * FROM actors WHERE id = '${id}';`;
        const response = await db.one(query);
        return response;
    }

    static async getShowsByActorID(id) {
        const query = `SELECT shows.id, shows.title, shows.poster FROM shows WHERE actor1_id = '${id}' OR actor2_id = '${id}' OR actor3_id = '${id}' ORDER BY shows.title;`;
        const response = await db.any(query);
        return response;
    }
};

module.exports = ACTORSModel;