const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name missing for user'],
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Email is necessary'],
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    required: [true, 'Password is necessary'],
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
