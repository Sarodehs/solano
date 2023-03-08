const express = require("express");
const router = express.Router();
const controllers = require('../controllers/controllers')
const model = require('../model/model')
// const booksController = require('../controllers/book-controllers');

// router.get("/",booksController.getAllBooks);
// router.get("/:id",booksController.getById);
router.post("/",controllers.addTickets);
// router.put("/:id",booksController.updateBook);
// router.delete("/:id",booksController.deleteBook);

module.exports = router;