var express = require("express");
var app = express();

app.get("/", function(request, response){
    response.send("<h1>Hey You</h1>");
})

app.listen(8000, function() {
console.log(express);
})