/**
 * Application Entry Point
 */

'use strict';

define([
    'config',
    'app',
    'views/searchBox',
    'views/map',
    'views/businessList',
    'collections/businessList'
    ],
function (config, app, searchBoxView, mapView, businessListView, businessCollection) {
    require('config');

    app.addRegions({
        searchBox: '.searchBox',
        results: '.resultList',
        map: '.map'
    })

    var businessList = new businessCollection;

    app.searchBox.show(new searchBoxView());
    app.results.show(new businessListView({collection: businessList}));
    app.map.show(new mapView({collection: businessList}));

    app.start();

    return app;
});
