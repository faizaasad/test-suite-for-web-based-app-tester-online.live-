import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

describe("Tester Makes Project Request", () => {
    it("Project Request -t3", (done) => {
        chai
            .request(app)
            .post("/api/v1/project-request/647ec905469c40d619a79ec4")
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
                    expect(response.body).to.not.have.property("error");
                    done();
                }
            });
    });
});
