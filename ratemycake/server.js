const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
let path = require('path');
app.use(bodyParser.json());


//line to connect angular
app.use(express.static(path.resolve(__dirname, 'public/dist/public')));

mongoose.connect('mongodb://localhost/cake-rater', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function(){
    console.log("Running host 8000");
})