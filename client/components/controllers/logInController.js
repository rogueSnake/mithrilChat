var m = require('mithril'),
  socket = require('../../utilities/socketUtility'),
  logInController,
  profileName;

logInController = function () {
  var message = 'Log in below...',
    ctrl = {};

  ctrl.username = m.prop('');
  ctrl.password = m.prop('');

  ctrl.getMessage = function () {
    return message;
  };

  ctrl.back = function () {
    m.route('/');
  };

  ctrl.logIn = function () {
    profileName = ctrl.username();
    socket.emit('logIn', ctrl.username(), ctrl.password());
  };

  return ctrl;
};

socket.on('confirmLogIn', function (status, name) {

  if (profileName === name) {
    m.route((status ? '/chat' : '/log_in'));
  }
});

module.exports = logInController;

