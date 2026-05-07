const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HRMS Backend Running 🚀");
});

app.listen(5000, () => {
  console.log("Server started");
});
