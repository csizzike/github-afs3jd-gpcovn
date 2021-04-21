import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"]
})
export class BookCreateComponent implements OnInit {
  eventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  books$: Observable<any>;
  newBookId;

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
    this.books$.subscribe(result => {
      this.newBookId = result.length + 1;
    });

    this.eventForm = this.formBuilder.group({
      id: "",
      isbn: "",
      title: "",
      author: "",
      published: "",
      pages: ""
    });
  }

  onSubmit(eventData) {
    eventData.id = this.newBookId;
    alert("Form submitted: \n" + JSON.stringify(eventData));
    this.eventForm.reset();
  }
}
