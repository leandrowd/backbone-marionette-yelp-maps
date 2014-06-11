### Marionette's Example APP

#### Yelp API + Google Maps API + Backbone + Marionette

To run the client:

`npm install`

`grunt server:dev`

To run the YELP Api

`node app.js`

Note: If you don't want to run the YELP api, go to `scrips/collections/businessList.js` and:

- comment this line `url: 'http://localhost:3000/search',`
- uncomment this line `url: 'scripts/fixtures/business.json',`

Note 2: The yelp api key and the google maps api key will only work on `localhost`


#### TODOs:

- [ ] Responsive version
- [ ] Use geolocation api
- [ ] Create routes for search
- [ ] Integrate YELP api server on grunt tasks

 
 
