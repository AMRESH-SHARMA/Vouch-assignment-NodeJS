const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  number: {
    type: Number,
    min: [3, '10 digits requires'],
    // required: [true, "Please enter a number"],
    // unique: [true, "Number already exists"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);

