# Fixtured

[![Build Status](https://travis-ci.org/sfurnival/fixtured.svg?branch=release/1.0)](https://travis-ci.org/sfurnival/fixtured)
[![Coverage Status](https://coveralls.io/repos/sfurnival/fixtured/badge.svg?branch=release/1.0)](https://coveralls.io/r/sfurnival/fixtured?branch=release/1.0)
[![npm version](https://badge.fury.io/js/fixtured.svg)](https://badge.fury.io/js/fixtured)

A library for easily creating and managing dynamic test data.

### Installation

**Latest release:**
```bash
$ npm install fixtured
```
**Master branch:**
```bash
$ npm install http://github.com/sfurnival/fixtured/master
```

### Usage
**Creating Values**

```javascript
let Fixtured = require('fixtured');
  
let user = {
    // Generate an int between 1 & 9999, and make sure
    // it's unique among all other 'user.id' values.
    id: Fixtured.Generate.Integer(1, 9999, 'user.id'),
        
    // Generate a string of exactly length 15.
    fname: Fixtured.Generate.String(15),
        
    // Generate a string with a minimum length of 5 and
    // a maximum length of 15.
    lname: Fixtured.Generate.String(5, 15),
        
    // Generate an int between 1 & 100
    age: Fixtured.Generate.Integer(1, 100),
        
    // Generate some fake lat/long values.
    latitude: Fixtured.Generate.Float(-90, 90),
    longitude: Fixtured.Generate.Float(-180, 180),
    
    // Use a Chance.js function
    email: Fixtured.Generate.$('email', { domain: 'test.com'});
};
```
  
**Defining Templates**

```javascript
let Fixtured = require('fixtured');
  
/**
 * Let's define a template for a 'User' type fixture. We'll
 * define the id as unique, so that each time we stamp out a
 * new instance, the id will be unique.
 */
let Users = Fixtured.Fixture.Define('User', {
    // Uniqueness extends across all fixture templates, as well
    // as anything generated using a Fixtured.Generate function.
    id: Fixtured.Types.Integer(1, 9999, 'user.id'),  // Unique
        
    // Define some typical fields that we want to change in
    // each instance.
    fname: Fixtured.Types.String(2, 15),
    lname: Fixtured.Types.String(2, 15),
    age: Fixtured.Types.Integer(1, 100),
    latitude: Fixtured.Types.Float(-90, 90),
    longitude: Fixtured.Types.Float(-180, 180),
    
    // Define static values for things you want every stamped
    // copy to have.
    category: 'sports',
    rating: 4.20,
    
    // Use a Chance.js function
    bio: Fixtured.Type.$('paragraph', { sentences: 3 });
  
    // We can also supply a function:
    email: () => {
        return `${ Fixtured.Generate.String(10, 10, 'user.email') }@test.com`;
    }
});

/**
 * Now we'll stamp out a couple users for us to work with
 * in our tests.
 */

let user_1 = Users.stamp();
>> {
>>     id: 5706,
>>     fname: 'cfbb',
>>     lname: 'a10c',
>>     age: 35,
>>     latitude: 54.235359826125205,
>>     longitude: 12.592912316322327,
>>     category: 'sports',
>>     rating: 4.20,
>>     email: 'fc5912ddfa@test.com'
>> }

let user_2 = Users.stamp();
>> {
>>     id: 192,
>>     fname: 'bfc0123',
>>     lname: '7ffc0eea',
>>     age: 12,
>>     latitude: -27.685429360717535,
>>     longitude: -146.5287543553859,
>>     category: 'sports',
>>     rating: 4.20,
>>     email: 'd99efcc34a@test.com'
>> }

/**
 * Now let's create a whole bunch of users to work with.
 */

let team = Users.multi(10); // Array of 10 users

/**
 * Now we'll create some more, but we'll key each one so
 * that we can access it later.
 */

let positions = [
    'Goaltender', 'Center', 'Left Wing', 'Right Wing',
    'Left Defence', 'Right Defence'
];

let players = Users.map(positions);
>> {
>>     "Goaltender": { ... },
>>     "Center": { ... },
>>     "Left Wing": { ... },
>>     "Right Wing": { ... },
>>     "Left Defence": { ... },
>>     "Right Defence": { ... }
>> }

/**
 * Now we can also retrieve each user by their key.
 */

let goaltender = Users.get('Goaltender');

/**
 * Don't care which user you work with for a test?
 */
 
let player = Users.any(); // Some random keyed User fixture

/**
 * ... or get a bunch of random Users
 */
 
let all_stars = Users.any(5); // Array of 5 random keyed Users
```
