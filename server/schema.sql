CREATE DATABASE chat;

USE chat;
CREATE TABLE ChatUser
(
  ID int not null,
  UserName text,
  PRIMARY KEY (ID)
);

CREATE TABLE Room
(
  ID int not null,
  RoomName text,
  UserID int,
  PRIMARY KEY (ID),
  FOREIGN KEY (UserID) REFERENCES ChatUser(ID)
);

CREATE TABLE messages
(
  ID int not null,
  Username text,
  RoomID int,
  UserID int,
  Created time,
  ChatText text,
  PRIMARY KEY (ID),
  FOREIGN KEY (RoomID) REFERENCES Room (ID),
  FOREIGN KEY (UserID) REFERENCES ChatUser (ID)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

