var m = require('mithril'),
  v = require('../../utilities/viewUtility'),
  click,
  logInView; 

click = function () {
  console.log('click');
};

logInView = function (ctrl) {
  var view = [

    m('.boxSkin', [
      m('div', {class : 'boxSkin'}, ctrl.getMessage()),
      v('input', 'Username: ', ctrl.username),
      v('input', 'Password: ', ctrl.password),
      v('button', 'Back', ctrl.back),
      v('button', 'Log in', ctrl.logIn)
    ])
  ];

  return view;
};

module.exports = logInView;

