const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const patientSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.ObjectId, 
    required: true 
   },
  name: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  }, 
  phone: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  deviceid: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("patients", patientSchema);
module.exports = Patient;
