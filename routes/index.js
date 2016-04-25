/*
 * Create a router for manage all url query entered by the client
 * It use the router of express and uses separate files in the same folder
 * for bind all the routes
 */
const router    = require('express').Router();
const auth      = require('../libs/auth');
const meetings  = require('./meetings');
const users     = require('./users');

// Auth Middelware to protect sensitive routes with jwt and/or id user
// Some routes are not protected (see libs/jwt)
auth(router);

// Bind all the routes specified in meetings.js
meetings(router);

// Bind all the routes specified in users.js
users(router);

module.exports = router;
