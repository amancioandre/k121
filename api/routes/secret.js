const express = require('express');
const router = express.Router();

/* Models */
const Friend = require('../models/friend');

/* RESTful Architecture */
/* Show all Friends */
router.get('/', (req, res, next) => {
  Friend.find()
    .then((friends) => {
      res.json(friends);
    })
    .catch((err) => {
      res.json(err);
    })
})

/* Create a new friend into the database */
router.post('/', (req, res, next) => {
  const { name, email } = req.body;
  const friend = { name, email }
  Friend.create(friend)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    })
})

/* Edit a specific friend */
router.get('/:friendId', (req, res, next) => {
  const friendId = req.params.id;
  Friend.findOne({ _id: friendId })
    .then((friend) => {
      res.json(friend);
    })
    .catch((err) => {
      res.json(err);
    })
})

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
    })
});

/* Shuffle all friends */
/* Even though the application is a simple one, we do not want to have a wise one cracking into the client
code to get his or hers bestie, cheating our algorithms, do we? So let's leave the shuffling to the back end.*/
router.patch('/secret', (req, res, next) => {
  Friend.find()
    .then(friends => {
      /* I will refactor this code into a helper after. */
      const idList = friends.reduce((acc, friend) => {
        acc.push(friend._id);
      }, []);
      await friends.forEach((friend) => {
        const rnd = Math.floor(Math.random()*idList.length);
        friend.friend = idList.splice(rnd, 1)[0];
        await Friend.findOneAndUpdate({ _id: friend._id }, friend);
      });
      res.json({ message: 'All done! Have a happy celebration of friendship! '});
    })
    .catch(() => {
      res.json({ message: 'Uh-oh, something went wrong. Terribly wrong' });
    })
})


module.exports = router;