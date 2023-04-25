// Modules
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

// Port
const port = 3000;

// Routes
app.get("/", function(req, res){
    res.send("Hello, world!");
});

// Listen
server.listen(3000, function(){
    console.log(`Listening at *:${port}`)
});