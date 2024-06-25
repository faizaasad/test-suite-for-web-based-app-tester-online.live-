import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const test = {
    intent: "Login",
    input: "Abcd",
    expectedOutcome: "user should be able to login",
    preCondition: "user helloo ok must login",
    postCondition: "system must be in good state",
    status: true,
};

describe("Tester Updates Test Case -t4", () => {
    it("update test case", (done) => {
        chai
            .request(app)
            .patch("/api/v1/test-suite/update-test-case/647ecef1469c40d619a79ffa")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                "0"
            )
            .send(test)
            .end((err, response) => {
                if (err) {
                    done(err);
                } else {
                    console.log(response.body);
                    expect(response).to.have.status(200);
                    done();
                }
            });
    });
});