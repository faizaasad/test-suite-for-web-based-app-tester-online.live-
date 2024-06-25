import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const tester = {
    name: "zobia",
    email: "zobia1235",
    password: "123",
    userType: "TESTER",
    phone: "234234",
};

describe("tester should be able to signup-t2", () => {
    it("Signup", (done) => {
        chai
            .request(app)
            .post("/api/v1/user/signup")
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