const express = require('express');
const routes  = express.Router();
const mongoose = require('mongoose');
const DocMethods = require('./controller/doc');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

routes.get('/', (req,res)=>{
    
    console.log("teste");
    res.send({
      'video': "game" 
    });
})
//Docs
routes.post('/createdoc',  DocMethods.createDoc);
routes.get('/listdocs', DocMethods.ListDoc);

module.exports = routes;
