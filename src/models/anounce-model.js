const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnounceSchema = new Schema({
  Id: {
    type: String,
    unique: true
  },
  Name: {
    type: String
  },
  Date: {
    type: String
  },
  Text: {
    type: String
  }
})

const AnounceModel = mongoose.model('anounces', AnounceSchema)
module.exports = AnounceModel
