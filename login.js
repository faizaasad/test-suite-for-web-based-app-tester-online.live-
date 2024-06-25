import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const user = {
  email: "kashif@gmail.com",
  password: "1234",
};

describe("User should be able to login", () => {
  it("login", (done) => {
    chai
      .request(app)
      .post("/api/v1/user/login")
      .set("content-type", "application/json")
      .send(user)
      .end((err, response) => {
        if (err) {
          done(err);
        } else {
          console.log(response.body);
          expect(response.body).to.have.property("x-auth-token");
          done();
        }
      });
  });
});
