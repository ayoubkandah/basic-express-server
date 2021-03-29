"use strict"
const express=require("express")
const app=express()
const notFound=require("./Errors/404.js")
const errorServer=require("./Errors/500.js")
const logger=require("./middleware/logger.js")
const validation=require("./middleware/validator.js")
module.exports={
    server:app,
    Start:(port)=>{
        const PORT=port||4500
        app.listen(PORT,()=>{console.log(PORT)})
    }
}

app.get("/person",validation,(req,res)=>{
res.json({
    name:req.query.name
})
})
app.use(logger)
app.use("*",notFound)
app.use(errorServer)
