var m = require('mithril'),
  v = require('../../utilities/viewUtility'),
  username = m.prop(''),
  password = m.prop(''),
  confirmationPassword = m.prop(''),
  email = m.prop(''),
  click,
  signUpView;

click = function () {
  console.log('click');
};

signUpView = function (ctrl) {
  var view = [

    m('.boxSkin', [
      m('div', {class : 'boxSkin'}, ctrl.getMessage()),

      v('input', 'Username: ', ctrl.username),
      v('input', 'Password: ', ctrl.password),
      v('input', 'ConfirmPassword: ', ctrl.confirmPassword),
      v('input', 'Email: ', ctrl.email),

      v('button', 'Back', ctrl.back),
      v('button', 'Sign up', ctrl.signUp)
    ])
  ];

  return view;
};

module.exports = signUpView;

