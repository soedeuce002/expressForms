const express = require("express");
const mustExp = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();
const formOne = require('./form1');

app.engine('mustache', mustExp());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));





app.get('/', function(req, res){


res.render

});

app.post('/signup', function(req, res){



});
