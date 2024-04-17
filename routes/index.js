const router = require("express").Router();
const clothingItem = require("./clothingItem");
const usersRouter = require("./users");
const { loginUser, createUser } = require("../controllers/users");
const {
  loginUserValidator,
  createUserValidator,
} = require("../middlewares/validation");
const NotFoundError = require("../errors/notFoundError");

router.use("/items", clothingItem);
router.use("/users", usersRouter);

router.post("/signin", loginUserValidator, loginUser);
router.post("/signup", createUserValidator, createUser);

router.use((req, res, next) => {
  next(new NotFoundError("Route not found"));
});

module.exports = router;
