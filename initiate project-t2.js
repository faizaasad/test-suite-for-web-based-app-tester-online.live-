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

describe("Client Should Initiate a Project-t2", () => {
    it("Initiate Project", (done) => {
        chai
            .request(app)
            .post("/api/v1/project/initiate-project")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                ""
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
