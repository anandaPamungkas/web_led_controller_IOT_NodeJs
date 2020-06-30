var express = require('express');

var app = express();

//controllers
var ledController = require('./controllers/ledController.js');

//view engine
app.set('view engine', 'ejs');

//static file
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/style', express.static(__dirname + '/public/assets/style.css'));


ledController(app);

//run the server at port 3000
console.log('server is listening on port 3000');
app.listen(3000); 
