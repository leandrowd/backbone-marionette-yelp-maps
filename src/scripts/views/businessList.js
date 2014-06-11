/**
 * Business List View
 */

'use strict';

define(
    [
    'app',
    'marionette',
    'views/business',
    'collections/businessList'
    ],

function(app, Marionette, businessItemView, businessCollection){
    var BusinessList = Marionette.CollectionView.extend({
        itemView: businessItemView,
        tagName: 'ul',
        initialize: function(){
            var self = this;
            app.vent.on('search:new', function (term){
                console.log(arguments);
                self.collection.fetch({data: {q: term, where: 'Australia'}});
            });
        }
    });

    return BusinessList;
});
