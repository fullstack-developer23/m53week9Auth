const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const Book = sequelize.define("Book", {
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
    },
});

module.exports = Book;