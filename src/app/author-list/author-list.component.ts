import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-author-list",
  templateUrl: "./author-list.component.html",
  styleUrls: ["./author-list.component.css"]
})
export class AuthorListComponent implements OnInit {
  constructor() {}

  authors = [
    {
      name: "Tolkien, J.R.",
      born: 1892,
      nation: "UK"
    },
    {
      name: "Eric Elliott",
      born: 1976,
      nation: "FR"
    },
    {
      name: "Glenn Block, et al.",
      born: 1973,
      nation: "USA"
    },
    {
      name: "Addy Osmani",
      born: 1981,
      nation: "USA"
    },
    {
      name: "Nicholas C. Zakas",
      born: 1986,
      nation: "RU"
    },
    {
      name: "Sir Arthur Conan Doyle",
      born: 1859,
      nation: "UK"
    }
  ];

  ngOnInit() {}
}
