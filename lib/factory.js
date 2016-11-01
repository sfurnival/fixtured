'use strict';

// --
// Dependencies
// --

let Generate       = require('./generators');
let SetIfUnique    = require('./uniqueness');
let TypeDefinition = require('./types').TypeDefinition;

// --
// Helpers
// --

/**
 * Generates a value for a TypeDefinition
 *
 * @param   {obj}   def     - A TypeDefinition
 * @return  {mixed}         - The generated value.
 */
let _generate = (def) => {
    switch (def.type) {
        case 'string':
            return Generate.String(def.min, def.max, def.unique);

        case 'int':
            return Generate.Integer(def.min, def.max, def.unique);

        case 'float':
            return Generate.Float(def.min, def.max, def.unique);

        /* istanbul ignore next */
        default:
            throw new Error(`Generation encountered an unknown type [${ def.type }].`);
    }
};

/**
 * Generates a value for a TypeDefinition
 *
 * @param   {obj}   obj         - An object of TypeDefinitions
 * @param   {obj}   [target]    - The target to apply values to.
 * @return  {obj}               - The generated values object.
 */
let _crawl = (obj, target) => {
    /* istanbul ignore else */
    if (typeof target == 'undefined') {
        target = {};
    }

    for (let i in obj) {
        if (obj[i] instanceof TypeDefinition) {
            target[i] = _generate(obj[i]);
        } else if (typeof obj[i] == 'object') {
            target[i] = _crawl(obj[i], target[i]);
        } else if (typeof obj[i] == 'function') {
            target[i] = obj[i]();
        } else {
            target[i] = obj[i];
        }
    }

    return target;
};

/**
 * Shuffle an array to randomize it.
 *
 * @param   {array}    array    - An array to shuffle.
 * @return  {array}             - The shuffled array.
 */
let _shuffle = (array) => {
    let current = array.length, temp, random;

    while (current !== 0) {
        random = Math.floor(Math.random() * current);
        current -= 1;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }

    return array;
};

// --
// Module
// --

/**
 * Constructor
 *
 * @constructor
 * @param   {obj}   def     - Fixture definition
 * @return  {null}          - Null
 */
let FixtureFactory = function(def) {
    this.definition = def;
    this._registry = new Map();
};

FixtureFactory.prototype = {

    /**
     * Stamp out a new instance of the fixture.
     *
     * @param   {mixed}     id      - ID for the copy to by known by.
     * @return  {obj}               - The fixture
     */
    stamp: function(id) {
        let copy = _crawl(this.definition);
        if (id) {
            this._registry.set(id, copy);
        }
        return copy;
    },

    /**
     * Stamp out a new instance of the fixture for each
     * id in the provided array.
     *
     * @param   {array}     keys    - Array of ID for the created instances
     * @return  {obj}               - The fixture
     */
    map: function(keys) {
        let that = this;
        let results = {};

        keys.forEach(key => {
            results[key] = _crawl(that.definition);
            that._registry.set(key, results[key]);
        });

        return results;
    },

    /**
     * Stamp out multiple new instances of the fixture.
     *
     * @param   {int}     num    - Number of instances to create.
     * @return  {obj}            - The fixture
     */
    multi: function(num) {
        let that = this;
        let results = [];

        for (let i = 1; i <= num; i++) {
            results.push(_crawl(that.definition));
        }

        return results;
    },

    /**
     * Retrieves a previously generated fixture
     * copy.
     *
     * @param   {mixed}     id      - ID for the copy to by known by.
     * @return  {mixed}             - The desired fixture copy.
     */
    get: function(id) {
        return this._registry.get(id);
    },

    /**
     * Retrieves a random number of previously
     * generated keyed fixtures.
     *
     * @param   {mixed}     amount  - Number of fixtures to retrieve.
     * @return  {mixed}             - The desired fixture copy.
     */
    any: function(amount) {
        amount = amount || 1;

        let results = [];
        let keys = _shuffle(Array.from(this._registry.keys()));

        for (let i = 0; i < amount; i++) {
            results.push(this._registry.get(keys[i]));
        }

        if (amount == 1) {
            return results[0];
        } else {
            return results;
        }
    }

};

module.exports = FixtureFactory;