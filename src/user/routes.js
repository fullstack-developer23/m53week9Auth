const Router = require("express");
const userRouter = Router();
// const bookFindRouter = Router();

const {addUser, allUsers} = require("./controllers");
const {hashPass} = require("../middleware/auth");

userRouter.post("/", hashPass,addUser);
userRouter.get("/", allUsers);

module.exports = userRouter;