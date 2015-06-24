var express = require('express'),
    swig = require('swig'),
    app = express();

swig.setDefaults({cache: false, autoescape: false, varControls: ['[[', ']]']});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');


app.use('/', express.static(__dirname + '/client'));

app.get('/', function (req, res, err) {
    res.render('index');
});

app.get('/widgets/*', function (req, res, err) {
    res.render('index');
});

app.listen(3031, function () {
    console.log("Listening on 3031");
});