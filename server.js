var express = require('express'),
    swig = require('swig'),
    app = express();

swig.setDefaults({cache: false, autoescape: false, varControls: ['[[', ']]']});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');


app.use('/', express.static(__dirname + '/client'));

app.get('/', function (req, res, err) {
    res.render('despacho');
});

app.get('/gestion_recursos', function (req, res, err) {
    res.render('gestion_recursos');
});

app.get('/gis', function (req, res, err) {
    res.render('gis');
});

app.listen(3031, function () {
    console.log("Listening on 3031");
});