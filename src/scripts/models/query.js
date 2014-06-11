/**
 * Query Model
 */

'use strict';

define(
    [
    'app',
    'backbone'
    ],

function(app, Backbone){
    var QueryModel = Backbone.Model.extend({
        defaults: {
            term: ''
        }
    })

    return QueryModel;
});
