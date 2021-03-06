'use strict';

// --
// Dependencies
// --

let Crypto      = require('crypto');
let SetIfUnique = require('./uniqueness');
let Chance      = require('chance');

Chance = new Chance();

// --
// Module
// --

let Generate = module.exports = {
    
    /**
     * Generates a random integer.
     *
     * @param   {int}   min         - Minimum length
     * @param   {int}   max         - Maximum length
     * @param   {str}   [unique]    - Maximum length
     * @return  {str}               - A random integer
     */
    Integer: (min, max, unique) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        let is_unique = false;
        let result = null;
        
        while (!is_unique) {
            result = Math.floor(Math.random() * (max - min + 1)) + min;
            
            if (unique) {
                is_unique = SetIfUnique(unique, result);
            } else {
                is_unique = true;
            }
        }
        
        return result;
    },
    
    /**
     * Generates a random float.
     *
     * @param   {int}   min         - Minimum length
     * @param   {int}   max         - Maximum length
     * @param   {str}   [unique]    - Maximum length
     * @return  {str}               - A random float
     */
    Float: (min, max, unique) => {
        let is_unique = false;
        let result = null;
        
        while (!is_unique) {
            result = Math.random() * (max - min) + min;
            
            if (unique) {
                is_unique = SetIfUnique(unique, result);
            } else {
                is_unique = true;
            }
        }
        
        return result;
    },
    
    /**
     * Generates a random string.
     *
     * @param   {int}   min         - Minimum length
     * @param   {int}   max         - Maximum length
     * @param   {str}   [unique]    - Maximum length
     * @return  {str}               - A random string
     */
    String: (min, max, unique) => {
        let is_unique = false;
        let result = null;
        
        while (!is_unique) {
            result = Math.random() * (max - min) + min;
            
            if (typeof max == 'undefined') {
                result = Crypto.randomBytes(Math.ceil(min / 2)).toString('hex').substring(0, min);
            } else {
                let length = Generate.Integer(min, max);
                result = Crypto.randomBytes(Math.ceil(length / 2)).toString('hex');
            }
            
            if (unique) {
                is_unique = SetIfUnique(unique, result);
            } else {
                is_unique = true;
            }
        }
        
        return result;
    },
    
    /**
     * Returns one of the provided options.
     *
     * @param   {array}  options     - The Chance generator function
     * @return  {str}                - A random string
     */
    OneOf: (options) => {
        if (!Array.isArray(options)) {
            throw new Error('OneOf options must be an array.');
        }
        
        return options[Math.floor(Math.random() * ((options.length - 1) - 0 + 1)) + 0];
    },
    
    /**
     * Call a Chance.js generator.
     *
     * @param   {str}   func        - The Chance generator function
     * @param   {int}   conf        - Method config
     * @param   {str}   [unique]    - Maximum length
     * @return  {str}               - A random string
     */
    Chance: (func, conf, unique) => {
        let is_unique = false;
        let result = null;
        
        while (!is_unique) {
            if (typeof Chance[func] == 'function') {
                result = Chance[func](conf);
            } else {
                throw new Error(`[${ func }] is not a Chance.js function.`);
            }
            
            if (unique) {
                is_unique = SetIfUnique(unique, result);
            } else {
                is_unique = true;
            }
        }
        
        return result;
    }
    
};

Generate.$ = Generate.Chance;