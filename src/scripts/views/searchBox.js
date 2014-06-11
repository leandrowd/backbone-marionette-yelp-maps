/**
 * Search Box View
 */

'use strict';

define(
    [
    'app',
    'marionette',
    'collections/queryList'
    ],

function(app, Marionette, queryCollection){
    var SearchBox = Marionette.ItemView.extend({
        template: "#search-box",
        collection: new queryCollection,
        modelEvents: {
            'change': 'render'
        },
        events: {
            'submit':'search'
        },
        ui: {
            term: '[name=term]'
        },
        search: function(e){
            var term = this.ui.term.val();
            e.preventDefault();
            app.vent.trigger('search:new', term);

            //add all terms in a list (we can use it later)
            //non-persistent (yet)
            this.collection.add({'term': term, createdAt: Date.now()});

            this.ui.term.val('');
        }
    });

    return SearchBox;
});
