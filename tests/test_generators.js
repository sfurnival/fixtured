'use strict';

// --
// Dependencies
// --

let Fixate  = require('../index');
let Should  = require('should');

// --
// Test
// --

describe('Generator Tests:', function() {

    // --
    // Suite Setup
    // --

    before(function(done) {
        done();
    });

    // --
    // .Integer() Tests
    // --
    
    (() => {
        
        it('> .Integer() should return a random integer of desired value range. [1-10]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(1, 10);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(1);
                val.should.be.belowOrEqual(10);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a random integer of desired value range. [1-1000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(1, 1000);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(1);
                val.should.be.belowOrEqual(1000);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a random integer of desired value range. [1 to 100000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(1, 100000);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(1);
                val.should.be.belowOrEqual(100000);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a random integer of desired value range. [1 to 100000000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(1, 100000000);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(1);
                val.should.be.belowOrEqual(100000000);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a random integer of desired value range. [-100000 to 100000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(-100000, 100000);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-100000);
                val.should.be.belowOrEqual(100000);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a random integer of desired value range. [-100000000 to -1]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(-100000000, -1);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-100000000);
                val.should.be.belowOrEqual(-1);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a random integer of desired value range. [-100000 to -1]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(-100000, -1);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-100000);
                val.should.be.belowOrEqual(-1);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a random integer of desired value range. [-1000 to -1]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(-1000, -1);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-1000);
                val.should.be.belowOrEqual(-1);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a random integer of desired value range. [-10 to -1]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Integer(-10, -1);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-10);
                val.should.be.belowOrEqual(-1);
                parseInt(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Integer() should return a unique integer when unique key supplied', function(done) {
            this.timeout(10 * 1000);
            
            let index = {};
            for (let i = 1; i <= 50000; i++) {
                let val = Fixate.Generate.Integer(1, 50000, 'int.unique.test');
                index[val] = true;
            }
            
            Object.keys(index).length.should.equal(50000);
            
            done();
        });
        
    })();
    
    // --
    // .Float() Tests
    // --
    
    (() => {
        
        it('> .Float() should return a random float of desired value range. [1-10]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(1, 10);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(1);
                val.should.be.belowOrEqual(10);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a random float of desired value range. [1-1000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(1, 1000);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(1);
                val.should.be.belowOrEqual(1000);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a random float of desired value range. [1 to 100000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(1, 100000);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(1);
                val.should.be.belowOrEqual(100000);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a random float of desired value range. [1 to 100000000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(1, 100000000);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(1);
                val.should.be.belowOrEqual(100000000);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a random float of desired value range. [-100000 to 100000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(-100000, 100000);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-100000);
                val.should.be.belowOrEqual(100000);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a random float of desired value range. [-100000000 to -1]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(-100000000, -1);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-100000000);
                val.should.be.belowOrEqual(-1);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a random float of desired value range. [-100000 to -1]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(-100000, -1);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-100000);
                val.should.be.belowOrEqual(-1);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a random float of desired value range. [-1000 to -1]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(-1000, -1);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-1000);
                val.should.be.belowOrEqual(-1);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a random float of desired value range. [-10 to -1]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.Float(-10, -1);
                val.should.be.type('number');
                val.should.be.aboveOrEqual(-10);
                val.should.be.belowOrEqual(-1);
                parseFloat(val).should.be.exactly(val);
            }
            
            done();
        });
        
        it('> .Float() should return a unique float when unique key supplied', function(done) {
            this.timeout(10 * 1000);
            
            let index = {};
            for (let i = 1; i <= 50000; i++) {
                let val = Fixate.Generate.Float(1, 50000, 'float.unique.test');
                index[val] = true;
            }
            
            Object.keys(index).length.should.equal(50000);
            
            done();
        });
        
    })();
    
    // --
    // .String() Tests
    // --
    
    (() => {
        
        it('> .String() should return a string of desired length. [1]', function(done) {
            let val = Fixate.Generate.String(1);
                
            val.should.be.type('string');
            val.length.should.equal(1);
            
            done();
        });
        
        it('> .String() should return a string of desired length. [32]', function(done) {
            let val = Fixate.Generate.String(32);
                
            val.should.be.type('string');
            val.length.should.equal(32);
            
            done();
        });
        
        it('> .String() should return a string of desired length. [128]', function(done) {
            let val = Fixate.Generate.String(128);
                
            val.should.be.type('string');
            val.length.should.equal(128);
            
            done();
        });
        
        it('> .String() should return a string of desired length. [1024]', function(done) {
            let val = Fixate.Generate.String(1024);
                
            val.should.be.type('string');
            val.length.should.equal(1024);
            
            done();
        });
        
        it('> .String() should return a string of desired length. [1024000]', function(done) {
            let val = Fixate.Generate.String(1024000);
                
            val.should.be.type('string');
            val.length.should.equal(1024000);
            
            done();
        });
        
        it('> .String() should return a string of appropriate length range. [1 to 100]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.String(1, 100);
                
                val.should.be.type('string');
                val.length.should.be.aboveOrEqual(1);
                val.length.should.be.belowOrEqual(100);
            }
            
            done();
        });
        
        it('> .String() should return a string of appropriate length range. [100 to 1000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.String(100, 1000);
                
                val.should.be.type('string');
                val.length.should.be.aboveOrEqual(100);
                val.length.should.be.belowOrEqual(1000);
            }
            
            done();
        });
        
        it('> .String() should return a string of appropriate length range. [1000 to 10000]', function(done) {
            for (let i = 0; i < 500; i++) {
                let val = Fixate.Generate.String(1000, 10000);
                
                val.should.be.type('string');
                val.length.should.be.aboveOrEqual(1000);
                val.length.should.be.belowOrEqual(10000);
            }
            
            done();
        });
        
        it('> .String() should return a unique string when unique key supplied', function(done) {
            this.timeout(10 * 1000);
            
            let index = {};
            for (let i = 1; i <= 50000; i++) {
                let val = Fixate.Generate.String(1, 50, 'str.unique.test');
                index[val] = true;
            }
            
            Object.keys(index).length.should.equal(50000);
            
            done();
        });
        
    })();
    
    // --
    // Chance.js Tests
    // --
    
    (() => {
        
        it('> .Chance() should run the appropriate Chance.js function (bool)', function(done) {
            for (let x = 1; x <= 10; x++) {
                Fixate.Generate.$('bool').should.be.type('boolean');
            }
            
            done();
        });
        
        it('> .Chance() should run the appropriate Chance.js function with configuration (character)', function(done) {
            for (let x = 1; x <= 10; x++) {
                Fixate.Generate.$('character', { pool: 't' }).should.equal('t');
            }
            for (let x = 1; x <= 10; x++) {
                Fixate.Generate.$('character', { pool: 'k' }).should.equal('k');
            }
            
            done();
        });
        
        it('> .Chance() should run the appropriate Chance.js function and honor uniqueness (character)', function(done) {
            let a = Fixate.Generate.$('character', { pool: 'ab' }, 'character');
            let b = Fixate.Generate.$('character', { pool: 'ab' }, 'character').should.not.equal(a);
            let c = Fixate.Generate.$('character', { pool: 'abc' }, 'character').should.equal('c');
            let d = Fixate.Generate.$('character', { pool: 'abcd' }, 'character').should.equal('d');
            let e = Fixate.Generate.$('character', { pool: 'abcde' }, 'character').should.equal('e');
            let f = Fixate.Generate.$('character', { pool: 'abcdef' }, 'character').should.equal('f');
            let g = Fixate.Generate.$('character', { pool: 'abcdefg' }, 'character').should.equal('g');
            let h = Fixate.Generate.$('character', { pool: 'abcdefgh' }, 'character').should.equal('h');
            
            done();
        });
        
        it('> .Chance() should throw an error when the function doesn\'t exist', function(done) {
            Should.throws(() => {
                Fixate.Generate.$('not_a_function', { pool: 'k' });
                done(new Error('Chance() should have thrown an error.'));
            });
            done();
        });
        
    })();
    
    (() => {
        
        it('> .OneOf should return one of the available options', function(done) {
            for (let x = 1; x <= 50; x++) {
                ['A', false, true, 0, 1, 2.0, {}].should.containEql(
                    Fixate.Generate.OneOf(['A', false, true, 0, 1, 2.0, {}])
                );
            }
            
            done();
        });
        
        it('> .OneOf() should throw an error when not given an array', function(done) {
            Should.throws(() => {
                Fixate.Generate.OneOf({ foo: 'bar' });
                done(new Error('OneOf() should have thrown an error.'));
            });
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