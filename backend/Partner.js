const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  organisation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  partnerType: {
    type: String,
    required: true,
  },
  projects: {
    type: [String],
  },
  goals: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Partner", partnerSchema);