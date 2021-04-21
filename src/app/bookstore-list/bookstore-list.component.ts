import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BookstoreService } from "../bookstore.service";

@Component({
  selector: "app-bookstore-list",
  templateUrl: "./bookstore-list.component.html",
  styleUrls: ["./bookstore-list.component.css"]
})
export class BookstoreListComponent implements OnInit {
  constructor(private bookstoreService: BookstoreService) {}

  bookstores$: Observable<any>;
  bookstores;

  ngOnInit() {
    this.bookstores$ = this.bookstoreService.getBookstores();
    this.bookstores$.subscribe(result => (this.bookstores = result));
  }
}
