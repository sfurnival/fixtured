'use strict';

// --
// Dependencies
// --

let Fixate  = require('../index');
let Should  = require('should');

// --
// Test
// --

describe('Type Tests:', function() {

    // --
    // Suite Setup
    // --

    before(function(done) {
        done();
    });

    // --
    // String Tests
    // --
    
    (() => {
        
        it('> String: should throw an error when min > max', function(done) {
            Should.throws(() => {
                Fixate.Types.String(9, 1);
            });
            done();
        });
        
        it('> String: unique as argument 0 should be corrected.', function(done) {
            let def = Fixate.Types.String('user.name');
            
            def.type.should.equal('string');
            def.unique.should.equal('user.name');
            
            done();
        });
        
        it('> String: unique as argument 1 should be corrected.', function(done) {
            let def = Fixate.Types.String(15, 'user.name');
            
            def.type.should.equal('string');
            def.min.should.equal(15);
            def.max.should.equal(15);
            def.unique.should.equal('user.name');
            
            done();
        });
    
        it('> String: max & min should default correctly.', function(done) {
            let def = Fixate.Types.String();
            
            def.type.should.equal('string');
            def.min.should.equal(Fixate.Types.Defaults.String.Min);
            def.max.should.equal(Fixate.Types.Defaults.String.Min);
            
            done();
        });
        
        it('> String: max should default to min when not supplied.', function(done) {
            let def = Fixate.Types.String(128);
            
            def.type.should.equal('string');
            def.min.should.equal(128);
            def.max.should.equal(128);
            
            done();
        });
        
        it('> String: max & min should be configurable.', function(done) {
            let def = Fixate.Types.String(64, 128);
            
            def.type.should.equal('string');
            def.min.should.equal(64);
            def.max.should.equal(128);
            
            done();
        });
        
        it('> String: max & min defaults should be configurable.', function(done) {
            Fixate.Types.Defaults.String.Min = 777;
            
            let def = Fixate.Types.String();
            
            def.type.should.equal('string');
            def.min.should.equal(777);
            def.max.should.equal(777);
            
            done();
        });
        
    })();
    
    // --
    // Integer Tests
    // --
    
    (() => {
        
        it('> Integer: should throw an error when min > max', function(done) {
            Should.throws(() => {
                Fixate.Types.Integer(9, 1);
            });
            done();
        });
        
        it('> Integer: unique as argument 0 should be corrected.', function(done) {
            let def = Fixate.Types.Integer('user.id');
            
            def.type.should.equal('int');
            def.unique.should.equal('user.id');
            
            done();
        });
        
        it('> Integer: unique as argument 1 should be corrected.', function(done) {
            let def = Fixate.Types.Integer(15, 'user.id');
            
            def.type.should.equal('int');
            def.min.should.equal(15);
            def.max.should.equal(Fixate.Types.Defaults.Integer.Max);
            def.unique.should.equal('user.id');
            
            done();
        });
    
        it('> Integer: max & min should default correctly.', function(done) {
            let def = Fixate.Types.Integer();
            
            def.type.should.equal('int');
            def.min.should.equal(Fixate.Types.Defaults.Integer.Min);
            def.max.should.equal(Fixate.Types.Defaults.Integer.Max);
            
            done();
        });
        
        it('> Integer: max should default properly when not supplied.', function(done) {
            let def = Fixate.Types.Integer(128);
            
            def.type.should.equal('int');
            def.min.should.equal(128);
            def.max.should.equal(Fixate.Types.Defaults.Integer.Max);
            
            done();
        });
        
        it('> Integer: max & min should be configurable.', function(done) {
            let def = Fixate.Types.Integer(64, 128);
            
            def.type.should.equal('int');
            def.min.should.equal(64);
            def.max.should.equal(128);
            
            done();
        });
        
        it('> Integer: max & min defaults should be configurable.', function(done) {
            Fixate.Types.Defaults.Integer.Min = 333;
            Fixate.Types.Defaults.Integer.Max = 999;
            
            let def = Fixate.Types.Integer();
            
            def.type.should.equal('int');
            def.min.should.equal(333);
            def.max.should.equal(999);
            
            done();
        });
        
    })();

    // --
    // Float Tests
    // --
    
    (() => {
        
        it('> Float: should throw an error when min > max', function(done) {
            Should.throws(() => {
                Fixate.Types.Float(9, 1);
            });
            done();
        });
        
        it('> Float: unique as argument 0 should be corrected.', function(done) {
            let def = Fixate.Types.Float('user.height');
            
            def.type.should.equal('float');
            def.unique.should.equal('user.height');
            
            done();
        });
        
        it('> Float: unique as argument 1 should be corrected.', function(done) {
            let def = Fixate.Types.Float(15, 'user.height');
            
            def.type.should.equal('float');
            def.min.should.equal(15);
            def.max.should.equal(Fixate.Types.Defaults.Float.Max);
            def.unique.should.equal('user.height');
            
            done();
        });
        
        it('> Float: max & min should default correctly.', function(done) {
            let def = Fixate.Types.Float();
            
            def.type.should.equal('float');
            def.min.should.equal(Fixate.Types.Defaults.Float.Min);
            def.max.should.equal(Fixate.Types.Defaults.Float.Max);
            
            done();
        });
        
        it('> Float: max should default properly when not supplied.', function(done) {
            let def = Fixate.Types.Float(128);
            
            def.type.should.equal('float');
            def.min.should.equal(128);
            def.max.should.equal(Fixate.Types.Defaults.Float.Max);
            
            done();
        });
        
        it('> Float: max & min should be configurable.', function(done) {
            let def = Fixate.Types.Float(64, 128);
            
            def.type.should.equal('float');
            def.min.should.equal(64);
            def.max.should.equal(128);
            
            done();
        });
        
        it('> Float: max & min defaults should be configurable.', function(done) {
            Fixate.Types.Defaults.Float.Min = 333;
            Fixate.Types.Defaults.Float.Max = 999;
            
            let def = Fixate.Types.Float();
            
            def.type.should.equal('float');
            def.min.should.equal(333);
            def.max.should.equal(999);
            
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