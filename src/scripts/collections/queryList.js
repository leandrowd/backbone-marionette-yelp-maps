/**
 * Query Collection
 */

'use strict';

define(
    [
    'app',
    'backbone',
    'models/query'
    ],

function(app, Backbone, queryModel){
    var QueryList = Backbone.Collection.extend({
        model: queryModel
    })

    return QueryList;
});
