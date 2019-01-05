const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  date: Date,
  friends: { type: mongoose.SchemaTypes.ObjectId, ref: 'Friend' }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;