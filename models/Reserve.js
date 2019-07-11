const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReserveSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  dateIndex: {
    type: Number
  }
});

module.exports = Reserve = mongoose.model("reserve", ReserveSchema);
