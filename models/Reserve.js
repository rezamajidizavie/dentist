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
  day: {
    type: String,
    required: true
  },
  hour: {
    type: String,
    required: true
  }
});

module.exports = Reserve = mongoose.model("reserve", ReserveSchema);
