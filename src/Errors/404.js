module.exports=(req,res)=>{
   
    res.status(404)
    res.json({
        error:404,
        route:req.path,
        message:"Not FOund"
    })
}