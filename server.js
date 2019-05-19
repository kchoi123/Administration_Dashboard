var express = require("express");
var app = express();

var PORT = process.env.PORT || 3002;

var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});