'use strict';

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
        const response = await db.any(`SELECT * FROM shows INNER JOIN categories ON shows.category = categories.id INNER JOIN actors ON shows.actor1 = actor.id INNER JOIN actors ON shows.actor2 = actor.id INNER JOIN actors ON shows.actor3 = actor.id ORDER BY shows.name;`);
        return response;
    }