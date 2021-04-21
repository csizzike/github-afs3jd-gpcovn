import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthorService } from "../author.service";

@Component({
  selector: "app-author-create",
  templateUrl: "./author-create.component.html",
  styleUrls: ["./author-create.component.css"]
})
export class AuthorCreateComponent implements OnInit {
  authorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService
  ) {}

  authors$: Observable<any>;
  newAuthorId;

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();
    this.authors$.subscribe(result => {
      this.newAuthorId = result.length + 1;
    });

    this.authorForm = this.formBuilder.group({
      id: "",
      name: "",
      born: null,
      nation: ""
    });
  }

  onSubmit(authorData) {
    authorData.id = this.newAuthorId;
    alert("Form submitted: \n" + JSON.stringify(authorData));
    this.authorForm.reset();
  }
}
