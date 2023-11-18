const express = require('express');
const bookController = require('../controllers/book-controller');

const router = express.Router();
router.get('/',bookController.findAllBooks);
router.get('/:bookId',bookController.findBookById);
router.post('/',bookController.save);
router.put('/:bookId',bookController.updateById);
router.delete('/bookId',bookController.deleteById);

module.exports = router;