'use strict';

// --
// Registry
// --

let _registry = new Map();

// --
// Module
// --

module.exports = (key, value) => {
    if (typeof key != 'string') {
        throw new Error('Parameter [key] must be a string.');
    }
    
    if (
        _registry.has(key) &&
        _registry.get(key).has(value)
    ) {
        return false;
    } else {
        if (!_registry.has(key)) {
            _registry.set(key, new Set());
        }
        _registry.get(key).add(value);
        return true;
    }
};