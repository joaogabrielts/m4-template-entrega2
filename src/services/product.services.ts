import { booksDatabase, generateId } from "../database/database";
import { IBooks } from "../interfaces/books.interface";

export class BooksServices {
  createBook(name: string, pages: number, category?: string) {
    const newBook: IBooks = {
      id: generateId(),
      name,
      pages,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    booksDatabase.push(newBook);
    return newBook;
  }

  getBook() {
    return booksDatabase;
  }

  getOnetBook(id: string) {
    const findBook = booksDatabase.find(
    (book) => book.id === Number(id)
  );
    return findBook;
  }

  updateBook(id: string, data: Partial<IBooks>): IBooks | undefined {
    const book = booksDatabase.find((book) => book.id === Number(id));
    if (!book) return undefined;

    Object.assign(book, data, { updatedAt: new Date() });
    return book;
  }

  deleteBook(id: string) {
    const index = booksDatabase.findIndex((book) => book.id === Number(id));

    booksDatabase.splice(index, 1);
  }
}
