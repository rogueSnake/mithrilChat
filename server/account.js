var bcrypt = require('twin-bcrypt'),
  makeHash;

makeHash = function (password, callback) {
  bcrypt.hash(password, function (hash) {
    callback(hash);
  });
};


module.exports = {
  makeHash : makeHash
};

