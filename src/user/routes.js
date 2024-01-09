const Router = require("express");
const userRouter = Router();
// const bookFindRouter = Router();

const {addUser, login, allUsers} = require("./controllers");
const {hashPass, comparePass} = require("../middleware/auth");

userRouter.post("/", hashPass,addUser);
userRouter.post("/login", comparePass, login)
userRouter.get("/", allUsers);

module.exports = userRouter;