const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: string,
    required: true,
  },
  password: {
    type: string,
    required: true,
  },
  favorite: {
    type: [string],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
