var models = require("../models");

var userFields = ["username"];
var messageFields = ["message", "username", "roomname"];

module.exports = {
  messages: {
    get: function(req, res) {
      Message.findAll({ include: [User] }).complete(function(err, results) {
        res.json(results);
      });

      // before orm

      // models.messages.get(function(err, results) {
      //   // todo: handle err
      // });
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      User.findOrCreate({username: req.body[username]})
      .complete(function(err, results){
        user.id
      })
      var params = {
        text: req.body[text],
        userid: ,
        roomname: req.body[roomname]
      };
      Message.create(params).complete(function(err, results) {
        res.sendStatus(201);
      });
      models.messages.post(params, function(err, results) {
        // todo: handle err
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      models.users.get(function(err, results) {
        // todo: handle err
        res.json(results);
      });
    },
    post: function(req, res) {
      var params = [req.body[username]];
      models.users.post(params, function(err, results) {
        // todo: handle err
        res.json(results);
      });
    }
  }
};
