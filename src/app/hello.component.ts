import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <mat-card>
      <h2>Amazing book Application</h2>
      <nav>
        <ul>
          <li>
            <a mat-button routerLink="/books">
              <b>Books</b>
            </a>
          </li>
          <li>
            <a mat-button routerLink="/authors">
              <b>Authors</b>
            </a>
          </li>
          <li>
            <a mat-button routerLink="/bookstores">
              <b>Bookstores</b>
            </a>
          </li>
        </ul>
      </nav>
    </mat-card>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
