const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  rollNo: String,
  name: String,
  degree: String,
  city: String,
});

module.exports = mongoose.model("student", studentSchema);
