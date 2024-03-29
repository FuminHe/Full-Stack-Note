const express = require("express");
const axios = require("axios");
const redis = require("redis");
const responseTime = require("response-time");
const { promisify } = require("util");

const app = express();
app.use(responseTime());

// need to promisify the client
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
});
// get/set cashed data
const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

app.get("/rockets", async (req, res, next) => {
  try {
    const reply = await GET_ASYNC("rockets");
    console.log(reply);

    if (reply !== null) {
      console.log("Using cashed data");
      res.send(JSON.parse(reply));
      return;
    }

    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    const saveResult = await SET_ASYNC(
      "rockets",
      JSON.stringify(response.data),
      "EX",
      5
    );

    console.log("New data has been saved", saveResult);
    res.send(response.data);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
