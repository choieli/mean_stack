const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'));
const server = app.listen(8000);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' });

    socket.on('thankyou', function(data){
        console.log(data.message);
    })
})
