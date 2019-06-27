var express = require("express");

var app = express();

app.get('/', function(request, response) {
    response.send("hello express");
})

app.listen(8000, function(){
    console.log("listen on 8000");
})