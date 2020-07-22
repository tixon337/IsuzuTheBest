Front hbs: 

1) ('/') => ('/home')    main.hbs - {
  buttons: configurator => configurator.hbs (config car)
           admin => login.hbs => admin.hbs(true) , login.hbs(false);
           home => ('/home')
  div
  ...  homeConfig = [{ in database }]
  div 
                        
}

2) configurator.hbs - {
  form "config": input1 {engine}
                 input2 {transmittion}
                 input3: {carcass}
                 input4: {configuration} 
                 input5: {color}                        
} 
  div = summary 

2.1) compare.hbs - {
   - {
     result configator + 2 concurents from database

  }
}

3) login.hbs -{}
  form "login": input1 {login}
                password {password}

4) admin.hbs - {
  buttons - {
    addConfig
    changeConfig
    addConcurent
    editConcurent
  }
}

4.1) addVariantOpt.hbs - {}

4.2) changeVariantOpt.hbs - {}

4.3) deleteVariantOpt.hbs - {}

4.1) addConcurent.hbs - {}

4.2) changeConcurent.hbs - {}

4.3) deleteConcurent.hbs - {}








