var logInController = require('./controllers/logInController'),
  logInView = require('./views/logInView'),
  logInComponent = {
    controller : logInController,
    view : logInView
  };

module.exports = logInComponent;

