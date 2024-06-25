import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

describe("tester Should delete test suite", () => {
    it("del test-suite", (done) => {
        del("/api/v1/test-suite/delete-test-case/645167b9ed091b078b07e5dc")
            .set("content-type", "application/json")
            .set(
                "x-auth-token",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDRkNWViMjljNjFmMTgxMzU5NGU2MGYiLCJ0eXBlIjoiVEVTVEVSIiwiaWF0IjoxNjgzMDU2NDQ3LCJleHAiOjE3MjkwNTY0NDd9.W1ngogE9jM8d8xStzqDroUysjRYnApLCVJfbBojuxn8"
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
