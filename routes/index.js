var express = require("express");
var router = express.Router();

router.get("/year", (req, res) => {
  res.json({ year: "2025" });
});

module.exports = router;
