import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  constructor(private bookService: BookService) {}

  books$: Observable<any>;
  books;

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
    this.books$.subscribe(result => (this.books = result));
  }
}
