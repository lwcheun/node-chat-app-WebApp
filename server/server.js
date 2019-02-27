const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
// https://nodejs.org/api/path.html#path_path_join_paths
// console.log(__dirname + '/../public');
// console.log(publicPath);

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Leon',
    text: 'Hello, how are you?',
    createdAt: 123
  });
  
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });
  
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  })
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});