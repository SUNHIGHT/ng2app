import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoService } from './services/todo.services';
import { AppRoutingModule } from './app-routing.module'; // AppRoutingModule のインポート

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    // 他のコンポーネント
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // AppRoutingModule を追加
    // 他の必要なモジュール
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
