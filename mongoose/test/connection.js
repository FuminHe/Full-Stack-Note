const mongoose = require("mongoose");
const chalk = require("chalk");
const log = console.log;

mongoose.Promise = global.Promise;

// run only once before all test
before(function (done) {
  // connect to mongodb
  mongoose.connect("mongodb://localhost/mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection
    .once("open", function () {
      log(chalk.green.inverse("Connection has been made!"));
      done();
    })
    .on("error", function (error) {
      log(chalk.red.inverse("Connection Error:" + error.message));
    });
});

//runs before each test
beforeEach(function (done) {
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});
