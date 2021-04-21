import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { BookTable } from "./book-list/books";

@Injectable()
export class InMemoryBookService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const db = {
      books: BookTable.books
    };
    return db;
  }
}
