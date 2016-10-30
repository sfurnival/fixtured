'use strict';

// --
// Dependencies
// --

let SetIfUnique = require('../lib/uniqueness');
let Should      = require('should');

// --
// Test
// --

describe('Uniqueness Tests:', function() {

    // --
    // Suite Setup
    // --

    before(function(done) {
        done();
    });

    // --
    // Tests
    // --
    
    (() => {
        
        it('> Should throw an error when paramer [key] is not a string. Using [Array]', function(done) {
            Should.throws(() => {
                SetIfUnique([], false);
            });
            done();
        });
        
        it('> Should throw an error when paramer [key] is not a string. Using [Object]', function(done) {
            Should.throws(() => {
                SetIfUnique({}, false);
            });
            done();
        });
        
        it('> Should throw an error when paramer [key] is not a string. Using [Number]', function(done) {
            Should.throws(() => {
                SetIfUnique(5, false);
            });
            done();
        });
        
        it('> Should throw an error when paramer [key] is not a string. Using [Boolean]', function(done) {
            Should.throws(() => {
                SetIfUnique(true, false);
            });
            done();
        });
        
        it('> Should return false when trying to set the save key/value twice.', function(done) {
            SetIfUnique('test.5', true);
            SetIfUnique('test.5', true).should.equal(false);
            
            done();
        });
        
        it('> Should return true when trying to set same values of different keys', function(done) {
            for (let i = 1; i <= 10; i++) {
                SetIfUnique(`test.6.${ i }`, true).should.equal(true);
            }
            
            done();
        });
        
        it('> Should do exact object equality.', function(done) {
            let A = { foo: true, bar: false };
            let B = { foo: true, bar: false };
            
            SetIfUnique('test.7', A).should.equal(true);
            SetIfUnique('test.7', B).should.equal(true);
            SetIfUnique('test.7', A).should.equal(false);
            SetIfUnique('test.7', B).should.equal(false);
            
            done();
        });
        
    })();

    // --
    // Suite Teardown
    // --

    after(function(done) {
        done();
    });

});