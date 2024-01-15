const bcrypt = require("bcrypt");
const User = require("../user/model");

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

const comparePass = async (req, res, next) => {
    try {
          // comparing given password with hashed password
          const user = await User.findOne({
            where: {username: req.body.username},
          })

          const passwordCheck = await bcrypt.compare (req.body.password, user.password)
        console.log(passwordCheck);
          if(!passwordCheck){
            res.status(404).json({ message: "passwords don't match" });
            return 
          }
          req.user = user
          next();
        // we need the plain text password AND the hashed password
    // the plain text is in req.body.password
    // hashed password in on the DB in the user table
 
    // find the user with username req.body.username
 
    // use bcrypt to compare
 
    // check the result
 
    // if false send response with message "passwords do not match"
 
    // if it is true, add user to request
        console.log("hello from comparePass");
        next();
    }catch (error){
        res.status(500).json({ message: error.message, error: error });
    }
}

module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,
}