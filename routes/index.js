const express  = require('express')
const {ConfigurationModel}  = require('../DataBase/Database.js');
const router = express.Router();

router.get('/', function(req, res){
  const configs = await ConfigurationModel.find({flag:true})
  res.render('main', configs);
})

module.exports = router;
