import request  from "supertest";
import {expect} from 'chai';
// import {describe} from 'mocha'
import app from '../src/index.js'

let server;

before(()=> {
    server = app.listen(8080, ()=>{
        console.log("test script listening to 8080")
    })
})

after(()=> {
    server.close(()=> {
        console.log('test server stopped')
    })
})

describe("Get users/:user",()=> {
    it("should return 400 for invalid username starting with numbers", async()=> {
        const res = await request(app).get("/123octocat");
        expect(res.status).to.equal(400);
        expect(res.body.error).to.include("Username must start with a letter and can only contain letters, numbers, and -");
    })
    it("should return 400 for invalid username contains with special character", async()=> {
        const res = await request(app).get("/$octocat");
        expect(res.status).to.equal(400);
        expect(res.body.error).to.include("Username must start with a letter and can only contain letters, numbers, and -");
    })
    it("should return 200 for valid username", async()=> {
        const res = await request(app).get("/octocat");
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property("login",'octocat');
    })
})

