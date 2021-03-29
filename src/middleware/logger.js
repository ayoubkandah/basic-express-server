'use strict'
 module.exports=(req,res,next)=>{
console.log(req.path,"--path--|||-method--",req.method);
next()
 }