import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const admin = {
    email: "kashif",
    password: "1234",
};

describe("admin should be able to login -t2", () => {
    it("login", (done) => {
        chai
            .request(app)
            .post("/api/v1/user/login")
            .set("content-type", "application/json")
            .send(admin)
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