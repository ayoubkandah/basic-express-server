"use strict"
const superTest=require("supertest")
const server=require("../src/server.js")
const request=superTest(server.server)

describe("TEST Server",()=>{
it("not Found Route",async ()=>{
const response=await request.get("/notFoAAund")
expect(response.status).toEqual(404)

})
it("not Found Route",async ()=>{
    const response=await request.post("/notFoAAund")
    expect(response.status).toEqual(404)
    
    })
    it('Handle person route output', async () => {
        const response = await request.get('/person?name=Ayoub');
        expect(response.body).toEqual({"name":'Ayoub'});
      });

})