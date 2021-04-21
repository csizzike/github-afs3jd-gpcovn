import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bookstore-list",
  templateUrl: "./bookstore-list.component.html",
  styleUrls: ["./bookstore-list.component.css"]
})
export class BookstoreListComponent implements OnInit {
  constructor() {}

  bookstores = [
    {
      name: "Amazing bookstore for young nerds",
      city: "New York",
      post: "94321",
      street: "Paddington Street 91/B",
      open: "8:00 - 16:00"
    },
    {
      name: "Tea and Books",
      city: "London",
      post: "22331",
      street: "221B Baker Street",
      open: "9:00 - 17:00"
    }
  ];

  ngOnInit() {}
}
