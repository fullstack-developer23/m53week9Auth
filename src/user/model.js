//Create a user, email, password
const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        }
    }
    },
    password: {
        type: DataTypes.STRING,
    },
});

module.exports = User;