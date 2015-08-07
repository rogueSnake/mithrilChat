var m = require('mithril'),
  socket = require('../../utilities/socketUtility'),
  chatController,
  messages = [];

chatController = function () {
  var message = '',
    ctrl = {};

  ctrl.title = m.prop('');
  ctrl.body = m.prop('');

  ctrl.getMessages = function () {
    var i = 0,
      messageBlock = [];

    for (i = 0; i < messages.length; i += 1) {
      messageBlock.push(m('div', messages[i].username + ': ' + messages[i].body));
    }

    return messageBlock;
  };

  ctrl.submit = function () {
    socket.emit('submitMessage', ctrl.title(), ctrl.body());
  };

  socket.on('postMessage', function (username, title, body) {
    m.startComputation();
    messages.push({
      username : username,
      body : body
    });
    m.endComputation();
  });



  return ctrl;
};

module.exports = chatController;

