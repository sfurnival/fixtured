'use strict';

// --
// Dependencies
// --

let Fixate  = require('../index');
let Should  = require('should');

// --
// Fixtures
// --

let Fixtures = {};

// --
// Test
// --

describe('Fixture Tests:', function() {

    // --
    // Suite Setup
    // --

    before(function(done) {
        done();
    });

    // --
    // .Define() Tests
    // --
    
    (() => {
        
        it('> .Define() should define a fixture and return a factory object.', function(done) {
            Fixtures.Foo = Fixate.Fixture.Define('Fixture.Test.1', {
                name   : Fixate.Types.String(10, 20, 'test.1.name'),
                age    : Fixate.Types.Integer(1, 99, 'test.1.age'),
                height : Fixate.Types.Float(4, 7, 'test.1.height'),
                family : {
                    name     : Fixate.Types.String(30, 40, 'test.1.family.name'),
                    siblings : {
                        brother : Fixate.Types.String(50, 60, 'test.1.family.siblings.brother'),
                        sister  : Fixate.Types.String(70, 80, 'test.1.family.siblings.sister')
                    }
                }
            });
            
            Fixtures.Foo.should.be.instanceOf(Fixate.Fixture.FixtureFactory);
            
            Fixtures.Foo.definition.name.type.should.equal('string');
            Fixtures.Foo.definition.name.min.should.equal(10);
            Fixtures.Foo.definition.name.max.should.equal(20);
            Fixtures.Foo.definition.name.unique.should.equal('test.1.name');
            
            Fixtures.Foo.definition.age.type.should.equal('int');
            Fixtures.Foo.definition.age.min.should.equal(1);
            Fixtures.Foo.definition.age.max.should.equal(99);
            Fixtures.Foo.definition.age.unique.should.equal('test.1.age');
            
            Fixtures.Foo.definition.height.type.should.equal('float');
            Fixtures.Foo.definition.height.min.should.equal(4);
            Fixtures.Foo.definition.height.max.should.equal(7);
            Fixtures.Foo.definition.height.unique.should.equal('test.1.height');
            
            Fixtures.Foo.definition.family.name.type.should.equal('string');
            Fixtures.Foo.definition.family.name.min.should.equal(30);
            Fixtures.Foo.definition.family.name.max.should.equal(40);
            Fixtures.Foo.definition.family.name.unique.should.equal('test.1.family.name');
            
            Fixtures.Foo.definition.family.siblings.brother.type.should.equal('string');
            Fixtures.Foo.definition.family.siblings.brother.min.should.equal(50);
            Fixtures.Foo.definition.family.siblings.brother.max.should.equal(60);
            Fixtures.Foo.definition.family.siblings.brother.unique.should.equal('test.1.family.siblings.brother');
            
            Fixtures.Foo.definition.family.siblings.sister.type.should.equal('string');
            Fixtures.Foo.definition.family.siblings.sister.min.should.equal(70);
            Fixtures.Foo.definition.family.siblings.sister.max.should.equal(80);
            Fixtures.Foo.definition.family.siblings.sister.unique.should.equal('test.1.family.siblings.sister');
            
            done();
        });
        
        it('> .Define() should throw an error when redefining a fixture.', function(done) {
            Should.throws(() => {
                Fixate.Fixture.Define('Fixture.Test.1', {
                    name   : Fixate.Types.String(10, 20),
                    age    : Fixate.Types.Integer(1, 99),
                    height : Fixate.Types.Float(4, 7)
                });
            });
            done();
        });
        
    })();
    
    // --
    // .Get() Tests
    // --
    
    (() => {
        
        it('> .Get() should throw an error when fixture type is undefined.', function(done) {
            Should.throws(() => {
                Fixate.Fixture.Get('Scooby Doo');
            });
            done();
        });
        
        it('> .Get() return the proper FixtureFactory.', function(done) {
            (Fixate.Fixture.Get('Fixture.Test.1') === Fixtures.Foo).should.be.true();
            
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