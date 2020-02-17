const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SudoSchema = new Schema({
  name: { type: String, required: true },
  activity: { type: String, required: true },
  picture: { type: String, required: true },
  age: { type: String, required: true },
  hungry: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('sudo', SudoSchema);
