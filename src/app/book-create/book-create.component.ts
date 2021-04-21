import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"]
})
export class BookCreateComponent implements OnInit {
  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      isbn: "",
      title: "",
      author: "",
      published: "",
      pages: ""
    });
  }

  onSubmit(eventData) {
    alert("Form submitted: \n" + JSON.stringify(eventData));
    this.eventForm.reset();
  }
}
