'use strict';
/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    htdocs = 'src',
    templateDir = 'src/';


var allowedHost = {
  'http://localhost:5000': true,
  'http://localhost:3000': true
};

var allowCrossDomain = function(req, res, next) {

  if(allowedHost[req.headers.origin]) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    next();
  } else {
    if(req.headers.origin) {
        res.send(403, {auth: false});
    }else{
        next();
    }
  }
}

app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.static(path.join(__dirname, htdocs),{index:'index.htm'}));
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(allowCrossDomain);
});

var yelp = require("yelp").createClient({
    consumer_key: "Kh5-qvxkN0NkRuDhLr4FRA",
    consumer_secret: "sS51toslJn1JS84S4He-8Zub9sg",
    token: "qVuqVRjAZLlQPGfWgAUe89dGblsoCamz",
    token_secret: "4NVQpMWZ_m9N8iStZKwifZxUdkA"
});

app.get('/search', function(req, res){
    // See http://www.yelp.com/developers/documentation/v2/search_api
    var term = "food",
        location = "australia";

    if(req.query){
        term = req.query.q || term;
        location = req.query.where || location;
    }

    yelp.search({term: term, location: location}, function(error, data) {
        // console.log(error);
        // console.log(data);
        res.send(data);
    });
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
    console.log('Load templates from ' + templateDir);
    console.log('Starting the application in ' + app.get('env') + ' mode...');
});
