import { Router } from "express";
import { BooksControllers } from "../controllers/book.controller";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware";
import { ValidateRequest } from "../middlewares/validateRequest";
import {
  createBookBodySchema,
  editBookBodySchema,
} from "../schemas/product.schema";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post(
  "/",
  ValidateRequest.execute({ body: createBookBodySchema }),
  IsBookNameValid.execute,
  booksControllers.createBook
);

booksRouter.get("/", booksControllers.getBook);

booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getOnetBook);

booksRouter.patch(
  "/:id",
  IsBookIdValid.execute,
  ValidateRequest.execute({ body: editBookBodySchema }),
  IsBookNameValid.execute,
  booksControllers.updateBook
);

booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.DeleteBook);
