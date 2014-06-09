/**
 * Application Module
 */

'use strict';

define(function (require) {
    var _ = require('underscore');
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    if (typeof _ != undefined) { console.log('Underscore is defined.');}
    if (typeof $ != undefined) { console.log('jQuery is defined.');}
    if (typeof Backbone != undefined) { console.log('Backbone is defined.');}
    if (typeof Marionette != undefined) { console.log('Marionette is defined.');}

    var app = new Marionette.Application();

    app.addInitializer(function () {
        console.log('App initialized!');

        this.router = require('router');

        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    return app;
});
