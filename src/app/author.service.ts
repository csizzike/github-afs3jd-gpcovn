import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestService } from "./request.service";

const AUTHOR_URL = "api/authors";

@Injectable()
export class AuthorService {
  constructor(private requestService: RequestService) {}

  getAuthors(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.requestService.get(AUTHOR_URL, httpOptions);
  }
}
