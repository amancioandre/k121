const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  date: Date,
  description: String,
  friends: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Friend' }],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
