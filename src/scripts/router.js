/**
 * Application Router
 */

'use strict';

define(function (require) {
    var Marionette = require('marionette');

    return new Marionette.AppRouter({
        controller: require('router-controller'),
        appRoutes: {
            '': 'defaultRoute',
            'foo': 'fooRoute',
            'bar': 'barRoute'
        }
    });
});
