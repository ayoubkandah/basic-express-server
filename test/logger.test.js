'use strict'
// const { expect } = require("@jest/globals");
// const { beforeEach, afterEach, it } = require("@jest/globals");
const logger=require("../src/middleware/logger.js")

describe( "Logger Test ",()=>{
let Spy;
let req={}
let res={}
const next=jest.fn()

beforeEach(()=>{

Spy=jest.spyOn(console,'log').mockImplementation();
})
afterEach(()=>{
    Spy.mockRestore();
})
// logger(req,res,next);

it("Testing func",()=>{
    logger(req,res,next);
expect(Spy).toHaveBeenCalled();
})
    
})
