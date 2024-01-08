const Router = require("express");
const userRouter = Router();
// const bookFindRouter = Router();

const {addUser, allUsers} = require("./controllers");

userRouter.post("/", addUser);
userRouter.get("/", allUsers);

module.exports = userRouter;