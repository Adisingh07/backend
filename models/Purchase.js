const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  username: String,
  pdfId: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Purchase", purchaseSchema);
