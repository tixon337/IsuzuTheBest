const express  = require('express')
const {СompetitorsModel} = require("../DataBase/Database.js");

const router = express.Router();

router.post('/', async (req, res) => {
 try {
   const competitors = await СompetitorsModel.find();
   competitors.sort(function (a, b) {
     if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }      
      return 0;     
    });
    // console.log(competitors)    
    const firstCompetitor = {engine: 'V8', transmission: "robot", carcass: "huge", price: "122328989"};
   const secondCompetitor = {engine: 'V12', transmission: "robot", carcass: "huge", price: "1111111"};
   let compet = [req.body, firstCompetitor, secondCompetitor]
   res.render('compare', compet)
   console.log(compet);
  }  catch (error) { }
  
  // console.log(competitors); 

})


module.exports = router;
