'use strict'

require('dotenv').config()
const {app }=require('./src/server')
const {db }=require('./src/middleware/index')
const PORT=process.env.PORT


db.sync().then(()=>{
    app.listen(PORT, ()=> console.log(PORT))
}).catch( (error)=> {
    console.error(error)
});