require("dotenv").config();
const express = require("express");
const axios = require("axios");

const clientID = "ba7afb47279a6e64617f";
const clientSecret = "1f68065f111aeaf429937c66baac8987070ea546";
const app = express();

app.set("view engine", "ejs");
var access_token = "";

app.get("/", function (req, res) {
  res.render("pages/index", { client_id: clientID });
});

const port = process.env.PORT || 2400;
app.listen(port, () => {
  console.log("App listening @2400");
});

app.get("/github/callback", (req, res) => {
  // The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code;

  axios({
    method: "post",
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
      accept: "application/json",
    },
  }).then((response) => {
    access_token = response.data.access_token;
    res.redirect("/success");
  });
});

app.get("/success", function (req, res) {
  axios({
    method: "get",
    url: `https://api.github.com/user`,
    headers: {
      Authorization: "token " + access_token,
    },
  }).then((response) => {
    res.render("pages/success", { userData: response.data });
  });
});
