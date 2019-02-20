const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('These should be contacts');
});



module.exports = router;