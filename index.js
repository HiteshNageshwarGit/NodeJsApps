var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    //socket.broadcast.emit(msg); // message to everyone except for a certain socket
    io.emit('chat message', msg); //  send the message to everyone
  });
});


http.listen(8080, function () {
  console.log('listening on *:3000');
});