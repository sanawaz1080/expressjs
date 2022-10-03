const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("index", {
    title: "My home page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My about page",
  });
});
// We can add download feature like this in express
router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

module.exports = router;
