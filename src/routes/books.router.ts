import { Router } from "express";
import { BooksControllers } from "../controllers/book.controller";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware";

export  const booksRouter = Router()

const booksControllers = new BooksControllers()

booksRouter.post("/",IsBookNameValid.execute,booksControllers.createBook)

booksRouter.get("/",booksControllers.getBook)

booksRouter.get("/:id",IsBookIdValid.execute,booksControllers.getOnetBook)

booksRouter.patch("/:id",IsBookIdValid.execute,IsBookNameValid.execute,booksControllers.updateBook)

booksRouter.delete("/:id",IsBookIdValid.execute,booksControllers.DeleteBook)

//IsBookIdValid.execute

//IsBookNameValid.execute,