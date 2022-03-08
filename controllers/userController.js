const User = require('../models/user');

function getUsers(req, res) { // GET all users
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({ err });

    return res.status(200).send(users);
  });
}

function getUserByEmail(req, res) { // GET user by EMAIL
  const { userId } = req.params;
  User.findOne({ email: userId }, (err, user) => {
    if (err) return res.status(500).send({ message: `Error ${err}.` });
    if (!user) return res.status(404).send({ Error: 'Error. No users found' });
    return res.status(200).send(user);
  });
}

function createUser(req, res) { // POST user
  const { name, email, password } = req.body;

  // Saving a New User
  const newUser = new User({ name, email, password });
  newUser.save((err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ message: 'You are registered.' });
  });
}

function deleteUser(req, res) { // DELETE user
  const { userId } = req.params;

  User.findOneAndDelete({ email: userId }, (err, user) => {
    if (err) return res.status(500).send({ err });
    if (!user) return res.status(404).send({ message: 'User not found!' });

    return res.status(200).send({ message: 'User deleted successfully!' });
  });
}

function updateUser(req, res) { // PATCH user
  const { userId } = req.params;

  User.findOneAndUpdate({ email: userId }, req.body, (err, user) => {
    if (!user) return res.status(404).send({ message: 'User not found' });
    if (err) return res.status(500).send({ err });

    return res.status(200).send({ message: `User ${user} updated` });
  });
}

module.exports = {
  getUsers,
  getUserByEmail,
  createUser,
  deleteUser,
  updateUser,
};
