var m = require('mithril'),
  v = require('../../utilities/viewUtility'),
  click,
  appView;

click = function () {
  console.log('click');
};

appView = function (ctrl) {
  var view = [

    m('.boxSkin', [
      m('div', {class : 'boxSkin'}, ctrl.getMessage()),
      v('button', 'Log in', ctrl.logIn),
      v('button', 'Sign up', ctrl.signUp)
    ])
  ];

  return view;
};

module.exports = appView;

