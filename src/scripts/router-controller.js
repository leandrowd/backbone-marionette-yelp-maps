/**
 * App Router Controller
 */

'use strict';

define(['app', 'marionette'], function(app, Marionette){
    var Controller = Marionette.Controller.extend({
        defaultRoute: function () {
            console.log('You\'re inside default route: \'\'');
        },
        fooRoute: function () {
            console.log('You\'re inside \'foo\' route');
        },
        barRoute: function () {
            console.log('You\'re inside \'bar\' route');
        }
    });

    return new Controller;
});
