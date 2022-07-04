const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  name: { type: String },
  bookedTimeSlots: { type: Array },
  capacity: { type: Number },
  fuelType: { type: String },
  image: { type: String },
  rentPerHour: { type: Number },
});

const RecordModel = mongoose.model("Car", carsSchema, "cars");

module.exports = RecordModel;
