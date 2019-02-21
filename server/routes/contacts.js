const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  User.fetchAll()
    .then(users => {
      res.json(users);
    })
    .catch(() => {
      res.status(500).send('error finding users');
    });
});

module.exports = router;
