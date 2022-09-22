const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  broadLocation: {
    type: String,
    required: true,
  },
  specificLocation: {
    type: String,
    required: true,
  },
  POG: {
    type: String, 
    required: true,
  }
})

module.exports = mongoose.model('location', locationSchema)
