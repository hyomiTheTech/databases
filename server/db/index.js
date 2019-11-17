var Sequelize = require("Sequelize");
var orm = new Sequelize("chat", "fred", "fre");

var User = orm.define("user", {
  username: Sequelize.STRING
});

var Message = orm.define("Message", {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User); // this 'belongsTo is the method that tells orm where the foreign key lives

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;

var mysql = require("mysql");

// before ORM

// // Create a database connection and export it from this file.
// var connection = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "chat"
// });
// // You will need to connect with the user "root", no password,

// connection.connect();
// // and to the database "chat".
// module.exports = connection;
