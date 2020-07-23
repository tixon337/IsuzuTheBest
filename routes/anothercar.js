const express  = require('express')
// const sessionChecker = require('../middleware/auth')

const router = express.Router();

router.get('/',  (req, res) => {
  res.render('addCompetitors')
})

router.post('/',  (req, res) => {
  res.render('addCompetitors')
})

router.put('/', (req, res) => {
  res.render('changeCompetitors')
})

router.delete('/',  (req, res) => {
  res.render('deleteCompetitors')
})

module.exports = router;
