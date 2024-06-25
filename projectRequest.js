import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

describe("Tester Makes Project Request", () => {
  it("Project Request", (done) => {
    chai
      .request(app)
      .post("/api/v1/project-request/647ec905469c40d619a79ec4")
      .set("content-type", "application/json")
      .set(
        "x-auth-token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDdlYzc2MDQ2OWM0MGQ2MTlhNzllYjUiLCJ0eXBlIjoiVEVTVEVSIiwiaWF0IjoxNjg2MDMwMzA4LCJleHAiOjE3MzIwMzAzMDh9.QGPiS_bS1bqGt85PAMbVCnK6ygYt9LyEitBA5AjUUxw"
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
