import express from 'express';
import {ConfigurationModel} from '../DataBase/Database.js'
const router = express.Router();

router.get('/', function(req, res){
  const configs = await ConfigurationModel.find({flag:true})
  res.render('main', configs);
})

export default router;
