var bcrypt = require('twin-bcrypt'),
  database = require('./database'),
  server = require('./server');

server.io.on("connection", function (socket) {
  var profile;

  socket.on('signUp', function (name, password) {
    database.isAvailable(name, function (status) {

      if (status) {
        bcrypt.hash(password, function (hash) {
          database.addUser(name, hash, function () {
            server.io.emit('confirmSignUp', true, name);
          });
        });
      }

      else {
        server.io.emit('confirmSignUp', false, name);
      }
    });
  });

  socket.on('logIn', function (name, password) {
    database.getUser(name, function (error, userData) {

      if (error || !userData.hash) {
        return server.io.emit('confirmLogIn', false, name);
      }

      bcrypt.compare(password, userData.hash, function (result) {
        profile = (result ? name : undefined);
        server.io.emit('confirmLogIn', result, name);
      });
    });
  });

  socket.on('submitMessage', function (title, body) {

    if (profile) {
      server.io.emit('postMessage', profile, title, body);
    }
  });
});

