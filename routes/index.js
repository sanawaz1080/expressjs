const apiKeyMiddleware = require("../middlewares/apiKey");

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

router.get("/api/products", apiKeyMiddleware, (req, res) => {
  res.json([
    {
      id: "123",
      name: "chrome",
    },
    {
      id: "124",
      name: "brave",
    },
  ]);
});

module.exports = router;
