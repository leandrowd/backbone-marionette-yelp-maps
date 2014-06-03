var express = require('express');
var app = express();
var PORT = 3000;

app.use(require('connect-livereload')({
    port: 35729
}));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('app is listening on port', PORT);
});

