import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { AuthorTable } from "./author-list/author";
import { BookTable } from "./book-list/books";
import { BookstoreTable } from "./bookstore-list/bookstore";

@Injectable()
export class InMemoryBookService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const db = {
      books: BookTable.books,
      authors: AuthorTable.authors,
      bookstores: BookstoreTable.bookstores
    };
    return db;
  }
}
