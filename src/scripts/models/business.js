/**
 * Search Box View
 */

'use strict';

define(['app', 'underscore', 'backbone', 'models/coordinates'], function(app, _, Backbone, coordinatesModel){
    var BusinessModel = Backbone.Model.extend({
        initialize: function(){
            this.on('add', this.addCoordinates);
            // this.on('change:coordinates', function(e, d){
            //     console.log(e, d, 'change location');
            // })
        },

        //retrieve the coordinates from google after add
        addCoordinates: function(){
            var location = this.get('location');
            var address = [location.address, location.state_code,location.postal_code].join(', ');
            this.set(_.extend(location, {
                coordinates: new coordinatesModel({address: address}).attributes
            }))
        }

    });

    return BusinessModel;
});
