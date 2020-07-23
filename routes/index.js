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

router.post('/login',async function(req, res){
  const user = req.body;
  const trueAdmin = await AdminsModel.findOne();
  if(user.username === trueAdmin.login && user.password === trueAdmin.password){
    // console.log('Вы авторизованы');
    res.render('admin');
  }else{
    const error = 'Неверный пароль'
    // console.log('Вы не угадали');
    res.render('error', error);
  } 
})

module.exports = router;
