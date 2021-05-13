// const fs = require("fs");
// // delete directory recursively
// fs.rmdir("testFolder", { recursive: true }, (err) => {
//   if (err) {
//     throw err;
//   }
// });

// const fs = require("fs");
// const http = require("http");

// let server = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   try {
//     const data = fs.readFileSync("data.txt", "utf8");
//     res.end(data);
//   } catch (err) {
//     console.error(err);
//   }
// });

// server.listen(3000, "127.0.0.1");

const fs = require("fs");
const http = require("http");
let server = http.createServer(function (req, res) {
  fs.readFile("austria.jpg", function (err, content) {
    if (err) {
      res.writeHead(400, { "Content-type": "text/html" });
      console.log(err);
      res.end("No such image");
    } else {
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(content);
    }
  });
});
server.listen(3000, "127.0.0.1");
