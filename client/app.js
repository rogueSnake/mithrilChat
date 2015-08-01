var css = require('./styles/index.css'),
  m = require('mithril'),
  appComponent = require('./components/appComponent'),
  logInComponent = require('./components/logInComponent'),
  signUpComponent = require('./components/signUpComponent'),
  chatComponent = require('./components/chatComponent');

m.route(document.body, "/", {
  "/" : appComponent,
  "/log_in" : logInComponent,
  "/sign_up" : signUpComponent,
  "/chat" : chatComponent
});

//m.route('/');

