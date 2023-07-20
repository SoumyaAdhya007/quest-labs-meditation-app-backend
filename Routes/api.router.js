const express = require("express");
const axios = require("axios");
const APIRouter = express.Router();
// Define a route handler for the "/meditation" POST endpoint
APIRouter.post("/meditation", async (req, res) => {
  const { ans1, ans2, ans3 } = req.body;
  try {
    // Make a POST request to an external API (gpt-api.richexplorer.com) to generate meditation text
    const response = await axios.post(
      `https://gpt-api.richexplorer.com/api/general`,
      {
        usecase: "GPT_MEDITATION_CREATOR",
        userInput: `feeling ${ans1} right now, they currently are ${ans2} and facing ${ans3} issues today`,
      }
    );
    // Get the data from the API response
    const data = response.data;
    const text = data.generatedText;
    res.status(201).send(text);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});
module.exports = {
  APIRouter,
};
