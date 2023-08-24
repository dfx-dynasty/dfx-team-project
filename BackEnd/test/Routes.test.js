import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import server from "../server.js";
import mongoose from "mongoose";

import Graduate from "../models/graduate.model.js";
import mockData from "./mockGraduate.js";

chai.use(chaiHttp);

const testServer = chai.request(server).keepOpen();
const mockGraduate = mockData.testGraduate;

beforeEach(async () => {
    try {
        await Graduate.deleteMany();
        console.log("database cleared");
    } catch (e) {
        console.log("error clearing: ", e.message);
    }

    try {
        await Graduate.insertMany(mockGraduate);
        console.log(mockGraduate._id);
        console.log("database populated");
    } catch (e) {
        console.log("error populating: ", e.message);
    }
})


describe("Routes tests", () => {

    describe("getUserData route tests", () => {

        it('should /GET userData test', async () => {

            const res = await testServer
                .get("/getdata")
                .send();

            expect(res).to.have.status(200);
            expect(res).to.be.an("object");
            expect(res.body.bio.firstname).to.equal("Ed");

        })
    })

    describe('updateBio route test', () => {

        it('should /PUT updateBio test', async () => {

            const mockGraduateUpdate = mockGraduate;
            mockGraduateUpdate._id = { $oid: "64e492014bf1530e7e87f788" };

            const res = await testServer
                .put("/updatebio")
                .send(mockGraduateUpdate);

            expect(res).to.have.status(201);
            expect(res.text).to.be.eql("Update Success!!!");
        })

        // it('should /PUT updateBio error test', async () => {

        //     const errorMockGraduate = mockGraduate;
        //     // errorMockGraduate._id = mongoose.Types.ObjectId("64e492014bf1530e7e87f788");
        //     errorMockGraduate.bio.firstname = null;

        //     const res = await testServer
        //         .put('/updatebio')
        //         .send(errorMockGraduate);

        //     expect(res).to.have.status(500);

        // })

        // it('should /PUT updateBio error test', async () => {
        //     const mockErrorGraduate = mockGraduate;
        //     mockErrorGraduate._id = { $oid: "64e492014bf1530e7e87f788" };

        //     const res = await testServer
        //         .put('/updatebio/noID')
        //         .send(mockErrorGraduate);

        //     expect(res).to.have.status(404);
        // })
    })
})