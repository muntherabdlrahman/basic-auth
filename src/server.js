'use strict';

const express = require('express');
const errorHandller=require('./handler/404');
const pageNotFound=require('./handler/500');


const app = express();
const {basicAuth,trySignUp }=require('./auth/auth.model')
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello and welcom form backend')

})

app.post('/signup',trySignUp ,(req, res, next) => {
  
    res.status(201).json(req.record);

});


app.post('/signin', basicAuth, (req, res, next)=> {

 res.status(200).json({username: req.username ,id :req.user.id})
    
});


app.use('*',pageNotFound)
app.use(errorHandller)



module.exports={
    app 
}