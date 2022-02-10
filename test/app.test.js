//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let { COURSES } = require("../db-data");

chai.use(chaiHttp);
//Our parent block
describe("Courses", () => {
  beforeEach((done) => {
    //Anything that needs to be done before each test we place here before the done() method
    done();
  });
  /*
   * Test the /GET route
   */
  describe("/GET courses", () => {
    it("it should GET all the books", (done) => {
      chai
        .request(server)
        .get("/courses")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          Object.keys(res.body).length.should.be.eql(
            Object.keys(COURSES).length
          );
          done();
        });
    });
  });

  describe("/GET/:id course", () => {
    it("it should GET the book with given id", (done) => {
      chai
        .request(server)
        .get("/courses/12")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("id");
          res.body.should.have.property("titles");
          res.body.should.have.property("iconUrl");
          res.body.should.have.property("category");
          done();
        });
    });

    it("it should GET 404 error if course not found", (done) => {
      chai
        .request(server)
        .get("/courses/101")
        .end((err, res) => {
          // console.log(res);
          res.should.have.status(404);
          done();
        });
    });
  });
});
