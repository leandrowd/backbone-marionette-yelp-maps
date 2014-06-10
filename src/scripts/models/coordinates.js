/**
 * Search Box View
 */

'use strict';

define(['app', 'backbone'], function(app, Backbone){
    var CoordinatesModel = Backbone.Model.extend({
        urlRoot: 'http://maps.googleapis.com/maps/api/geocode/json',
        initialize: function(){
            this.fetch({
                data: {
                    address: this.get('address'),
                    sensor: false
                },
                success: function(data, t){
                    // console.log(data, t);
                }
            });
        },
        parse: function(data){
            return data.results[0];
        }
    });

    return CoordinatesModel;
});
