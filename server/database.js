var mongoClient = require('mongodb').MongoClient,
  db,
  addUser,
  getUser,
  getUsers,
  isAvailable;  

mongoClient.connect('mongodb://localhost:8000/userDatabase', 
function (error, database) {

  if (error) {
    return console.log(error);
  }
  db = database;
});

addUser = function (name, hash, callback) {
  var user = {
    name : name,
    hash : hash
  };

  db.collection('users').insert(user, callback || function () {});
};

getUser = function (name, callback) {
  var searchKey = {},
    returnKey = {};

  searchKey = {
    name : name
  };

  db.collection('users').find(searchKey, function (error, cursor) {
    var hasBeenRead = false;

    if (error) {
      return callback(error);
    }

    cursor.each(function (error, user) {

      if (!hasBeenRead) {
        callback(error, user);
      }
      hasBeenRead = true;
    });
  });
};

getUsers = function (callback) {
  db.collection('users').find(function (error, cursor) {

    if (error) {
      return callback(error);
    }
    cursor.toArray(function (error, users) {

      if (error) {
        return callback(error);
      }
      callback(null, users);
    });
  });
};

isAvailable = function (name, callback) {
  getUser(name, function (error, userData) {
    callback(Boolean(error || !(userData && userData.name)));
  });
};

module.exports = {
  getUser : getUser,
  getUsers : getUsers,
  addUser : addUser,
  isAvailable : isAvailable
};

