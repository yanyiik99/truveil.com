const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  nameReal: String,
  namePseudonym: String,
  location: String,
  linkgmaps: String,
  contact: String,
  rentType: String,
  price: Number,
  bedroom: Number,
  pool: String,
  livingRoom: String,
  includeFacilities: String,
  description: String,
  photo: {
    type: String, // tipe data foto (misalnya string untuk URL gambar atau Buffer untuk menyimpan gambar sebagai byte array)
    default: '' // nilai default untuk foto
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
