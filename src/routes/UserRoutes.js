const express = require("express");
const {
  findAll,
  getUserById,
  updateUser,
  delUser,
} = require("../controllers/UserController");

const router = express.Router();

router.route("/").get(findAll)
router.route("/:id").get(getUserById).put(updateUser).delete(delUser);

module.exports = router;
