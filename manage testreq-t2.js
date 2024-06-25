import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const status = {
    status: true,
};

describe("Admin Accepts or Rejects Test Request -t2", () => {
    it("Test Request accept/reject", (done) => {
        chai
            .request(app)
            .post("/api/v1/project-request/update-request/0")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDdlY2IxY2JiZjFkOTViOGExZTI3OWQiLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE2ODYwMzExNjEsImV4cCI6MTczMjAzMTE2MX0.sXVCjjRd5b0Fvl0G7ZLoOHrDYc9wnW-N2SJZBO8EQ8Q"
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