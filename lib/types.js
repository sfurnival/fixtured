'use strict';

// --
// Dependencies
// --

let Crypto      = require('crypto');
let Defaults    = require('../config');

// --
// Helpers
// --

/**
 * Correct the Arguments of the Type definer
 * functions.
 *
 * @param   {int}   [min]       - Minimum value
 * @param   {int}   [max]       - Maximum value
 * @param   {str}   [unique]    - Unique Key
 * @return  {null}              - Null
 */
let _correct_args = (min, max, unique) => {
    let fixed = [];
    
    switch (true) {
        case (
            typeof unique == 'undefined' &&
            typeof max == 'undefined' &&
            typeof min == 'string'
        ):
            fixed = [null, null, min];
            break;
            
        case (
            typeof unique == 'undefined' &&
            typeof max == 'string'
        ):
            fixed = [min, null, max];
            break;
            
        default:
            fixed = [min, max, unique];
            break;
    }
    
    return fixed;
};

/**
 * A Class/Type used to define fixture types.
 *
 * @constructor
 *
 * @param   {str}   [type]      - Definition type
 * @param   {array} [args]      - Generator arguments
 * @return  {null}              - Null
 */
let TypeDefinition = function(type, args) {
    this.type = type;
    this.args = args;
};

// --
// Module
// --

let Types = module.exports = {
    
    TypeDefinition: TypeDefinition,
    
    Defaults: Defaults,
    
    /**
     * Defines a random integer value.
     *
     * @param   {int}   [min]       - Minimum value
     * @param   {int}   [max]       - Maximum value
     * @param   {bool}  [unique]    - Maximum value
     * @return  {obj}               - Type definition
     */
    Integer: (min, max, unique) => {
        let args = _correct_args(min, max, unique);
        min = args[0];
        max = args[1];
        unique = args[2];
        
        min = min || Defaults.Integer.Min;
        max = max || Defaults.Integer.Max;
        
        if (min > max) {
            throw new Error('Integer definitions must have a larger max then min param.');
        }
    
        return new TypeDefinition('int', [min, max, unique]);
    },
    
    /**
     * Defines a random string value.
     *
     * @param   {int}   [min]       - Minimum value
     * @param   {int}   [max]       - Maximum value
     * @param   {bool}  [unique]    - Maximum value
     * @return  {obj}               - Type definition
     */
    String: (min, max, unique) => {
        let args = _correct_args(min, max, unique);
        min = args[0];
        max = args[1];
        unique = args[2];
        
        min = min || Defaults.String.Min;
        max = max || min;
        
        if (min > max) {
            throw new Error('String definitions must have a larger max then min param.');
        }
        
        return new TypeDefinition('string', [min, max, unique]);
    },
    
    /**
     * Defines a random float value.
     *
     * @param   {int}   [min]       - Minimum value
     * @param   {int}   [max]       - Maximum value
     * @param   {bool}  [unique]    - Maximum value
     * @return  {obj}               - Type definition
     */
    Float: (min, max, unique) => {
        let args = _correct_args(min, max, unique);
        min = args[0];
        max = args[1];
        unique = args[2];
        
        min = min || Defaults.Float.Min;
        max = max || Defaults.Float.Max;
        
        if (min > max) {
            throw new Error('Float definitions must have a larger max then min param.');
        }
        
        return new TypeDefinition('float', [min, max, unique]);
    },
    
    /**
     * Define a value from Chance.js
     *
     * @param   {func}      func        - Chance.js function
     * @param   {obj}       options     - Chance.js func options
     * @param   {bool}      [unique]    - Unique key
     * @return  {obj}                   - Type definition
     */
    Chance: (func, options, unique) => {
        return new TypeDefinition('chance', [func, options, unique]);
    },
    
    /**
     * Define a choice of one of the options.
     *
     * @param   {array}     options     - Options to pick from
     * @return  {obj}                   - Type definition
     */
    OneOf: (options) => {
        return new TypeDefinition('oneof', [options]);
    }
    
};

Types.$ = Types.Chance;
