const express = require('express');
const router = express.Router();
const Contact = require('../../../database/models/Contact');
const User = require('../../../database/models/User');

router.get('/contacts', (req,res) =>{
  Contact
  .fetchAll()
  .then((contacts) => {
    return res.json(contacts)
  })
  .catch(() => {
    res.status(500).send('Error retrieving contacts')
  })
})

// router.get('/contacts', (req, res) => {
//   let id = req.query.user;
//   User
//   .where('id', id)
//     .fetch()
//     .then(() => {
//       return Contact
//       .where('user_id', id)
//         .fetchAll()
//         .then(contacts => {
//           res.json(contacts);
//         })
//         .catch(() => {
//           res.status(500).send('error finding users contacts');
//         });
//     });
// });

router.get('/contacts/search', (req, res) => {
  
});

router.get('./contacts/:id', (req,res) => { 
 
})

router.put('./contacts/:id', (req,res) => {

})

router.delete('./contacts/:id', (req,res) => {
  
})

router.post('/contacts', (req, res) => {
  let body = req.body;
  Contact
  .forge({
    name: body.name,
    address: body.address,
    mobile: body.mobile,
    work: body.work,
    home: body.home,
    email: body.email,
    twitter: body.twitter,
    instagram: body.instagram,
    github: body.github
  })
    .save(null, { method: 'insert' })
    .then((contact) => {
      res.json(contact);
    })
    .catch(() => {
      res.status(500).send('error creating user');
    });
});


module.exports = router;
