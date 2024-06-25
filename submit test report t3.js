import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

describe("Tester Submits Test Report -t3", () => {
    it("Test Report Submission", (done) => {
        chai
            .request(app)
            .post("/api/v1/project/submit-report/647ec905469c40d619a79ec4")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                "0"
            )
            .end((err, response) => {
                if (err) {
                    done(err);
                } else {
                    console.log(response.body);
                    expect(response.body).to.have.property("reportLink");
                    done();
                }
            });
    });
});