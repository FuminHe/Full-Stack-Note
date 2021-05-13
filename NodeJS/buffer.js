// what is buffer?
// why need buffer? => chunks & raw binary data
// how many bites in byte? 8
// there is a buffer when create a string

// var buffer = Buffer.alloc(8);
// var buffer = Buffer.from([8, 9, 7, 5, 3, 0, 9]);
// var buffer = Buffer.from("I'm a string", "utf-8");
// console.log(buffer);

////////////////////////////////////////////////////////
const http = require("http");
const fs = require("fs");
// console.log(__dirname + "/data.txt");
// let myReadStream = fs.createReadStream(__dirname + "/data.txt");
// myReadStream.on("data", function (chunk) {
//   console.log("new chunck recieve");
//   console.log(chunk);
//   console.log(chunk.length);
// });
////////////////////////////////////////////////////////
// let myReadStream = fs.createReadStream(__dirname + "/data.txt");
// let myWriteStream = fs.createReadStream(__dirname + "/writeData.txt");
// // myReadStream.on("data", function (chunk) {
// //   myWriteStream.write(chunk);
// // });
// myReadStream.pipe(myWriteStream);
////////////////////////////////////////////////////////

var server = http.createServer(function (req, res) {
  console.log("request wa made from" + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  let myReadStream = fs.createReadStream(__dirname + "/data.txt");
  myReadStream.pipe(res);
});
server.listen(3000);
