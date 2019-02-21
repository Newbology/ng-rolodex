const express = require('express');
const router = express.Router();
const contacts = require('./contacts');
const Contact = require('../../database/models/Contact')
const app = express();

router.get(('/users'), (req,res) => {
  console.log(req.body)
  Contact
  .where('contact_id', )
 .fetchAll()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(() => {
      res.status(500).send('error finding users');
    });
});


app.use('/contacts', contacts);
module.exports = router;
