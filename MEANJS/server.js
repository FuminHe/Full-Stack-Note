var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("mydb", ["contactlist"]);
var bodyParser = require("body-parser");

//routes
app.get("/test", function (req, res) {
  res.send("Hello world from server.js");
});

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/public"));
app.get("/contactlist", function (req, res) {
  db.contactlist.find(function (err, docs) {
    res.json(docs);
  });
});
app.post("/contactlist", function (req, res) {
  db.contactlist.insert(req.body, function (err, docs) {
    res.json(docs);
  });
});
app.delete("/contactlist/:id", function (req, res) {
  var id = req.params.id;
  db.contactlist.remove({ _id: mongojs.ObjectId(id) }, function (err, doc) {
    res.json(doc);
  });
});
app.put("/contactlist/:id", function (req, res) {
  var id = req.params.id;
  db.contactlist.findAndModify(
    {
      query: { _id: mongojs.ObjectId(id) },
      update: {
        $set: {
          name: req.body.name,
          email: req.body.email,
          number: req.body.number,
        },
      },
      new: true, // get data afeter update
    },
    function (err, doc) {
      res.json(doc);
    }
  );
});
app.listen(3000);
