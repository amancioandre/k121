const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* SCHEMA DECLARATION */
const friendSchema = new Schema({
  name: String,
  email: String,
  friend: mongoose.SchemaTypes.ObjectId
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;