/**
 * Search Box View
 */

'use strict';

define(['app', 'backbone'], function(app, Backbone){
    var SearchModel = Backbone.Model.extend({
        defaults: {
            term: ''
        }
    })

    return SearchModel;
});
