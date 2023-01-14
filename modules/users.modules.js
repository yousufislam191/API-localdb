const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Yousuf",
    email: "yousuf@gmail.com",
    password: "123",
  },
  {
    id: uuidv4(),
    name: "Robin",
    email: "robin@gmail.com",
    password: "456",
  },
  {
    id: uuidv4(),
    name: "Alex",
    email: "alex@gmail.com",
    password: "789",
  },
];
module.exports = users;
