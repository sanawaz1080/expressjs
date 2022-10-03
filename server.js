// Importing express
const express = require("express");
const path = require("path");
const app = express();
// check if we kept any port in environment variable if not then listen to 3000 port
const PORT = process.env.PORT || 3000;
// setting key - value
app.set("view engine", "ejs");
console.log(app.get("views"));
// Static middleware
/* What is static middleware in Express?
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express. The function signature is: express. static(root, [options]) The root argument specifies the root directory from which to serve static assets. */
app.use(express.static("public"));
// We are getting the exact path by doing like this
// The path.resolve() method is used to resolve a sequence of path-segments to an absolute path.
app.get("/", (req, res) => {
  res.render("index", {
    title: "My home page",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "My about page",
  });
});
// We can add download feature like this in express
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});
app.listen(PORT, () => {
  console.log(`listening on port  ${PORT}`);
});
