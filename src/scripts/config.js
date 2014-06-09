/**
 * Application Configuration
 */

'use strict';

require.config({
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
    }
});
