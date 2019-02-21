const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');

const saltRounds = 12;

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  new User({ id: user.id })
    .fetch()
    .then(user => {
      user = user.toJSON();
      return done(null, {
        id: user.id,
        username: user.username
      });
    })
    .catch(err => {
      res.status(500).send('error: ', err);
    });
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    return new User({ username: username })
      .fetch()
      .then(user => {
        user = user.toJSON();
        if (user === null) {
          return done(null, false, { message: 'bade username or password' });
        } else {
          bcrpyt.compare(password, user.password).then(res => {
            if (res) {
              return done(null, user);
            } else {
              return done(null, false, {
                message: 'base username or password'
              });
            }
          });
        }
      })
      .catch(err => {
        res.status(500).send('error: ', err);
      });
  })
);

router.post('/register', (req, res) => {
  bcrpyt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      res.status(500).send('error: ', err);
    }
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      if (err) {
        res.status(500).send('error: ', err);
      }
      return new User({
        username: req.body.username,
        password: hash
      })
        .save()
        .then(() => {
          return res.redirect('/login');
        })
        .catch(err => {
          return res.status(500).send('Error creating account');
        });
    });
  });
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
