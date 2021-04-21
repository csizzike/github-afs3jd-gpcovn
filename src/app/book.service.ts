import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestService } from "./request.service";

const BOOK_URL = "api/books";

@Injectable()
export class BookService {
  constructor(
    private requestService: RequestService,
    private http: HttpClient
  ) {}

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
}
