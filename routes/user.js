const router = require("express").Router();
const { createUser, getUser, getUsers } = require("../controllers/user");

router.post("/", createUser);
router.get("/:userId", getUser);
router.get("/", getUsers);

module.exports = router;
