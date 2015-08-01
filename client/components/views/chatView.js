var m = require('mithril'),
  v = require('../../utilities/viewUtility'),
  click,
  chatView; 

click = function () {
  console.log('click');
};

chatView = function (ctrl) {
  var view = [

    m('.boxSkin', [
      m('div', {class : 'boxSkin'}, ctrl.getMessage()),
      v('input', 'Title: ', ctrl.title),
      v('input', 'Body: ', ctrl.body),
      v('button', 'Submit', ctrl.submit)
    ])
  ];

  return view;
};

module.exports = chatView;

