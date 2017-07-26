const express = require("express");
const mustExp = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();


app.engine('mustache', mustExp());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));





app.get('/', function(req, res){


res.render('form1');

});

app.post('/signup', function(req, res){

  let userInfo = req.body;
  res.send("Thanks for submitting your info!!  You will hear from us soon!");

});


app.listen(3000, function(){
  console.log("hey there!");
});
