/**
 * Map View
 */

'use strict';

define(['underscore', 'google-maps'], function(_){
    var createMap = function(container, options){
        GoogleMapsLoader.KEY = 'AIzaSyAzzx5xWak7IyUvr6-ylk7_23sw-00AaaQ';
        GoogleMapsLoader.load(function(g){
            var google = g;

            var defaults = {
                zoom: 8,
                center: new google.maps.LatLng(-34.397, 150.644),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            if(!!options) {
                _.extend(defaults, options(g));
            }
            console.log(container, defaults);
            var map = new google.maps.Map(container, defaults);
        })
    }

    return {
        init: createMap
    }
});
