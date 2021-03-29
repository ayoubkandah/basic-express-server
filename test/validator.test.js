'use strict'
// const { expect } = require("@jest/globals");
const Valid=require("../src/middleware/validator.js")


describe( "Logger Test ",()=>{
    let Spy;
    let req={query:{name:undefined}}
    let req1={query:{name:"Ayoub"}}
    let res={}
    const next=jest.fn()
   
    // console.log("ss0-------------------",next)
    // Valid(req,res,next);
    
    it("Testing if not valid",()=>{ /////// IF NOT VALID
        Valid(req,res,next);
        expect(next).toHaveBeenCalledWith("not Valid");
        // expect(next).toHaveBeenCalledWith(req);
    })
     
    it("Testing if valid",()=>{ /////// IF VALID
        Valid(req1,res,next);
        
        expect(next).toHaveBeenCalledWith();
        // expect(next).toHaveBeenCalledWith(req);
    })
      
    })