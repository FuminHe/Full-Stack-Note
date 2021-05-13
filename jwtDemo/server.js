// require("dotenv").config();
// const express = require("express");
// const app = express();
// const jwt = require("jsonwebtoken");

// // let app handle the data that is passed inside req.body
// app.use(express.json());

// const posts = [
//   {
//     username: "John",
//     title: "post 1",
//   },
//   {
//     username: "Bill",
//     title: "post 2",
//   },
// ];

// app.get("/posts", authenticateToken, function (req, res) {
//   // console.log(req.user);
//   res.json(posts.filter((post) => post.username === req.user.name));
// });

// // next => to the next middleware
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) {
//     return res.sendStatus(401);
//   }

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);

//     req.user = user;
//     next();
//   });
// }

// // creating and sending the token to the client
// app.post("/login", (req, res) => {
//   //authenticate the user
//   const username = req.body.username;
//   const user = { name: username };

//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   res.json({ accessToken: accessToken });
// });
// app.listen(3000);

require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

//handle the data that is passed inside req.body
app.use(express.json());

const posts = [
  {
    username: "John",
    title: "Post 1",
  },
  {
    username: "Bill",
    title: "Post 2",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

app.listen(3000);
