'use strict';

let Gulp         = require('gulp');
let Mocha        = require('gulp-mocha');
let Shell        = require('gulp-shell');
let Istanbul     = require('gulp-istanbul');
let GUtil        = require('gulp-util');
let ESLint       = require('gulp-eslint');
let Args         = require('yargs').argv;

// --
// The Tasks
// --

Gulp.task('default', function() {
    GUtil.log(
        '\n\n',
        GUtil.colors.bold.red('Available Commands: \n'),
        '  gulp', GUtil.colors.green('test              '),
        GUtil.colors.grey('  - Run test suites.\n'),
        '  gulp', GUtil.colors.green('test:full         '),
        GUtil.colors.grey('  - Run test suites with full reporting.\n'),
        '  gulp', GUtil.colors.green('test:coverage     '),
        GUtil.colors.grey('  - Run test suites with coverage reports.\n'),
        '  gulp', GUtil.colors.green('jsdoc             '),
        GUtil.colors.grey('  - Generate jsdoc documentation.\n'),
        '  gulp', GUtil.colors.green('eslint            '),
        GUtil.colors.grey('  - Run linting report.\n'),
        '\n'
    );
});

// --
// Testing Stuff
// --

Gulp.task('pre-test', function () {
    return Gulp.src([
        './index.js',
        './lib/*.js'
    ])
    // Covering files
    .pipe(Istanbul({ includeUntested: true }))
    // Force `require` to return covered files
    .pipe(Istanbul.hookRequire());
});

Gulp.task('test', function() {
    return Gulp.src('./tests/*.js', { read: false })
        .pipe(Mocha({ reporter: 'nyan' }));
});

Gulp.task('test:full', function() {
    return Gulp.src('./tests/**/*.js', { read: false })
        .pipe(Mocha());
});

Gulp.task('test:coverage', ['pre-test'], function() {
    return Gulp.src('./tests/**/*.js', { read: false })
        .pipe(Mocha())
        // Creating the reports after tests ran
        .pipe(Istanbul.writeReports({
            dir: './coverage',
            reporters: [
                'lcov', 'json', 'text', 'text-summary'
            ],
            reportOpts: { dir: './coverage' }
        }))
        // Enforce a coverage of at least 90%
        .pipe(Istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

if (Args.file && Args.test) {

    Gulp.task('pre-test-file', function() {
        return Gulp.src(['./' + Args.file])
            .pipe(Istanbul({ includeUntested: true }))
            .pipe(Istanbul.hookRequire());
    });

    Gulp.task('test:coverage:file', ['pre-test-file'], function() {
        return Gulp.src('./tests/' + Args.test, { read: false })
            .pipe(Mocha())
            // Creating the reports after tests ran
            .pipe(Istanbul.writeReports({
                dir: './coverage',
                reporters: [
                    'lcov', 'json', 'text', 'text-summary'
                ],
                reportOpts: { dir: './coverage' }
            }))
            // Enforce a coverage of at least 90%
            .pipe(Istanbul.enforceThresholds({ thresholds: { global: 98 } }));
    });
}

// --
// Documentation
// --

Gulp.task('jsdoc', Shell.task([
    './node_modules/.bin/jsdoc -t ./node_modules/ink-docstrap/template -c ./docs/jsdoc_conf.json -r'
]));

// --
// Linting
// --

Gulp.task('eslint', function () {
    return Gulp.src([
        './index.js',
        './gulpfile.js',
        './lib/**/*.js',
        './tests/**/*.js'
    ])
        // Covering files
        .pipe(ESLint({  }))
        // Force `require` to return covered files
        .pipe(ESLint.format());
});
