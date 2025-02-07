/*
export interface IBooks {
  id: number;
  name: string;
  pages: number;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}
*/

import { z } from "zod";
import { bookSchema, createBookBodySchema, editBookBodySchema } from "../schemas/product.schema";

export type TBook = z.infer<typeof bookSchema>;

export type TCreateBookBody = z.infer<typeof createBookBodySchema >

export type TEditBookBody = z.infer<typeof editBookBodySchema>
