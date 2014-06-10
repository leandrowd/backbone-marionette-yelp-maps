/**
 * Map View
 */

'use strict';

define(['app', 'marionette', 'google-maps'], function(app, Marionette){
    var Map = Marionette.ItemView.extend({
        template: '#map',

        ui: {
            mapContainer: '#mapContainer'
        },

        onRender: function() {
            var self = this;

            GoogleMapsLoader.KEY = 'AIzaSyAzzx5xWak7IyUvr6-ylk7_23sw-00AaaQ';
            GoogleMapsLoader.load(function(google){
                var defaults = {
                    zoom: 8,
                    center: new google.maps.LatLng(-34.397, 150.644),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(self.ui.mapContainer[0], defaults);
            });
        }
    });

    return Map;
});
