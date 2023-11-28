import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent }      from './components/todo-list.component';
import { TodoService } from './services/todo.services';
import { HeaderComponent }      from './components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { 
  
}