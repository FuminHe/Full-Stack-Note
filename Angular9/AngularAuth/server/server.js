const express = require("express");
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello server.js");
});

app.listen(PORT, function () {
  console.log("Server Running at ", PORT);
});
