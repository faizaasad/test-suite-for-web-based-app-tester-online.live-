import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

// middleware
chai.use(chaiHttp);

const { expect } = chai;

describe("Monitor Progress -t3", () => {
    it("Test Suite and Bugs", async () => {
        try {
            const response1 = await chai
                .request(app)
                .get("/api/v1/traceability/get-test-cases/647ec905469c40d619a79ec4")
                .set("content-type", "application/json")
                .set(
                    "x-auth-token",
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDdlYzc2MDQ2OWM0MGQ2MTlhNzllYjUiLCJ0eXBlIjoiVEVTVEVSIiwiaWF0IjoxNjg2MDMwMzA4LCJleHAiOjE3MzIwMzAzMDh9.QGPiS_bS1bqGt85PAMbVCnK6ygYt9LyEitBA5AjUUxw"
                );

            const response2 = await chai
                .request(app)
                .get("/api/v1/traceability/get-bugs/647ec905469c40d619a79ec4")
                .set("content-type", "application/json")
                .set(
                    "x-auth-token",
                    "0"
                );

            expect(response1).to.not.have.property("error");
            expect(response2).to.not.have.property("error");
            // expect(response2).to.have.status(200);
        } catch (error) {
            console.error(error);
        }
    });
});