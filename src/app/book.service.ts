import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

  getBook(isbn) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.requestService.get("${BOOK_URL}/${isbn}", httpOptions);
  }
}
