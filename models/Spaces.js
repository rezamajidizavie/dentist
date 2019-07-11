const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SpacesSchema = new Schema({
  firstDay: {
    type: Number,
    required: true
  },
  secondDay: {
    type: Number,
    required: true
  },
  thirdDay: {
    type: Number,
    required: true
  },
  fourthDay: {
    type: Number,
    required: true
  },
  fifthDay: {
    type: Number,
    required: true
  }
});

module.exports = Spaces = mongoose.model("spaces", SpacesSchema);
