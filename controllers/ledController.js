let mqtt = require('mqtt'); //mqtt nodejs package
let client = mqtt.connect('mqtt:localhost:1883'); //connect to mosca mqtt local brocker at port 1883

module.exports = function (app) {
    
    //home page
    app.get('/', function (req, res) {
        console.log('request was made : ' + req.url);
        res.render('index');
    });

    //turn on led route
    app.get('/on', function (req, res) {
        console.log('request was made : ' + req.url);
        client.publish('esp/test', '#on');
        res.redirect('/');
    });

    //turn off led route
    app.get('/off', function (req, res) {
        console.log('request was made : ' + req.url);
        client.publish('esp/test', '#off');
        res.redirect('/');
    });


}
