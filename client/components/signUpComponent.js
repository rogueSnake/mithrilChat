var signUpController = require('./controllers/signUpController'),
  signUpView = require('./views/signUpView'),
  signUpComponent = {
    controller : signUpController,
    view : signUpView
  };

module.exports = signUpComponent;

