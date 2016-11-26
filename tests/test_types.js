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
            def.args[2].should.equal('user.name');
            
            done();
        });
        
        it('> String: unique as argument 1 should be corrected.', function(done) {
            let def = Fixate.Types.String(15, 'user.name');
            
            def.type.should.equal('string');
            def.args[0].should.equal(15);
            def.args[1].should.equal(15);
            def.args[2].should.equal('user.name');
            
            done();
        });
    
        it('> String: max & min should default correctly.', function(done) {
            let def = Fixate.Types.String();
            
            def.type.should.equal('string');
            def.args[0].should.equal(Fixate.Types.Defaults.String.Min);
            def.args[1].should.equal(Fixate.Types.Defaults.String.Min);
            
            done();
        });
        
        it('> String: max should default to min when not supplied.', function(done) {
            let def = Fixate.Types.String(128);
            
            def.type.should.equal('string');
            def.args[0].should.equal(128);
            def.args[1].should.equal(128);
            
            done();
        });
        
        it('> String: max & min should be configurable.', function(done) {
            let def = Fixate.Types.String(64, 128);
            
            def.type.should.equal('string');
            def.args[0].should.equal(64);
            def.args[1].should.equal(128);
            
            done();
        });
        
        it('> String: max & min defaults should be configurable.', function(done) {
            Fixate.Types.Defaults.String.Min = 777;
            
            let def = Fixate.Types.String();
            
            def.type.should.equal('string');
            def.args[0].should.equal(777);
            def.args[1].should.equal(777);
            
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
            def.args[2].should.equal('user.id');
            
            done();
        });
        
        it('> Integer: unique as argument 1 should be corrected.', function(done) {
            let def = Fixate.Types.Integer(15, 'user.id');
            
            def.type.should.equal('int');
            def.args[0].should.equal(15);
            def.args[1].should.equal(Fixate.Types.Defaults.Integer.Max);
            def.args[2].should.equal('user.id');
            
            done();
        });
    
        it('> Integer: max & min should default correctly.', function(done) {
            let def = Fixate.Types.Integer();
            
            def.type.should.equal('int');
            def.args[0].should.equal(Fixate.Types.Defaults.Integer.Min);
            def.args[1].should.equal(Fixate.Types.Defaults.Integer.Max);
            
            done();
        });
        
        it('> Integer: max should default properly when not supplied.', function(done) {
            let def = Fixate.Types.Integer(128);
            
            def.type.should.equal('int');
            def.args[0].should.equal(128);
            def.args[1].should.equal(Fixate.Types.Defaults.Integer.Max);
            
            done();
        });
        
        it('> Integer: max & min should be configurable.', function(done) {
            let def = Fixate.Types.Integer(64, 128);
            
            def.type.should.equal('int');
            def.args[0].should.equal(64);
            def.args[1].should.equal(128);
            
            done();
        });
        
        it('> Integer: max & min defaults should be configurable.', function(done) {
            Fixate.Types.Defaults.Integer.Min = 333;
            Fixate.Types.Defaults.Integer.Max = 999;
            
            let def = Fixate.Types.Integer();
            
            def.type.should.equal('int');
            def.args[0].should.equal(333);
            def.args[1].should.equal(999);
            
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
            def.args[2].should.equal('user.height');
            
            done();
        });
        
        it('> Float: unique as argument 1 should be corrected.', function(done) {
            let def = Fixate.Types.Float(15, 'user.height');
            
            def.type.should.equal('float');
            def.args[0].should.equal(15);
            def.args[1].should.equal(Fixate.Types.Defaults.Float.Max);
            def.args[2].should.equal('user.height');
            
            done();
        });
        
        it('> Float: max & min should default correctly.', function(done) {
            let def = Fixate.Types.Float();
            
            def.type.should.equal('float');
            def.args[0].should.equal(Fixate.Types.Defaults.Float.Min);
            def.args[1].should.equal(Fixate.Types.Defaults.Float.Max);
            
            done();
        });
        
        it('> Float: max should default properly when not supplied.', function(done) {
            let def = Fixate.Types.Float(128);
            
            def.type.should.equal('float');
            def.args[0].should.equal(128);
            def.args[1].should.equal(Fixate.Types.Defaults.Float.Max);
            
            done();
        });
        
        it('> Float: max & min should be configurable.', function(done) {
            let def = Fixate.Types.Float(64, 128);
            
            def.type.should.equal('float');
            def.args[0].should.equal(64);
            def.args[1].should.equal(128);
            
            done();
        });
        
        it('> Float: max & min defaults should be configurable.', function(done) {
            Fixate.Types.Defaults.Float.Min = 333;
            Fixate.Types.Defaults.Float.Max = 999;
            
            let def = Fixate.Types.Float();
            
            def.type.should.equal('float');
            def.args[0].should.equal(333);
            def.args[1].should.equal(999);
            
            done();
        });
        
    })();
    
    // --
    // OneOf Tests
    // --
    
    (() => {
        
        it('> OneOf: options should be configurable', function(done) {
            Fixate.Types.OneOf(['a', 'b', 'c']).args.should.containEql(['a', 'b', 'c']);
            
            done();
        });
        
    })();
    
    // --
    // Chance Tests
    // --
    
    (() => {
        
        it('> Chance: options should be configurable', function(done) {
            let type = Fixate.Types.Chance('bool', { likelihood: 30 });
            type.args[0].should.equal('bool');
            type.args[1].should.containEql({ likelihood: 30 });
            
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