'use strict'

const db = require('./conn');

class CEOModel {
    constructor(id, name, slug, year) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.year = year;
    }

    static async getAll() {
        const response = await db.any('SELECT * FROM apple_ceos');
        return response;
    }

    //create another static method to get ceo by slug, pass slug as argument
    static async getBySlug(slug) {
        const response = await db.one(`SELECT * FROM apple_ceos WHERE slug = '${slug}';`);
        return response;
    }

    static async addEntry(name, slug, year) {
        const response = await db.result(`INSERT INTO apple_ceos (name, slug, year) VALUES ($1, $2, $3)`, [name, slug, year]); //pg-promise interpolates our insert statement and sanitizes the input
        return response;
    }

    async deleteEntry() {
        const response = await db.result(`DELETE FROM apple_ceos WHERE id=$1`, [this.id]); //instance method - applies to instance id of user
        return response;
    }

}

module.exports = CEOModel;