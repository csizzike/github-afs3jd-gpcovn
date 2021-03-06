import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestService } from "./request.service";

const BOOKSTORE_URL = "api/bookstores";

@Injectable()
export class BookstoreService {
  constructor(private requestService: RequestService) {}

  getBookstores(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.requestService.get(BOOKSTORE_URL, httpOptions);
  }
}
