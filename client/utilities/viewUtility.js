var m = require('mithril'),
  makeInput,
  makeButton,
  v;

makeInput = function (titleText, propValue) {
  return m('div', titleText, [
    m("input[type=input]", {'class' : 'button', onchange: m.withAttr('value', 
        propValue), 'value' : propValue()})
  ]);
};

makeButton = function (buttonText, onClick) {
  return m("button[type=button]", {class : 'button', onclick: onClick || 
      function () {}}, buttonText || "");
};

// v is the external interface of viewUtil, which redirects to other functions.
v = function (command, arg0, arg1) {
  switch (command) {
    case 'input' :
      return makeInput(arg0, arg1);
      break;
    case 'button' : 
      return makeButton(arg0, arg1);
      break;
  }
};

module.exports = v;

