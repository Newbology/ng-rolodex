const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("You got me")
})

module.exports = router;