var m = require('mithril'),
  socket = require('../../utilities/socketUtility'),
  signUpController,
  profileName;

signUpController = function () {
  var message = 'Sign up below...',
    ctrl = {};

  ctrl.username = m.prop('');
  ctrl.password  =  m.prop('');
  ctrl.confirmPassword = m.prop('');
  ctrl.email = m.prop('');

  ctrl.getMessage = function () {
    return message;
  };

  ctrl.back = function () {
    m.route('/');
  };

  ctrl.signUp = function () {
    profileName = ctrl.username();
    console.log(ctrl.username());
    socket.emit('signUp', ctrl.username(), ctrl.password()); 
  };

  return ctrl;
};

socket.on('confirmSignUp', function (status, name) {
  console.log('conf1');
  if (profileName === name) {
    m.route((status ? '/log_in' : '/sign_up'));
  }
});

module.exports = signUpController;

