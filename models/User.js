const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: String,
  username: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
