/**
 * Search Box View
 */

'use strict';

define(['app', 'backbone', 'models/business'], function(app, Backbone, businessModel){
    var BusinessList = Backbone.Collection.extend({
        model: businessModel,
        url: 'http://localhost:3000/search',
        // url: 'scripts/fixtures/business.json',

        parse: function(data){
            return data.businesses;
        }
    })

    return BusinessList;
});
