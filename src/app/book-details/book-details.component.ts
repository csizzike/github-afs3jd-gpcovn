import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  books = [];
  book: any = {};

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.bookService.getBook(+params.get("isbn")).subscribe(result => {
        this.book = result;
      });
    });
  }
}
