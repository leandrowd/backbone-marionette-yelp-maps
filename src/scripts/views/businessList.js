/**
 * Search Box View
 */

'use strict';

define(['app', 'marionette', 'views/businessItem', 'collections/businessList'], function(app, Marionette, businessItem, businessCollection){
    var BusinessList = Marionette.CollectionView.extend({
        itemView: businessItem,
        collection: new businessCollection,
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
