var express = require('express');

var app = express();

app.use(express.static('public'));

//make way for some custome css, js, and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/videos', express.static(__dirname + '/public/videos'));

var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});