import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import server from "../server.js";

import Graduate from "../models/graduate.model.js";
import mockData from "./mockGraduate.js";

chai.use(chaiHttp);

const testServer = chai.request(server).keepOpen();
const mockGraduate = mockData.testGraduate;
const mockErrorGraduate = mockData.testErrorGraduate;

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


            const mockGraduateUpdate = {
                _id: {
                    $oid: "64e492014bf1530e7e87f788"
                },
                user_type: "graduate",
                bio: {
                    firstname: "John",
                    lastname: "Doe",
                    headshot: "https://ds.static.rtbf.be/article/image/1920x1080/1/5/e/4e5046fc8d6a97d18a5f54beaed54dea-1681747291.jpg",
                    nationality: "British",
                    pronouns: "he/him",
                    headline: "Software Engineer - Maths Graduate - Python Programmer - Full Stack Dev - Speaks Spanish",
                    overview: "Lorem Ipsum",
                    socials: {
                        youtube: "https://youtu.be/WIx4srqU3BE",
                        github: "https://github.com/dfx-dynasty",
                        linkedin: "https://www.linkedin.com/company/digital-futures2021/mycompany/"
                    }
                }
            };
            const res = await testServer
                .put("/updatebio")
                .send(mockGraduateUpdate);

            expect(res).to.have.status(201);
            expect(res.text).to.be.eql("Update Success!!!");
        })

        it('should /PUT updateBio error test', async () => {
            const mockErrorUpdate = {
                _id: {
                    $oid: "64e492014bf1530e7e87f711"
                },
                user_type: "graduate",
                bio: {
                    testerror: "John",
                    lastname: "Doe",
                    headshot: "https://ds.static.rtbf.be/article/image/1920x1080/1/5/e/4e5046fc8d6a97d18a5f54beaed54dea-1681747291.jpg",
                    nationality: "British",
                    pronouns: "he/him",
                    headline: "Software Engineer - Maths Graduate - Python Programmer - Full Stack Dev - Speaks Spanish",
                    overview: "Lorem Ipsum",
                    socials: {
                        youtube: "https://youtu.be/WIx4srqU3BE",
                        github: "https://github.com/dfx-dynasty",
                        linkedin: "https://www.linkedin.com/company/digital-futures2021/mycompany/"
                    }
                }
            };

            const res = await testServer
                .put('/updatebio')
                .send(mockErrorUpdate);

            expect(res).to.have.status(500);

        })
    })
})
