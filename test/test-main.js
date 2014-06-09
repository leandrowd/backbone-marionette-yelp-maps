/* jshint camelcase:false */

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/\/base\/test\/.*(?:Spec|-spec|\.spec)\.js/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/scripts/',
    paths: {
        underscore: '../node_modules/underscore/underscore',
        jquery: '../node_modules/jquery/dist/jquery',
        backbone: '../node_modules/backbone/backbone',
        marionette: '../node_modules/backbone.marionette/lib/backbone.marionette'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery']
        },
        marionette: {
            deps: ['underscore', 'jquery', 'backbone'],
            exports: 'Marionette'
        }
    },
    // ask Require.js to load these files (all our tests)
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start
});
