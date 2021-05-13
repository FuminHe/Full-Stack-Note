const mongoose = require("mongoose");
const MarioChar = require("../models/marioChar");
const assert = require("assert");

// test suite
describe("Savind Records", function () {
  it("Saves a new records to the database", function (done) {
    var char = new MarioChar({
      name: "Mario",
    });
    char.save().then(function () {
      assert(char.isNew === false);
      done(); //Mocha; async
    });
  });
});
