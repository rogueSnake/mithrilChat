var chatController = require('./controllers/chatController'),
  chatView = require('./views/chatView'),
  chatComponent = {
    controller : chatController,
    view : chatView
  };

module.exports = chatComponent;

