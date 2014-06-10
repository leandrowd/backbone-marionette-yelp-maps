/**
 * Business List View
 */

'use strict';

define(['app', 'marionette'], function(app, Marionette){
    var PlotItem = Marionette.ItemView.extend({
        template: "#plot-item",
        onBeforeRender: function(){
            console.log('plotItem', this);

        }

    });

    return PlotItem;
});
