'use strict';

// --
// Dependencies
// --

let Fixtured  = require('../index');
let Should  = require('should');

// --
// Fixtures
// --

let Fixtures = {};

// --
// Test
// --

describe('FixtureFactory Tests:', function() {

    // --
    // Suite Setup
    // --

    before(function(done) {
        done();
    });

    // --
    // .stamp() Tests
    // --

    (() => {

        it('> .stamp() should generate correct values and structure.', function(done) {
            Fixtures.Test1 = Fixtured.Fixture.Define('Factory.Test.1', {
                name   : Fixtured.Types.String(10, 20),
                age    : Fixtured.Types.Integer(1, 99),
                height : Fixtured.Types.Float(4, 7),
                group  : Fixtured.Types.$('bool'),
                status : Fixtured.Types.OneOf(['ACTIVE', 'INACTIVE']),
                family : {
                    name     : Fixtured.Types.String(30, 40),
                    siblings : {
                        brother : Fixtured.Types.String(50, 60),
                        sister  : Fixtured.Types.String(70, 80)
                    }
                },
                meta_a : 'A static string',
                type   : 23,
                rating : 4.20,
                email  : () => { return `${ Fixtured.Generate.String(10, 10, 'email') }@test.com`; }
            });

            let instance = Fixtures.Test1.stamp();

            instance.name.should.be.type('string');
            instance.name.length.should.be.aboveOrEqual(10);
            instance.name.length.should.be.belowOrEqual(20);

            instance.age.should.be.type('number');
            instance.age.should.be.aboveOrEqual(1);
            instance.age.should.be.belowOrEqual(99);

            instance.height.should.be.type('number');
            instance.height.should.be.aboveOrEqual(4);
            instance.height.should.be.belowOrEqual(7);

            instance.family.name.should.be.type('string');
            instance.family.name.length.should.be.aboveOrEqual(30);
            instance.family.name.length.should.be.belowOrEqual(40);

            instance.family.name.should.be.type('string');
            instance.family.siblings.brother.length.should.be.aboveOrEqual(50);
            instance.family.siblings.brother.length.should.be.belowOrEqual(60);

            instance.family.name.should.be.type('string');
            instance.family.siblings.sister.length.should.be.aboveOrEqual(70);
            instance.family.siblings.sister.length.should.be.belowOrEqual(80);

            instance.meta_a.should.be.type('string');
            instance.meta_a.should.equal('A static string');

            instance.type.should.be.type('number');
            instance.type.should.equal(23);

            instance.rating.should.be.type('number');
            instance.rating.should.equal(4.20);

            instance.email.should.be.type('string');
            instance.email.indexOf('@test.com').should.equal(10);

            done();
        });

        it('> .stamp() should properly generate unique fields on each stamp.', function(done) {
            this.timeout(5 * 1000);

            // A unique field with only 1000 slots
            Fixtures.Test2 = Fixtured.Fixture.Define('Factory.Test.2', {
                id     : Fixtured.Types.Integer(1, 1001, 'user.id'),
                name   : Fixtured.Types.String(10, 20),
                age    : Fixtured.Types.Integer(1, 99),
                height : Fixtured.Types.Float(4, 7)
            });

            // Generate 1000 versions
            let index = {};
            for (let i = 0; i < 1000; i++) {
                let copy = Fixtures.Test2.stamp();
                index[copy.id] = true;
            }

            Object.keys(index).length.should.equal(1000);
            done();
        });

    })();

    // --
    // .multi() Tests
    // --

    (() => {

        it('> .multi() should return a given number of newly created fixtures.', function(done) {
            Fixtures.Test3 = Fixtured.Fixture.Define('Factory.Test.3', {
                legs     : Fixtured.Types.Integer(1, 8),
                arms     : Fixtured.Types.Integer(1, 4),
                heads    : Fixtured.Types.Integer(1, 3),
                fingers  : Fixtured.Types.Integer(6, 16)
            });

            let stamps = Fixtures.Test3.multi(7);
            stamps.length.should.equal(7);

            done();
        });

    })();

    // --
    // .get() Tests
    // --

    (() => {

        it('> .get() should properly retrieve previously generated fixtures.', function(done) {
            Fixtures.Test4 = Fixtured.Fixture.Define('Factory.Test.4', {
                id     : Fixtured.Types.Integer(1, 999999, 'user.id'),
                name   : Fixtured.Types.String(10, 20),
                age    : Fixtured.Types.Integer(1, 99),
                height : Fixtured.Types.Float(4, 7)
            });

            // Generate 1000 versions
            let index = {};
            for (let i = 1; i <= 1000; i++) {
                index[i] = Fixtures.Test4.stamp(i);
            }
            for (let i = 1; i <= 1000; i++) {
                (Fixtures.Test4.get(i) === index[i]).should.be.true();
            }

            done();
        });

    })();

    // --
    // .set() Tests
    // --

    (() => {

        it('> .set() should properly store a fixture.', function(done) {
            let foo = Fixtures.Test4.stamp();
            Fixtures.Test4.set('foo', foo);

            (Fixtures.Test4.get('foo') === foo).should.be.true();

            done();
        });

    })();

    // --
    // .any() Tests
    // --

    (() => {

        it('> .any() should return a random previsouly created fixture of that type.', function(done) {
            let stamp = Fixtures.Test4.any();
            stamp.should.have.property('id');
            stamp.should.have.property('name');
            stamp.should.have.property('age');
            stamp.should.have.property('height');
            done();
        });

        it('> .any() should return an array of random previsouly created fixtures of that type.', function(done) {
            let stamps = Fixtures.Test4.any(5);
            stamps.length.should.equal(5);

            stamps.forEach(stamp => {
                stamp.should.have.property('id');
                stamp.should.have.property('name');
                stamp.should.have.property('age');
                stamp.should.have.property('height');
            });

            done();
        });

    })();

    // --
    // .map() Tests
    // --

    (() => {

        it('> .any() should return a random previsouly created fixture of that type.', function(done) {
            let stamps = Fixtures.Test4.map([
                'map.1', 'map.2', 'map.3', 'map.4', 'map.5', 'map.6'
            ]);

            Object.keys(stamps).length.should.equal(6);

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