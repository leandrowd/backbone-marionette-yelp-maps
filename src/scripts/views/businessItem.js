/**
 * Business List View
 */

'use strict';

define(['app', 'marionette'], function(app, Marionette){
    var BusinessItem = Marionette.ItemView.extend({
        template: "#business-item",
        tagName: 'li'
    });

    return BusinessItem;
});
