import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const admin = {
    name: "Aamir Ali",
    email: "AamirAli1@gmail.com",
    password: "123",
    userType: "TESTER",
    phone: "234234",
};

describe("admin  should be able to signup", () => {
    it("Signup", (done) => {
        chai
            .request(app)
            .post("/api/v1/user/signup")
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