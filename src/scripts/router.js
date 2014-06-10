/**
 * Application Router
 */

'use strict';

require(['marionette', 'router-controller'], function (Marionette, controller) {
    return new Marionette.AppRouter({
        controller: controller,
        appRoutes: {
            '': 'defaultRoute',
            'foo': 'fooRoute',
            'bar': 'barRoute'
        }
    });
});
