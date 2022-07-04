const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnection = require("./db");
const CarsModel = require("./models/cars");

const app = express();
const port = process.env.PORT || 5000;

app.use(async (req, res, next) => {
  await dbconnection();
  return next();
});

// Body parser to parse json in request body for us
app.use(bodyParser.json());
// CORS
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.get("/", (req, res) => res.send(`hello world`));

app.get("/api/cars/getallcars", async (req, res) => {
  const cars = await CarsModel.find({});
  res.send(cars);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
