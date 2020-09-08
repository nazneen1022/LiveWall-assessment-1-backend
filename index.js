const express = require("express");
const corsMiddleWare = require("cors");

const app = express();

app.use(
  corsMiddleWare({
    credentials: true,
    origin: "https://localhost:3000", // URL of the react (Frontend) app
  })
);

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

// GET endpoint for testing purposes, can be removed
app.get("/", async (req, res) => {
  res.send("Hi from express");
});

// Listen for connections on specified port (default is port 4000)
const { PORT } = require("./config/constants");

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
