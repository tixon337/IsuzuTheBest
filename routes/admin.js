const express = require('express')
const router = express.Router();
const { sessionChecker } = require('../middleware/auth.js')


router.get('/', sessionChecker, (req, res) => {
  console.log('Admin get')
  res.render('admin')
})

// router.post('/', sessionChecker, (req, res) => {
  
//   res.render('admin')
// })

module.exports = router;
