
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('.'));

io.on('connection', (socket) => {
    socket.on('send notification', (data) => {
        io.emit('notification', data);
    });
});

http.listen(3000, () => {
    console.log('Server is running on port 3000');
});
