import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observer } from "rxjs";
import { BookstoreService } from "../bookstore.service";

@Component({
  selector: "app-bookstore-create",
  templateUrl: "./bookstore-create.component.html",
  styleUrls: ["./bookstore-create.component.css"]
})
export class BookstoreCreateComponent implements OnInit {
  bookstoreForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookstoreService: BookstoreService
  ) {}

  bookstores$: any;
  newBookstoreId;

  ngOnInit() {
    this.bookstores$ = this.bookstoreService.getBookstores();
    this.bookstores$.subscribe(result => {
      this.newBookstoreId = result.length + 1;
    });

    this.bookstoreForm = this.formBuilder.group({
      id: "",
      name: "",
      city: "",
      post: "",
      street: "",
      open: ""
    });
  }

  onSubmit(bookstoreData) {
    bookstoreData.id = this.newBookstoreId;
    alert("Form submitted: \n" + JSON.stringify(bookstoreData));
    this.bookstoreForm.reset();
  }
}
