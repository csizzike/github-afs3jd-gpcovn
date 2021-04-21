import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { AuthorListComponent } from "./author-list/author-list.component";
import { BookstoreListComponent } from "./bookstore-list/bookstore-list.component";
import { BookCreateComponent } from "./book-create/book-create.component";
import { BookstoreCreateComponent } from "./bookstore-create/bookstore-create.component";
import { AuthorCreateComponent } from "./author-create/author-create.component";
import { BookService } from "./book.service";
import { InMemoryBookService } from "./in-memory-book.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { environment } from "./environments/environment";
import { RequestService } from "./request.service";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AuthorService } from "./author.service";
import { BookstoreService } from "./bookstore.service";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { MatOptionModule } from "@angular/material/core";

//import { httpInterceptorProviders } from './http-interceptors';
//import { AuthService } from './auth.service';
//import { AppRoutingModule } from './app-routing.module';
//import { StoreModule } from '@ngrx/store';
//import { EventsFeatureState } from './events/store/events.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryBookService)
      : [],
    RouterModule.forRoot([
      { path: "", component: HelloComponent },
      { path: "books", component: BookListComponent },
      { path: "books/:isbn", component: BookDetailsComponent },
      { path: "createbook", component: BookCreateComponent },
      { path: "authors", component: AuthorListComponent },
      { path: "createauthor", component: AuthorCreateComponent },
      { path: "bookstores", component: BookstoreListComponent },
      { path: "createbookstore", component: BookstoreCreateComponent },
      { path: "**", redirectTo: "" }
    ]),
    ReactiveFormsModule,
    MatOptionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BookListComponent,
    BookDetailsComponent,
    AuthorListComponent,
    BookstoreListComponent,
    BookCreateComponent,
    AuthorCreateComponent,
    BookstoreCreateComponent,
    AuthorCreateComponent,
    BookEditComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    BookService,
    InMemoryBookService,
    RequestService,
    AuthorService,
    BookstoreService
  ]
})
export class AppModule {}
