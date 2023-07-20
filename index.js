const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { APIRouter } = require("./Routes/api.router");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Meditation Backend");
});
// Mount the APIRouter under the "/api" route
app.use("/api", APIRouter);
// Start the server and listen on the specified port from the environment variables
app.listen(process.env.port, () => {
  try {
    console.log(`Server listening on ${process.env.port}`);
  } catch (error) {
    console.log("Error listening on port", error.message);
  }
});
