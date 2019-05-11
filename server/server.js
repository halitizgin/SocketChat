const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

let activeUsers = [];
let messages = [];

io.on('connection', socket => {
    
    socket.on('name', name => {
        socket.name = name;
        activeUsers.push(socket.name);
        const data = { from: '', message: socket.name + " bağlandı." }
        messages.push(data);
        io.emit('updateUser', data);
        io.emit('updateCount', activeUsers.length);
        socket.emit('unSeenMessages', messages);
        console.log(socket.name + " user connected.");
        console.log("Active users count: " + activeUsers.length);
    });

    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('recievedMessage', data);
    });

    socket.on('disconnect', () => {
        const index = activeUsers.indexOf(socket.name);
        activeUsers.splice(index, 1);
        const data = { from: '', message: socket.name + " çıkış yaptı." };
        messages.push(data);
        io.emit('updateUser', data);
        io.emit('updateCount', activeUsers.length);
        console.log(socket.name + " disconnected.");
        console.log("Active users count: " + activeUsers.length);
    });
});