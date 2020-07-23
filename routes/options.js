const express  = require('express')
const {ConfigurationModel}  = require('../DataBase/Database.js');
// const sessionChecker = require('../middleware/auth')
const router = express.Router();

router.get('/', (req, res) => {
  res.render('addVariantOpt')
})

router.post('/', (req, res) => {
  res.render('addVariantOpt')
})

router.put('/',  (req, res) => {
  res.render('changeVariantOpt')
})

router.delete('/', (req, res) => {
  res.render('deleteVariantOpt')
})

module.exports = router;
