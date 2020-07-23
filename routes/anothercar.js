const express  = require('express')
const{sessionChecker} = require('../middleware/auth.js')

const router = express.Router();

router.get('/', sessionChecker,  (req, res) => {
  res.render('addCompetitors')
})

router.post('/', sessionChecker, (req, res) => {
  res.render('addCompetitors')
})

router.put('/', sessionChecker, (req, res) => {
  res.render('changeCompetitors')
})

router.delete('/', sessionChecker, (req, res) => {
  res.render('deleteCompetitors')
})

module.exports = router;
