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
    // Suite Teardown
    // --

    after(function(done) {
        done();
    });

});