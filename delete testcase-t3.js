import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

describe("tester Should delete test suite", () => {
    it("del test-suite", (done) => {
        del("/api/v1/test-suite/delete-test-case/645167b9ed091b078b07e5dc")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                ""
            )
            .end((err, response) => {
                if (err) {
                    done(err);
                } else {
                    // console.log(response.body);
                    expect(response.body).to.not.have.property("error");
                    done();
                }
            });
    });
});
