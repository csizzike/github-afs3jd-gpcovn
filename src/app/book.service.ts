import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { RequestService } from "./request.service";

const BOOK_URL = "api/books";

@Injectable()
export class BookService {
  constructor(private requestService: RequestService) {}

  getBooks(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.requestService.get(BOOK_URL, httpOptions);
  }

  getBook(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    const url = `${BOOK_URL}/${id}`;
    return this.requestService.get(url, httpOptions);
  }

  createBook(book: any): Observable<any> {
    return this.requestService.post(`${BOOK_URL}/`, book);
  }

  updateBook(book: any): Observable<any> {
    return this.requestService.put(`${BOOK_URL}/`, book);
  }

  deleteBook(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    const url = `${BOOK_URL}/${id}`;
    console.log("Deleted book with ID " + id);
    return this.requestService.delete(url, httpOptions);
  }
}
