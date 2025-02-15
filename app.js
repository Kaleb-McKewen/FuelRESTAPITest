const express = require("express");
const dbController = require("./db/dbController.js");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.API_PORT || 3000;
const version = 1;

app.get(`/api/${version}/latestFuel`, async (request, response) => {
  try {
    let latestFuel = await dbController.getLatestFuel();

    response.status(200).send(latestFuel);
  } catch {
    response.status(400).send("Failed to get fuel data");
  }
});

app.get(`/api/${version}/all`, async (request, response) => {
  try {
    let allFuel = await dbController.getAllFuel();
    response.status(200).send(allFuel);
  } catch {
    response.status(400).send("Failed to get fuel data");
  }
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
