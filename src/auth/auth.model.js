'use strict' 

const {Users}=require('../middleware/index')
const bcrypt = require('bcrypt');
const base64 = require('base-64');


const trySignUp =async (req,res,next)=>{
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        req.record = await Users.create({
            username : req.body.username,
            password: req.body.password
        });
        next();
       
    } catch (error) {
        console.log(error);
        next('not valid')
    
    }
}


const basicAuth =async (req,res,next)=>{

    if (req.headers['authorization']) {
        let basicHeaderParts = req.headers.authorization.split(' '); 
        let encoded = basicHeaderParts.pop();
        let decoded = base64.decode(encoded); 
        let [username, password] = decoded.split(":"); 
        req.username=username
       
       try {
      
           const user = await Users.findOne({ where: {username: req.username} });
           const valid = await bcrypt.compare(password, user.password);
           req.user=user
            if (valid) {
         
                next();
                
            } else {
              
                next(console.error)
            }
       } catch(e) {
           console.log(c)
        next('error up with catch',error)
      
       }
    }
}

module.exports={trySignUp,
                basicAuth}