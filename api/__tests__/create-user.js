const request = require("supertest");
const { app } = require("../index");

it("createTable", () => {
  request(app)
    .get("/createTable")
    .then((result) => {
      expect(result.headers["content-type"]).toMatch(/json/);
      // expect(result.headers, /json/);
      // expect("Content-Length", "15");
      // expect(200);
    })
    .catch(function (err) {
      // console.log({ err });
    });
  // expect(sum(1, 2)).toBe(4);
});
