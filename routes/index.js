const router = require("express").Router();
const clothingItem = require("./clothingItem");
const usersRouter = require("./users");
const { NOT_FOUND_ERROR } = require("../utils/errors");
const { loginUser, createUser } = require("../controllers/users");

router.use("/items", clothingItem);
router.use("/users", usersRouter);

router.post("/signin", loginUser);
router.post("/signup", createUser);

router.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: "Router not found" });
});

module.exports = router;
