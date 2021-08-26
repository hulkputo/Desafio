const mongoose = require('mongoose');

const { Schema } = mongoose;

const Doc = new Schema({
  name: {
    type: String,
    require: true
  },

  value: {
    type: String,
    require: true
  },

  created_at: {
    type: Date,
    default: mongoose.now
  }
}, {versionKey: false});

module.exports = mongoose.model('desafio-insert', Doc)