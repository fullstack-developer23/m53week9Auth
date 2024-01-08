const bcrypt = require("bcrypt");

const saltRounds = parseInt(process.env.SALT);
const hashPass = async (req, res, next) => {
try {
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log("hashPassword: ", hashPassword);
    req.body.password = hashPassword;
    next();
}
catch (error)
{
    res.status(500).json({ message: error });
}

//     console.log("hello from hash-pass");
// next();
};

module.exports = {
    hashPass: hashPass,
}