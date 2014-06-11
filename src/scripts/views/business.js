/**
 * Business Item View
 */

'use strict';

define(
    [
    'app',
    'marionette'
    ],

function(app, Marionette){
    var BusinessItem = Marionette.ItemView.extend({
        template: "#business-item",
        tagName: 'li',

        modelEvents: {
            'change:selected': 'render'
        },

        events:{
            'click': 'toggleSelected'
        },

        toggleSelected: function(){
            var current = this.model.get('selected');
            this.model.set({ selected: !current });
        }
    });

    return BusinessItem;
});
