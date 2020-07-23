const express  = require('express')
const router = express.Router();

// const sessionChecker = require('../middleware/auth')



router.get('/', (req, res) => {

  res.render('admin')
})

module.exports = router;
