const users = require("../modules/users.modules");
const { v4: uuidv4 } = require("uuid");

//get Users
const getUser = (req, res) => {
  res.status(200).json({ users });
};

//add Users
const addUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  users.push(newUser);
  res.status(201).json({ users });
};

//update Users
const updateUser = (req, res) => {
  const userid = req.params.id;
  const { name, email, password } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.name = name;
      selecteduser.email = email;
      selecteduser.password = password;
    });
  res.status(200).json({ users });
};

//Delete Users
const deleteUser = (req, res) => {
  const userid = req.params.id;
  const deleteUser = users.filter((user) => user.id !== userid);
  res.status(200).json({ deleteUser });
};

module.exports = { getUser, addUser, updateUser, deleteUser };
