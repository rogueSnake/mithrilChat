var m = require('mithril'),
  socket = require('../../utilities/socketUtility'),
  chatController;

chatController = function () {
  var message = 'Welcome to the chat!',
    ctrl = {};

  ctrl.title = m.prop('');
  ctrl.body = m.prop('');

  ctrl.getMessage = function () {
    return message;
  };

  ctrl.submit = function () {
    socket.emit('submitMessage', ctrl.title(), ctrl.body());
  };

  return ctrl;
};

socket.on('postMessage', function (username, title, body) {
  console.log (username + title + body);
});

module.exports = chatController;

