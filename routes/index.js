const router = require("express").Router();
const clothingItem = require("./clothingItem");
const usersRouter = require("./user");
const { NOT_FOUND_ERROR } = require("../utils/errors");
const { loginUser, createUser } = require("../controllers/user");

router.use("/items", clothingItem);
router.use("/user", usersRouter);

router.post("/signin", loginUser);
router.post("/signup", createUser);

router.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: "Router not found" });
});

module.exports = router;
