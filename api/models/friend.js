const mongoose = require('mongoose');

const { Schema } = mongoose;

/* SCHEMA DECLARATION */
const friendSchema = new Schema({
  name: String,
  email: String,
  secretFriend: { type: Schema.Types.ObjectId, ref: 'Friend' },
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;
