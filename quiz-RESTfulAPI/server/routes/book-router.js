const express = require('express');
const bookController = require('../controllers/book-controller');

const router = express.Router();

router.get('/:bookId', bookController.getBookbyId);
router.post('/',bookController.save);
router.get('/',bookController.getBookbyFirstname);
router.get('/',bookController.getBookbyFirstLetterOfFirstName);

module.exports = router;