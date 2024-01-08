const User = require("./model");

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

const allUsers = async (req, res) => {
    console.log(req.body);
    try {
        const allUsers = await User.findAll();
        
        res.status(200).json({ message: `All users list`, allUsers });
    }
    catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

module.exports = {
   addUser,
   allUsers
};