const express = require('express');
const router = express.Router();
const contacts = require('./contacts');
const 
const app =express();

router.route('/')
.get( (req,res) => {
  console.log('hitting')
  User.fetchAll()
    .then(users => {
      console.log(users)
      res.json(users);
    })
    .catch(() => {
      res.status(500).send('error finding users');
    });
});


app.use('/contacts', contacts);
module.exports = router;
