const Book = require('../models/books');

exports.findAllBooks = (req,res,next) => {
    res.status(200).json(Book.findAllBooks());
}

exports.findBookById = (req,res,next) => {
    res.status(200).json(Book.findBookById(req.params.bookId));
}

exports.save = (req,res,next) => {
    const book = req.body;
    const saveBook = new Book(null, book.title, book.ISBN, book.publishedDate, book.author).save();
    res.status(201).json(saveBook);
}

exports.updateById = (req,res,next)=>{
    const book = req.body;
    const updateBook = new Book(req.params.bookId,book.title,book.ISBN, book.publishedDate, book.author)
                        .updateById(req.params.bookId);
    res.status(201).json(updateBook);
}

exports.deleteById = (req,res,next) => {
    res.status(200).json(Book.deleteById(req.params.bookId));
}