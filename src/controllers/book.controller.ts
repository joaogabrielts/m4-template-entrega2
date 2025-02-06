import { Request, Response } from "express";
import { BooksServices } from "../services/product.services";

export class BooksControllers {
  createBook(req: Request, res: Response): Response {
    const { name, pages, category } = req.body;
    const booksService = new BooksServices();

    const response = booksService.createBook(name, pages, category);
    return res.status(201).json(response);
  }

  getBook(req: Request, res: Response): Response {
    const booksService = new BooksServices();

    const response = booksService.getBook();
    return res.status(200).json(response);
  }

  getOnetBook(req: Request, res: Response): Response {
    const booksService = new BooksServices();

    const response = booksService.getOnetBook(req.params.id);
  
    return res.status(200).json(response);
  }

  updateBook(req: Request, res: Response): Response {
    const booksService = new BooksServices();

    const response = booksService.updateBook(req.params.id, req.body);
    return res.status(200).json(response);
  }

  DeleteBook(req: Request, res: Response): Response {
    const booksService = new BooksServices();

    booksService.deleteBook(req.params.id);
    return res.status(200).json();
  }
}
