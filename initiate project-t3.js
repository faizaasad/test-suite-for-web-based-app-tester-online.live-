import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;
const req = {
    projectName: "Tester Online Live",
    projectDescription: "ABCD",
    startDate: "02/08/2023",
    endDate: "03/09/2023",
    expectedBudget: "200",
    requirementsToBeTested: [
        {
            requirementID: 1,
            requirementName: "Requirement 1",
            description: "Description 1",
        },
    ],
};

describe("Client Should Initiate a Project-t3", () => {
    it("Initiate Project", (done) => {
        chai
            .request(app)
            .post("/api/v1/project/ii")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDdlYzgzYjQ2OWM0MGQ2MTlhNzllYmUiLCJ0eXBlIjoiQ0xJRU5UIiwiaWF0IjoxNjg2MDMwNDA3LCJleHAiOjE3MzIwMzA0MDd9.n_i-K4ji1SBTyLB0SCo9_OLl9tYJ0uvfuKjW6bF_OMI"
            )
            .send(req)
            .end((err, response) => {
                if (err) {
                    done(err);
                } else {
                    // console.log(response.body);
                    expect(response.body).to.not.have.property("error");
                    done();
                }
            });
    });
});
