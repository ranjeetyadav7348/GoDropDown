
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
    unique: true,
  },
  val: {
    type: Number,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
