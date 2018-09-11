var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
