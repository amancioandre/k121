/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
require('dotenv').config();

const express = require('express');
const Mailgun = require('mailgun-js');

const router = express.Router();

/* Mailgun Setup */
const mailgun = new Mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN})

/* Models */
const Friend = require('../models/friend');
const Event = require('../models/events');

/* RESTful Architecture */
/* Show all Friends */
router.get('/', (req, res, next) => {
  Friend.find()
    .populate({ path: 'secretFriend', select: 'name' })
    .then((friends) => {
      res.json(friends);
    })
    .catch((err) => {
      res.json(err);
    });
});

/* Create a new friend into the database */
/* With the frontend logic, it is expected to be delivered two objects: the first is the event,
and the last, the friends array. */
router.post('/', (req, res, next) => {
  const { event, friends } = req.body;

  Friend.create(friends)
    .then((response) => {
      const friendIds = response.map(friend => friend._id);
      event.friends = friendIds;

      Event.create(event)
        .then(eventResponse => res.json(eventResponse))
        .catch(err => res.json(err));
    })
    .catch((err) => {
      res.json(err);
    });
});

/* Shuffle all friends */
/* Even though the application is a simple one, we do not want to have a wise one
cracking into the client code to get his or hers bestie, cheating our algorithms, do we?
So let's leave the shuffling to the back end. */

router.get('/secret/:eventId', (req, res, next) => {
  const { eventId } = req.params;
  const rnd = size => Math.floor(Math.random() * size);

  Event.findById(eventId)
    .populate('friends')
    .then((event) => {
      const { friends } = event;

      /* I will refactor this code into a helper later. */
      const idList = friends.reduce((acc, friend) => {
        acc.push(friend._id);
        return acc;
      }, []);
      friends.forEach((friend) => {
        const idx = rnd(idList.length);

        const secretFriend = idList.splice(idx, 1)[0];
        Friend.findOneAndUpdate({ _id: friend._id }, { secretFriend }, { new: true })
          .populate('secretFriend')
          .then((shuffled) => { // Email Logic Goes here!
            const data = {
              from: 'Shuffle my Friends! <shuffle@myfriends.com>',
              to: shuffled.email,
              subject: `${event.title} from Shuffle my Friends!`,
              text: `${event.description}
                    Your secret friend is: ${shuffled.secretFriend.name}, ${shuffled.secretFriend.email}`,
            };

            mailgun.messages().send(data, (err, body) => {
              if (err) { console.log('inside mailgun error', err); }
              console.log(body);
              res.json({ message: 'All done! Have a happy celebration of friendship! ' });
            });
          })
          .catch(err => res.json(err));
      });
    })
    .catch(() => {
      res.json({ message: 'Uh-oh, something went wrong. Terribly wrong' });
    });
});

/* Edit a specific friend */
router.get('/:friendId', (req, res, next) => {
  const friendId = req.params.id;
  Friend.findOne({ _id: friendId })
    .then((friend) => {
      res.json(friend);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.patch('/:friendId', (req, res, next) => {
  const friendId = req.params.id;
  const { name, email } = req.body;
  const friend = { name, email };

  Friend.findOneAndUpdate({ _id: friendId }, friend)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

/* Delete Friend, because, who knows... */
router.delete('/:friendId', (req, res, next) => {
  const friendId = req.params.id;
  Friend.findOneAndDelete(friendId)
    .then(() => {
      res.json({ message: 'Your friend has been removed from the draw. :(' });
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
