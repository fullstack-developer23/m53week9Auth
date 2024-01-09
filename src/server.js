require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./user/routes")

const port = process.env.PORT || 5001;

const User = require("./user/model");
const controllers = require("./user/controllers");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/user", userRouter);

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy" });
});

const syncTables = () => {
    User.sync();
}

app.listen(port, () =>{
    syncTables();
    console.log(`App listening on port ${port}`);
})