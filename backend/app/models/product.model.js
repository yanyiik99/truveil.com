const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  VillaAnonymous: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  },
  LinkGmaps: {
    type: String,
    required: true
  },
  Contact: {
    type: String,
    required: true
  },
  RentType: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Bedroom: {
    type: Number,
    required: true
  },
  Swimming: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  LivingRoom: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  IncludeFacilities: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
