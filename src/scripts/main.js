/**
 * Application Entry Point
 */

'use strict';

define(['config', 'app', 'views/searchBox', 'views/businessList', 'views/map'], function (config, app, searchBoxView, businessListView, mapView) {
    require('config');

    app.addRegions({
        searchBox: '.searchBox',
        results: '.resultList',
        map: '.map'
    })

    app.searchBox.show(new searchBoxView());
    app.results.show(new businessListView());
    app.map.show(new mapView());

    app.start();

    return app;
});
