import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const status = {
    status: true,
};

describe("Admin Accepts or Rejects Test Request -t3", () => {
    it("Test Request accept/reject", (done) => {
        chai
            .request(app)
            .post("/api/v1/project-request/update-request/647ed05c469c40d619a7a07e")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                "0"
            )
            .send(status)
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