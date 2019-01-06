const mongoose = require('mongoose');
const Friend = require('../models/friend');

const dbname = 'secret-friends';

mongoose.connect(`mongodb://localhost/${dbname}`, { useNewUrlParser: true });

/* Seeds Friends List */

const friends = [
  { name: 'Andre', email: 'amancioandre@gmail.com' },
  { name: 'Demora', email: 'aademora@mtu.edu ' },
  { name: 'Debora', email: 'debora@debora.com' },
  { name: 'William', email: 'will@iam.edu' },
  { name: 'Junior', email: 'ju@junior.edu' },
];

Friend.create(friends, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${friends.length} friends.`);
  mongoose.connection.close();
});
