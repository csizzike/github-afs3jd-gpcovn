import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthorService } from "../author.service";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"]
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  selectedAuthor: string;

  books$: Observable<any>;
  newBookId;
  authors$: Observable<any>;

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();

    this.books$ = this.bookService.getBooks();
    this.books$.subscribe(result => {
      this.newBookId = result.length + 1;
    });

    this.bookForm = this.formBuilder.group({
      id: "",
      isbn: "",
      title: "",
      author: "",
      published: "",
      pages: ""
    });
  }

  onSubmit(bookData) {
    bookData.id = this.newBookId;
    bookData.author = this.selectedAuthor;
    alert("Form submitted: \n" + JSON.stringify(bookData));
    this.bookForm.reset();
  }
}
