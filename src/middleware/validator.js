module.exports= (req,res,next)=>{
    let name=req.query.name 
    
    const result = /^[a-zA-Z]+$/.test(name);

if(typeof name=="string"&&result){

    next()
}else{
    next("not Valid")
}
}

  
 