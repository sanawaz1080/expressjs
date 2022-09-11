// Importing express
const express = require("express");
const path = require("path");
const app = express();
// check if we kept any port in environment variable if not then listen to 3000 port
const PORT = process.env.PORT || 3000;
// We are getting the exact path by doing like this
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.listen(PORT, () => {
  console.log(`listening on port  ${PORT}`);
});
