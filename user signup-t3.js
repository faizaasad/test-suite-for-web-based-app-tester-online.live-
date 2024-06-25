import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

const user = {
    name: "Aamir Ali",
    email: "fayezah@gmail.com",
    password: "",
    userType: "TESTER",
    phone: "234234",
};

describe("User should be able to signup-t3", () => {
    it("Signup", (done) => {
        chai
            .request(app)
            .post("/api/v1/user/signup")
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