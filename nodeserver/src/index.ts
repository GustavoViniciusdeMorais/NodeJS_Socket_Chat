import express from 'express';
import {Server} from 'socket.io';
import http from 'http';

const app = express();
const PORT = 8080;
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    path: '/socket.io'
});
/*
const io = socket(httpServer, {
    path: '/socket.io'
});
*/

// the path can be any name

// Show site page
app.use(express.static(__dirname + '/../public/site/'));

// Clients list
const clients : Array<any> = [];

// Socket events
io.on("connection", (client) => {
    console.log(`Connected ${client.id}`);
    clients.push(client);

    client.on("disconnect", () => {
        clients.splice(clients.indexOf(client), 1);
        console.log(`Client ${client.id} disconnected`);
    });
});

httpServer.listen(PORT, function(){
    console.log(`Server running at port ${PORT}`);
});

// Test Route
app.get('/', (req, res) => {
    res.send('Gustavo');
});

// Emit msg to clients
app.get('/msg', (req, res) => {
    const msg = req.query.msg?.toString() || 'Default';

    for(const client of clients){
        client.emit('msg', msg);
    }

    res.json({
        status: 'success',
        message: 'Success',
        data: [
            msg
        ],
    });
});