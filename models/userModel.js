'use strict';

const db = require('./conn'),
    bcrypt = require('bcryptjs');

class User {
    constructor(id, first_name, last_name, email, password, tagline) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.tagline = tagline;
    }

    static async addUser(first_name, last_name, email, password, tagline) {
        try {
            const query = `INSERT INTO users (first_name, last_name, email, password, tagline) VALUES ('${first_name}', '${last_name}', '${email}', '${password}', '${tagline}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async login() {
        try{
            const query = `SELECT * FROM users WHERE email = '${this.email}';`;
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password);
            if (!!isValid) {
                const { id, first_name, last_name } = response;
                return { isValid, user_id: id, first_name, last_name };
            } else {
                return { isValid };
            }
        } catch (err) {
            return err.message;
        }
    }
};

module.exports = User;