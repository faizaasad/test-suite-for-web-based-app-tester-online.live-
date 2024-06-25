import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;
describe("Admin Gets All Projects-t3", () => {
    it("Get Projects", (done) => {
        chai
            .request(app)
            .get("/api/v1/project/get-all-projects")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                ""
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