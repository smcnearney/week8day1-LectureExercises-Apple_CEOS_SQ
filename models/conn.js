'use strict'

// defines each option we'll need on lins 14-16
const host = 'localhost', 
    database = 'apple_ceos',
    user = 'postgres';

const pgp = require('pg-promise')({ // instantiate pgp
    query: function (event) {
        console.log('QUERY:', event.query);
    }
});

const options = { // create options
    host, // same as host: host etc.
    database,
    user
}

const db = pgp(options); // pass pgp options

module.exports = db; // gives us access to our db object so we can make requests to our database