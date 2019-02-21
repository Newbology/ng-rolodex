const express = require('express');
const router = express.Router();
const User = require('../../../database/models/User');
const isAuth = require('../isAuthenticated');

router.get('/profile', isAuth, (req,res) => {
  let id = req.query.user;
  User
  .where('id', id)
  .fetch()
    .then((user) => {
      res.json(user);
    })
    .catch(() => {
      res.status(500).send('error finding users');
    });
});

router.put('/user', (req,res) =>{
  let id = req.query.user;
  User
  .forge()
  .where('id', id)
  .fetch()
  .then((user) => {

  })
})



module.exports = router;
