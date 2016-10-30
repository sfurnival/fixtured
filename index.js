'use strict';

// --
// Dependencies
// --

let Config = require('./config.json');

// --
// Module
// --

let Fixated = module.exports = {
    
    Fixture  : require('./lib/fixture'),
    Types    : require('./lib/types'),
    Generate : require('./lib/generators')
    
};