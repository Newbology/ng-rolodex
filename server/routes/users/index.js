const express = require('express');
const router = express.Router();
const User = require('../../../database/models/User');
const isAuth = require('../isAuthenticated');

router.get('/profile', (req, res) => {
  let id = req.query.user;
  User
  .where('id', id)
    .fetch()
    .then(user => {
      res.json(user);
    })
    .catch(() => {
      res.status(500).send('error finding users');
    });
});

router.put('/users', (req, res) => {
  let id = req.query.user;
  let body = req.body;
  User
  .forge(body)
    .where('id', id)
    .save(null, { method: 'update' })
    .then(user => {
      return res.json(user);
    })
    .catch(() => {
      return res.status(500).send('Error updating account');
    });
});

module.exports = router;
