const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SpacesSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  eightToTen: {
    type: Number,
    default: 0
  },
  tenToTwelve: {
    type: Number,
    default: 0
  },
  twelveToTwo: {
    type: Number,
    default: 0
  },
  twoToFour: {
    type: Number,
    default: 0
  },
  fourToSix: {
    type: Number,
    default: 0
  },
  sixToEight: {
    type: Number,
    default: 0
  }
});

module.exports = Spaces = mongoose.model("spaces", SpacesSchema);
