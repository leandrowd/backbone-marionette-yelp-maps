/**
 * Business Model
 */

'use strict';

define(
    [
    'app',
    'underscore',
    'backbone',
    'models/coordinates'
    ],

function(app, _, Backbone, coordinatesModel){
    var BusinessModel = Backbone.Model.extend({

        defaults: {
            //used to keep the item synced between the map and the result list
            selected: false
        },

        initialize: function(){
            this.on('add', this.addCoordinates);
        },

        // addCoordinates - retrieve the coordinates from maps api
        addCoordinates: function(){
            var location = this.get('location');
            var address = [location.address, location.state_code,location.postal_code].join(', ');

            //add the nested model to the model so the view can listen to the changes
            this.coordinatesModel = new coordinatesModel({address: address});
            this.set(_.extend(location, {
                coordinates: this.coordinatesModel.attributes
            }))
        }

    });

    return BusinessModel;
});
