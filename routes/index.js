const express = require('express');
const { ConfigurationModel, AdminsModel } = require('../DataBase/Database.js');
// const{sessionChecker} = require('../middleware/auth.js')
const session = require("express-session");



const router = express.Router();

router.get('/', async function (req, res) {
  const homeConfig = await ConfigurationModel.find({ flag: true });
  res.render('main', { homeConfig });
})

router.get('/login', function (req, res) {
  if (req.session.user) {
    res.redirect('/admin')
  } else {
    res.render('login');
  }
})

router.post('/login', async function (req, res) {
  const user = req.body;
  const trueAdmin = await AdminsModel.findOne();
  if (user.username === trueAdmin.login && user.password === trueAdmin.password) {
    // console.log('Вы авторизованы');
    req.session.user = trueAdmin;
    res.redirect('/admin');
  } else {
    const error = 'Неверный пароль'
    // console.log('Вы не угадали');
    res.render('error', { error });
  }
})

router.get('/logout', async (req, res) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie("user_sid");
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  } else {
    res.redirect("/login");
  }
})

module.exports = router;
