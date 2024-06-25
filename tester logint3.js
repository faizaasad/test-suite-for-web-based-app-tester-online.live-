import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const tester = {
    email: "musa@gmail.com",
    password: "",
};

describe("tester should be able to login-t3", () => {
    it("login", (done) => {
        chai
            .request(app)
            .post("/api/v1/user/login")
            .set("content-type", "application/json")
            .send(tester)
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