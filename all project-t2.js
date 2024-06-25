import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;
describe("Admin Gets All Projects-t2", () => {
    it("Get Projects", (done) => {
        chai
            .request(app)
            .get("/api/v1/project/0")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDdlY2IxY2JiZjFkOTViOGExZTI3OWQiLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE2ODYwMzExNjEsImV4cCI6MTczMjAzMTE2MX0.sXVCjjRd5b0Fvl0G7ZLoOHrDYc9wnW-N2SJZBO8EQ8Q"
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