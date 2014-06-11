/**
 * Map (Composite) View
 */

'use strict';

define(
    [
    'app',
    'underscore',
    'marionette',
    'views/map-plot',
    'views/businessList',
    'google-maps'
    ],

function(app, _, Marionette, plotItemView, businessView){
    var Map = Marionette.CompositeView.extend({
        template: '#map',
        itemViewContainer: '#mapContainer',
        itemView: plotItemView,

        ui: {
            mapContainer: '#mapContainer'
        },

        initialize: function(){
            this.listenTo(app.vent, 'plot:added', this.centralizeMap);
            this.listenTo(this.collection, 'sync', this.resetMap);
        },

        //overriding to let subviews know about the map
        //TODO: change it to reduce coupling
        buildItemView: function(item, ItemViewType, itemViewOptions){
            var options = _.extend({model: item, map: this.map}, itemViewOptions);
            var view = new ItemViewType(options);
            return view;
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
                self.map = new google.maps.Map(self.ui.mapContainer[0], defaults);
            });
        },

        resetMap: function(){
            this.plots = [];
        },

        centralizeMap: function(data, e){
            this.plots.push(data);

            var latlngbounds = new google.maps.LatLngBounds( );
            for ( var i = 0; i < this.plots.length; i++ ) {
                latlngbounds.extend( this.plots[ i ] );
            }
            this.map.fitBounds( latlngbounds );
        }
    });

    return Map;
});
