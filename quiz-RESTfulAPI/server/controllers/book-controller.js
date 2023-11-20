const Book = require('../models/books');

exports.getBookbyId = (req, res, next) => {
    res.status(200).json(Book.getBookbyId(req.params.bookId));
}

exports.save = (req, res, next) => {
    const book = req.body;
    const saveBook = new Book(null, book.title, book.author.authorId, book.author.firstname, book.author.lastname).save();
    res.status(201).json(saveBook);
}

exports.getBookbyFirstname = (req,res,next) => {
    const {firstname} = req.query;
    console.log(firstname);
    const result = Book.getBookbyFirstname(firstname);
    console.log(result);
    res.status(200).json(result);
}

exports.getBookbyFirstLetterOfFirstName = (req,res,next) => {
    const {firstname} = req.query;
    console.log(firstname);
    res.status(200).json(Book.getBookbyFirstLetterOfFirstName(firstname));
}