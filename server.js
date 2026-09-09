const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HRMS Backend Running  ~@");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "HRMS Backend is healthy"
  });
});

app.listen(5000, () => {
  console.log("Server started");
});

const db = require("./db");
