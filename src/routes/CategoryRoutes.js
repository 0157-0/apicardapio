const express = require("express");
const {
  getAllCategory,
} = require("../controllers/CategoryController");

const router = express.Router();

router.route("/").get(getAllCategory);


module.exports = router;
