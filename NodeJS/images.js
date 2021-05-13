// var http = require("http");
// var fs = require("fs");

// fs.readFile("austria.jpg", function (err, data) {
//   if (err) throw err; // Fail if the file can't be read.
//   http
//     .createServer(function (req, res) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write('<html><body><img src="data:image/jpeg;base64,');
//       res.write(Buffer.from(data).toString("base64"));
//       res.end('"/></body></html>');
//     })
//     .listen(3000);
//   console.log("Server running at http://localhost:3000/");
// });

// text/plain works for images.jpg
// Requiring modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// Creating server to accept request
http
  .createServer((req, res) => {
    // Parsing the URL
    // var request = url.parse(req.url, true);

    const baseURL = "http://" + req.headers.host + "/";
    const request = new URL(req.url, baseURL);
    // console.log(request);

    // Extracting the path of file
    var action = request.pathname;

    // Path Refinements
    var filePath = path.join(__dirname, action).split("%20").join(" ");

    // console.log(__dirname);

    // Checking if the path exists
    fs.open(filePath, "r", function (err, file) {
      if (err) {
        res.writeHead(404, {
          "Content-Type": "text/plain",
        });
        res.end("404 Not Found");
        return;
      }

      // Extracting file extension
      var ext = path.extname(action);

      // Setting default Content-Type
      var contentType = "text/plain";

      // Checking if the extention of
      // image is '.png'
      if (ext === ".png") {
        contentType = "image/png";
      }

      // Setting the headers
      res.writeHead(200, {
        "Content-Type": contentType,
      });

      // Reading the file
      fs.readFile(filePath, function (err, content) {
        console.log("Inside");
        // Serving the image
        res.end(content);
      });
      // buff = Buffer.alloc(600)
      // fs.read(file, buff, 0, buff.length, 0, (err)=>{
      //     console.log(err)
      // })
      // res.end(buff);
    });
  })

  // Listening to the PORT: 3000
  .listen(4000, "127.0.0.1");
