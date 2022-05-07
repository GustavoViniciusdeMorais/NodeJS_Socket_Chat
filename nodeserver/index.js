const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 8080
const app = express();
const server = app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
    console.log(`Gustavo Vinicius Morais`);
});

// Simple express get route test example
app.get('/', function (req, res) {
    res.send('Gustavo Vinicius Morais')
});

// Static files
app.use(express.static("public/imgs"));

// Socket setup
const io = socket(server);

// Connected users list
const usersList = new Set();

// Socket management
io.on("connection", function(){
    console.log("Connectio made with success");
});