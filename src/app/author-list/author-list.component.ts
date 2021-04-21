import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthorService } from "../author.service";

@Component({
  selector: "app-author-list",
  templateUrl: "./author-list.component.html",
  styleUrls: ["./author-list.component.css"]
})
export class AuthorListComponent implements OnInit {
  constructor(private authorService: AuthorService) {}

  authors$: Observable<any>;
  authors;

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();
    this.authors$.subscribe(result => (this.authors = result));
  }
}
