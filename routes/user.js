const router = require("express").Router();
const { getCurrentUser, updateUser } = require("../controllers/users");
const { handleAuthorization } = require("../middlewares/auth");

// Read
router.get("/me", handleAuthorization, getCurrentUser);
// router.get("/:userId", getUser);
router.patch("/me", handleAuthorization, updateUser);

module.exports = router;
