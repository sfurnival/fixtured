'use strict';

// --
// Dependencies
// --

let FixtureFactory = require('./factory');
let Generate       = require('./generators');

// --
// Private Stuff
// --

/**
 * Registry of Fixture Definitions
 */
let _registry = new Map();

// --
// Module
// --

module.exports = {
    
    FixtureFactory: FixtureFactory,
    
    /**
     * Defines a new fixture type.
     *
     * @param   {str}     name      - Name of the fixture
     * @param   {obj}     struct    - Structure definition
     * @return  {obj}               - Null
     */
    Define: (name, struct) => {
        if (_registry.has(name)) {
            throw new Error(`Can't redefine fixture type [${ name }].`);
        } else {
            _registry.set(name, new FixtureFactory(struct));
        }
        
        return _registry.get(name);
    },
    
    /**
     * Retrieve a FixtureFactory from the registry.
     *
     * @param   {str}   name        - Name of the FixtureFactory
     * @return  {FixtureFactory}    - The requested FixtureFactory
     */
    Get: (name) => {
        if (_registry.has(name)) {
            return _registry.get(name);
        } else {
            throw new Error(`No fixture type [${ name }] has been defined.`);
        }
    }
    
};