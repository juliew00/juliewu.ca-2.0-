const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Can't delete or add new users, there's only one which is me
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});
*/

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(user => {
          user.username = req.body.username;
          user.profile.name = req.body.profile.name;
          user.profile.dob = req.body.profile.dob;
          user.profile.from = req.body.profile.from;
          user.profile.location = req.body.profile.location;
          user.profile.education = req.body.profile.education;
          user.profile.work = req.body.profile.work;
          user.profile.bio = req.body.profile.bio;
          user.interests.likes = req.body.interests.likes;
          user.interests.music = req.body.interests.music;
          user.interests.movies = req.body.interests.movies;
          user.interests.tv = req.body.interests.tv;
          user.contact.email = req.body.contact.email;
          user.contact.social = req.body.contact.social;

          user.save()
            .then(() => res.json('User updated.'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;