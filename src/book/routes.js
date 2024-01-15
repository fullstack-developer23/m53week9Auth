const Router = require("express");
const bookRouter = Router();
// const bookFindRouter = Router();

const {addBook, getAllBooks, getByTitle, deleteBooks} = require("./controllers");

bookRouter.post("/", addBook);
bookRouter.get("/", getAllBooks);
bookRouter.get("/:title", getByTitle);
bookRouter.delete("/", deleteBooks);

module.exports = bookRouter;