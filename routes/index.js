const express  = require('express')
const {ConfigurationModel, AdminsModel}  = require('../DataBase/Database.js');

const router = express.Router();

router.get('/', async function(req, res){
  const homeConfig = await ConfigurationModel.find({flag:true});
  console.log(homeConfig);
  res.render('main', {homeConfig});
})

router.get('/login',function(req, res){
  res.render('login');
})

router.post('/login',function(req, res){
  const user = req.body;
  console.log(user)
  AdminsModel.find();
  res.render('admin');
})

 
module.exports = router;
