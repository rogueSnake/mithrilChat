var express = require("express"),
    app = express(),
    http = require("http").Server(app),
    io = require("socket.io")(http);

app.use(express.static("../client"));
http.listen(80, function () {
    console.log("Listenin' to port 80, boss.");
});

module.exports.io = io;

