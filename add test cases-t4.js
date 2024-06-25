import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const test = {
    projectID: "647ec905469c40d619a79ec4",
    requirementID: "LMUNKQ",
    intent: "hello",
    input: "hasdfdsa",
    expectedOutcome: "user should be able to login",
    preCondition: "user must login",
    postCondition: "system must be in good state",
    status: true,
};

describe("Tester Adds Test Case-t4", () => {
    it("adds test case", (done) => {
        chai
            .request(app)
            .post("/api/v1/test-suite/add-test-case")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                ""
            )
            .send(test)
            .end((err, response) => {
                if (err) {
                    done(err);
                } else {
                    //   console.log(response.body);
                    expect(response).to.have.status(200);
                    done();
                }
            });
    });
});