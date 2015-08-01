var m = require('mithril'),
  appController;

appController = function () {
  var message = 'Sign up or log in to chat!';

  return {

    getMessage : function () {
      return message;
    },

    logIn : function () {
      m.route('/log_in');
    },

    signUp : function () {
      m.route('/sign_up');
    }
  };
};

module.exports = appController;

