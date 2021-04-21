import { Component, OnInit } from "@angular/core";
import { Observable, Subscription, from } from "rxjs";
import { map, filter } from "rxjs/operators";
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
    this.books$ = this.bookService
      .getBooks()
      .pipe
      //map(books => books.filter(book => book.author == 'Tolkien, J.R.'))
      ();
  }

  onTest() {
    console.log("test");
  }

  onDeleteBook(id) {
    this.bookService.deleteBook(id);
  }
}
