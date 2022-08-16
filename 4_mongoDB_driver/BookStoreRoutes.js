const {Router} = require("express")
const BookStoreController = require("./BookStoreController")

const bookStoreRoutes = Router()

const bookStoreController = new BookStoreController()

bookStoreRoutes.get("/", bookStoreController.getAllBooks)
bookStoreRoutes.get("/:id", bookStoreController.getOneBook)
bookStoreRoutes.post("/", bookStoreController.createBook)
bookStoreRoutes.delete("/:id", bookStoreController.deleteBook)
bookStoreRoutes.patch("/:id", bookStoreController.updateBook)

module.exports = bookStoreRoutes