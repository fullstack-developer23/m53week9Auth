const Book = require("./model");

const addBook = async (req, res) => {
    console.log(req.body);
    try {
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        });

        res.status(201).json({ message: `New Book added successfully`, book: book });
    }
    catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const getAllBooks = async (req, res) => {
    try{
        const books = await Book.findAll();
        res.status(201).json({ message: "All books are here: ", books: books})
        // console.log(books);
        // res.send({
        //     message: "hello"
        // });
    }
    catch (error)
    {
        res.status(500).json({ error: error, message: error.message });
    }
}

const getByTitle = async (req, res) => {
    try {
      const getBook = await Book.findOne({
        where:({title: req.params.title})
      })
      return res.status(200).json({ message: "Book found", getBook: getBook });
      
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteBooks = async (req, res) => {
    try {
      const deleteBook = await Book.destroy({
        where:({title: req.body.title})
      })
      return res.status(200).json({ message: "Book deleted successfully", deleteBook: deleteBook });
      
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    getByTitle: getByTitle,
    deleteBooks: deleteBooks,
};