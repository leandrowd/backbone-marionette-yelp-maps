/**
 * Map Plot (Item) View
 */

'use strict';

define(
    [
    'app',
    'marionette'
    ],

function(app, Marionette){
    var PlotItem = Marionette.ItemView.extend({
        template: "#plot-item",
        initialize: function(){
            //nested model below business model
            var coordinatesModel = this.options.model.coordinatesModel;
            this.listenTo(coordinatesModel, 'change:geometry', this.render);
            this.listenTo(this.model, 'change:selected', this.onChangeSelected);
        },

        //overriding default render method
        //the only change here is the call for renderPlot instead of this.$el.html(html);
        render: function(){
            this.isClosed = false;

            this.triggerMethod("before:render", this);
            this.triggerMethod("item:before:render", this);

            var data = this.serializeData();
            data = this.mixinTemplateHelpers(data);

            var template = this.getTemplate();
            var html = Marionette.Renderer.render(template, data);

            //only change if compared with the original render from marionete itemView
            this.renderPlot(html);

            this.bindUIElements();

            this.triggerMethod("render", this);
            this.triggerMethod("item:rendered", this);

            return this;
        },

        renderPlot: function(template){
            var geometry = this.options.model.coordinatesModel.get('geometry');
            if(geometry && geometry.location) {
                var self = this;
                var loc = geometry.location;
                var position = new google.maps.LatLng(loc.lat,loc.lng);

                this.marker = new google.maps.Marker({
                    position: position,
                    map: this.options.map,
                    title: 'Hello World!',
                    animation: google.maps.Animation.DROP

                });

                this.infowindow = new google.maps.InfoWindow({
                    content: template
                });

                //events to sync the plot and the item on the result list
                google.maps.event.addListener(this.marker, 'click', this.select.bind(this));
                google.maps.event.addListener(this.marker, 'select', this.open.bind(this));
                google.maps.event.addListener(this.marker, 'close', this.close.bind(this));
                google.maps.event.addListener(this.infowindow, 'closeclick', this.select.bind(this));

                app.vent.trigger('plot:added', position);
            }
        },

        onClose: function(){
            if(this.marker) {
                google.maps.event.clearInstanceListeners(this.marker);
                this.marker.setMap(null);
                delete this.marker;
            }
        },

        onChangeSelected: function(model, selected){
            if(selected) {
                google.maps.event.trigger(this.marker, 'select');
            }else{
                google.maps.event.trigger(this.marker, 'close');
            }
        },

        select: function(){
            var current = this.model.get('selected');
            this.model.set({ selected: !current });
        },

        open: function(){
            this.infowindow.open(this.options.map, this.marker);
        },

        close: function(){
            this.infowindow.close(this.options.map, this.marker);
            console.log('close');
        }

    });

    return PlotItem;
});
