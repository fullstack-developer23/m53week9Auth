const User = require("./model");
const Book = require("../book/model");

const addUser = async (req, res) => {
    console.log(req.body);
    try {
        const result = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        res

        .status(201)
        .json({ message: `New User is created`, result: result });
    }
    catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const login = async (req, res) => {
    try{
        console.log("Hello from login", req.user);
        res.status(201).json({ message: "login successful", user: req.user})
    }
    catch (error)
    {
        res.status(500).json({ error: error, message: error.message });
    }
}

const getAllUsers = async (req, res) => {
    console.log(req.body);
    try {
        const allUsers = await User.findAll();
        
        res.status(200).json({ message: `All users list`, allUsers });
    }
    catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const updateFavBook = async (req, res) => {
    // console.log("hello favBook", req.body);
    try {
        const result = await User.update (
            { BookId: req.body.BookId },
            { where: { username: req.body.username } }
        )        

        const book = await Book.findOne({ where: { id: req.body.BookId} });
        res.status(201).json({ message: `Book ID updated`, book: book });
    }
    catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers,
   login: login,
   updateFavBook: updateFavBook,
};