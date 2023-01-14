const {
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", getUser);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
